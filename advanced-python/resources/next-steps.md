---
layout: default
title: Next Steps
workshop: Advanced Python Coding
section: Resources
---

# Next Steps After Advanced Python Coding

## Practice at Home

- **Expand your RPG**: add more rooms, items, enemies, puzzles, and endings
- **Add more commands**: extend the command dispatcher with new actions
- **Try a different project**: use the same patterns (dicts, functions, classes) for a quiz game, a to-do list, or a choose-your-own-adventure tool
- **Read the `json` docs**: Python's standard library has many more useful modules — `random`, `datetime`, `os`

## Level Up Your Python Skills

- **Loops with lists and dicts**: `for item in inventory:` and `for key, value in room.items():`
- **List comprehensions**: a compact way to build lists: `items = [r["item"] for r in rooms.values() if r["item"]]`
- **Error handling**: `try/except` makes your programs resilient to bad input
- **Type hints**: annotate your functions — `def describe_room(room: dict) -> None:`

## Explore the Standard Library

No installs needed — these come with Python:

- `random` — random choices, shuffling, number ranges
- `pathlib` — modern file path handling
- `datetime` — dates and times
- `collections` — useful data structures like `Counter` and `defaultdict`

## Go Further

- [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/): Free book covering files, web, and automation
- [Real Python Tutorials](https://realpython.com/): Deep dives on classes, modules, and more
- [Python.org Official Tutorial](https://docs.python.org/3/tutorial/): Comprehensive and free
- [CS50P - Introduction to Programming with Python](https://cs50.harvard.edu/python/): Harvard's free Python course

## What These Skills Unlock

### Web Development (Flask)
```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello from Python on the web!"
```

### Data Analysis (Pandas)
```python
import pandas as pd
data = pd.read_csv("scores.csv")
print(data["score"].mean())
```

### Async Programming
When you want multiple things to happen at once — like checking for messages while running a timer:
```python
import asyncio

async def check_messages():
    await asyncio.sleep(1)
    print("Checking messages...")

asyncio.run(check_messages())
```

## Challenges to Try

### Challenge 1: Enemy Encounters
When the player enters a specific room, an enemy appears and deals damage:
```python
def enter_room(player, room_name):
    room = rooms[room_name]
    if room.get("enemy"):
        enemy = room["enemy"]
        print(f"A {enemy['name']} attacks!")
        player.take_damage(enemy["damage"])
```

### Challenge 2: Locked Doors
Some exits only work if the player has the right item:
```python
def go_to_room(player, current_room_name, direction):
    room = rooms[current_room_name]
    locked = room.get("locked_exits", {})
    if direction in locked and not player.has_item(locked[direction]):
        print(f"This exit is locked. You need: {locked[direction]}")
        return current_room_name
    ...
```

### Challenge 3: Multiple Save Slots
Allow the player to pick a save slot (1, 2, or 3) and save to different files.

### Challenge 4: GUI Front End
Install `pygame` or use `tkinter` (built-in) to give your RPG a graphical window. Keep the same game logic — just change how commands come in and how output is displayed.

## Questions or Stuck?

- Review the workshop materials and the glossary
- Check the [Common Questions]({{ site.baseurl }}/advanced-python/instructor-notes/common-questions) guide
- Remember: reading other people's code is one of the fastest ways to learn!
