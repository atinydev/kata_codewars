
import codewars_test as test

# Write a function `greet` that returns "hello world!"


def greet() -> str:
    return "hello world!"


@test.describe("Greet function")
def _():
    @test.it("Making sure greet exists")
    def _():
        try:
            test.expect(greet)
        except NameError:
            test.fail("Greet doesn't exist")

    @test.it("Testing that it returns hello world!")
    def _():
        test.assert_equals(greet(), "hello world!",
                           "Greet doesn't return hello world!")
