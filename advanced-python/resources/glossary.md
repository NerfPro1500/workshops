---
layout: default
title: Glossary
workshop: Advanced Python Coding
section: Resources
---

# Advanced Python Coding Glossary

Quick reference for terms used in this workshop.

**list:** An ordered collection of items stored in a single variable. Items are wrapped in `[]` and separated by commas: `inventory = ["torch", "map"]`.

**index:** The position of an item in a list, starting at 0. `inventory[0]` gets the first item.

**append():** A list method that adds an item to the end: `inventory.append("key")`.

**dictionary:** A collection of key-value pairs wrapped in `{}`. Used to group related data: `room = {"name": "Cave", "exits": ["north"]}`.

**key:** The label used to look up a value in a dictionary, like `"name"` in `room["name"]`.

**value:** The data stored at a key in a dictionary. Values can be strings, numbers, lists, or other dicts.

**function:** A named, reusable block of code that performs a specific job. Defined with `def`.

**parameter:** A variable in a function definition that receives a value when the function is called: `def describe_room(room):` — `room` is the parameter.

**argument:** The actual value passed into a function when you call it: `describe_room(rooms["cave"])` — `rooms["cave"]` is the argument.

**return:** A keyword that sends a value back from a function to wherever it was called.

**call:** Running a function by writing its name followed by `()`.

**class:** A blueprint for creating objects. Defines what data (attributes) and actions (methods) those objects have.

**object:** A specific instance created from a class. `player = Player("Alex")` creates one Player object.

**attribute:** A variable that belongs to an object, like `player.name` or `player.health`.

**method:** A function that belongs to a class, like `player.take_damage(10)`.

**self:** Inside a class method, `self` refers to the specific object the method is acting on.

**`__init__`:** A special method called automatically when you create a new object. Sets up starting values.

**module:** A Python file that contains code you can import and use in another file.

**import:** A keyword that loads code from another file or library: `from player import Player`.

**JSON:** JavaScript Object Notation — a text format for storing data. Python's `json` module reads and writes it.

**file I/O:** Reading from and writing to files. `open("file.json", "w")` opens for writing; `"r"` opens for reading.

**event loop:** A loop that waits for input, handles it, and repeats — the pattern driving the game's command system.

**lambda:** A short, one-line function written without `def`: `lambda p, r: show_inventory(p)`.
