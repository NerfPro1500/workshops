---
layout: default
title: Worksheet
workshop: Advanced Python Coding
section: Student Handouts
print_friendly: true
---

# Advanced Python Coding Mission Worksheet

Use this sheet to capture notes and plan your RPG.

## 1) Warm-Up Check-In

- Something I remember from the Python Intro workshop: <span class="blank-line"></span>
- The first room of my RPG will be: <span class="blank-line"></span>

## 2) Lists Quick Reference

A list holds multiple items in order:

```python
inventory = []            # empty list
inventory.append("key")   # add an item
print(inventory[0])       # get the first item
```

Write code to add `"torch"` to an empty list called `bag` and print the first item:

```python
# Write your code here:


```

## 3) Dictionary Quick Reference

A dictionary holds labeled data:

```python
room = {
    "name": "Dark Cave",
    "exits": ["entrance", "tunnel"],
    "item": "torch"
}
print(room["name"])   # Dark Cave
```

What does `room["exits"][1]` print? <span class="blank-line"></span>

## 4) Function Anatomy

Label the parts of this function:

```python
def describe_room(room):
    print(f"=== {room['name']} ===")
    print(room['description'])
```

- `describe_room` is the <span class="blank-line-short"></span>
- `room` inside the `( )` is the <span class="blank-line-short"></span>
- The indented lines are the function <span class="blank-line-short"></span>

## 5) Room Planner

Sketch out the rooms in your RPG. Draw a box for each room and arrows for exits. Include at least 3 rooms.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

| Room Name | Description (one sentence) | Item (or none) |
|---|---|---|
| | | |
| | | |
| | | |
| | | |

<div style="page-break-after: always;"></div>

## 6) Class Anatomy

Fill in what each line does:

```python
class Player:
    def __init__(self, name):
        self.name = name      # ____________________________
        self.health = 100     # ____________________________
        self.inventory = []   # ____________________________
```

When you write `player = Player("Alex")`, which method runs? <span class="blank-line"></span>

## 7) Reflection

- The concept that made the most sense today: <span class="blank-line-long"></span>
- Something I want to add to my RPG after the workshop: <span class="blank-line-long"></span>
- A question I still have: <span class="blank-line-long"></span>
