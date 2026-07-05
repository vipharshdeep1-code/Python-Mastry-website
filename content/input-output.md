# Input and Output

Every useful program needs to communicate with the user. **Output** displays information to the user, and **Input** receives data from the user. Python makes both easy with built-in functions.

## Output with `print()`

The `print()` function displays text and values to the screen:

```python
print("Hello, World!")
print(42)
print(3.14)
print(True)
```

### Printing Multiple Values

Separate values with commas — Python adds a space between them:

```python
name = "Alice"
age = 25
print("Name:", name, "Age:", age)
# Output: Name: Alice Age: 25
```

### The `sep` Parameter

Control the separator between values:

```python
print("A", "B", "C")              # A B C
print("A", "B", "C", sep="-")     # A-B-C
print("A", "B", "C", sep="")      # ABC
print("A", "B", "C", sep="\n")    # Each on a new line
```

### The `end` Parameter

By default, `print()` adds a newline at the end. Change this with `end`:

```python
print("Hello", end=" ")
print("World")
# Output: Hello World

# Printing on the same line
for i in range(5):
    print(i, end=" ")
# Output: 0 1 2 3 4
```

## Try it Yourself

```python-tryit
# print() with different parameters
print("=== Basic Print ===")
print("Hello, Python!")
print(2024)

print("\n=== Multiple Values ===")
name, age, city = "Alice", 25, "New York"
print("Name:", name, "| Age:", age, "| City:", city)

print("\n=== Custom Separator ===")
print("192", "168", "1", "1", sep=".")
print("2024", "07", "02", sep="-")

print("\n=== Custom End ===")
for i in range(1, 6):
    print(f"Item {i}", end=" → " if i < 5 else "\n")

print("\n=== Star Pattern ===")
for i in range(1, 6):
    print("⭐" * i)
```

## String Formatting

Python offers several ways to format strings for output:

### 1. f-Strings (Recommended – Python 3.6+)

```python
name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old.")
print(f"Next year I'll be {age + 1}.")

# Format specifiers
pi = 3.14159
print(f"Pi: {pi:.2f}")           # 3.14 (2 decimal places)
print(f"Large: {1000000:,}")      # 1,000,000 (comma separator)
print(f"Percentage: {0.856:.1%}")  # 85.6%
```

### 2. `.format()` Method

```python
print("Hello, {}!".format("World"))
print("{0} is {1} years old".format("Alice", 25))
print("{name} lives in {city}".format(name="Bob", city="NYC"))
```

### 3. `%` Formatting (Old Style)

```python
print("Name: %s, Age: %d" % ("Alice", 25))
print("Pi: %.2f" % 3.14159)
```

## Try it Yourself

```python-tryit
# String formatting showcase
name = "Python Learner"
score = 92.567
total = 1234567

print("=== f-String Formatting ===")
print(f"Name: {name}")
print(f"Score: {score:.1f}/100")
print(f"Total: {total:,}")
print(f"Hex: {255:#x}")
print(f"Binary: {42:#b}")

# Alignment
print("\n=== Alignment ===")
items = [("Apple", 1.50), ("Banana", 0.75), ("Cherry", 3.25)]
print(f"{'Item':<12} {'Price':>8}")
print("-" * 20)
for item, price in items:
    print(f"{item:<12} ${price:>7.2f}")

# Total
total = sum(p for _, p in items)
print("-" * 20)
print(f"{'Total':<12} ${total:>7.2f}")
```

## Input with `input()`

The `input()` function reads a line of text from the user:

```python
name = input("Enter your name: ")
print(f"Hello, {name}!")
```

> **Important:** `input()` always returns a **string**. You must convert it to a number if needed.

```python
age = int(input("Enter your age: "))      # Convert to integer
height = float(input("Enter height: "))    # Convert to float
```

> **Note:** In this browser-based environment, `input()` is not supported. In a normal Python environment, it would pause and wait for user input.

## Practical Input/Output Examples

Here's how input and output work together in real programs:

```python
# Temperature converter (in a normal Python environment)
# fahrenheit = float(input("Enter temperature in °F: "))
# celsius = (fahrenheit - 32) * 5 / 9
# print(f"{fahrenheit}°F = {celsius:.1f}°C")
```

## Try it Yourself

```python-tryit
# Since input() doesn't work in the browser,
# let's simulate it with predefined values

# Simulated user inputs
user_name = "Python Learner"
user_age = 25
user_score = 87.5

# Process and display
print(f"Student Report Card")
print("=" * 30)
print(f"Name:  {user_name}")
print(f"Age:   {user_age}")
print(f"Score: {user_score}%")

# Calculate grade
if user_score >= 90:
    grade = "A"
elif user_score >= 80:
    grade = "B"
elif user_score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Grade: {grade}")
print("=" * 30)

# Formatted receipt
print("\n📧 Receipt")
print("-" * 35)
items = [
    ("Python Book", 2, 29.99),
    ("USB Drive", 1, 12.50),
    ("Notebook", 3, 4.99),
]
print(f"{'Item':<15} {'Qty':>4} {'Price':>10}")
print("-" * 35)
total = 0
for name, qty, price in items:
    subtotal = qty * price
    total += subtotal
    print(f"{name:<15} {qty:>4} ${subtotal:>9.2f}")
print("-" * 35)
print(f"{'TOTAL':<15} {'':>4} ${total:>9.2f}")
```

## Escape Characters

Special characters in strings:

| Escape | Description | Example |
|--------|-------------|---------|
| `\n` | Newline | `"Line1\nLine2"` |
| `\t` | Tab | `"Col1\tCol2"` |
| `\\` | Backslash | `"C:\\Users"` |
| `\'` | Single quote | `"It\'s"` |
| `\"` | Double quote | `"She said \"Hi\""` |

```python
print("First\nSecond\nThird")
print("Name\tAge\tCity")
print("Alice\t25\tNYC")
```

## Key Points

- `print()` displays output; use `sep` and `end` to customize
- f-strings are the recommended way to format strings: `f"Hello, {name}!"`
- Format specifiers: `:.2f` (decimals), `:,` (commas), `:<10` (alignment)
- `input()` reads text from the user (always returns a string)
- Convert input with `int()`, `float()` for numeric operations
- Escape characters like `\n` and `\t` add special formatting
