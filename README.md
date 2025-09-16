ToDo React

A simple, beginner-friendly To-Do List built with React + Vite.
Add tasks, delete them, and reorder with move up/down buttons. Great starter project to learn React state, events, and list rendering.

✨ Features

➕ Add a new task

🗑️ Delete a task

🔼🔽 Reorder tasks (move up / move down)

⌨️ Press Enter to add quickly

🎯 Clean, minimal UI you can style yourself (or swap to Bootstrap)

🧰 Tech Stack

React (functional components + useState)

Vite (fast dev server & build)

CSS (plain CSS, optional Bootstrap)

📦 Getting Started
Prerequisites

Node.js LTS (e.g., 18+ or 20+). Check with:

node -v
npm -v

Clone & Run
# 1) clone your repo
git clone https://github.com/<your-username>/Todo-React.git
cd Todo-React

# 2) install dependencies
npm install

# 3) start the dev server
npm run dev


Open the URL Vite prints (usually http://localhost:5173).

Build for production
npm run build
npm run preview   # preview the built app locally (defaults to port 4173)

🗂️ Project Structure
Todo-React/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx         # React entry (mounts <App /> and imports global CSS)
    ├── index.css        # Global styles (or Bootstrap import if you prefer)
    ├── App.jsx          # Renders <ToDoList />
    └── ToDoList.jsx     # Your to-do app (state + UI)

🧠 How It Works (tiny overview)

useState holds:

tasks: string[] — the list of tasks

newTask: string — the text in the input field

Add task: push a trimmed newTask into tasks

Delete task: filter out by index

Move up/down: swap items in a copied array, then set state

React rule: never mutate state directly. Always make a new array/object (e.g., [...tasks]) and then call the setter.

🎨 Styling Options

Use your own CSS in src/index.css

Or add Bootstrap quickly (CDN) in index.html:

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>

🚀 Deploy

Vercel or Netlify: Import your GitHub repo → Build command: npm run build → Output dir: dist/.

GitHub Pages (static hosting): Use a Vite + GH Pages guide or an action (optional).

🧪 Quick Git Commands
git status
git add .
git commit -m "feat: add move up/down buttons"
git push

🛠 Troubleshooting

Styles not applying → Ensure src/main.jsx imports ./index.css.

Nothing renders → App.jsx must return <ToDoList /> (component), not the string "ToDoList".

Input not updating → Use onChange={(e) => setNewTask(e.target.value)} (not onClick).

Move up/down not working → Guard the edges:

if (index <= 0) return;                 // up
if (index >= tasks.length - 1) return;  // down


Port already in use → npm run dev -- --port 5174.

🗺️ Roadmap (nice-to-haves)

✅ Toggle “done” state with a checkbox

✏️ Edit task text in place

💾 Save tasks to localStorage so they persist after refresh

🔍 Filter: All / Active / Done

🗂️ Split into smaller components (TaskItem, AddTaskForm)

📄 License

MIT — free to use, modify, and share.
