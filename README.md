# Anythink Market

This project has been migrated from Python (FastAPI) to Node.js (Express). It provides routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `node-server/src/main.js`: This file contains the implementation of the Express server with routes for managing tasks. It handles adding a task to a list and retrieving the list.

- `node-server/package.json`: This file lists the dependencies required for the Express server.

- `node-server/Dockerfile`: This file is used to build a Docker image for the Express server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `python-server/src/main.py`: Legacy Python FastAPI server (for reference).

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the Express server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up --build
  ```

  This command will build the Docker image for the Express server and start the containers defined in the `docker-compose.yml` file.

- The Express server should now be running. You can access it at port `8001`.

## API Routes

The Express server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain `{ "text": "Task description" }`.

- `GET /tasks`: Retrieves the task list as `{ "tasks": [...] }`.
