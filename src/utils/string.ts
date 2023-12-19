import { Console, Effect as E, Match, flow, pipe } from "effect"
import { isUndefined } from "effect/Predicate"

export interface IterationStringProps {
  s: string,
  idx: number,
  step: number,
  break: boolean,
  searchChar: SearchParams[],
  funcToEachChar?: (iter: IterationStringProps) => IterationStringProps,
  funcToJumpedChar?: (iter: IterationStringProps) => IterationStringProps,
}

interface SearchParams {
  from: string[],
  to?: string,
}

const noZeroStep = Match.type<IterationStringProps>().pipe(
  Match.not({ step: 0 }, (_) => E.succeed(_)),
  Match.orElse(() => E.fail(new Error('the step should not be 0'))),
)

const canMove = (iter: IterationStringProps) => (iter.step > 0 ? iter.idx + iter.step < iter.s.length + 1 : iter.idx + iter.step > -1) && !iter.break
const inRange = (iter: IterationStringProps) => E.unified((iter.idx > -1 && iter.idx < iter.s.length ? E.succeed(iter) : E.fail(new Error(`idx should in 0~${iter.s.length - 1}`))))
const isInt = (iter: IterationStringProps) => E.unified(Number.isInteger(iter.step) ? E.succeed(iter) : E.fail(new Error('step should be integer')))
const moveIdx = (iter: IterationStringProps, to?: number) => {
  iter.idx = to !== undefined ?
    to !== -1 ? to : iter.idx
    : iter.idx + iter.step
  return iter
}

const canJump = (iter: IterationStringProps) => iter.searchChar.find(params => params.from.includes(iter.s[iter.idx]))

const jumpToNextChar = (iter: IterationStringProps): IterationStringProps => {
  const param = canJump(iter)
  return isUndefined(param) ? iter : jumpToNextChar(moveIdx(iter.funcToJumpedChar ? iter.funcToJumpedChar(iter) : iter, iter.s.indexOf((param.to ?? iter.s[iter.idx]), iter.idx + 1) + 1))
}

export const SmartIterationString = (
  iter: IterationStringProps,
  preTestFuncs: ((input: IterationStringProps) => E.Effect<never, Error, IterationStringProps>)[] = [noZeroStep, inRange, isInt]
) =>
  pipe(
    E.all(preTestFuncs.map((func) => func(iter))),
    E.matchEffect({
      onFailure: (error) => E.fail(error),
      onSuccess: (iters) =>
        E.iterate(iters[0], {
          while: canMove,
          body: (iter) => E.succeed(pipe(
            jumpToNextChar(iter),
            (iter) => iter.funcToEachChar && canMove(iter) ? iter.funcToEachChar(iter) : iter,
            moveIdx,
          )),
        }
        )
    })
  )

export const findString = (s: string, searchChars: string, cursorPos: number) => {
  const foundStr = s.slice(Math.max(cursorPos - searchChars.length, 0), cursorPos)
  return foundStr === searchChars
}