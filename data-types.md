# Data Types

Every value in Python has a **data type**. Data types define what kind of data a variable holds and what operations can be performed on it. Python has several built-in data types.

## Overview of Data Types

Python's built-in data types can be grouped into categories:

| Category | Data Types |
|----------|-----------|
| Numeric | `int`, `float`, `complex` |
| Text | `str` |
| Boolean | `bool` |
| Sequence | `list`, `tuple`, `range` |
| Mapping | `dict` |
| Set | `set`, `frozenset` |
| None | `NoneType` |

## Numeric Types

### Integers (`int`)

Whole numbers without a decimal point. They can be positive, negative, or zero, and have no size limit.

```python
age = 25
temperature = -10
population = 7_900_000_000  # Underscores for readability

print(age, temperature, population)
print(type(age))  # <class 'int'>
```

### Floating-Point (`float`)

Numbers with a decimal point or in scientific notation.

```python
price = 19.99
pi = 3.14159
scientific = 2.5e6  # 2,500,000.0

print(price, pi, scientific)
print(type(price))  # <class 'float'>
```

### Complex Numbers (`complex`)

Numbers with a real and imaginary part.

```python
z = 3 + 4j
print(z, type(z))        # (3+4j) <class 'complex'>
print(z.real, z.imag)     # 3.0 4.0
```

## Try it Yourself

```python-tryit
# Numeric types
integer_val = 42
float_val = 3.14
complex_val = 2 + 3j

print(f"Integer: {integer_val} (type: {type(integer_val).__name__})")
print(f"Float: {float_val} (type: {type(float_val).__name__})")
print(f"Complex: {complex_val} (type: {type(complex_val).__name__})")

# Large numbers with underscores
billion = 1_000_000_000
print(f"\nOne billion: {billion:,}")

# Float precision
print(f"\n0.1 + 0.2 = {0.1 + 0.2}")
print("(Floating-point numbers have precision limits!)")
```

## Strings (`str`)

Strings are sequences of characters enclosed in quotes. You can use single quotes, double quotes, or triple quotes.

```python
name = "Alice"
greeting = 'Hello'
paragraph = """This is a
multi-line string."""

print(name, greeting)
print(paragraph)
```

### Common String Operations

```python
text = "Python"
print(len(text))          # 6 (length)
print(text.upper())       # PYTHON
print(text.lower())       # python
print(text[0])            # P (indexing)
print(text[1:4])          # yth (slicing)
print("Py" in text)       # True (membership)
print(text * 3)           # PythonPythonPython
```

## Try it Yourself

```python-tryit
# String operations
name = "Python Mastery"

print(f"String: '{name}'")
print(f"Length: {len(name)}")
print(f"Uppercase: {name.upper()}")
print(f"Lowercase: {name.lower()}")
print(f"First char: {name[0]}")
print(f"Last char: {name[-1]}")
print(f"Slice [0:6]: {name[0:6]}")
print(f"Contains 'Python': {'Python' in name}")
print(f"Replace: {name.replace('Mastery', 'Tutorial')}")
print(f"Split: {name.split()}")
```

## Booleans (`bool`)

Booleans represent `True` or `False`. They're essential for conditions and logic.

```python
is_active = True
is_admin = False

print(type(is_active))   # <class 'bool'>
print(10 > 5)            # True
print(10 == 5)           # False
```

## Lists (`list`)

Lists are **ordered, mutable** collections that can hold items of any type.

```python
fruits = ["apple", "banana", "cherry"]
mixed = [1, "hello", True, 3.14]

fruits.append("date")       # Add item
fruits[0] = "avocado"       # Modify item
print(fruits)
print(len(fruits))
```

## Tuples (`tuple`)

Tuples are **ordered, immutable** collections. Once created, they cannot be changed.

```python
coordinates = (10, 20)
colors = ("red", "green", "blue")

print(coordinates[0])     # 10
print(len(colors))        # 3
# colors[0] = "yellow"   # TypeError! Tuples are immutable
```

## Dictionaries (`dict`)

Dictionaries store data as **key-value pairs**.

```python
student = {
    "name": "Alice",
    "age": 20,
    "grade": "A"
}

print(student["name"])      # Alice
student["age"] = 21         # Update value
student["email"] = "a@b.c"  # Add new key
print(student)
```

## Sets (`set`)

Sets are **unordered collections of unique items**.

```python
numbers = {1, 2, 3, 2, 1}  # Duplicates are removed
print(numbers)              # {1, 2, 3}

a = {1, 2, 3}
b = {2, 3, 4}
print(a & b)  # Intersection: {2, 3}
print(a | b)  # Union: {1, 2, 3, 4}
```

## Try it Yourself

```python-tryit
# Explore all major data types
print("=== Lists ===")
fruits = ["apple", "banana", "cherry"]
fruits.append("date")
print(f"Fruits: {fruits}")

print("\n=== Tuples ===")
point = (3, 4)
print(f"Point: {point}, x={point[0]}, y={point[1]}")

print("\n=== Dictionaries ===")
person = {"name": "Alice", "age": 25, "city": "NYC"}
print(f"Person: {person}")
print(f"Name: {person['name']}")

print("\n=== Sets ===")
unique = {3, 1, 4, 1, 5, 9, 2, 6, 5}
print(f"Unique numbers: {sorted(unique)}")

print("\n=== None ===")
result = None
print(f"Result: {result}, type: {type(result).__name__}")
```

## Checking Types

Use `type()` to check a value's type, or `isinstance()` for type checking:

```python
x = 42
print(type(x))                    # <class 'int'>
print(isinstance(x, int))         # True
print(isinstance(x, (int, float)))  # True (check multiple)
```

## Key Points

- Python has several built-in data types: `int`, `float`, `str`, `bool`, `list`, `tuple`, `dict`, `set`, and `None`
- Use `type()` to check a variable's type
- Lists are mutable; tuples are immutable
- Dictionaries store key-value pairs
- Sets contain only unique elements
- Python is dynamically typed — variables can change type
