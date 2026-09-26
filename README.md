# 👍 Bet 1.0

A full-stack forum where Gen Z thrill-seekers post challenges for each other and take one on by clicking the "Bet" button. The front-end is built with React and Vite, and all four CRUD operations are wired to a Supabase Postgres database.

Built for CodePath WEB 102, Unit 7 Lab.

## Features

### Required
- **Create** — the "Submit Challenge" form inserts a new post (title, author, description) into the `Posts` table, then redirects home
- **Read** — the homepage fetches every post from the database and renders each as a `Card`, ordered by `created_at`
- **Update** — the edit form (opened from a card's three-dot menu) pre-fills with the post's current values and updates the matching row by `id`
- **Delete** — the delete button on the edit form removes the matching row by `id`
- **Persistent bet count** — clicking a card's "Bet" button increments `betCount` in the database, so the count survives a page refresh

## Walkthrough

### The homepage (Read)
Every challenge lives in Supabase. On load, the homepage selects all rows from the `Posts` table and renders them as cards.

### Submitting a challenge (Create)
The "Submit Challenge 🏆" form inserts a new post and redirects home, where the new card appears.

### Editing a challenge (Update)
The three-dot menu on a card opens a pre-filled form. Saving updates the matching row and reflects the change on the homepage.

### Placing a bet (Update / persist)
Clicking "👍 Bet Count" increments the count in the database. Refreshing the page shows the count persisted.

### Deleting a challenge (Delete)
The delete button on the edit form removes the post from the database and the homepage.

### Demo
A full run: creating, reading, editing, betting on, and deleting challenges, all backed by the live database.

https://github.com/user-attachments/assets/0c2de215-6593-4cd7-8c1e-f709938ab308

## What I practiced
- Standing up a Postgres database with Supabase and defining a table schema
- Creating and exporting a Supabase client with `createClient()`
- Wiring all four CRUD operations with `@supabase/supabase-js`: `.insert()`, `.select()`, `.update()`, `.delete()`
- Filtering rows with `.eq('id', id)` and ordering results with `.order('created_at')`
- Using `async`/`await` for asynchronous database calls
- Managing form state with `useState` and controlled inputs
- Fetching data on mount with `useEffect`
- Client-side routing with `react-router-dom` (`useRoutes`, `useParams`)
- Keeping secrets out of source control with Vite environment variables (`import.meta.env`)

## Running locally

```bash
npm install
npm run dev
```

Then open the `http://localhost:5173/` link that Vite prints.

### Environment variables
This project reads your Supabase credentials from a `.env` file at the project root. Copy `.env.example` to `.env` and fill in your values:

```
VITE_SUPABASE_URL="your-supabase-project-url"
VITE_SUPABASE_KEY="your-supabase-publishable-anon-key"
```

Find these in your Supabase dashboard under **Settings → General** (Project URL) and **Settings → API Keys** (Publishable / anon public key). Restart the dev server after editing `.env` so Vite picks up the new values.

### Database setup
Create a `Posts` table in Supabase with these columns (Row Level Security disabled for this lab):

| Column      | Type      | Default |
|-------------|-----------|---------|
| id          | int8      | (auto)  |
| created_at  | timestamp | now()   |
| title       | text      | null    |
| author      | text      | null    |
| description | text      | null    |
| betCount    | numeric   | 0       |

## Tech stack
- React 19
- Vite
- React Router 7
- Supabase (Postgres + `@supabase/supabase-js`)
