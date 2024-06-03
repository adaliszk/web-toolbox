import { expect, suite, test } from "@adaliszk/typescript-testing";
import { matchByValue } from "./match.js";

@suite
export class MatchByValueSpec {
    constructor(private matchFn: typeof matchByValue = matchByValue) {}

    @test "matches with default handler"() {
        let defaultHandlerInvoked = 0;
        const source: "foo" | "bar" | "baz" = "foo";
        const result = this.matchFn(source, {
            _: (_value) => {
                defaultHandlerInvoked++;
                return 21;
            },
        });
        expect(result.unwrapOr(-1)).to.equal(21);
        expect(defaultHandlerInvoked).to.be.equal(1);
    }
    @test "matches with matching handler"() {
        const source: "foo" | "bar" | "baz" = "foo";
        const result = this.matchFn(source, {
            foo: (_value) => 84,
        });
        expect(result.unwrapOr(-1)).to.equal(84);
    }
    @test "matches with matching handler and skipping default"() {
        const source: "foo" | "bar" | "baz" = "foo";
        const result = this.matchFn(source, {
            foo: (_value) => 84,
            _: (_value) => 21,
        });
        expect(result.unwrapOr(-1)).to.equal(84);
    }
    @test "matches with matching handler but invokes default"() {
        let defaultHandlerInvoked = 0;
        const source: "foo" | "bar" | "baz" = "foo";
        const result = this.matchFn(source, {
            foo: (_value) => 84,
            _: (_value) => {
                defaultHandlerInvoked++;
            },
        });
        expect(result.unwrapOr(-1)).to.equal(84);
        expect(defaultHandlerInvoked).to.be.equal(1);
    }
}
