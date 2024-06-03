import { expect, suite, test } from "@adaliszk/typescript-testing";
import { matchByKey } from "./match.js";

@suite
export class MatchByKeySpec {
    constructor(private matchFn: typeof matchByKey = matchByKey) {}

    @test "matches with default handler"() {
        let defaultHandlerInvoked = 0;
        const source = { type: "foo" as const, value: 42 };
        const result = this.matchFn(source, "type", {
            _: ({ value }) => {
                defaultHandlerInvoked++;
                return value / 2;
            },
        });
        expect(result.unwrapOr(-1)).to.equal(21);
        expect(defaultHandlerInvoked).to.equal(1);
    }
    @test "matches with matching handler"() {
        const source = { type: "foo" as const, value: 42 };
        const result = this.matchFn(source, "type", {
            foo: ({ value }) => value * 2,
        });
        expect(result.unwrapOr(-1)).to.equal(84);
    }
    @test "matches with matching handler and skipping default"() {
        const source = { type: "foo" as const, value: 42 };
        const result = this.matchFn(source, "type", {
            foo: ({ value }) => value * 2,
            _: ({ value }) => value / 2,
        });
        expect(result.unwrapOr(-1)).to.equal(84);
    }
    @test "matches with matching handler but invokes default"() {
        let defaultHandlerInvoked = 0;
        const source = { type: "foo" as const, value: 42 };
        const result = this.matchFn(source, "type", {
            foo: ({ value }) => value * 2,
            _: (_value) => {
                defaultHandlerInvoked++;
            },
        });
        expect(result.unwrapOr(-1)).to.equal(84);
        expect(defaultHandlerInvoked).to.equal(1);
    }
}
