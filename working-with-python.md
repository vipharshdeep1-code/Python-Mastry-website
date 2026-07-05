# Working with Python

Before you start writing Python programs, you need to understand how to set up and use the Python environment. This lesson covers how Python works, how to install it, and the different ways you can run Python code.

## How Python Works

Python is an **interpreted language**. This means Python code is executed line by line by the Python interpreter, rather than being compiled into machine code beforehand.

Here's the basic workflow:

1. You write Python code in a `.py` file (e.g., `hello.py`)
2. The Python interpreter reads your code
3. It converts the code to bytecode
4. The bytecode is executed by the Python Virtual Machine (PVM)

## Installing Python

Python is available for all major operating systems:

### Windows
1. Go to [python.org/downloads](https://www.python.org/downloads/)
2. Download the latest Python 3 installer
3. **Important:** Check "Add Python to PATH" during installation
4. Click "Install Now"

### macOS
1. macOS comes with Python pre-installed, but it may be an older version
2. Download the latest version from [python.org](https://www.python.org/downloads/)
3. Or use Homebrew: `brew install python3`

### Linux
Most Linux distributions come with Python 3 pre-installed. You can verify with:

```python
# Run this in your terminal (not in Python)
# python3 --version
```

## Running Python Code

There are several ways to run Python code:

### 1. Interactive Mode (REPL)

Open your terminal and type `python3` (or `python` on Windows) to enter the interactive mode:

```python
>>> print("Hello from the REPL!")
Hello from the REPL!
>>> 2 + 3
5
>>> exit()
```

The `>>>` prompt means Python is waiting for your input. This is great for quick experiments.

### 2. Script Mode

Save your code in a `.py` file and run it:

```python
# Save this as hello.py
name = "Python Learner"
print(f"Hello, {name}!")
print("You are running a Python script.")
```

Then execute: `python3 hello.py`

### 3. In This Course (Browser)

You can write and run Python code directly in the interactive editors throughout this course!

## Try it Yourself

Let's verify Python is working. Run this code to check the version:

```python-tryit
import sys
print(f"Python version: {sys.version}")
print(f"Platform: {sys.platform}")
print("Python is working correctly!")
```

## Python Files

Python files use the `.py` extension. Here are some conventions:

| Convention | Example | Description |
|-----------|---------|-------------|
| Lowercase names | `my_script.py` | Standard for modules |
| Underscores | `data_processor.py` | Separate words with underscores |
| No spaces | `game_logic.py` | Never use spaces in filenames |
| Descriptive | `calculate_tax.py` | Name files after what they do |

## The Python Shell vs Scripts

| Feature | Interactive Shell | Script File |
|---------|------------------|-------------|
| Use case | Quick tests, calculations | Full programs |
| Persistence | Code is lost when you exit | Code is saved in a file |
| Execution | Line by line | Entire file at once |
| Prompt | Shows `>>>` | No prompt |

## Try it Yourself

Experiment with some basic Python operations:

```python-tryit
# Python as a calculator
print("Addition:", 10 + 5)
print("Subtraction:", 10 - 5)
print("Multiplication:", 10 * 5)
print("Division:", 10 / 5)
print("Power:", 2 ** 10)
```

## Key Points

- Python is an interpreted language — code runs line by line
- Install Python from python.org and add it to your PATH
- You can run Python interactively (REPL) or via script files (`.py`)
- Python files should use lowercase names with underscores
- In this course, you can run Python directly in your browser
