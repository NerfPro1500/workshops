# Player class - represents the player character
# A class is like a blueprint for creating objects!

class Player:
    """Represents the player in the game."""

    def __init__(self, name):
        """Called when you create a new Player. Sets up starting values."""
        self.name = name
        self.health = 100
        self.inventory = []   # Empty list to start

    def is_alive(self):
        """Returns True if the player still has health."""
        return self.health > 0

    # TODO: Add a method called 'take_damage' that reduces health by an amount
    # It should print a message like "You took 10 damage! Health: 90"
    # Hint:
    # def take_damage(self, amount):
    #     self.health = self.health - amount
    #     print(f"You took {amount} damage! Health: {self.health}")

    # TODO: Add a method called 'has_item' that checks if an item is in inventory
    # It should return True or False
    # Hint:
    # def has_item(self, item_name):
    #     return item_name in self.inventory
