fn main() {
    vowel_count("dasf");
}

fn get_count(string: &str) -> usize {
    string
        .chars()
        .filter(|&c| c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
        .count()
}

fn vowel_count(string: &str) -> usize {
    string.chars().filter(|&c| "aeiou".contains(c)).count()
}

#[test]
fn my_tests() {
    assert_eq!(vowel_count("abracadabra"), 5);
}
