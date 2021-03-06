export function greet(name: string): string {
    return `Hello, ${name} how are you doing today?`;
}

import { assert } from "chai";

describe("Basic tests", () => {
    it("Should pass basic tests", () => {
        assert.equal(greet("Ryan"), "Hello, Ryan how are you doing today?");
        assert.equal(greet("Shingles"), "Hello, Shingles how are you doing today?");
    });
});