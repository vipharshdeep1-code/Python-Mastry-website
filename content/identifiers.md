# Identifiers

An **identifier** is a name used to identify a variable, function, class, module, or any other object in Python. Think of identifiers as labels you assign to things in your program.

## Rules for Naming Identifiers

Python has strict rules about what makes a valid identifier:

### Rule 1: Allowed Characters

Identifiers can contain:
- **Letters** (a-z, A-Z)
- **Digits** (0-9)
- **Underscores** (_)

```python
# Valid identifiers
name = "Alice"
age2 = 25
_private = "hidden"
my_variable = 100
print(name, age2, _private, my_variable)
```

### Rule 2: Cannot Start with a Digit

An identifier **must** begin with a letter or an underscore, never a digit.

```python
# Valid
score1 = 95
_count = 10

# Invalid (would cause SyntaxError):
# 1score = 95     # Starts with a digit
# 2nd_place = "Silver"  # Starts with a digit
print(score1, _count)
```

### Rule 3: Cannot Use Keywords

You cannot use Python keywords as identifiers.

```python
# Invalid:
# for = 10       # 'for' is a keyword
# class = "A"    # 'class' is a keyword

# Valid alternatives:
for_value = 10
class_name = "A"
print(for_value, class_name)
```

### Rule 4: Case Sensitive

Python treats uppercase and lowercase letters as different:

```python
name = "Alice"
Name = "Bob"
NAME = "Charlie"

# These are THREE different variables
print(name)    # Alice
print(Name)    # Bob
print(NAME)    # Charlie
```

### Rule 5: No Special Characters

Identifiers cannot contain special characters like `@`, `$`, `%`, `!`, etc.

## Naming Conventions

While Python doesn't enforce these, the community follows strong conventions:

| Type | Convention | Example |
|------|-----------|---------|
| Variables | `snake_case` | `user_name`, `total_score` |
| Functions | `snake_case` | `calculate_tax()`, `get_name()` |
| Classes | `PascalCase` | `StudentRecord`, `GameEngine` |
| Constants | `UPPER_SNAKE_CASE` | `MAX_SIZE`, `PI` |
| Private | Leading underscore | `_internal_value` |
| "Dunder" | Double underscore | `__init__`, `__name__` |

## Try it Yourself

Test which identifiers are valid in Python:

```python-tryit
# Valid identifiers
first_name = "Python"
lastName = "Learner"
_age = 25
score100 = 95
MAX_RETRIES = 3

print(f"Name: {first_name} {lastName}")
print(f"Age: {_age}")
print(f"Score: {score100}")
print(f"Max Retries: {MAX_RETRIES}")

# Python is case-sensitive
x = 10
X = 20
print(f"\nx = {x}, X = {X} (different variables!)")
```

## Checking Valid Identifiers

Python provides a built-in method to check if a string is a valid identifier:

```python
print("hello".isidentifier())    # True
print("2fast".isidentifier())    # False
print("my_var".isidentifier())   # True
print("my-var".isidentifier())   # False
```

## Try it Yourself

Use `isidentifier()` to test different names:

```python-tryit
# Check which names are valid identifiers
names = [
    "username",
    "2nd_place",
    "_private",
    "my-variable",
    "class",
    "myClass",
    "MAX_VALUE",
    "hello world",
    "__init__",
    "$price"
]

import keyword

for name in names:
    valid = name.isidentifier()
    is_kw = keyword.iskeyword(name)
    if not valid:
        status = "INVALID (bad characters)"
    elif is_kw:
        status = "INVALID (it's a keyword)"
    else:
        status = "VALID"
    print(f"  '{name}' → {status}")
```

## Best Practices

1. **Be descriptive** – Use `student_count` instead of `sc`
2. **Be consistent** – Pick a style and stick to it
3. **Avoid single letters** – Except for loop counters (`i`, `j`, `k`)
4. **Don't shadow built-ins** – Avoid names like `list`, `str`, `print`, `type`

```python
# Bad names
x = 30
d = {"a": 1}
l = [1, 2, 3]

# Good names
user_age = 30
settings = {"theme": "dark"}
scores = [1, 2, 3]
print(user_age, settings, scores)
```

## Key Points

- Identifiers are names given to variables, functions, classes, etc.
- They can contain letters, digits, and underscores
- They **cannot** start with a digit or contain special characters
- They are **case-sensitive** (`name` ≠ `Name`)
- Follow `snake_case` for variables and functions, `PascalCase` for classes
- Use `str.isidentifier()` to check if a name is valid
