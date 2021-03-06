fn main() {
    println!("Hello, world!");
}

// * My solution
fn spin_words2(words: &str) -> String {
    let mut spin = String::new();
    for word in words.split(" ") {
        if word.len() < 5 {
            spin.push_str(word);
        } else {
            spin.push_str(&word.chars().rev().collect::<String>());
        }

        spin.push_str(" ");
    }
    spin.trim().to_string()
}

// * Best Practice
fn spin_words(words: &str) -> String {
    words
        .split_whitespace()
        .map(|word| match word.len() >= 5 {
            true => word.chars().rev().collect(),
            false => word.to_string(),
        })
        .collect::<Vec<_>>()
        .join(" ")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn examples() {
        assert_eq!(spin_words("Welcome"), "emocleW");
        assert_eq!(spin_words("Hey fellow warriors"), "Hey wollef sroirraw");
        assert_eq!(spin_words("This is a test"), "This is a test");
        assert_eq!(spin_words("This is another test"), "This is rehtona test");
        assert_eq!(
            spin_words("You are almost to the last test"),
            "You are tsomla to the last test"
        );
        assert_eq!(
            spin_words("Just kidding there is still one more"),
            "Just gniddik ereht is llits one more"
        );
        assert_eq!(
            spin_words("Seriously this is the last one"),
            "ylsuoireS this is the last one"
        );
    }
}
