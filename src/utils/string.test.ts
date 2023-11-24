import { Effect as E } from "effect";
import { SmartIterationString } from "./string";

describe('SmartIterationString', () => {
  test("step can't be 0", () => expect(E.runSyncExit(SmartIterationString({
    s: 'hello',
    idx: 0,
    step: 0,
    searchChar: {}
  }))._tag).toBe("Failure"))
  test("move to end", () => expect(E.runSync(SmartIterationString({
    s: 'hello',
    idx: 0,
    step: 1,
    searchChar: {}
  }))).toMatchObject({ idx: 4 }))
  test("move to zero", () => expect(E.runSync(SmartIterationString({
    s: 'hello',
    idx: 4,
    step: -1,
    searchChar: {}
  }))).toMatchObject({ idx: 0 }))
})

