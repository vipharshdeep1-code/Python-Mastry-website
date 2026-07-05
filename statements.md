# Statements

A **statement** is an instruction that Python can execute. While expressions produce values, statements perform actions — like assigning variables, making decisions, or repeating tasks. Statements are the backbone of any Python program.

## What Is a Statement?

A statement is a complete unit of execution. Every line of code that *does* something is a statement:

```python
# These are all statements:
x = 10                    # Assignment statement
print("Hello")            # Expression statement (function call)
if x > 5:                 # Conditional statement
    print("Big number")
```

## Assignment Statements

The most basic statement — storing a value in a variable:

```python
name = "Alice"
age = 25
scores = [90, 85, 92]

# Augmented assignment
count = 0
count += 1   # Same as: count = count + 1
```

## Conditional Statements (`if`, `elif`, `else`)

Make decisions in your code based on conditions:

```python
temperature = 35

if temperature > 30:
    print("It's hot!")
elif temperature > 20:
    print("It's warm.")
elif temperature > 10:
    print("It's cool.")
else:
    print("It's cold!")
```

> **Important:** Python uses **indentation** (4 spaces) to define code blocks, not curly braces like other languages.

## Try it Yourself

```python-tryit
# Grade calculator using conditional statements
score = 82

if score >= 90:
    grade = "A"
    remark = "Excellent!"
elif score >= 80:
    grade = "B"
    remark = "Very Good!"
elif score >= 70:
    grade = "C"
    remark = "Good"
elif score >= 60:
    grade = "D"
    remark = "Needs Improvement"
else:
    grade = "F"
    remark = "Failed"

print(f"Score: {score}")
print(f"Grade: {grade}")
print(f"Remark: {remark}")

# Try changing the score to see different results!
```

## Loop Statements

### `for` Loop

Iterate over a sequence (list, string, range, etc.):

```python
# Loop over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")

# Loop with range
for i in range(5):
    print(i, end=" ")  # 0 1 2 3 4
```

### `while` Loop

Repeat while a condition is true:

```python
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1
```

### Loop Control: `break`, `continue`, `pass`

```python
# break: Exit the loop entirely
for i in range(10):
    if i == 5:
        break
    print(i, end=" ")  # 0 1 2 3 4

# continue: Skip to the next iteration
for i in range(10):
    if i % 2 == 0:
        continue
    print(i, end=" ")  # 1 3 5 7 9

# pass: Do nothing (placeholder)
for i in range(5):
    pass  # TODO: implement later
```

## Try it Yourself

```python-tryit
# Multiplication table using a for loop
number = 7

print(f"Multiplication Table for {number}")
print("-" * 25)
for i in range(1, 11):
    result = number * i
    print(f"{number} x {i:2d} = {result:3d}")

# While loop: Countdown
print("\nCountdown:")
n = 5
while n > 0:
    print(n, end="... ")
    n -= 1
print("Liftoff! 🚀")
```

## `for` Loop with `else`

Python's `for` loop has an optional `else` clause that executes when the loop completes without a `break`:

```python
# Search for a number
numbers = [1, 3, 5, 7, 9]
target = 4

for num in numbers:
    if num == target:
        print(f"Found {target}!")
        break
else:
    print(f"{target} was not found in the list.")
```

## Nested Statements

Statements can be nested inside other statements:

```python
for i in range(3):
    for j in range(3):
        print(f"({i},{j})", end=" ")
    print()  # New line after each row
```

## Try it Yourself

```python-tryit
# Pattern printing with nested loops
n = 5

# Right triangle
print("Right Triangle:")
for i in range(1, n + 1):
    print("* " * i)

# Number pyramid
print("\nNumber Pyramid:")
for i in range(1, n + 1):
    # Spaces for alignment
    print("  " * (n - i), end="")
    # Numbers
    for j in range(1, i + 1):
        print(j, end=" ")
    print()

# Find prime numbers
print("\nPrime numbers (1-30):")
for num in range(2, 31):
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            break
    else:
        print(num, end=" ")
```

## The `pass` Statement

`pass` is a null operation — it does nothing. It's used as a placeholder:

```python
# Placeholder for future code
def my_function():
    pass  # TODO: implement

class MyClass:
    pass  # TODO: add methods

if True:
    pass  # TODO: handle this case
```

## Simple vs Compound Statements

| Type | Description | Examples |
|------|-------------|---------|
| **Simple** | Single line, single action | `x = 5`, `print()`, `break`, `pass` |
| **Compound** | Contains a block of code | `if...else`, `for`, `while`, `def`, `class` |

## Key Points

- Statements are instructions that Python executes
- `if`/`elif`/`else` for conditional logic
- `for` loops iterate over sequences; `while` loops repeat while a condition is true
- `break` exits a loop; `continue` skips to the next iteration
- `pass` is a placeholder that does nothing
- Python uses indentation (4 spaces) for code blocks
- `for...else` runs the `else` block if no `break` occurred
