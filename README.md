# To-Do App

A responsive task manager built with **HTML, CSS and vanilla JavaScript**, with no frameworks or external libraries. Users can add, complete, edit and delete tasks, and the interface adapts to screen size and to the system's light or dark theme.

<!-- Screenshot: save an image as screenshot.png next to this file, then replace this line with: ![To-Do App](screenshot.png) -->

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Accessibility](#accessibility)
- [Limitations and Roadmap](#limitations-and-roadmap)
- [Author](#author)

## Features

- Add tasks with the **Add** button or the **Enter** key
- Input validation: empty or whitespace-only tasks are rejected, both when adding and when saving an edit
- Mark tasks as completed (the text is crossed out and dimmed)
- Inline editing with keyboard support
- Delete tasks
- Responsive layout for desktop and mobile screens
- Automatic dark mode based on the system theme
- Correct text direction for both Arabic and English tasks

## Tech Stack

| Layer | Technology | Used for |
| --- | --- | --- |
| Structure | HTML5 | Page layout, labels bound to checkboxes |
| Styling | CSS3 | Custom properties, Flexbox, transitions, animations, media queries |
| Logic | JavaScript (ES6) | DOM manipulation, event handling, input validation |

## Project Structure

```
todo-app/
├── index.html    Page structure
├── style.css     Design tokens, layout, components, responsive rules, dark mode
└── script.js     Task creation, editing, deletion and validation
```

## Getting Started

No installation or build step is required.

```bash
git clone https://github.com/Mo7ammedaga/todo-app.git
cd todo-app
```

Then open `index.html` in any modern browser.

## Usage

| Action | How |
| --- | --- |
| Add a task | Type in the input field, then click **Add** or press **Enter** |
| Complete a task | Click the circle next to it |
| Edit a task | Click **Edit**, change the text, then click **Save** or press **Enter** |
| Cancel an edit | Press **Escape** |
| Delete a task | Click **Delete** |

## How It Works

- **Task creation:** `createTaskElement()` builds a list item (checkbox, label, Edit and Delete buttons), and `setupTask()` attaches the behavior to it. Tasks that exist in the HTML and tasks added later go through the same `setupTask()` function.
- **Validation:** `addTask()` and the save logic use early returns, so invalid input stops the function before anything is changed.
- **State in CSS:** completed tasks use the `input:checked + label` selector, and edit mode is a single `editing` class on the list item. JavaScript toggles the class and CSS controls how it looks.
- **Theming:** colors, radii and shadows are CSS custom properties defined in `:root`. Dark mode redefines the same variables inside a `prefers-color-scheme: dark` media query.
- **Safe rendering:** user text is inserted with `textContent`, never `innerHTML`, so it is never parsed as HTML.

## Accessibility

- Every interactive element has visible hover and keyboard focus styles
- Edit and Delete buttons have descriptive `aria-label` values that include the task name
- Full keyboard support for adding, editing and canceling
- Animations are disabled for users who set `prefers-reduced-motion`

## Limitations and Roadmap

Current limitations:

- Tasks are not saved, so refreshing the page resets the list
- No automated tests

Planned improvements:

- [ ] Save tasks with `localStorage`
- [ ] Filters: all, active and completed
- [ ] Separate application state from rendering
- [ ] Event delegation on the task list

## Author

**Mohammed Alagha**

GitHub: [@Mo7ammedaga](https://github.com/Mo7ammedaga)
