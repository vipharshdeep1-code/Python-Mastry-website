# Comments

Comments are lines in your code that Python **ignores** during execution. They are written for humans — to explain what the code does, why a decision was made, or to temporarily disable code.

## Why Use Comments?

- **Explain complex logic** – Help others (and your future self) understand the code
- **Document intent** – Explain *why* something is done, not just *what*
- **Disable code temporarily** – "Comment out" lines during debugging
- **Improve readability** – Break code into logical sections

## Single-Line Comments

Use the `#` symbol to create a single-line comment. Everything after `#` on that line is ignored.

```python
# This is a single-line comment
print("Hello!")  # This is an inline comment

# You can also use comments to explain variables
age = 25  # User's age in years
```

## Try it Yourself

```python-tryit
# This line is ignored by Python
print("This line runs!")  # Comment after code

# Calculate the area of a rectangle
width = 10    # Width in meters
height = 5    # Height in meters
area = width * height
print(f"Area: {area} square meters")

# print("This line is commented out and won't run")
```

## Multi-Line Comments

Python doesn't have a dedicated multi-line comment syntax. There are two common approaches:

### Approach 1: Multiple `#` symbols

```python
# This is a multi-line comment.
# Each line starts with a hash symbol.
# This is the most common approach.
print("Code below the comments")
```

### Approach 2: Triple-Quoted Strings

While technically a string literal (not a true comment), triple quotes are often used for multi-line comments:

```python
"""
This is a multi-line string that acts as a comment.
Python will create the string object but it won't
be assigned to anything, so it has no effect.
"""
print("Code below the docstring-style comment")
```

> **Note:** Triple-quoted strings used at the beginning of a function, class, or module are called **docstrings** and have a special purpose (documentation).

## Docstrings

Docstrings are special comments placed as the first statement in a function, class, or module. They serve as documentation and can be accessed programmatically.

```python
def greet(name):
    """Display a greeting message to the user."""
    print(f"Hello, {name}!")

# Access the docstring
print(greet.__doc__)
```

## Try it Yourself

```python-tryit
def calculate_bmi(weight, height):
    """
    Calculate Body Mass Index (BMI).
    
    Parameters:
        weight: Weight in kilograms
        height: Height in meters
    
    Returns:
        BMI value as a float
    """
    return weight / (height ** 2)

# Calculate BMI
bmi = calculate_bmi(70, 1.75)
print(f"BMI: {bmi:.1f}")

# Access the docstring
print("\nFunction documentation:")
print(calculate_bmi.__doc__)
```

## Comment Best Practices

### Good Comments

```python
# Convert temperature from Celsius to Fahrenheit
fahrenheit = celsius * 9/5 + 32

# Use binary search for O(log n) performance
result = binary_search(sorted_list, target)

# Workaround for API bug #1234 — remove after fix
data = fetch_data(retry=True)
```

### Bad Comments (avoid these)

```python
# Bad: States the obvious
x = x + 1  # Increment x by 1

# Bad: Redundant
# Print the name
print(name)

# Bad: Outdated comment (code changed, comment didn't)
# Calculate the sum of two numbers
result = a * b  # This actually multiplies!
```

### Tips for Good Comments

| Do | Don't |
|----|-------|
| Explain *why* | Explain *what* (if the code is clear) |
| Keep comments updated | Leave outdated comments |
| Use docstrings for functions | Write novels in comments |
| Comment complex algorithms | Comment every single line |

## Try it Yourself

Practice writing well-commented code:

```python-tryit
# Shopping cart price calculator
# Applies a discount if the total exceeds a threshold

items = [
    {"name": "Laptop", "price": 999.99},
    {"name": "Mouse", "price": 29.99},
    {"name": "Keyboard", "price": 79.99},
]

# Calculate subtotal
subtotal = sum(item["price"] for item in items)

# Apply 10% discount for orders over $500
DISCOUNT_THRESHOLD = 500
DISCOUNT_RATE = 0.10

if subtotal > DISCOUNT_THRESHOLD:
    discount = subtotal * DISCOUNT_RATE
    total = subtotal - discount
    print(f"Subtotal: ${subtotal:.2f}")
    print(f"Discount (10%): -${discount:.2f}")
else:
    total = subtotal
    print(f"Subtotal: ${subtotal:.2f}")

print(f"Total: ${total:.2f}")
```

## Key Points

- Comments start with `#` and are ignored by Python
- Use comments to explain *why*, not *what*
- Multi-line comments use multiple `#` lines or triple quotes
- Docstrings (`"""..."""`) document functions, classes, and modules
- Keep comments accurate and up-to-date
- Don't over-comment obvious code
