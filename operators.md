# Operators

Operators are special symbols that perform operations on values and variables. Python provides a rich set of operators organized into several categories.

## Arithmetic Operators

These operators perform mathematical calculations:

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `10 + 3` | `13` |
| `-` | Subtraction | `10 - 3` | `7` |
| `*` | Multiplication | `10 * 3` | `30` |
| `/` | Division | `10 / 3` | `3.333...` |
| `//` | Floor Division | `10 // 3` | `3` |
| `%` | Modulus (Remainder) | `10 % 3` | `1` |
| `**` | Exponentiation | `2 ** 10` | `1024` |

```python
a, b = 10, 3
print(f"{a} + {b} = {a + b}")
print(f"{a} / {b} = {a / b:.4f}")
print(f"{a} // {b} = {a // b}")
print(f"{a} % {b} = {a % b}")
print(f"{a} ** {b} = {a ** b}")
```

## Try it Yourself

```python-tryit
# Arithmetic operators in action
a, b = 17, 5

print("Arithmetic Operators")
print("=" * 30)
print(f"{a} + {b}  = {a + b}")
print(f"{a} - {b}  = {a - b}")
print(f"{a} * {b}  = {a * b}")
print(f"{a} / {b}  = {a / b}")
print(f"{a} // {b} = {a // b}")
print(f"{a} % {b}  = {a % b}")
print(f"{a} ** {b} = {a ** b}")

# Practical example: Convert seconds to hours, minutes, seconds
total_seconds = 3725
hours = total_seconds // 3600
minutes = (total_seconds % 3600) // 60
seconds = total_seconds % 60
print(f"\n{total_seconds} seconds = {hours}h {minutes}m {seconds}s")
```

## Comparison Operators

These operators compare two values and return a Boolean (`True` or `False`):

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Equal to | `5 == 5` | `True` |
| `!=` | Not equal to | `5 != 3` | `True` |
| `>` | Greater than | `5 > 3` | `True` |
| `<` | Less than | `5 < 3` | `False` |
| `>=` | Greater than or equal | `5 >= 5` | `True` |
| `<=` | Less than or equal | `3 <= 5` | `True` |

```python
x, y = 10, 20
print(x == y)   # False
print(x != y)   # True
print(x < y)    # True
```

## Logical Operators

Combine multiple conditions:

| Operator | Description | Example |
|----------|-------------|---------|
| `and` | True if both are true | `True and False` → `False` |
| `or` | True if at least one is true | `True or False` → `True` |
| `not` | Inverts the boolean | `not True` → `False` |

```python
age = 25
has_license = True

can_drive = age >= 18 and has_license
print(f"Can drive: {can_drive}")  # True
```

## Try it Yourself

```python-tryit
# Comparison and logical operators
age = 25
income = 50000
has_degree = True

print("Comparison Operators")
print(f"age == 25: {age == 25}")
print(f"age != 30: {age != 30}")
print(f"age > 18: {age > 18}")
print(f"income >= 50000: {income >= 50000}")

print("\nLogical Operators")
# Job eligibility check
eligible = age >= 21 and has_degree
print(f"Eligible (age >= 21 AND degree): {eligible}")

premium = income > 75000 or age > 30
print(f"Premium member (income > 75K OR age > 30): {premium}")

is_minor = not (age >= 18)
print(f"Is minor (NOT age >= 18): {is_minor}")
```

## Assignment Operators

Shorthand for updating a variable's value:

| Operator | Example | Equivalent |
|----------|---------|------------|
| `=` | `x = 5` | `x = 5` |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 3` | `x = x * 3` |
| `/=` | `x /= 3` | `x = x / 3` |
| `//=` | `x //= 3` | `x = x // 3` |
| `%=` | `x %= 3` | `x = x % 3` |
| `**=` | `x **= 3` | `x = x ** 3` |

```python
score = 100
score += 10   # score is now 110
score -= 5    # score is now 105
score *= 2    # score is now 210
print(score)
```

## Identity and Membership Operators

### Identity Operators

| Operator | Description |
|----------|-------------|
| `is` | True if both refer to the same object |
| `is not` | True if they refer to different objects |

```python
a = [1, 2, 3]
b = a           # b points to the same list
c = [1, 2, 3]   # c is a new list with same values

print(a is b)     # True (same object)
print(a is c)     # False (different objects)
print(a == c)     # True (same values)
```

### Membership Operators

| Operator | Description |
|----------|-------------|
| `in` | True if value is found in the sequence |
| `not in` | True if value is NOT found |

```python
fruits = ["apple", "banana", "cherry"]
print("banana" in fruits)       # True
print("grape" not in fruits)    # True
```

## Try it Yourself

```python-tryit
# Identity and membership operators
print("=== Identity Operators ===")
a = [1, 2, 3]
b = a
c = [1, 2, 3]
print(f"a is b: {a is b}")       # Same object
print(f"a is c: {a is c}")       # Different objects
print(f"a == c: {a == c}")       # Same values

print("\n=== Membership Operators ===")
text = "Python is amazing"
print(f"'Python' in text: {'Python' in text}")
print(f"'Java' in text: {'Java' in text}")

numbers = [10, 20, 30, 40, 50]
print(f"25 in numbers: {25 in numbers}")
print(f"30 in numbers: {30 in numbers}")

print("\n=== Practical Example ===")
valid_colors = {"red", "green", "blue", "yellow"}
user_color = "green"
if user_color in valid_colors:
    print(f"'{user_color}' is a valid color!")
```

## Operator Precedence

Python follows a specific order when evaluating expressions with multiple operators (highest to lowest):

| Priority | Operator | Description |
|----------|----------|-------------|
| 1 | `**` | Exponentiation |
| 2 | `+x`, `-x`, `~x` | Unary operators |
| 3 | `*`, `/`, `//`, `%` | Multiplication, division |
| 4 | `+`, `-` | Addition, subtraction |
| 5 | `==`, `!=`, `>`, `<`, `>=`, `<=` | Comparisons |
| 6 | `not` | Logical NOT |
| 7 | `and` | Logical AND |
| 8 | `or` | Logical OR |

> **Tip:** When in doubt, use parentheses `()` to make the order explicit!

## Key Points

- Python has arithmetic, comparison, logical, assignment, identity, and membership operators
- `/` gives float division; `//` gives integer (floor) division
- `==` compares values; `is` compares identity (same object)
- `in` checks membership in sequences
- Use `()` to control operator precedence
- Assignment operators like `+=` are shorthand for update operations
