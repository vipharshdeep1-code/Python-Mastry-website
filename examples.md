# Python Loop Examples

Master Python loops with these **hands-on examples**. Each program demonstrates a practical use of `for` and `while` loops — from basic iteration to complex pattern printing.

---

## For Loop Examples

### Example 1: Print Numbers from 1 to 10

Use a `for` loop to iterate through a range and print each number:

```python
for i in range(1, 11):
    print(i)
```

> **Explanation:** This loop prints numbers from 1 to 10 by iterating through `range(1, 11)`. Remember, the upper bound in `range()` is **exclusive**, so we use 11 to include 10.

---

### Example 2: Sum of Numbers from 1 to 10

Calculate the sum of numbers using a loop and an accumulator variable:

```python
sum = 0

for i in range(1, 11):
    sum = sum + i
print(sum)
```

> **Explanation:** The `for` loop iterates over `range(1, 11)` and adds each number to the `sum` variable. The final result is **55**.

---

### Example 3: Fibonacci Series (First 10 Terms)

Display the famous Fibonacci sequence — where each number is the sum of the two before it:

```python
a, b = 0, 1

for i in range(10):
    print(a, end=', ')
    c = a + b
    a = b
    b = c
```

> **Explanation:** This loop prints the first 10 numbers of the Fibonacci sequence by updating two variables after each sum. Output: `0, 1, 1, 2, 3, 5, 8, 13, 21, 34,`

---

### Example 4: Factorial of a Number

Use a `for` loop to calculate the factorial of a given number:

```python
num = 5  # Change this to compute factorial of any number
mul = 1
for i in range(num, 0, -1):
    print(i, end=' x ')
    mul = i * mul
print()      # for the change of line
print(mul)
```

> **Explanation:** This loop calculates the factorial by multiplying the number down step-by-step to 1. For `num = 5`, output is `5 x 4 x 3 x 2 x 1 x` followed by `120`.

---

### Example 5: Prime Numbers in a Range

Find and print all prime numbers between two given numbers:

```python
# Prime Number output
lower_num = 2
upper_num = 20

for i in range(lower_num, upper_num + 1):
    for j in range(2, i):
        if i % j == 0:
            break
    else:
        print(i)
```

> **Explanation:** This program prints all prime numbers between two limits by checking divisibility and using a `for-else` loop. The `else` block only runs if the inner loop completes without hitting `break` — meaning the number is prime.

---

### Example 6: Right-Angled Triangle Pattern (Stars)

Print a right-angled triangle pattern using nested loops:

```
*
* *
* * *
* * * *
* * * * *
```

```python
n = 5  # number of rows
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print("*", end=' ')
    print()
```

> **Explanation:** This program prints a right-angled triangle pattern of stars using nested loops. The outer loop controls the rows and the inner loop controls how many stars to print per row.

---

### Example 7: Diamond Star Pattern

Print a diamond pattern that increases then decreases:

```
*
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*
```

```python
for i in range(1, 6):
    for j in range(1, i + 1):
        print("*", end=" ")
    print()
for k in range(4, 0, -1):
    for m in range(1, k + 1):
        print("*", end=" ")
    print()
```

> **Explanation:** This program prints a pyramid pattern of stars that first **increases** (rows 1→5) and then **decreases** (rows 4→1) using nested loops. Two separate loop blocks handle the top and bottom halves.

---

### Example 8: Number Pyramid Pattern

Print a symmetrical number pattern:

```
1
121
12321
1234321
```

```python
for i in range(1, 5):
    for j in range(1, i):
        print(j, end="")
    for j in range(i, 0, -1):
        print(j, end="")
    print()
```

> **Explanation:** This program prints a number pattern that first **increases** and then **decreases** symmetrically in each row using nested loops. The first inner loop prints the ascending part and the second prints the descending part.

---

## While Loop Examples

### Example 9: Sum of N Natural Numbers

Calculate the sum of natural numbers using a `while` loop:

```python
i = 1
sum = 0
n = 10  # Change this to any number
while i < n + 1:
    sum = i + sum
    i += 1
print(sum)
```

> **Explanation:** This program calculates the sum of all integers from 1 to a given number using a `while` loop. For `n = 10`, the result is **55**.

---

### Example 10: Natural, Whole, Even, Odd Numbers

Print the first 10 natural, whole, even, and odd numbers side by side:

```python
i = 0
j = 0
k = 1
m = -1
while i < 10:
    i += 1
    print(i, j, k * 2, m + 2)
    k += 1
    j += 1
    m += 2
```

> **Explanation:** This program demonstrates variable updates and pattern generation through a `while` loop, printing four different number sequences simultaneously.

---

### Example 11: Integers and Their Squares

Print numbers from 1 to 10 alongside their squares:

```python
i = 1
print("Number\t\t Squares")  # '\t' is for adding the wide space
while i < 11:
    print(i, "\t\t", i**2)
    i += 1
```

> **Explanation:** This program prints numbers from 1 to 10 alongside their squares using a `while` loop with formatted spacing. The `**` operator computes the power.

---

### Example 12: Decreasing Series (105, 98, 91, ..., 7)

Print a number series that decreases by 7 each step:

```python
i = 105

while i >= 7:
    print(i, end=',')
    i -= 7
```

> **Explanation:** This program prints numbers from 105 down to 7, decreasing by 7 each time, using a `while` loop. Output: `105,98,91,84,77,70,63,56,49,42,35,28,21,14,7,`

---

### Example 13: Even Numbers in a Range

Print all even numbers between two given numbers:

```python
intl_num = 2
finl_num = 20

i = intl_num
while i <= finl_num - 1:
    if i % 2 == 0:
        print(i)
        i += 2
    else:
        print(i + 1)
        i += 2
```

> **Explanation:** This program prints even numbers between two given numbers using a `while` loop. It checks if the current number is even, and adjusts if it starts on an odd number.

---

### Example 14: Number Guessing Game

A fun game where the user guesses a random number:

```python
import random

# In this example, we simulate the game
jackpot = random.randint(1, 100)
print(f"Secret number is: {jackpot}")

# Game logic (simplified for demonstration)
guess = jackpot  # Auto-guess for demo
counter = 1

if guess == jackpot:
    print(f"Correct! The number was {jackpot}")
    print(f"Steps taken: {counter}")
```

> **Explanation:** This is a number guessing game where the user guesses a randomly generated number. In a full interactive version, a `while` loop continues until the guess matches, with hints like "guess higher" or "guess lower". A counter tracks the number of attempts.

---

### Example 15: Triangle Pattern with While Loop

Print a right-angled triangle using a `while` loop instead of `for`:

```python
i = 1

while i < 6:
    print("*" * i)
    i += 1
```

> **Explanation:** This program prints a right-angled triangle pattern of asterisks using a `while` loop. The string multiplication `"*" * i` creates the pattern without needing a nested loop.

---

## Try it Yourself

Experiment with loops! Try modifying the range values and see what happens:

```python-tryit
# Try changing the values and run!
print("=== For Loop: Sum ===")
total = 0
for i in range(1, 11):
    total += i
print(f"Sum of 1 to 10 = {total}")

print("\n=== Fibonacci Series ===")
a, b = 0, 1
for i in range(10):
    print(a, end=', ')
    a, b = b, a + b

print("\n\n=== Number Pattern ===")
for i in range(1, 6):
    for j in range(1, i):
        print(j, end="")
    for j in range(i, 0, -1):
        print(j, end="")
    print()

print("\n=== Star Triangle ===")
for i in range(1, 6):
    print("*" * i)
```

## Key Points

- **`for` loops** are best when you know the number of iterations in advance
- **`while` loops** are ideal when looping depends on a condition
- **Nested loops** are used for patterns, matrices, and multi-dimensional iteration
- `range(start, stop, step)` generates a sequence — `stop` is always **exclusive**
- The **`for-else`** construct runs the `else` block only if the loop completes without `break`
- Use `end=' '` in `print()` to control output formatting within loops
