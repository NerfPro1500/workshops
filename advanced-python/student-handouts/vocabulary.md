---
layout: default
title: Vocabulary
workshop: Advanced Python Coding
section: Student Handouts
print_friendly: true
---

# Advanced Python Coding Vocabulary

## Word Bank

|---|---|---|---|
| list | dictionary | function | class |
| parameter | return | method | import |
| attribute | object | JSON | module |

## Fill In the Blanks

1) A <span class="blank-line-short"></span> stores an ordered collection of items in `[ ]`. \
2) A <span class="blank-line-short"></span> stores labeled data in `{ }` using key-value pairs. \
3) A <span class="blank-line-short"></span> is a reusable block of code defined with `def`. \
4) A <span class="blank-line-short"></span> is a blueprint for creating objects. \
5) An <span class="blank-line-short"></span> is one specific instance created from a class. \
6) A variable that belongs to an object (like `player.name`) is called an <span class="blank-line-short"></span>. \
7) A function that belongs to a class (like `player.take_damage()`) is called a <span class="blank-line-short"></span>. \
8) The <span class="blank-line-short"></span> keyword loads code from another file. \
9) <span class="blank-line-short"></span> is a text format Python uses to read and write data to files. \
10) The value a function sends back is returned with the <span class="blank-line-short"></span> keyword.

<div style="page-break-after: always;"></div>

## Quick Checks

- Circle the correct way to get the first item from a list:
  - `inventory[1]` &nbsp;&nbsp;&nbsp; `inventory[0]` &nbsp;&nbsp;&nbsp; `inventory.first()`

- Circle the correct way to look up a key in a dictionary:
  - `room.name` &nbsp;&nbsp;&nbsp; `room["name"]` &nbsp;&nbsp;&nbsp; `room(name)`

- Draw a line matching each concept to its description:

  | | |
  |---|---|
  | `def greet(name):` | Creates an object from a class |
  | `player = Player("Alex")` | Defines a function with a parameter |
  | `player.inventory` | An attribute belonging to an object |
  | `return health` | Sends a value back from a function |

## Stretch: Code Detective

What will this code print? Work through it step by step:

```python
items = ["torch", "map", "key"]
items.append("coin")
print(f"You have {len(items)} items")
print(f"First item: {items[0]}")
```

Line 1 creates a list with <span class="blank-line-short"></span> items. \
After line 2 it has <span class="blank-line-short"></span> items. \
Line 3 prints: <span class="blank-line-long"></span> \
Line 4 prints: <span class="blank-line-long"></span>
