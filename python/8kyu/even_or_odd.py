def even_or_odd(number: int) -> str:
    return "Even" if number % 2 == 0 else "Odd"


if __name__ == '__main__':
    print(even_or_odd(2))
