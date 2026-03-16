# Advanced Python - Starter Code

Welcome to the Advanced Python mission! You'll build a text-based RPG with rooms, an inventory system, and a save file.

## Getting Started

1. Fork this repository on GitHub (or sync your existing fork)
2. Clone to your computer
3. Open in VS Code
4. Open the integrated terminal (View → Terminal or Ctrl+`)
5. Navigate to this folder:

```bash
cd advanced-python/starter-code
```

## Files in This Project

- `game.py` - The main game: rooms, functions, game loop, save/load
- `player.py` - The Player class (you'll add two methods here)

## Running the Game

```bash
python game.py
```

You should see the game title and a prompt for your character's name!

**Note:** On some systems, use `python3` instead of `python`.

## Your Mission

There are two TODO sections to complete:

1. **In `player.py`**: Add the `take_damage()` and `has_item()` methods
2. **In `game.py`**: Complete the `take_item()` function

After completing those, extend the game:

- Add a new room to the `rooms` dictionary
- Connect it to an existing room with exits
- Play through your new area and test saving/loading

## Commands in the Game

| Command | What it does |
|---|---|
| `go [room]` | Move to a connected room |
| `look` | Re-read the current room description |
| `take` | Pick up an item in the current room |
| `inventory` | Show what you're carrying |
| `save` | Save your progress to a file |
| `quit` | Exit the game |

## After the Workshop

```bash
git add .
git commit -m "Complete text RPG"
git push
```

Happy coding!
