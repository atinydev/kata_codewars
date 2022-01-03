import codewars_test as test


def array_diff(a: list[int], b: list[int]) -> list[int]:
    return [x for x in a if x not in b]


# * Better performance
# def array_diff(a, b):
#     set_b = set(b)
#     return [i for i in a if i not in set_b]


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(array_diff([1, 2], [1]), [
                           2], "a was [1,2], b was [1], expected [2]")
        test.assert_equals(array_diff([1, 2, 2], [1]), [
                           2, 2], "a was [1,2,2], b was [1], expected [2,2]")
        test.assert_equals(array_diff([1, 2, 2], [2]), [
                           1], "a was [1,2,2], b was [2], expected [1]")
        test.assert_equals(array_diff([1, 2, 2], []), [
                           1, 2, 2], "a was [1,2,2], b was [], expected [1,2,2]")
        test.assert_equals(array_diff([], [1, 2]), [],
                           "a was [], b was [1,2], expected []")
        test.assert_equals(array_diff([1, 2, 3], [1, 2]), [
                           3], "a was [1,2,3], b was [1, 2], expected [3]")