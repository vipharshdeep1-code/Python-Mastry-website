# Python Keywords

Keywords are **reserved words** in Python that have special meanings. You cannot use them as variable names, function names, or any other identifiers. They form the core vocabulary of the Python language.

## What Are Keywords?

Keywords are predefined words that Python uses for its syntax and structure. They are case-sensitive, which means `True` is a keyword but `true` is not.

## List of Python Keywords

Python 3 has **35 keywords**. Here they are organized by category:

### Value Keywords
| Keyword | Description |
|---------|-------------|
| `True` | Boolean true value |
| `False` | Boolean false value |
| `None` | Represents the absence of a value |

### Operator Keywords
| Keyword | Description |
|---------|-------------|
| `and` | Logical AND |
| `or` | Logical OR |
| `not` | Logical NOT |
| `is` | Identity comparison |
| `in` | Membership test |

### Control Flow Keywords
| Keyword | Description |
|---------|-------------|
| `if` | Conditional statement |
| `elif` | Else if condition |
| `else` | Default condition |
| `for` | Loop over a sequence |
| `while` | Loop while condition is true |
| `break` | Exit a loop |
| `continue` | Skip to next loop iteration |
| `pass` | Do nothing (placeholder) |

### Function & Class Keywords
| Keyword | Description |
|---------|-------------|
| `def` | Define a function |
| `return` | Return a value from a function |
| `class` | Define a class |
| `lambda` | Create an anonymous function |

### Import Keywords
| Keyword | Description |
|---------|-------------|
| `import` | Import a module |
| `from` | Import specific parts of a module |
| `as` | Create an alias |

### Exception Keywords
| Keyword | Description |
|---------|-------------|
| `try` | Start a try block |
| `except` | Handle an exception |
| `finally` | Code that always runs |
| `raise` | Raise an exception |

### Other Keywords
| Keyword | Description |
|---------|-------------|
| `with` | Context manager |
| `yield` | Generator function |
| `global` | Declare global variable |
| `nonlocal` | Declare nonlocal variable |
| `del` | Delete an object |
| `assert` | Debugging assertion |
| `async` | Asynchronous function |
| `await` | Wait for async result |

## Finding Keywords Programmatically

You can use Python itself to list all keywords:

```python
import keyword
print(keyword.kwlist)
print(f"\nTotal keywords: {len(keyword.kwlist)}")
```

## Try it Yourself

Run this code to see all Python keywords and check if a word is a keyword:

```python-tryit
import keyword

# List all keywords
print("All Python Keywords:")
print("=" * 40)
for i, kw in enumerate(keyword.kwlist, 1):
    print(f"{i:2d}. {kw}")

print(f"\nTotal: {len(keyword.kwlist)} keywords")

# Check if a word is a keyword
print(f"\nIs 'for' a keyword? {keyword.iskeyword('for')}")
print(f"Is 'hello' a keyword? {keyword.iskeyword('hello')}")
```

## Common Mistakes with Keywords

### Mistake 1: Using a keyword as a variable name

```python
# This will cause a SyntaxError:
# class = "Python 101"    # 'class' is a keyword!
# for = 10                # 'for' is a keyword!

# Correct alternatives:
class_name = "Python 101"
for_count = 10
print(class_name, for_count)
```

### Mistake 2: Wrong case

```python
# True and False are case-sensitive
is_valid = True     # Correct
# is_valid = true   # NameError: 'true' is not defined
print(is_valid)
```

## Try it Yourself

Experiment with keywords and see what happens:

```python-tryit
import keyword

# Test different words
words = ["if", "hello", "True", "print", "for", "python", "None"]

for word in words:
    status = "KEYWORD" if keyword.iskeyword(word) else "not a keyword"
    print(f"  '{word}' → {status}")
```

## Key Points

- Keywords are reserved words with special meanings in Python
- Python 3 has 35 keywords
- Keywords are **case-sensitive** (`True` vs `true`)
- You **cannot** use keywords as variable names
- Use `keyword.iskeyword()` to check if a word is a keyword
- Use `keyword.kwlist` to get the full list
