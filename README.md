# nAds (NoAds) - Real-Time Ad Detection

nAds is a full-stack application that allows users to monitor and detect the presence of advertisements on various channels in real time. It leverages YOLO (You Only Look Once) object detection technology to identify ads and provide instant feedback.

## Table of Contents

-   [About The Project](#about-the-project)
    -   [Features](#features)
    -   [Technologies](#technologies)
-   [Project Structure](#project-structure)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Usage](#usage)
-   [Contribution](#contribution)

---

## About The Project

### Features

-   Real-time ad detection on multiple channels.
-   User-friendly web interface for monitoring.
-   Integration with YOLO object detection for accurate results.
-   Easily extendable to support additional channels and features.

### Technologies

nAds is built using a variety of technologies and tools, including:

-   [Vite](https://vitejs.dev/): A fast build tool for modern web development.
-   [React](https://reactjs.org/): A JavaScript library for building user interfaces.
-   [TypeScript](https://www.typescriptlang.org/): A statically typed superset of JavaScript.
-   [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
-   [Shadcn-UI](https://shadcn.com/): React component library that is accessible, customizable, and designed to be a building block for your own component library.
-   [Capacitor](https://capacitorjs.com/): An open-source cross-platform application runtime for creating native applications.
-   [Flask](https://flask.palletsprojects.com/): A fast and lightweight web application framework using Python.
-   [YOLO (You Only Look Once)](https://pjreddie.com/darknet/yolo/): YOLO is a real-time computer vision neural network model and AI that excels in object detection tasks, offering fast and accurate results.

---

## Project Structure

The project follows a server-client structure, with the server powered by Flask and the client using React with TypeScript. Here's an overview of the project structure:

-   `client/`: Contains the React frontend application.
    -   `src/`: React app source code.
    -   `dist/`: Distribution-ready bundled app (using Vite).
-   `server/`: Flask backend server.
    -   `app.py`: Main Flask backend application.
-   `yolo/`: YOLO project - object detection logic.
-   `docs/`: Documentation and project-related files.

---

## Getting Started

### Prerequisites

Before running the project, ensure you have the following software installed:

-   Python 3.11.1
-   pip
-   Node.js (v19.3.^)
-   npm (or pnpm/yarn as per your preference)

### Installation

1.  Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/nAds.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd nAds
    ```

3.  Set up the Flask server environment (inside the server directory):

    ```bash
    cd server
    python -m venv venv
    source venv/Scripts/activate    # On Mac use: venv/bin/activate
    pip install -r requirements.txt
    ```

4.  Install frontend dependencies (inside the client directory):

    ```bash
    cd ../client
    npm install # Use pnpm or yarn if preferred
    ```

### Usage

1. Start the Flask server (inside the server directory):

    ```bash
    .\venv\Scripts\activate
    python app.py
    ```

    The server should now be running on http://localhost:8000/.

2. Start the React frontend (inside the client directory):

    ```bash
    npm run dev # Use pnpm or yarn if preferred
    ```

    The React app should now be accessible in your browser at http://localhost:3000/.

---

## Contribution

nAds is a fun side project developed by three university CS students. We welcome contributions, feedback, and suggestions to enhance this project. If you'd like to get involved:

-   Feel free to open issues or feature requests.
-   Submit pull requests to help improve the project.
-   Join our community discussions.

**Your participation is greatly appreciated!**
