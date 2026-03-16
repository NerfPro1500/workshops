---
layout: default
title: Advanced Python Coding
workshop: Advanced Python Coding
---

# Advanced Python Coding - 2 Hour Workshop

**Audience:** Students who have completed Python Coding Introduction or have basic Python experience \
**Theme:** _"Upgrading the Robot — from scripts to systems"_

* [Slides]({{ site.baseurl }}/advanced-python/slides.html)
* Resources:
  * [Glossary]({{ site.baseurl }}/advanced-python/resources/glossary)
  * [Next Steps After Advanced Python]({{ site.baseurl }}/advanced-python/resources/next-steps)
* Student Handouts:
  * [Vocabulary Handout]({{ site.baseurl }}/advanced-python/student-handouts/vocabulary)
  * [Worksheet Handout]({{ site.baseurl }}/advanced-python/student-handouts/worksheet)
* Instructor Notes:
  * [Common Questions]({{ site.baseurl }}/advanced-python/instructor-notes/common-questions)
  * [Timing Guide]({{ site.baseurl }}/advanced-python/instructor-notes/timing-guide)

## 1. Workshop Goals

By the end of this workshop, every student should be able to:

* Use lists to store and modify collections of data
* Use dictionaries to group related information
* Write functions to organize code into reusable pieces
* Pass functions as arguments (command dispatcher pattern)
* Define a simple class with attributes and methods
* Split code across two files using `import`
* Read and write a JSON file for saving game state
* Build and run a multi-room text RPG from a structured starter template
* Save and share their code using Git

This workshop is about building programs with *structure* — programs big enough that you need to organize them.

## 2. Success Definition

A student is successful if they can say:

> "I built a game with rooms, an inventory, and a save file. I know how to break big programs into functions and classes so they don't become a mess."

## 3. Environment & Prerequisites

### Required Software

Before the workshop, students should have:

* **Python 3.10+** installed (see [Setup Guide]({{ site.baseurl }}/SETUP))
* **VS Code** installed and configured
* **Git** installed and configured
* **GitHub account** created
* **Workshop repository forked** - or if you already have a fork from a previous workshop, [sync your fork]({{ site.baseurl }}/SETUP#section-4-cloning-the-workshop-repository) to get the latest materials

### Primary Path

* Local development using VS Code
* Python in integrated terminal
* Git for version control

### Fallback Path (If Needed)

* GitHub Codespaces (browser-based; be mindful of [free quota](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces#free-quota) limits)

## 4. 2-Hour Agenda (Minute-by-Minute)

### 0:00–0:10 - Welcome & Icebreaker

> Low-pressure, creativity-focused

* Prompt (verbal or written):
  * > "If you were designing a video game, what is the first room the player starts in? Describe it in one sentence."
* Brief recap of Python Intro concepts (variables, input, if/else)
* Emphasize: today we build something *bigger* — and the secret is organizing code

### 0:10–0:25 - Environment Setup

> Hands-on setup

* Navigate to workshop repository on GitHub
* Fork or sync existing fork
* Clone to local machine (or open Codespace)
* Open in VS Code
* Navigate to starter code: `cd advanced-python/starter-code`
* Run: `python game.py`
* Students should see the game title and a name prompt

### 0:25–0:45 - Lists & Dictionaries

> The building blocks for game data

Topics:

* Lists: ordered collections — great for inventories
* Dictionaries: labeled data — great for room descriptions

Activities:

```python
# Build an inventory
inventory = []
inventory.append("sword")
inventory.append("torch")
print(inventory)          # ['sword', 'torch']
print(inventory[0])       # 'sword'

# Build a room
room = {
    "name": "Dark Cave",
    "description": "It's cold and damp.",
    "exits": ["entrance", "tunnel"],
    "item": "torch"
}
print(room["name"])       # 'Dark Cave'
print(room["exits"])      # ['entrance', 'tunnel']
```

* Point out how the RPG starter code uses these right now
* Students open `game.py` and read the `rooms` dict together

### 0:45–1:00 - Functions

> Organizing code into reusable tools

Topics:

* Why functions? Show 30 lines of repeated code vs. one function
* Define, call, return values, parameters
* Functions that take a `room` dict and a `player` object

Activity — read and call the existing functions in `game.py`:

```python
def describe_room(room):
    print(f"\n=== {room['name']} ===")
    print(room['description'])
    print(f"Exits: {', '.join(room['exits'])}")
    if room['item']:
        print(f"You see: {room['item']}")
```

* Students implement the `take_item()` function (marked with TODO)

### 1:00–1:10 - Break

* Encourage movement
* Optional: riddle on screen — "What has rooms but no doors, exits but no walls?"

### 1:10–1:20 - Classes & Modules

> Blueprints and organization

Topics:

* A class is a blueprint: `Player` has a name, health, and inventory
* `self` is how the object refers to itself
* Show how `player.py` is imported in `game.py` (`from player import Player`)
* Students implement the two TODO methods in `player.py`

```python
class Player:
    def __init__(self, name):
        self.name = name
        self.health = 100
        self.inventory = []

    def has_item(self, item_name):
        return item_name in self.inventory
```

### 1:20–1:25 - File I/O (Save Game)

> Making programs remember between sessions

* Show `save_game()` and `load_game()` in `game.py`
* Run the game, save, quit, rerun — inventory is still there!
* Explain: `json.dump()` writes Python data to a file; `json.load()` reads it back

### 1:25–1:45 - Hands-On: Build Your RPG

> Creative coding time

Progression:

1. Complete the `take_item()` TODO in `game.py`
2. Complete the `take_damage()` and `has_item()` TODOs in `player.py`
3. Add a new room to the `rooms` dict and connect it with exits
4. Run and play through the full game
5. Save progress and reload it

Extension for fast finishers:

* Add an enemy that deals damage when you enter a room
* Add a `"help"` command to the dispatcher
* Add a `max_inventory` limit to the Player class
* Add a win condition (e.g., collecting all items triggers an ending)
* Create a second Python file for room or enemy data

### 1:45–1:55 - Git Commit, Push & Show and Tell

> Save and celebrate

* Add and commit:
  ```bash
  git add .
  git commit -m "Complete text RPG"
  git push
  ```
* Volunteer show-and-tell (2–3 students run their game)
* Celebrate creative room designs and problem-solving

### 1:55–2:00 - Wrap-Up & Teaser

> Reflect and connect forward

* Reflection: "What concept clicked for you today?"
* Preview of what these skills unlock:
  * Web apps with Flask (functions + dicts = routes + data)
  * Data analysis with Pandas (lists of dicts)
  * AI projects (Python libraries use classes extensively)
* Point to the Next Steps resource

## 5. Printed Student Handouts

### Handout 1: Vocabulary (Fill-in-the-Blank)

* list, dictionary, key, value
* function, parameter, return, call
* class, object, attribute, method
* import, module, JSON, file I/O

### Handout 2: Mission Worksheet

* Warm-up check-in
* List & dictionary quick reference
* Function anatomy diagram
* Room planner (sketch out rooms and exits)
* Reflection prompts
* Terminal command reference

## 6. Instructor Guardrails

* Don't explain classes deeply — "a blueprint" is enough for today
* The command dispatcher (`commands = {...}`) looks magical; say "we'll revisit this"
* If a student is confused by `self`, say "it's how the object knows which Player it is"
* `json` is a standard library — no install needed; mention that offhandedly
* Extension tasks should feel like bonuses, not pressure

## 7. Overarching Goals

* Lists and dicts as the natural home for game and program data
* Functions as the primary tool for keeping code readable
* Classes as blueprints, not magic
* File I/O as a practical, immediately motivating concept (save games!)
* Confidence to read unfamiliar code and extend it
* Structural thinking: "how should I organize this?" over "what do I type?"
