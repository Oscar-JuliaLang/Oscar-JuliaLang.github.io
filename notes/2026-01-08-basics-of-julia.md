---
layout: page
title: "Basics of Julia"
---

## 1) Basic syntax and operations   

### Variables and data types
```julia
x = 10               # Integer
y = 3.14             # Floating-point number
name = "Julia"      # String
is_active = true    # Boolean
``` 
### Basic operations
```julia
# Arithmetic
sum = x + y
difference = x - y 
product = x * y
quotient = x / y
# Comparison
is_equal = (x == y)
is_greater = (x > y)
```

### 2) Control flow
#### Conditional statements
```julia
if x > y
    println("x is greater than y")
elseif x < y
    println("x is less than y")
else
    println("x is equal to y")
end
```
#### Loops
```julia
# For loop
for i in 1:5
    println(i)
end 
# While loop
count = 1
while count <= 5
    println(count)
    count += 1
end
``` 
### 3) Functions
```julia
function greet(name)
    return "Hello, $name!"
end 
message = greet("Julia")
println(message)
```
### 4) Arrays and Dictionaries
#### Arrays
```julia
arr = [1, 2, 3, 4, 5]
push!(arr, 6)          # Add element
first_element = arr[1] # Access element
```
#### Dictionaries
```julia
dict = Dict("name" => "Julia", "age" => 10)
dict["location"] = "Programming" # Add key-value pair
name = dict["name"]              # Access value
```
### 5) Packages
```julia
using Pkg
Pkg.add("ExamplePackage")  # Install a package
using ExamplePackage        # Load a package
``` 
### 6) REPL and Scripts
- **REPL (Read-Eval-Print Loop):** Interactive environment to run Julia commands
- **Scripts:** Save Julia code in `.jl` files and run them using:
```bash
julia script_name.jl
```
### 7) Resources for further learning
- [Official Julia Documentation](https://docs.julialang.org/)
- [Julia Academy](https://juliaacademy.com/)