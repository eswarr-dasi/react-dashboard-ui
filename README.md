# 📊 react-dashboard-ui

> **Project 2 of 10** · [30-Day Dev Roadmap](https://github.com/eswarr-dasi/dev-project-roadmap) · Jun 24, 2026
>
> A responsive **financial dashboard** built with React 18, TypeScript, and Recharts. Consumes the
> [expense-tracker-api](https://github.com/eswarr-dasi/expense-tracker-api) to visualize spending trends,
> category breakdowns, and budget status in real time.
>
> ---
>
> ## ✨ Features
>
> - **Spending overview cards** — Total spent, remaining budget, top category at a glance
> - - **Line chart** — Daily spending trend for the current month
>   - - **Pie/donut chart** — Spending breakdown by category
>     - - **Budget progress bars** — Visual spend-vs-budget per category
>       - - **Expense table** — Sortable, filterable recent transactions
>         - - **Date range picker** — Filter all widgets by custom date range
>           - - **Dark/light mode** — System-preference aware theme toggle
>             - - **Fully typed** — Strict TypeScript throughout, zero `any`
>              
>               - ---
>
> ## 🛠️ Tech Stack
>
> | Layer | Technology |
> |-------|------------|
> | Framework | React 18 |
> | Language | TypeScript 5 (strict mode) |
> | Charts | Recharts |
> | State | React Query (server state) + useState |
> | Styling | Tailwind CSS |
> | HTTP client | Axios |
> | Build | Vite |
> | Testing | Vitest + React Testing Library |
>
> ---
>
> ## 🏗️ Component Architecture
>
> ```
> src/
> ├── components/
> │   ├── layout/          # AppShell, Sidebar, Header
> │   ├── dashboard/       # SummaryCards, SpendingChart, CategoryPie
> │   ├── expenses/        # ExpenseTable, ExpenseRow, Filters
> │   ├── budgets/         # BudgetProgress, BudgetCard
> │   └── ui/              # Button, Badge, Card, Modal (reusable primitives)
> ├── hooks/               # useExpenses, useBudgets, useSummary
> ├── api/                 # Axios client + typed API functions
> ├── types/               # Shared TypeScript interfaces
> ├── utils/               # Date helpers, formatters
> └── App.tsx
> ```
>
> **Design decisions:**
> - React Query handles caching, background refetch, and loading states automatically
> - - All API response shapes typed via interfaces matching the backend DTOs
>   - - Components kept small and single-responsibility; charts accept generic `data` props
>    
>     - ---
>
> ## 🚀 Getting Started
>
> ### Prerequisites
> - Node.js 18+
> - - [expense-tracker-api](https://github.com/eswarr-dasi/expense-tracker-api) running on port 8080
>  
>   - ### Install & run
>   - ```bash
>     git clone https://github.com/eswarr-dasi/react-dashboard-ui.git
>     cd react-dashboard-ui
>     npm install
>     npm run dev
>     ```
>
> Open `http://localhost:5173`
>
> ### Build for production
> ```bash
> npm run build
> ```
>
> ---
>
> ## 🧪 Testing
>
> ```bash
> npm run test
> ```
>
> - Component render tests (React Testing Library)
> - - Custom hook tests (mock API responses)
>   - - Utility function unit tests
>    
>     - ---
>
> ## 🎯 Career Relevance
>
> Demonstrates **React + TypeScript** proficiency at production quality — strict typing, component architecture,
> data visualization, and API integration. Directly complements the Spring Boot backend work on my resume and
> showcases the full-stack capability expected in Senior Full-Stack roles.
>
> ---
>
> ## 📅 Part of the 30-Day Dev Challenge
>
> See the full roadmap: [dev-project-roadmap](https://github.com/eswarr-dasi/dev-project-roadmap)
>
> *Built by [Eswarr Dasi](https://github.com/eswarr-dasi) · Jun 2026*
