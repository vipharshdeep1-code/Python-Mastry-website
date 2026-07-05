# Debugging

**Debugging** is the process of finding and fixing errors (bugs) in your code. It's one of the most important skills a programmer can develop. Every developer, from beginner to expert, spends time debugging.

## Types of Errors

Python has three main types of errors:

### 1. Syntax Errors

Errors in the structure of your code. Python catches these before running.

```python
# Missing colon
# if True
#     print("hello")

# Correct:
if True:
    print("hello")
```

### 2. Runtime Errors (Exceptions)

Errors that occur while the program is running:

```python
# Division by zero
# result = 10 / 0  # ZeroDivisionError

# Accessing invalid index
# items = [1, 2, 3]
# print(items[10])  # IndexError

# Wrong type operation
# result = "5" + 3  # TypeError
print("These would cause runtime errors if uncommented")
```

### 3. Logical Errors

The code runs without crashing but produces **wrong results**. These are the hardest to find.

```python
# Bug: Should calculate average, but divides wrong
scores = [80, 90, 70]
# Wrong: average = sum(scores) / 2  (should be len(scores))
average = sum(scores) / len(scores)
print(f"Average: {average}")  # Correct: 80.0
```

## Common Python Exceptions

| Exception | Cause |
|-----------|-------|
| `SyntaxError` | Invalid Python syntax |
| `NameError` | Using an undefined variable |
| `TypeError` | Wrong type for an operation |
| `ValueError` | Right type, but wrong value |
| `IndexError` | Index out of range |
| `KeyError` | Dictionary key not found |
| `ZeroDivisionError` | Division by zero |
| `AttributeError` | Object doesn't have that attribute |
| `ImportError` | Module not found |
| `FileNotFoundError` | File doesn't exist |

## Try it Yourself

```python-tryit
# See different error types
errors = {
    "NameError": "print(undefined_variable)",
    "TypeError": "'hello' + 42",
    "ValueError": "int('not_a_number')",
    "IndexError": "[1, 2, 3][10]",
    "KeyError": "{'a': 1}['b']",
    "ZeroDivisionError": "1 / 0",
}

for name, code in errors.items():
    try:
        eval(code)
    except Exception as e:
        print(f"{name:>20}: {e}")
```

## Try/Except: Handling Errors

Use `try/except` to catch and handle errors gracefully:

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
```

### Full Try/Except Structure

```python
try:
    # Code that might fail
    number = int("hello")
except ValueError as e:
    # Handle specific error
    print(f"ValueError: {e}")
except TypeError as e:
    # Handle another type of error
    print(f"TypeError: {e}")
except Exception as e:
    # Catch any other error
    print(f"Unexpected error: {e}")
else:
    # Runs only if NO exception occurred
    print(f"Success! Number is {number}")
finally:
    # Always runs, error or not
    print("This always executes.")
```

## Try it Yourself

```python-tryit
# Robust division function with error handling
def safe_divide(a, b):
    """Safely divide two numbers with error handling."""
    try:
        result = a / b
    except ZeroDivisionError:
        return "Error: Cannot divide by zero!"
    except TypeError:
        return f"Error: Cannot divide {type(a).__name__} by {type(b).__name__}"
    else:
        return f"{a} / {b} = {result:.4f}"
    finally:
        pass  # Cleanup code would go here

# Test with different inputs
print(safe_divide(10, 3))
print(safe_divide(10, 0))
print(safe_divide("10", 2))
print(safe_divide(100, 7))
```

## Debugging Techniques

### 1. Print Debugging

The simplest technique — add `print()` statements to trace values:

```python
def calculate_discount(price, discount_percent):
    print(f"DEBUG: price = {price}")                    # Debug
    print(f"DEBUG: discount_percent = {discount_percent}")  # Debug
    
    discount = price * discount_percent / 100
    print(f"DEBUG: discount = {discount}")              # Debug
    
    final_price = price - discount
    print(f"DEBUG: final_price = {final_price}")        # Debug
    
    return final_price

result = calculate_discount(100, 20)
print(f"Result: {result}")
```

### 2. Using `assert`

Assert statements verify that conditions are true. They crash the program if they're not:

```python
def calculate_area(width, height):
    assert width > 0, "Width must be positive"
    assert height > 0, "Height must be positive"
    return width * height

print(calculate_area(5, 3))   # 15
# calculate_area(-1, 3)       # AssertionError!
```

### 3. Checking Types

```python
def add_numbers(a, b):
    if not isinstance(a, (int, float)):
        raise TypeError(f"Expected number, got {type(a).__name__}")
    if not isinstance(b, (int, float)):
        raise TypeError(f"Expected number, got {type(b).__name__}")
    return a + b
```

## Try it Yourself

```python-tryit
# Debugging challenge: Find and fix the bugs!
# This function should return the average of positive numbers

def average_positive(numbers):
    """Calculate the average of positive numbers in a list."""
    positives = [n for n in numbers if n > 0]
    
    if not positives:
        return 0  # Bug fix: handle empty list
    
    total = sum(positives)
    count = len(positives)  # Bug fix: was len(numbers)
    
    return total / count

# Test cases
test_cases = [
    [10, -5, 20, -3, 15],
    [-1, -2, -3],
    [100],
    [5, 10, 15],
]

for nums in test_cases:
    result = average_positive(nums)
    print(f"average_positive({nums}) = {result:.1f}")
```

## Raising Exceptions

Use `raise` to intentionally trigger an error:

```python
def set_age(age):
    if not isinstance(age, int):
        raise TypeError("Age must be an integer")
    if age < 0:
        raise ValueError("Age cannot be negative")
    if age > 150:
        raise ValueError("Age seems unrealistic")
    return age
```

## Try it Yourself

```python-tryit
# Custom error handling and raising exceptions
def create_user(name, age, email):
    """Create a user with validation."""
    errors = []
    
    if not name or not isinstance(name, str):
        errors.append("Name must be a non-empty string")
    
    if not isinstance(age, int) or age < 0 or age > 150:
        errors.append("Age must be an integer between 0 and 150")
    
    if not isinstance(email, str) or "@" not in email:
        errors.append("Email must contain '@'")
    
    if errors:
        raise ValueError(f"Validation failed: {'; '.join(errors)}")
    
    return {"name": name, "age": age, "email": email}

# Test with valid data
try:
    user = create_user("Alice", 25, "alice@example.com")
    print(f"Created user: {user}")
except ValueError as e:
    print(f"Error: {e}")

# Test with invalid data
try:
    user = create_user("", -5, "not-an-email")
    print(f"Created user: {user}")
except ValueError as e:
    print(f"Error: {e}")

# Test with wrong types
try:
    user = create_user(123, "twenty", None)
except (ValueError, TypeError) as e:
    print(f"Error: {e}")
```

## Debugging Checklist

When you encounter a bug, follow this systematic approach:

1. **Read the error message** — Python's tracebacks tell you exactly what went wrong and where
2. **Check the line number** — Go to the line mentioned in the traceback
3. **Print intermediate values** — Use `print()` to inspect variables
4. **Check your assumptions** — Are types correct? Are values what you expect?
5. **Simplify** — Isolate the problem by testing with simpler inputs
6. **Search for common mistakes** — Off-by-one errors, wrong variable names, missing conversions
7. **Take a break** — Sometimes stepping away helps you see the bug clearly

## Key Points

- Three types of errors: **syntax** (code structure), **runtime** (exceptions), **logical** (wrong results)
- Use `try/except` to handle errors gracefully
- `try/except/else/finally` gives you full control over error handling
- `raise` lets you trigger custom exceptions
- Print debugging is simple but effective for finding bugs
- `assert` statements verify conditions during development
- Always read error messages carefully — they tell you what went wrong
- When stuck, simplify the problem and test with smaller inputs
