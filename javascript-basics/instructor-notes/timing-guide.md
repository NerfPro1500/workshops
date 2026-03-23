---
layout: default
title: Timing Guide
workshop: JavaScript Basics
section: Instructor Notes
---

# JavaScript Basics Timing Guide (2 Hours)

**Audience**: 12-14 year-olds, beginners or returning from Tech Fundamentals. \
**Goal**: variables, console.log, creative coding confidence. \
Keep energy positive and normalize errors.

## 0:00-0:10 - Welcome & Code Confidence Icebreaker

- **Objective**: lower anxiety about coding; set creative tone.
- **Prompt**: "If you could program a robot to do one task for you, what would it be?"
- **Materials**: slides, completed example story ready to demo.
- **Tip**: show the finished example first - "This is where you're headed today."
- **Watch for**: students who missed Tech Fundamentals; pair with returning students if possible.

## 0:10-0:25 - Environment Setup & Git Fork/Clone

- **Objective**: get starter code, verify Node.js works.
- **Before workshop**: have repo URL prominently displayed.
- **Flow**: demonstrate each step on projector:
  1. Fork repository on GitHub
  2. Clone to local (suggest `Documents/workshops/`)
  3. Open folder in VS Code
  4. Open integrated terminal (View → Terminal)
  5. Run `node --version` (should see v18+)
  6. Run `node hello.js` (should see welcome)
- **Watch for**:
  - GitHub authentication issues (SSH vs HTTPS)
  - Clone location confusion
  - VS Code not opening integrated terminal
  - Node not installed or not in PATH
- **Fallback**: GitHub Codespaces if local setup fails.
- **Tip**: type slowly, narrate every action.

## 0:25-0:45 - JavaScript & Your First Variables

- **Objective**: understand what JavaScript is, create first variables.
- **Demo**: live code alongside students.
- **Flow**:
  1. Explain JavaScript runs everywhere
  2. Explain Node.js lets us run JS in terminal
  3. Introduce variables as "labeled boxes"
  4. Show `let` vs `const`
  5. Introduce strings (with quotes), numbers (no quotes), booleans (true/false)
  6. Create variables together in `story.js`
- **Interactive**: ask students to suggest variable names and values.
- **Watch for**:
  - Using spaces in variable names
  - Forgetting quotes around strings
  - Confusion about when to use let vs const (not critical yet)
  - Variable name typos (case sensitive!)
- **Tip**: emphasize "variables don't do anything until you use them."

## 0:45-1:05 - Console.log & Concatenation

- **Objective**: display output, combine strings.
- **Key concept**: console.log is how we see our program working.
- **Demo**:
  1. Show basic console.log
  2. Show logging variables
  3. Introduce + operator for strings
  4. Demonstrate missing space problem
  5. Show mixing variables and text
- **Activity**: have students predict output before running.
- **Common mistake**: forgetting spaces in concatenation.
- **Tip**: intentionally make the "missing space" mistake to show it's normal.
- **Watch for**:
  - Missing quotes on strings
  - Missing + between parts
  - Expecting variables to print without console.log

## 1:05-1:15 - Break

- **Encourage**: stand up, stretch, eyes off screen.
- **Optional**: coding riddle on screen for early returners.
- **Tip**: this break is before the big project; use time to help struggling students catch up.

## 1:15-1:25 - Project Introduction

- **Objective**: understand the mission, see the goal, plan approach.
- **Critical**: set clear expectations - we're building incrementally.
- **Show**:
  1. Run completed example (`node solution/story-example.js`)
  2. Show starter template (mostly empty with TODOs)
  3. Explain the steps (variables → opening → development → ending)
- **Normalize**: "Your story will be different and that's perfect."
- **Watch for**: students feeling overwhelmed by blank file.
- **Tip**: remind them of the template structure and TODOs to guide them.

## 1:25-1:45 - Hands-On: Building Dynamic Story

- **Objective**: apply all concepts creatively.
- **Your role**: circulate, encourage, debug together.
- **Don't**: type for students - guide them to find errors.
- **Do**: ask "What do you think the computer thinks here?"
- **Pacing strategies**:
  - **Fast finishers**: point to extension challenges in template
  - **Slower students**: focus on simple version (3 variables, basic story), commit what they have
- **Watch for**:
  - Silent struggling - check in proactively
  - Syntax errors preventing any output
  - Students comparing work negatively (redirect to own progress)
  - Missing semicolons (not critical in JavaScript, but explain)
  - Forgetting to save file before running
- **Common errors**:
  - Missing closing quote
  - Missing + in concatenation
  - Typo in variable name
  - Running from wrong directory
- **Tip**: model reading error messages - "Let's look at what the computer is telling us."

## 1:45-1:55 - Git Commit, Push & Show-and-Tell

- **Objective**: save work, celebrate successes.
- **Git flow**: walk through together as a group.
  ```bash
  git add .
  git commit -m "Complete dynamic story"
  git push
  ```
- **Show-and-Tell**: ask for volunteers only; celebrate creativity.
- **Highlight**: different approaches, creative choices, problem-solving.
- **Watch for**: git errors (wrong directory, nothing to commit, push fails).
- **Fallback**: if git is problematic, students can do it at home; focus on celebration.
- **Tip**: make show-and-tell low-pressure; emphasize no "best" story.

## 1:55-2:00 - Wrap-Up & Teaser

- **Objective**: reflect, connect to next workshop.
- **Prompts**:
  - "What surprised you about JavaScript?"
  - "What would you add to your story with more time?"
- **Celebrate**: everyone who ran code successfully.
- **Normalize**: "No one's code is perfect, including mine."
- **Bridge**: "Next time, your JavaScript will respond to REAL button clicks!"
- **Quick demo**: show simple HTML button with onclick handler.
- **Tip**: end on excitement for next workshop.

## General Tips Throughout

- **Type slowly**: narrate what you're doing.
- **Normalize errors**: "I've been coding for years and still make these mistakes."
- **Read error messages together**: show they're helpful, not scary.
- **Celebrate attempts**: "You just debugged your first syntax error!"
- **Check in frequently**: don't let anyone fall too far behind.
- **Pair struggling students**: with more confident peers.
- **Keep it fun**: coding is creative and empowering.
