# Node.js Express Server

This project is a simple Node.js server using Express that listens on port 8001.

## Project Structure

```
node-server
├── src
│   └── main.js        # Entry point of the application
├── Dockerfile         # Dockerfile for building the application image
├── package.json       # npm configuration file
└── README.md          # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)
- Docker (optional, for containerization)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd node-server
   ```

2. Install the dependencies:

   ```
   npm install
   ```

### Running the Application

To run the application locally, use the following command:

```
node src/main.js
```

The server will start and listen on port 8001.

### Running with Docker

To build and run the application using Docker, use the following commands:

1. Build the Docker image:

   ```
   docker build -t node-server .
   ```

2. Run the Docker container:

   ```
   docker run -p 8001:8001 node-server
   ```

### API Endpoints

- **GET /**: Returns a simple message indicating the server is running.

### License

This project is licensed under the MIT License.