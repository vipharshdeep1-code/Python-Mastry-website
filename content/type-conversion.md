# Type Conversion

**Type conversion** (also called type casting) is the process of converting a value from one data type to another. Python provides built-in functions to convert between types.

## Why Convert Types?

Type conversion is needed when:
- You receive input as a string but need a number
- You want to combine different types in an operation
- You need to ensure data is in the right format

```python
# This fails without conversion:
age_str = "25"
# result = age_str + 5  # TypeError!

# Convert first, then add:
age = int(age_str)
result = age + 5
print(result)  # 30
```

## Implicit vs Explicit Conversion

### Implicit Conversion (Automatic)

Python automatically converts types in some situations:

```python
# int + float → float (automatic promotion)
x = 10      # int
y = 3.5     # float
result = x + y
print(result)       # 13.5
print(type(result)) # <class 'float'>

# bool + int → int
print(True + 1)     # 2 (True = 1)
print(False + 10)   # 10 (False = 0)
```

### Explicit Conversion (Manual)

You call a function to convert:

```python
# String to integer
num = int("42")

# String to float
price = float("19.99")

# Number to string
text = str(100)

# To boolean
flag = bool(1)
```

## Conversion Functions

| Function | Description | Example |
|----------|-------------|---------|
| `int()` | Convert to integer | `int("42")` → `42` |
| `float()` | Convert to float | `float("3.14")` → `3.14` |
| `str()` | Convert to string | `str(100)` → `"100"` |
| `bool()` | Convert to boolean | `bool(1)` → `True` |
| `list()` | Convert to list | `list("abc")` → `["a", "b", "c"]` |
| `tuple()` | Convert to tuple | `tuple([1,2])` → `(1, 2)` |
| `set()` | Convert to set | `set([1,1,2])` → `{1, 2}` |
| `dict()` | Convert to dictionary | `dict([("a",1)])` → `{"a": 1}` |

## Try it Yourself

```python-tryit
# Basic type conversions
print("=== String to Numbers ===")
age_str = "25"
price_str = "19.99"

age = int(age_str)
price = float(price_str)

print(f"'{age_str}' → int: {age} (type: {type(age).__name__})")
print(f"'{price_str}' → float: {price} (type: {type(price).__name__})")

print("\n=== Numbers to String ===")
num = 42
pi = 3.14159
print(f"{num} → str: '{str(num)}'")
print(f"{pi} → str: '{str(pi)}'")

print("\n=== Float ↔ Int ===")
print(f"int(9.99) = {int(9.99)}")      # Truncates (not rounds!)
print(f"int(-3.7) = {int(-3.7)}")      # Truncates toward zero
print(f"float(42) = {float(42)}")

print("\n=== To Boolean ===")
print(f"bool(1) = {bool(1)}")
print(f"bool(0) = {bool(0)}")
print(f"bool('hello') = {bool('hello')}")
print(f"bool('') = {bool('')}")
print(f"bool([]) = {bool([])}")
print(f"bool([1]) = {bool([1])}")
```

## Integer Conversion: `int()`

```python
# From string (must be a valid integer string)
print(int("42"))        # 42
print(int("-10"))       # -10
print(int("  7  "))     # 7 (strips whitespace)

# From float (truncates, does NOT round)
print(int(9.99))        # 9
print(int(-3.7))        # -3

# From boolean
print(int(True))        # 1
print(int(False))       # 0

# Different bases
print(int("1010", 2))   # 10 (binary)
print(int("FF", 16))    # 255 (hexadecimal)
print(int("77", 8))     # 63 (octal)
```

## Float Conversion: `float()`

```python
print(float("3.14"))     # 3.14
print(float("42"))       # 42.0
print(float("-0.5"))     # -0.5
print(float("1e3"))      # 1000.0 (scientific notation)
print(float("inf"))      # inf (infinity)
print(float("-inf"))     # -inf
```

## Boolean Conversion: `bool()`

The rules for truthiness in Python:

| Falsy Values | Truthy Values |
|-------------|---------------|
| `False` | `True` |
| `0`, `0.0`, `0j` | Any non-zero number |
| `""` (empty string) | Any non-empty string |
| `[]` (empty list) | Any non-empty list |
| `{}` (empty dict) | Any non-empty dict |
| `set()` (empty set) | Any non-empty set |
| `None` | Everything else |

## Try it Yourself

```python-tryit
# Truthiness / Falsiness
print("=== Falsy Values ===")
falsy_values = [False, 0, 0.0, "", [], {}, set(), None]
for val in falsy_values:
    print(f"  bool({str(val):>10}) = {bool(val)}")

print("\n=== Truthy Values ===")
truthy_values = [True, 1, -1, 3.14, "hello", [1], {"a": 1}]
for val in truthy_values:
    print(f"  bool({str(val):>10}) = {bool(val)}")

# Practical use: checking if a list is empty
items = []
if not items:
    print("\nThe list is empty!")
    
items.append("Python")
if items:
    print(f"The list has items: {items}")
```

## Collection Conversions

Convert between collection types:

```python
# String to list of characters
chars = list("Python")
print(chars)  # ['P', 'y', 't', 'h', 'o', 'n']

# List to tuple
frozen = tuple([1, 2, 3])
print(frozen)  # (1, 2, 3)

# List to set (removes duplicates)
unique = set([1, 2, 2, 3, 3, 3])
print(unique)  # {1, 2, 3}

# Set to sorted list
ordered = sorted(unique)
print(ordered)  # [1, 2, 3]

# List of pairs to dict
pairs = [("name", "Alice"), ("age", 25)]
data = dict(pairs)
print(data)  # {'name': 'Alice', 'age': 25}
```

## Try it Yourself

```python-tryit
# Collection conversions
print("=== String ↔ List ===")
word = "Python"
letters = list(word)
print(f"list('{word}') = {letters}")
back = "".join(letters)
print(f"join back: '{back}'")

print("\n=== Remove Duplicates ===")
scores = [85, 92, 78, 92, 85, 96, 78]
unique_scores = sorted(set(scores))
print(f"Original: {scores}")
print(f"Unique & sorted: {unique_scores}")

print("\n=== Pairs to Dictionary ===")
data = [("name", "Alice"), ("age", 25), ("grade", "A")]
student = dict(data)
print(f"Dict: {student}")

print("\n=== Dict Keys/Values to Lists ===")
keys = list(student.keys())
values = list(student.values())
print(f"Keys: {keys}")
print(f"Values: {values}")
```

## Common Conversion Errors

```python
# These will raise errors:
# int("hello")      # ValueError: invalid literal
# int("3.14")       # ValueError (use float() first, then int())
# int("")           # ValueError: empty string
# float("abc")      # ValueError
```

> **Tip:** Use `try/except` to handle conversion errors safely:

```python
try:
    value = int("not_a_number")
except ValueError as e:
    print(f"Conversion failed: {e}")
```

## Key Points

- Implicit conversion happens automatically (e.g., `int` + `float` → `float`)
- Explicit conversion uses functions: `int()`, `float()`, `str()`, `bool()`
- `int()` truncates floats (doesn't round)
- `bool()` follows truthiness rules: `0`, `""`, `[]`, `None` are all `False`
- `list()`, `tuple()`, `set()`, `dict()` convert between collections
- Invalid conversions raise `ValueError` — use `try/except` to handle them
