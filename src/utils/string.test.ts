import { Effect as E } from "effect";
import { IterationStringProps, SmartIterationString } from "./string";

const newTest = ({ s, searchChar, step, idx, funcToEachChar }: Partial<IterationStringProps>): IterationStringProps => (
  {
    s: s ?? 'hello',
    idx: idx ?? 0,
    step: step ?? 1,
    searchChar: searchChar ?? [],
    funcToEachChar: funcToEachChar ?? undefined,
    break: false,
  }
)

describe('SmartIterationString', () => {
  test("step can't be 0", () => expect(E.runSyncExit(SmartIterationString(newTest({ step: 0 })))._tag).toBe("Failure"))
  test("step can't be float", () => expect(E.runSyncExit(SmartIterationString(newTest({ step: 0.5 })))._tag).toBe("Failure"))
  test("idx should in range", () => expect(E.runSyncExit(SmartIterationString(newTest({ idx: 10, })))._tag).toBe("Failure"))
  test("move to end", () => expect(E.runSync(SmartIterationString(newTest({})))).toMatchObject({ idx: 5 }))
  test("move to zero", () => expect(E.runSync(SmartIterationString(newTest({ idx: 4, step: -1, })))).toMatchObject({ idx: 0 }))
  test("jump '", () => {
    let iteratedString = ''
    E.runSync(SmartIterationString(newTest({
      s: "test_'test'_", funcToEachChar: (iter) => {
        iteratedString += iter.s[iter.idx]
        return iter
      },
      searchChar: [{ from: ["'"] }]
    })))
    expect(iteratedString).toBe("test__")
  })
  test("jump ''", () => {
    let iteratedString = ''
    E.runSync(SmartIterationString(newTest({
      s: "''", funcToEachChar: (iter) => {
        iteratedString += iter.s[iter.idx]
        return iter
      },
      searchChar: [{ from: ["'"] }]
    })))
    expect(iteratedString).toBe("")
  })
})

