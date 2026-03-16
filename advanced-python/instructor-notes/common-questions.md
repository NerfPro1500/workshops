---
layout: default
title: Common Questions
workshop: Advanced Python Coding
section: Instructor Notes
---

# Advanced Python Coding Common Questions

Keep answers simple first. Add detail only if a student asks for more. \
Encourage curiosity and normalize not knowing everything.

## **"What's the difference between a list and a dictionary?"**

A list is a collection in order — good when position matters, like an inventory of items. A dictionary is labeled data — good when you want to look something up by name, like looking up a room by its ID.

*If they want more*: Lists use integer indexes (`inventory[0]`). Dictionaries use keys (`room["name"]`). You can put a list inside a dictionary (like the `exits` list in each room) or a dictionary inside a list.

## **"Why does `inventory[0]` start at zero instead of one?"**

Most programming languages start counting from zero. It's a quirk you get used to fast! Think of it as "how many steps from the front?" — the first item is zero steps away.

*If they want more*: This is called "zero-based indexing." It comes from how computers store data in memory. The last item is at index `len(list) - 1`.

## **"What does `self` mean inside a class?"**

`self` is how the method knows *which* Player it's talking about. If you have two players, `player1` and `player2`, `self.name` gives the right name for each one.

*If they want more*: `self` is just a convention — you could name it anything, but everyone uses `self`. When you call `player.take_damage(10)`, Python automatically passes the `player` object as `self`.

## **"Why do we need `from player import Player`?"**

`player.py` is a separate file. Python doesn't automatically know about it. The `import` line tells Python: "go look in the `player.py` file and bring in the `Player` class."

*If they want more*: `from player import Player` imports just the `Player` class. `import player` imports the whole file (then you'd write `player.Player()`). Splitting code into multiple files keeps each file focused and easier to read.

## **"Why does `__init__` have two underscores on each side?"**

Those are called "dunder methods" (double underscore). Python uses that naming pattern for special built-in methods. `__init__` is special because Python calls it automatically when you create a new object.

*If they want more*: There are other dunder methods like `__str__` (controls what `print(player)` shows) and `__len__`. You don't need to memorize them — just know that double underscores mean "Python uses this automatically."

## **"What does `json.dump` / `json.load` actually do?"**

`json.dump` converts Python data (dicts, lists, strings, numbers) into text and writes it to a file. `json.load` reads that text back and converts it into Python data again. It's like a translator between Python and text.

*If they want more*: JSON stands for JavaScript Object Notation. It's a standard format used by websites, APIs, and config files everywhere. A Python dict looks almost identical to JSON, which is why it's so easy to convert.

## **"What's a lambda?"**

A lambda is a tiny function you write in one line without using `def`. In the command dispatcher, `lambda p, r: show_inventory(p)` means "a function that takes p and r and calls show_inventory(p)." It's a shortcut for simple one-line functions.

*If they want more*: `lambda p, r: show_inventory(p)` is equivalent to:
```python
def unnamed_function(p, r):
    return show_inventory(p)
```
Lambdas are useful when you need a function in one specific place and don't want to name it.

## **"Why does `rooms[r]` work in the command dispatcher?"**

`r` is the current room name (a string like `"cave"`). `rooms[r]` uses that string as a dictionary key to get the room's data. It's the same as writing `rooms["cave"]`, but using a variable so it works for any room.

*If they want more*: The command dispatcher stores lambdas (tiny functions) as dictionary values. When the player types "look," the code does `commands["look"](player, current_room)` — it looks up the lambda and calls it with the current player and room.

## **"What happens if the player types a room name that doesn't exist?"**

The `go_to_room` function checks whether the direction is in the current room's `exits` list. If it's not there, it prints "You can't go that way" and returns the current room unchanged. It won't crash.

*If they want more*: This is defensive programming — checking before acting. A common mistake is using `rooms[direction]` without checking first, which raises a `KeyError`. The `exits` list acts as a whitelist.

## **"Why is `if __name__ == "__main__":` at the bottom?"**

This line checks if the file is being *run directly* (not imported by another file). If you import `game.py` from somewhere else, you don't want the game to start automatically. This guard prevents that.

*If they want more*: When Python runs a file directly, it sets `__name__` to `"__main__"`. When the file is imported, `__name__` is set to the module name (like `"game"`). This pattern lets you write code that's both runnable and importable.

## **"Can I have a list inside a dictionary inside a list?"**

Yes! Python data structures can be nested as deeply as you want. The `rooms` dictionary contains dictionaries, and each room dict contains a list (`exits`). This is how most real programs store data.

*If they want more*: JSON supports the same nesting. The `exits` list in each room is a great example — `rooms["cave"]["exits"]` gets the list, and `rooms["cave"]["exits"][0]` gets the first exit.

## **"My save file has the wrong data after I changed a room. Why?"**

The save file was written before you made changes. Delete `savegame.json` and start a new game. The save file stores a snapshot of the game state at the moment you saved.

## **"Can I add color to the terminal output?"**

Yes! The `colorama` library makes it easy. It's not in the standard library, so you'd install it with `pip install colorama`. That's a great next-steps project — the game logic stays exactly the same.

## Teaching Notes for Instructors

**Don't over-explain classes.** "A blueprint" is enough. Students will build intuition by using the `Player` class, not by hearing a lecture about OOP.

**The command dispatcher is the highlight.** Spend a moment drawing it on the board: "commands" is a dictionary where the values are functions. That's a powerful idea — data that *is* code.

**Save/load is immediately motivating.** Run the game, save, quit, rerun — seeing their inventory persist is a satisfying "aha" moment.

**Read errors together.** `KeyError` means a key wasn't found in a dict. `AttributeError` means the object doesn't have that method. `FileNotFoundError` means the save file doesn't exist yet.
