---
layout: default
title: Learning Checks
---

# Learning Checks

Learning checks are short quizzes or activities designed to assess students' understanding of key concepts covered in the workshops. Each section below is tied to a specific workshop — try the learning check after completing that workshop to see how much you remember!

---

## Tech Fundamentals Learning Check

_After completing the [Tech Fundamentals](/tech-fundamentals/) workshop_

Do you understand how computers work, the difference between hardware and software, and basic command line operations? What command would you use to list files in a directory? What command would you use to change directories?

---

## JavaScript Basics Learning Check

_After completing the [JavaScript Basics](/javascript-basics/) workshop_

Can you create variables in JavaScript, use different data types, and display output using `console.log`? How would you concatenate two strings? Can you write a simple program that stores user input and displays a personalized message?

Try to run the [`basics-fixme.js`](basics-fixme.js) file and fix any errors you encounter! Pay attention to the output from Node.js, especially what line number it says the problem is in. Remember that to run a JavaScript file using Node.js, you would use the command `node basics-fixme.js` in your terminal, making sure you are in the correct directory. Or you can press F5 in VS Code.

---

## Interactive HTML + JavaScript Learning Check

_After completing the [Interactive HTML + JavaScript](/interactive-html-javascript/) workshop_

Can you use `document.querySelector()` to find an element on a page? Do you know the difference between reading `.value` from an input and reading `.textContent` from a paragraph? Can you add an event listener that responds when a user types in a text box?

Think about these questions:

- What's the difference between using `"#title"` and `".title"` as a selector?
- If you want to update a preview every time someone types, which event should you listen for — `"click"`, `"change"`, or `"input"`?
- If an element has the classes `"message-preview theme-blue"` and you want to switch to green, how do you avoid losing the `"message-preview"` class?
- What does `.trim()` do to a string, and why is it useful when reading user input?

---

## Python Coding Introduction Learning Check

_After completing the [Python Coding Introduction](/python-intro/) workshop_

Can you create variables in Python, use `print()` and `input()`, and write simple `if`/`else` decisions? Do you know what an f-string is and how to use `.lower()` for comparing text?

Think about these questions:

- What does `input()` always return — a string, a number, or a boolean?
- What's the difference between `"Hello, {name}"` and `f"Hello, {name}"`?
- If a player types `"Left"` and your code checks `choice == "left"`, will it match? How would you fix it?
- What's wrong with this line: `treasure + 1`? (Hint: where does the new value go?)

---

## Advanced Python Coding Learning Check

_After completing the [Advanced Python Coding](/advanced-python/) workshop_

Can you define a class with `__init__`, create methods that use `self`, and work with lists and dictionaries? Do you understand how to save and load data with JSON?

Think about these questions:

- What's wrong with `def take_damage(amount):` inside a class? What parameter is missing?
- Why does `return health > 0` fail inside a method, but `return self.health > 0` works?
- If you set `self.inventory = None` in `__init__`, what happens when you try to call `self.inventory.append("sword")`? What should the default be instead?
- Can you save a Python function to a JSON file? Why or why not?
- What does the `in` keyword do differently for lists vs. dictionaries?

---

## Game Engine Tools (Godot) Learning Check

_After completing the [Game Engine Tools](/game-engine/) workshop_

Do you understand how Godot organizes a game using nodes and scenes? Can you read GDScript and spot common mistakes in animation and movement code?

Think about these questions:

- What's the difference between a **node** and a **scene** in Godot?
- Match each node type to its purpose:
  - `CharacterBody2D` — ?
  - `Area2D` — ?
  - `CollisionShape2D` — ?
  - `Label` — ?
- If your animation is called `"move"` in the editor but your code says `play("Move")`, will it work? Why not?
- What's the difference between `_process()` and `_physics_process()`? Which one should you use for player movement?
- If the player is moving left (`velocity.x < 0`), should `sprite.flip_h` be `true` or `false`?

---

## Video Game Design: Mechanics and Logic Learning Check

_After completing the [Video Game Design - Mechanics and Logic](/game-mechanics-and-logic/) workshop_

Can you identify game mechanics, explain how games teach players new abilities, and describe what makes a mechanic feel good?

Think about these questions:

- Pick a game you've played recently. Name three **mechanics** (actions the player can do).
- What is **progressive discovery**? Describe an example from a game where you learned a new ability by finding it during exploration.
- What is **gating**? Give an example of an area in a game that you couldn't access until you had the right ability or item.
- Name two types of **feedback** a game might give you when you collect an item (think: visual, audio, text, controller vibration).
- Design challenge: How would you introduce a "wall jump" mechanic to a player _without_ using a text tutorial?

---

## Sound Design and Foley Learning Check

_After completing the [Sound Design and Foley](/sound-design-and-foley/) workshop_

Can you describe what Foley is, explain why layering matters, and think about how sound tells a story?

Think about these questions:

- What is **Foley**? How is it different from using a sound effects library?
- Why do sound designers **layer** multiple recordings together instead of using just one sound?
- If you needed to create the sound of footsteps on gravel, what everyday objects could you use?
- What does **synchronization** mean in sound design, and why does it matter?
- You're creating sounds for a 10-second clip of a rainstorm. List three individual sounds you would record and layer together.

---

## AI Playground for Kids Learning Check

_After completing the [AI Playground for Kids](/ai-playground-for-kids/) workshop_

Can you write an effective prompt, spot problems in AI-generated code, and explain why testing AI output matters?

Think about these questions:

- What's wrong with the prompt: "Make me a game"? How would you improve it to get better results?
- You ask an AI to build a calculator app and it gives you code. What should you do _before_ trusting that code?
- The AI generates a program but one feature doesn't work. Should you start over with a new prompt or try to fix just that part? Why?
- Why is it important to **build small** (one feature at a time) when working with AI, instead of asking for everything at once?
- Is AI output always correct? Name one thing you should always check before using AI-generated content.
