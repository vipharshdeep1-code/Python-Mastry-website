# Expressions

An **expression** is any valid combination of values, variables, operators, and function calls that Python can **evaluate** to produce a result. Expressions are the building blocks of computation in Python.

## What Is an Expression?

An expression is anything that Python can compute to get a value:

```python
# These are all expressions:
42                    # Literal value
x + 5                 # Arithmetic expression
name == "Alice"       # Comparison expression
len("hello")          # Function call expression
x > 0 and x < 100    # Logical expression
```

The key characteristic: **every expression produces a value**.

## Types of Expressions

### 1. Literal Expressions

The simplest expressions — just a value by itself:

```python
42          # Integer literal
3.14        # Float literal
"hello"     # String literal
True        # Boolean literal
None        # None literal
[1, 2, 3]   # List literal
```

### 2. Arithmetic Expressions

Combine numbers with math operators:

```python
result = (10 + 5) * 2 - 3
print(result)  # 27

# More complex
area = 3.14159 * (5 ** 2)
print(f"Area: {area:.2f}")  # 78.54
```

### 3. String Expressions

Strings can be combined and manipulated:

```python
first = "Hello"
last = "World"

# Concatenation
full = first + " " + last
print(full)  # Hello World

# Repetition
border = "=-" * 20
print(border)

# f-string (formatted string expression)
name = "Python"
greeting = f"Welcome to {name}!"
print(greeting)
```

### 4. Comparison Expressions

Evaluate to `True` or `False`:

```python
x = 15
print(x > 10)        # True
print(x == 15)       # True
print(5 < x < 20)    # True (chained comparison!)
```

### 5. Logical Expressions

Combine boolean values:

```python
age = 25
income = 50000

eligible = age >= 18 and income >= 30000
print(eligible)  # True
```

## Try it Yourself

```python-tryit
# Different types of expressions
print("=== Arithmetic ===")
result = (100 - 32) * 5 / 9  # Fahrenheit to Celsius
print(f"100°F = {result:.1f}°C")

print("\n=== String ===")
name = "Python"
version = 3
print(f"{name} {version} " + "is awesome! " * 2)

print("\n=== Comparison ===")
x = 42
print(f"{x} is positive: {x > 0}")
print(f"{x} is even: {x % 2 == 0}")
print(f"{x} is between 1-100: {1 <= x <= 100}")

print("\n=== Logical ===")
has_ticket = True
is_vip = False
can_enter = has_ticket or is_vip
print(f"Can enter: {can_enter}")
```

## Conditional Expressions (Ternary Operator)

Python's conditional expression lets you choose between two values based on a condition — all in one line:

```python
age = 20
status = "adult" if age >= 18 else "minor"
print(status)  # adult
```

The syntax is: `value_if_true if condition else value_if_false`

```python
# More examples
x = 15
parity = "even" if x % 2 == 0 else "odd"
print(f"{x} is {parity}")  # 15 is odd

score = 85
grade = "Pass" if score >= 60 else "Fail"
print(f"Grade: {grade}")  # Grade: Pass
```

## Try it Yourself

```python-tryit
# Conditional expressions
temperature = 28

# Ternary operator
weather = "hot" if temperature > 30 else "warm" if temperature > 20 else "cold"
print(f"{temperature}°C is {weather}")

# Practical: Absolute value without abs()
number = -42
absolute = number if number >= 0 else -number
print(f"Absolute value of {number} is {absolute}")

# FizzBuzz with expressions
for i in range(1, 21):
    result = "FizzBuzz" if i % 15 == 0 else "Fizz" if i % 3 == 0 else "Buzz" if i % 5 == 0 else str(i)
    print(result, end=" ")
```

## Comprehension Expressions

Python has powerful one-line expressions for creating collections:

### List Comprehension

```python
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

evens = [x for x in range(20) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```

### Dictionary Comprehension

```python
square_dict = {x: x**2 for x in range(1, 6)}
print(square_dict)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

## Try it Yourself

```python-tryit
# Comprehension expressions
print("=== List Comprehension ===")
squares = [n**2 for n in range(1, 11)]
print(f"Squares: {squares}")

# Filter with condition
even_squares = [n**2 for n in range(1, 11) if n % 2 == 0]
print(f"Even squares: {even_squares}")

print("\n=== Dict Comprehension ===")
word = "hello"
char_positions = {char: i for i, char in enumerate(word)}
print(f"Char positions: {char_positions}")

print("\n=== Set Comprehension ===")
text = "mississippi"
unique_chars = {c for c in text}
print(f"Unique chars in '{text}': {sorted(unique_chars)}")
```

## Expressions vs Statements

It's important to understand the difference:

| | Expression | Statement |
|-|-----------|-----------|
| **Produces a value?** | Yes | Not necessarily |
| **Can be part of another expression?** | Yes | No |
| **Examples** | `x + 5`, `len(s)`, `a > b` | `x = 5`, `if...else`, `for` |

## Key Points

- An expression is any code that evaluates to a value
- Types: literal, arithmetic, string, comparison, logical, conditional
- Conditional expression: `value_if_true if condition else value_if_false`
- Comprehensions create collections in one line
- Expressions produce values; statements perform actions
- Python supports chained comparisons: `1 < x < 10`
