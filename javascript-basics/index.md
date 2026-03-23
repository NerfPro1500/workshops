---
layout: default
title: JavaScript Basics
workshop: JavaScript Basics
comments: true
---

# JavaScript Basics - 2 Hour Workshop

**Audience:** Beginners with little to no programming experience \\
**Theme:** _"Making computers respond to YOU - your first real programs"_

- <a href="https://youtu.be/yKh397kxe5I"><img src="{{ site.baseurl }}/assets/icons/youtube.svg" alt="" style="height:1em;vertical-align:middle;margin-right:4px">Recording</a>
- [Slides]({{ site.baseurl }}/javascript-basics/slides.html)
- Resources:
  - [Glossary]({{ site.baseurl }}/javascript-basics/resources/glossary)
  - [Next Steps After JavaScript Basics]({{ site.baseurl }}/javascript-basics/resources/next-steps)
- Student Handouts:
  - [Vocabulary Handout]({{ site.baseurl }}/javascript-basics/student-handouts/vocabulary)
  - [Worksheet Handout]({{ site.baseurl }}/javascript-basics/student-handouts/worksheet)
- Instructor Notes:
  - [Common Questions]({{ site.baseurl }}/javascript-basics/instructor-notes/common-questions)
  - [Timing Guide]({{ site.baseurl }}/javascript-basics/instructor-notes/timing-guide)

## 1. Workshop Goals

By the end of this workshop, every student should be able to:

- Explain what JavaScript is and where it runs
- Understand what variables are and why we need them
- Create variables using `let` and `const`
- Use different data types: strings, numbers, and booleans
- Display output using `console.log`
- Combine strings using concatenation
- Run JavaScript programs using Node.js
- Create a personalized, dynamic story
- Save and share their code using Git

This workshop is about building your first real programs and seeing your creativity come to life in code.

## 2. Success Definition

A student is successful if they can say:

> "I can write code that stores information in variables and displays my own creative output. I'm not afraid to experiment and debug."

## 3. Environment & Prerequisites

### Required Software

Before the workshop, students should have:

- **Node.js 18+** installed (see [Setup Guide]({{ site.baseurl }}/SETUP))
- **VS Code** installed and configured
- **Git** installed and configured
- **GitHub account** created
- **Workshop repository forked** - or if you already have a fork from a previous workshop, [sync your fork]({{ site.baseurl }}/SETUP#section-4-cloning-the-workshop-repository) to get the latest materials

See the complete [Setup Guide]({{ site.baseurl }}/SETUP) for step-by-step installation instructions.

### Primary Path

- Local development using VS Code
- Node.js in integrated terminal
- Git for version control

### Fallback Path (If Needed)

- GitHub Codespaces (browser-based; be mindful of [free quota](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces#free-quota) limits)

## 4. 2-Hour Agenda (Minute-by-Minute)

### 0:00-0:10 - Welcome & Code Confidence Icebreaker

> Low-pressure, creativity-focused

- Prompt (verbal or written):
  > "If you could program a robot to do one task for you, what would it be?"
- Emphasize:
  - Everyone is learning
  - Mistakes are how we learn coding
  - Your code will be unique and that's perfect

### 0:10-0:25 - Environment Setup & Git Fork/Clone

> Hands-on setup

- Navigate to workshop repository on GitHub
- Fork the repository
- Clone to local machine
- Open in VS Code
- Verify Node.js: `node --version`
- Run starter: `node hello.js`

### 0:25-0:45 - JavaScript & Your First Variables

> Foundation concepts

Topics:

- What is JavaScript and where does it run?
- What is Node.js and why are we using it?
- Variables are labeled boxes for information
- `let` for changeable values, `const` for constants
- Data types: strings (text), numbers, booleans (true/false)

Activity:

- Create variables about yourself:

```javascript
let studentName = "Alex";
let favoriteNumber = 7;
const isLearningJavaScript = true;
```

- Use console.log to display values

### 0:45-1:05 - Console.log and String Concatenation

> Making output interesting

Topics:

- console.log displays information
- Use `+` to combine strings
- Mix variables and text for messages
- Mind the spaces when concatenating

Activity:

- Build personalized messages:

```javascript
console.log("Hello, my name is " + studentName);
console.log("My favorite number is " + favoriteNumber);
console.log("Learning JavaScript: " + isLearningJavaScript);
```

### 1:05-1:15 - Break

- Encourage movement
- Optional: coding riddle on screen

### 1:15-1:25 - Introduction to the Dynamic Story Project

> Preview and planning

- Show completed example (run `story-example.js`)
- Explain the mission: creative storytelling with variables
- Walk through starter template
- Clarify: we build incrementally, simple to complex

### 1:25-1:45 - Hands-On: Building the Dynamic Story

> Creative coding time

Progression:

1. Add 3-4 story variables
2. Display story opening with console.log
3. Add more variables and story development
4. Create story ending using all variables
5. Test by running `node story.js`

Extension for fast finishers:

- Add math operators to track scores
- Create longer, more complex narratives
- Use `let` to change values through the story
- Experiment with boolean variables

### 1:45-1:55 - Git Commit, Push & Show and Tell

> Save and celebrate

- Add and commit: `git add . && git commit -m "Complete dynamic story"`
- Push to GitHub: `git push`
- Volunteer show-and-tell (2-3 students)
- Celebrate creativity and problem-solving

### 1:55-2:00 - Wrap-Up & Teaser

> Reflect and connect forward

- Reflection: "What surprised you about JavaScript?"
- Preview: "Next workshop, your code will respond to button clicks in the browser!"
- Quick demo of HTML + JavaScript interaction

## 5. Printed Student Handouts

### Handout 1: Vocabulary (Fill-in-the-Blank)

- JavaScript, Node.js, variable, let, const
- string, number, boolean
- console.log, concatenation, operator

### Handout 2: Mission Worksheet

- Warm-up check-in
- JavaScript basics concepts
- Variable lab exercises
- Data types detective
- Console.log practice
- Story planning zone
- Terminal commands reference
- Reflection prompts

## 6. Instructor Guardrails

- Type slowly - narrate what you're doing
- Normalize syntax errors: "I make these mistakes daily"
- Ask "What do you think the computer thinks?" when students are stuck
- Don't type for students - guide them to find their own answers
- Celebrate attempts, not just correct answers
- Read error messages together - they're helpful!

## 7. Bridge to Workshop #3 (Interactive HTML + JavaScript)

End with:

> "Today you made JavaScript display information. Next workshop, you'll make JavaScript respond to real button clicks and form inputs. Your variables will store data from users!"

Quick demo:

```html
<button onclick="greet()">Click Me!</button>
<script>
  function greet() {
    alert("Hello from JavaScript!");
  }
</script>
```

## 8. Overarching Goals

- Variables as the foundation of all programming
- Console.log as your debugging superpower
- Creativity over perfection
- Comfort with terminal and Node.js
- Building blocks for interactive programming
- Confidence to experiment and learn from errors
