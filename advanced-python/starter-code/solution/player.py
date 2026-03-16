# Player class - complete solution

class Player:
    """Represents the player in the game."""

    def __init__(self, name):
        """Called when you create a new Player. Sets up starting values."""
        self.name = name
        self.health = 100
        self.inventory = []

    def is_alive(self):
        """Returns True if the player still has health."""
        return self.health > 0

    def take_damage(self, amount):
        """Reduce health by amount and print a status message."""
        self.health = self.health - amount
        print(f"You took {amount} damage! Health: {self.health}")

    def has_item(self, item_name):
        """Returns True if the item is in the player's inventory."""
        return item_name in self.inventory
