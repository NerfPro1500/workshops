---
layout: default
title: Timing Guide
workshop: Advanced Python Coding
section: Instructor Notes
---

# Advanced Python Coding Timing Guide (2 Hours)

**Audience**: 12-14 year-olds; some completed Python Intro, some are new. \
**Goal**: lists, dicts, functions, a class, file I/O, and a working text RPG. \
Instruction is ~20% — get students into the code as fast as possible.

## 0:00-0:10 - Welcome & Icebreaker

- **Objective**: prime creative thinking; lower the stakes.
- **Prompt**: "If you were designing a video game, what is the first room the player starts in? Describe it in one sentence."
- **Quick recap**: variables, input(), if/else — "Today we build something bigger using those same tools."
- **Show the finished game**: run `solution/game_example.py` for 60 seconds. "This is where you're headed."
- **Watch for**: students new to the series — they can still complete the workshop with the starter code.

## 0:10-0:25 - Environment Setup

- **Objective**: starter code running locally; Python verified.
- **Before workshop**: repo URL on screen, QR code visible.
- **Flow**:
  1. Fork / sync existing fork on GitHub
  2. `git clone` or `git pull`
  3. `cd advanced-python/starter-code`
  4. `python game.py` — should show the game title
- **Watch for**:
  - `python` vs `python3` (Mac/Linux)
  - `ModuleNotFoundError` for `player` — they're in the wrong directory
  - Git auth issues — switch to Codespaces immediately if it stalls
- **Fallback**: GitHub Codespaces; open terminal in the correct folder.
- **Tip**: type slowly; show the game starting and quit right away to save time.

## 0:25-0:45 - Lists & Dictionaries

- **Objective**: students can read and write list/dict syntax; understand how rooms are stored.
- **Do NOT read the whole rooms dict aloud** — show 1 room and explain the pattern.
- **Flow**:
  1. Live-code a simple list: `inventory = ["torch", "map"]` — append, index, len
  2. Live-code a simple dict: `room = {"name": "Cave", "exits": ["entrance"]}` — key lookup
  3. Open `game.py` together — point out `rooms` and one room's structure
  4. Ask: "What is `rooms["forest"]["item"]`?" — quick class check
- **Activity**: students read the rooms dict and trace what `rooms["cave"]["exits"]` returns.
- **Watch for**:
  - Confusing list `[ ]` with dict `{ }` syntax
  - Index starting at 0 surprises
  - Using `.` instead of `["key"]` to access a dict key (JavaScript habit)

## 0:45-1:00 - Functions

- **Objective**: students understand why functions exist and can call + modify one.
- **Key demo**: show the same logic copy-pasted 3 times vs. wrapped in a function. "Which is easier to fix?"
- **Flow**:
  1. Walk through `describe_room()` — parameter, body, how it's called
  2. Walk through `show_inventory()` — show how it uses `player.inventory`
  3. Introduce `take_item()` — it's currently a stub (`pass`). This is their first TODO.
  4. Students implement `take_item()` together (guided)
- **Tip**: `pass` is a valid placeholder — Python won't crash on an empty function body.
- **Watch for**:
  - Forgetting to save `game.py` before running
  - Confusing modifying `room['item']` (mutates the dict in place) — this is a feature, not a bug
  - Students trying to return from `take_item` when they should be modifying the dict directly

## 1:00-1:10 - Break

- **Encourage**: stand up, stretch, eyes off screen.
- **Optional**: riddle on screen — "What has rooms but no doors, exits but no walls? (A dictionary)"
- **Tip**: use break time to help students who haven't gotten `take_item()` working yet.

## 1:10-1:20 - Classes & Modules

- **Objective**: students can read the Player class; implement two small methods.
- **Keep it conceptual**: "A class is a blueprint. `Player("Alex")` builds one player from that blueprint."
- **Flow**:
  1. Open `player.py` — read through `__init__`, `is_alive`
  2. Show how `game.py` imports it: `from player import Player`
  3. Students implement `take_damage()` and `has_item()` (both are guided TODOs)
  4. Test: add a temporary `print(player.health)` call to verify `take_damage` works
- **Watch for**:
  - Forgetting `self.` prefix on attribute access inside a method
  - Defining methods outside the class (wrong indentation)
  - `__init__` spelling — easy to get the underscores wrong

## 1:20-1:25 - File I/O (Save Game)

- **Objective**: students see save/load working; understand the "why" immediately.
- **Demo only** — do not have students write this from scratch; it's already in the starter.
- **Flow**:
  1. Point to `save_game()` and `load_game()` in `game.py`
  2. Run the game, pick up an item, type `save`, then `quit`
  3. Run the game again — load the save, show the inventory is still there
  4. Briefly show `savegame.json` in VS Code — "Python wrote this file"
- **Tip**: this moment lands well — students immediately see why it matters. Keep it short.

## 1:25-1:45 - Hands-On Build Time

- **Objective**: working game with their own rooms; TODOs completed.
- **Your role**: circulate, unblock, encourage — do not write code for students.
- **Minimum path** (for slower students):
  - `take_item()` TODO done
  - `player.py` TODOs done
  - Game runs end-to-end
- **Extension path** (for fast finishers):
  - Add a new room and connect it with exits
  - Add a "help" command to the dispatcher
  - Add an enemy that calls `player.take_damage()` on entry
  - Add a win condition when all items are collected
  - Create a second `.py` file for room data
- **Common errors**:
  - `KeyError` — room name in `exits` doesn't match a key in `rooms`
  - `AttributeError` — method missing `self` parameter
  - `IndentationError` — code outside/inside class at wrong level
  - `json.JSONDecodeError` — corrupted save file; delete `savegame.json`
- **Watch for**: silent struggling — check in proactively every 3-4 minutes.

## 1:45-1:55 - Git Commit, Push & Show-and-Tell

- **Objective**: work saved; peers inspired by each other's rooms and features.
- **Git flow**:
  ```bash
  git add .
  git commit -m "Complete text RPG"
  git push
  ```
- **Show-and-Tell**: volunteers demo their game — enter a room, pick up an item, save, reload.
- **Celebrate**: creative room names, unexpected commands, funny item names.
- **Watch for**: git auth errors or wrong directory — help individually, don't delay show-and-tell.

## 1:55-2:00 - Wrap-Up

- **Objective**: reflect; connect to real-world Python.
- **Prompts**:
  - "Which concept — list, dict, function, or class — clicked the most for you?"
  - "What would you add with more time?"
- **Bridge**: "These same patterns — dicts, functions, classes — are how web apps, data tools, and AI libraries are built. You're thinking like a software developer now."
- **Point to Next Steps resource** for async, Flask, Pandas, and more.

## General Tips Throughout

- **Type slowly**: narrate what you're doing.
- **`pass` is your friend**: it's a valid placeholder that lets you test before all TODOs are done.
- **Read `KeyError` together**: it almost always means a typo in a room name or dict key.
- **Normalize uncertainty**: "I'd have to look that up" is a great instructor answer.
- **Keep extensions flowing**: "You finished? Add a locked door. Done? Add an enemy." Fast finishers should always have a next challenge.
