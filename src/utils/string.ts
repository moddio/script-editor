import { Effect as E, Effect, Match, flow, pipe } from "effect"

interface IterationStringProps {
  s: string,
  idx: number,
  step: number,
  searchChar: Record<string, SearchParams>
}

interface SearchParams {
  effect: E.Effect<never, Error, IterationStringProps>,
}
const noZeroStep = Match.type<IterationStringProps>().pipe(
  Match.not({ step: 0 }, (_) => E.succeed(_)),
  Match.orElse(() => E.fail(new Error('the step should not be 0'))),
)

const canMove = (iter: IterationStringProps) => iter.step > 0 ? iter.idx + iter.step < iter.s.length : iter.idx + iter.step > -1
const inRange = (iter: IterationStringProps) => (iter.idx > -1 && iter.idx < iter.s.length ? E.succeed(iter) : E.fail(new Error(`idx should in 0~${iter.s.length - 1}`)))
const isInt = (iter: IterationStringProps) => E.unified(Number.isInteger(iter.step) ? E.succeed(iter) : E.fail(new Error('step should be integer')))
const moveStep = (iter: IterationStringProps) => {
  iter.idx += iter.step
  return Effect.succeed(iter)
}

export const SmartIterationString = flow(
  noZeroStep,
  E.matchEffect({
    onFailure: (error) => E.fail(error),
    onSuccess: (iter) =>
      E.iterate(iter, {
        while: canMove,
        body: (iter) => pipe(
          moveStep(iter),
        ),
      }
      )
  })
)

