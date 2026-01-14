---
layout: default
title: Environment Setup Guide
---

# Environment Setup Guide

This guide will help you install all the software needed for the Lansing Tech Studio workshops. Complete these steps before attending workshops to maximize hands-on time!

## What You'll Install

- **WSL2 with Ubuntu** (Windows only) - Linux environment for Windows
- **Linux Environment** (Chromebook only) - Developer tools access
- **VS Code** - Code editor for all your programming
- **Node.js** - Run JavaScript programs
- **Python 3** - For Python workshops (can be deferred)
- **Git** - Version control for saving and sharing code

**Time estimate:** 30-45 minutes \
**Required before:** JavaScript Basics workshop (1/22/2026) \
**Best timing:** if you try at least a few days before the workshop you can get help beforehand if needed

## Prerequisites

- Computer with administrator access
- Stable internet connection
- Parent's permission

## Section 1: Operating System Setup

Choose your platform below.

### Windows Users: Installing WSL2 with Ubuntu

**What is WSL2?** Windows Subsystem for Linux version 2 lets Windows run Linux tools natively. This gives you access to powerful developer tools.

**Official Guide:** [Microsoft's WSL Installation Guide](https://docs.microsoft.com/en-us/windows/wsl/install)

**Quick Steps:**

1. Open PowerShell as Administrator (right-click Start → Windows PowerShell (Admin))
2. Run this command:

   ```powershell
   wsl --install
   ```

3. Restart your computer when prompted
4. After restart, Ubuntu will open automatically
5. Create a username and password - **Important!!!**: _remember these!_

**Verification:**

- Open "Ubuntu" from Start menu
- You should see a terminal prompt

**Troubleshooting:**

- If `wsl --install` fails, your Windows may need updates
- [WSL Troubleshooting Guide](https://docs.microsoft.com/en-us/windows/wsl/troubleshooting)
- Minimum requirement: Windows 10 version 2004 or higher

### Chromebook Users: Enabling Linux

**What is Linux on Chromebook?** Chromebooks can run a Linux environment for developer tools.

**Official Guide:** [Google's Linux Setup for Chromebook](https://support.google.com/chromebook/answer/9145439)

**Quick Steps:**

1. Open **Settings**
2. Navigate to **Advanced** → **Developers**
3. Find **Linux development environment**
4. Click **Turn on**
5. Follow the setup wizard (may take 10 minutes to download)

**Verification:**

- Look for "Terminal" app in your app drawer
- Open it - you should see a command prompt

**Troubleshooting:**

- Not all Chromebooks support Linux - [check compatibility](https://www.chromium.org/chromium-os/chrome-os-systems-supporting-linux)
- Requires at least 5GB of free space

### Mac Users: Using Terminal

**Good news!** Mac has a Unix-based terminal built in.

**How to Open Terminal:**

- **Applications** → **Utilities** → **Terminal**

- Or use Spotlight: Press Cmd+Space, type "Terminal", press Enter

**Verification:**

- You should see a command prompt ending in `$`

## Section 2: Installing VS Code

**What is VS Code?** Visual Studio Code is a free code editor made by Microsoft. It's powerful, customizable, and used by millions of developers.

**Downloads:** [https://code.visualstudio.com/download](https://code.visualstudio.com/download)

### All Platforms

1. Visit the downloads page
2. Choose your operating system
3. Run the installer
4. Follow installation prompts (default options are fine)

### Windows (WSL) Specific

After installing VS Code on Windows, you need the WSL extension:

1. Open VS Code
2. Click the Extensions icon (left sidebar, looks like blocks)
3. Search for "WSL"
4. Install ["WSL" by Microsoft](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)
5. Restart VS Code

**Opening VS Code from WSL:**

```bash
# In Ubuntu terminal
code . # Opens current folder (the "dot" means current directory) in VS Code
```

**Helpful Guide:** [VS Code with WSL](https://code.visualstudio.com/docs/remote/wsl)

### Recommended Extensions for Everyone

Install these VS Code extensions:

- **ESLint** - Helps catch JavaScript errors
- **Prettier** - Code formatter
- **Python** (for Python workshops)

**Verification:**

- Open VS Code
- Create a test file
- See syntax highlighting

## Section 3: Installing Node.js

**What is Node.js?** Node.js lets you run JavaScript outside the browser. We'll use it for JavaScript workshops.

**Required Version:** 18 or higher (preferably 24 or current Long Term Support (LTS))

### Recommended: Using NVM (Node Version Manager)

**Why NVM?** Easily install, update, and switch between Node versions.

**Official Guide:** [NVM Installation](https://github.com/nvm-sh/nvm#installing-and-updating)

#### Linux / Mac / WSL Installation

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Close and reopen your terminal, then:
nvm install --lts
nvm use --lts
nvm alias default lts/*
```

Note that `lts` means "Long Term Support" version, and is a common nomenclature for many software projects. It's usually best to use the latest LTS version for stability.

**Verification:**

```bash
node --version    # Should show v24.x.x or higher
npm --version     # Should show version number
```

### Alternative: Direct Install

**Downloads:** [https://nodejs.org/](https://nodejs.org/)

1. Choose the LTS (Long Term Support) version
2. Download installer for your OS
3. Run installer with default options
4. Restart terminal

**Windows Note:** If using WSL, install Node.js inside Ubuntu (not on Windows side).

## Section 4: Installing Python 3

**What is Python?** Python is a programming language we'll use in workshops 4 and 5.

**Note:** You can defer this until Python workshops if needed.

### Linux / WSL

```bash
sudo apt update
sudo apt install python3 python3-pip
```

### Mac

Mac comes with Python, but install Python 3 specifically:

**Using Homebrew** (recommended):

```bash
# Install Homebrew first if needed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then install Python
brew install python3
```

**Or download from:** [https://www.python.org/downloads/](https://www.python.org/downloads/)

**Verification:**

```bash
python3 --version    # Should show 3.8 or higher
```

## Section 5: Setting Up Git

**What is Git?** Version control system - save your code history and collaborate with others.

### Installation

**Linux / WSL:**

```bash
sudo apt install git
```

**Mac:**
Git comes pre-installed. If needed:

```bash
xcode-select --install
```

**Windows (outside WSL):**
Download from [git-scm.com](https://git-scm.com/download/win)

**Note:** If using WSL, install Git inside Ubuntu.

### Configuration

After installation, configure Git with your information and set default branch name:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global init.defaultBranch main
```

**Verification:**

```bash
git --version
git config --list
```

## Section 6: GitHub Account Setup

**What is GitHub?** A website for hosting and sharing code using Git.

### Creating an Account

1. Go to [https://github.com/](https://github.com/)
2. Click "Sign up"
3. Follow the prompts (free account is fine)
4. Verify your email

### SSH Key Setup (Optional but Recommended)

**Why?** No need to enter password every time you push/pull.

**Official Guide:** [GitHub SSH Setup](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

**Quick Steps:**

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Press Enter to accept default location
# Enter a passphrase (optional but recommended; remember it!)

# Copy your public key
cat ~/.ssh/id_ed25519.pub
```

Then:

1. Go to GitHub Settings → SSH and GPG keys
2. Click "New SSH key"
3. Paste your public key
4. Save

**Test connection:**

```bash
ssh -T git@github.com
```

## Section 7: Cloning the Workshop Repository

**Forking the Repo:**

1. Go to the workshop repository URL: <https://github.com/Lansing-Tech-Studio/workshops>
2. Click "Fork" (upper right) to create your own copy
3. Choose your GitHub account

**Cloning the Repo:**

```bash
# Replace USERNAME with your GitHub username
git clone https://github.com/USERNAME/workshops.git
cd workshops
```

If you have trouble with HTTPS, use SSH:

```bash
# Replace USERNAME with your GitHub username
git clone git@github.com:USERNAME/workshops.git
cd workshops
```

## Section 8: Final Verification

Test everything together to make sure it all works!

### Open VS Code

```bash
code .
```

### Create Test File

In VS Code:

1. Create new file: `test.js`
2. Add code:

   ```javascript
   console.log("Hello from Node!");
   ```

3. Save file

### Run Test

In VS Code integrated terminal (View → Terminal):

```bash
# Test Node.js
node test.js

# Test other tools
node --version
python3 --version
git --version
```

### Success Checklist

- ✅ VS Code opens and shows terminal
- ✅ `node --version` shows v18 or higher
- ✅ `python3 --version` shows 3.8 or higher
- ✅ `git --version` shows version
- ✅ Can create and run JavaScript files
- ✅ Git config shows your name and email

## Section 8: Troubleshooting & Help

### Common Issues

**"Command not found"**

- Tool might not be installed
- Or not in PATH (environment variable)
- Try restarting terminal or computer

**Permission errors**

- Need administrator access
- Use `sudo` on Linux/Mac (e.g., `sudo apt install`)

**WSL not found (Windows)**

- Windows version may be too old
- Requires Windows 10 version 2004 or newer
- Run Windows Update

**Node/Python wrong version**

- Uninstall old version first
- Or use version manager (NVM for Node)

### Getting Help

**Documentation Links:**

- [Node.js Documentation](https://nodejs.org/docs)
- [VS Code Documentation](https://code.visualstudio.com/docs)
- [WSL Documentation](https://docs.microsoft.com/en-us/windows/wsl/)
- [Git Documentation](https://git-scm.com/doc)

**Day Before Workshop:**

- Arrive 10 minutes early for tech help
- Bring this checklist completed

**During Workshops:**

- Instructors available to help
- Don't hesitate to ask questions!

## Section 9: Day Before Workshop Checklist

Complete this checklist 1-2 days before the workshop:

- [ ] VS Code opens successfully
- [ ] Can open terminal in VS Code (View → Terminal)
- [ ] `node --version` shows v18+
- [ ] `python3 --version` shows 3.8+ (can defer to Python workshop)
- [ ] `git --version` shows version number
- [ ] GitHub account created and verified
- [ ] Git configured with your name and email
- [ ] Workshop repo forked and cloned
- [ ] Can create and run a test JavaScript file

**All checked?** You're ready for the workshop!

## Additional Resources

### Learning Resources

**Command Line Basics:**

- [Command Line Crash Course](https://learnpythonthehardway.org/book/appendixa.html)
- [Linux Journey](https://linuxjourney.com/)

**Git Fundamentals:**

- [Try Git Interactive Tutorial](https://try.github.io/)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)

**JavaScript Previews:**

- [JavaScript.info Tutorial](https://javascript.info/)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

### Reference Documentation

- **Node.js:** [https://nodejs.org/docs](https://nodejs.org/docs)
- **VS Code:** [https://code.visualstudio.com/docs](https://code.visualstudio.com/docs)
- **WSL:** [https://docs.microsoft.com/en-us/windows/wsl/](https://docs.microsoft.com/en-us/windows/wsl/)
- **Python:** [https://docs.python.org/3/](https://docs.python.org/3/)
- **Git:** [https://git-scm.com/doc](https://git-scm.com/doc)
- **GitHub:** [https://docs.github.com/](https://docs.github.com/)

## Questions?

**Email:** [your-workshop-email@example.com]
**Office Hours:** [if available, list times]

We're here to help! Don't struggle alone - reach out with questions.
