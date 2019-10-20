# Matrix Generator!

This matrix generator takes 4 inputs from user namely:

1. **width** of the matrix
2. **height** of the matrix
3. **numberType** using which each element of the matrix will be calculated, for now options are available between **Prime** and **Fibonacci**
4. **formulaType** which uses the numberType numbers and finds out the value of the matrix element based on its position, for now options available between **(Xi + Xj)** and **(Xi \* (Xj +1))**

# Example 1

For,

```
width = 3
height = 3
numberType = prime
formulaType = (Xi + Xj)
```

Numbers = `[2, 3, 5]`

Output

```
4 5  7
5 6  8
7 8 10
```

# Example 2

For,

```
width = 3
height = 3
numberType = fibonacci
formulaType = (Xi * (Xj +1))
```

Numbers = `[ 0, 1, 1 ]`

Output

```
0 0 0
1 2 2
1 2 2
```
