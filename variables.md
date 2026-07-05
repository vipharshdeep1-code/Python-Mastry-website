# Variables

A **variable** is a named container that stores a value in your program. You can think of it as a label attached to a piece of data. In Python, creating variables is simple — you just assign a value using the `=` operator.

## Creating Variables

Unlike many other languages, Python doesn't require you to declare a variable type. The type is determined automatically from the value you assign.

```python
# Creating variables is simple
name = "Alice"
age = 25
height = 5.7
is_student = True

print(name, age, height, is_student)
```

## Variable Assignment

The `=` operator is the **assignment operator**. It assigns the value on the right to the variable on the left.

```python
x = 10       # Assign 10 to x
x = 20       # Reassign x to 20 (old value is replaced)
print(x)     # Output: 20
```

### Multiple Assignment

Python allows you to assign values to multiple variables in one line:

```python
# Assign different values
a, b, c = 1, 2, 3

# Assign the same value
x = y = z = 0

print(a, b, c)   # 1 2 3
print(x, y, z)   # 0 0 0
```

## Try it Yourself

```python-tryit
# Create different types of variables
name = "Python Learner"
age = 20
gpa = 3.85
is_enrolled = True

print(f"Name: {name}")
print(f"Age: {age}")
print(f"GPA: {gpa}")
print(f"Enrolled: {is_enrolled}")

# Multiple assignment
x, y, z = 10, 20, 30
print(f"\nx = {x}, y = {y}, z = {z}")

# Swap variables (Python makes this easy!)
x, y = y, x
print(f"After swap: x = {x}, y = {y}")
```

## Variable Naming Rules

These are the same rules as for identifiers (Lesson 4):

| Rule | Valid | Invalid |
|------|-------|---------|
| Letters, digits, underscores | `my_var`, `count2` | `my-var`, `count@2` |
| Cannot start with digit | `_name`, `age1` | `1age`, `2nd` |
| Case-sensitive | `Name` ≠ `name` | — |
| No keywords | `my_class` | `class`, `for` |

### Naming Conventions

```python
# Variables: snake_case
user_name = "alice"
total_score = 95

# Constants: UPPER_SNAKE_CASE
MAX_ATTEMPTS = 3
PI = 3.14159

# Private: leading underscore
_internal_cache = {}
```

## Dynamic Typing

Python is **dynamically typed** — a variable can change its type when you reassign it:

```python
x = 10         # x is an integer
print(type(x)) # <class 'int'>

x = "hello"    # Now x is a string
print(type(x)) # <class 'str'>

x = [1, 2, 3]  # Now x is a list
print(type(x)) # <class 'list'>
```

## Try it Yourself

```python-tryit
# Dynamic typing in action
value = 42
print(f"value = {value}, type = {type(value).__name__}")

value = 3.14
print(f"value = {value}, type = {type(value).__name__}")

value = "Hello"
print(f"value = {value}, type = {type(value).__name__}")

value = [1, 2, 3]
print(f"value = {value}, type = {type(value).__name__}")

value = True
print(f"value = {value}, type = {type(value).__name__}")
```

## Variable Scope

Where you create a variable determines where it can be used:

```python
# Global variable (accessible everywhere)
greeting = "Hello"

def say_hello():
    # Local variable (only inside this function)
    name = "Alice"
    print(f"{greeting}, {name}!")

say_hello()
# print(name)  # Error! 'name' is not defined outside the function
```

## Deleting Variables

Use the `del` keyword to delete a variable:

```python
x = 100
print(x)    # 100

del x
# print(x)  # NameError: name 'x' is not defined
```

## Try it Yourself

```python-tryit
# Variable scope demonstration
global_var = "I'm global!"

def my_function():
    local_var = "I'm local!"
    print(f"Inside function: {global_var}")
    print(f"Inside function: {local_var}")

my_function()
print(f"Outside function: {global_var}")

# Uncomment the line below to see the error:
# print(f"Outside function: {local_var}")  # NameError!
print("(local_var is not accessible outside the function)")
```

## Key Points

- Variables are created with `=` (assignment operator)
- Python is dynamically typed — no type declaration needed
- Variable names must follow identifier rules (snake_case recommended)
- Multiple assignment: `a, b, c = 1, 2, 3`
- Variables have scope — local variables exist only inside their function
- Use `type()` to check a variable's type
- Use `del` to delete a variable
