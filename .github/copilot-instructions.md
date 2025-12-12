# Copilot / AI agent instructions for Anythink-Market

This repository is a tiny FastAPI service packaged with Docker. Use these notes to be immediately productive when making changes or suggesting code.

- **Big picture**: single service `python-server` implements a FastAPI app (in `python-server/src/main.py`) that stores tasks in an in-memory `tasks` list. The service is run with Uvicorn (see `python-server/Dockerfile`) and exposed on port 8000 via `docker-compose.yml`.

- **Key files**:
  - `python-server/src/main.py` — FastAPI routes and in-memory data (`tasks`).
  - `python-server/requirements.txt` — minimal deps (`fastapi`, `uvicorn`).
  - `python-server/Dockerfile` — builds image and runs `uvicorn src.main:app --reload`.
  - `docker-compose.yml` — service definition; binds `./python-server/src` into the container at `/app/src` for live edits.
  - `README.md` — quick run notes (keeps a summary of routes and `docker compose up`).

- **Dev / run workflow** (exact commands to use):
  - Docker Compose (preferred for reproducing environment):
    - `docker compose up --build`
  - Local (no Docker):
    - `python -m venv .venv && .venv/bin/pip install -r python-server/requirements.txt`
    - `uvicorn src.main:app --reload --host 0.0.0.0 --port 8000` (run from `python-server`)

- **API examples** (use these exact payloads):
  - Add a task: `curl -s -X POST http://localhost:8000/tasks -H "Content-Type: application/json" -d '{"text":"New task"}'`
  - Fetch tasks: `curl -s http://localhost:8000/tasks`

- **Important code patterns & gotchas discovered**:
  - Tasks are stored only in the in-memory list `tasks`; restarting the container clears data.
  - `docker-compose.yml` mounts `./python-server/src` into the container, so edits are live when running via Compose.
  - The app uses `uvicorn --reload` inside the container (development mode). Be cautious if changing to production deployment.
  - The root route `/` returns a plain string (`"Hello World"`) while `/tasks` returns JSON. Keep responses consistent when adding new routes.

- **When changing code**:
  - Edit `python-server/src/main.py` for endpoint or data-model changes. Because of the volume mount, `docker compose up` reflects edits quickly.
  - If you add new Python packages, update `python-server/requirements.txt` and rebuild the container: `docker compose up --build`.

- **Tests & CI**: no tests or CI config detected. If you add tests, document how to run them here and include a minimal `pytest` invocation.

- **What not to do / low priority**:
  - Don't introduce persistent storage without documenting migration and startup behavior; current architecture assumes ephemeral in-memory storage.

If any section is unclear or you'd like more examples (e.g., adding a persistent backend, expanding routes, or creating tests), tell me which area to expand and I'll iterate.
