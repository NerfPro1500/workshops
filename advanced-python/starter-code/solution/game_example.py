# Advanced Python: Text RPG - Example Solution

import json
from player import Player

rooms = {
    "entrance": {
        "name": "Cave Entrance",
        "description": "You stand at the mouth of a dark cave. Cool air drifts out.",
        "exits": ["forest", "cave"],
        "item": None,
    },
    "forest": {
        "name": "Whispering Forest",
        "description": "Tall trees surround you. Sunlight filters through the leaves.",
        "exits": ["entrance"],
        "item": "old map",
    },
    "cave": {
        "name": "Dark Cave",
        "description": "It is very dark. You hear dripping water in the distance.",
        "exits": ["entrance", "treasure_room"],
        "item": "torch",
    },
    "treasure_room": {
        "name": "Treasure Room",
        "description": "The walls glitter with crystals! A chest sits in the center.",
        "exits": ["cave"],
        "item": "golden key",
    },
    "secret_passage": {
        "name": "Secret Passage",
        "description": "A narrow tunnel hidden behind a false wall. Only someone with a map could find it.",
        "exits": ["cave"],
        "item": "ancient coin",
    },
}


def describe_room(room):
    """Print the room name, description, exits, and any item present."""
    print(f"\n=== {room['name']} ===")
    print(room['description'])
    print(f"Exits: {', '.join(room['exits'])}")
    if room['item']:
        print(f"You see: {room['item']}")


def show_inventory(player):
    """Display the player's current inventory."""
    if player.inventory:
        print(f"\nInventory: {', '.join(player.inventory)}")
    else:
        print("\nYour inventory is empty.")


def take_item(player, room):
    """Pick up the item in the current room and add it to the player's inventory."""
    if room['item']:
        item = room['item']
        player.inventory.append(item)
        room['item'] = None
        print(f"You picked up: {item}")
        # Special: picking up the map unlocks the secret passage
        if item == "old map":
            print("The map shows a hidden passage off the Dark Cave...")
            rooms["cave"]["exits"].append("secret_passage")
    else:
        print("There is nothing to take here.")


def go_to_room(current_room_name, direction):
    """Move to a new room if the direction is a valid exit. Returns the new room name."""
    current_room = rooms[current_room_name]
    if direction in current_room['exits']:
        return direction
    else:
        print("You can't go that way.")
        return current_room_name


def save_game(player, current_room):
    """Save player progress to savegame.json."""
    data = {
        "name": player.name,
        "health": player.health,
        "inventory": player.inventory,
        "room": current_room,
    }
    with open("savegame.json", "w") as f:
        json.dump(data, f, indent=2)
    print("Game saved!")


def load_game():
    """Load player progress from savegame.json. Returns (player, room) or (None, None)."""
    try:
        with open("savegame.json", "r") as f:
            data = json.load(f)
        player = Player(data["name"])
        player.health = data["health"]
        player.inventory = data["inventory"]
        # Re-unlock the secret passage if the player had the map
        if "old map" in player.inventory:
            rooms["cave"]["exits"].append("secret_passage")
        return player, data["room"]
    except FileNotFoundError:
        return None, None


def show_help(player, room):
    """Print the list of available commands."""
    print("\nCommands: go [room], look, take, inventory, save, help, quit")


commands = {
    "look":      lambda p, r: describe_room(rooms[r]),
    "inventory": lambda p, r: show_inventory(p),
    "take":      lambda p, r: take_item(p, rooms[r]),
    "save":      lambda p, r: save_game(p, r),
    "help":      show_help,
}


def main():
    print("=== Crystal Caves RPG ===\n")

    saved_player, saved_room = load_game()
    if saved_player:
        choice = input(f"Found a save for '{saved_player.name}'. Load it? (yes/no) ").lower()
        if choice == "yes":
            player = saved_player
            current_room = saved_room
            print(f"Welcome back, {player.name}!")
        else:
            player = Player(input("Enter your character name: "))
            current_room = "entrance"
    else:
        player = Player(input("Enter your character name: "))
        current_room = "entrance"

    describe_room(rooms[current_room]) # type: ignore

    while True:
        raw_input = input("\nWhat do you do? ").lower().strip()
        parts = raw_input.split()

        if not parts:
            continue

        command = parts[0]
        argument = parts[1] if len(parts) > 1 else None

        if command == "quit":
            print(f"Goodbye, {player.name}! You had {len(player.inventory)} items.")
            break
        elif command == "go" and argument:
            current_room = go_to_room(current_room, argument)
            describe_room(rooms[current_room]) # type: ignore
        elif command in commands:
            commands[command](player, current_room)
        else:
            print("Unknown command. Type 'help' for a list of commands.")


if __name__ == "__main__":
    main()
