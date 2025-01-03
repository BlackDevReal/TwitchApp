# Twitch Electron App

This is an Electron-based application for Twitch.tv with additional extensions for enhanced functionality.

## Features

- Load multiple Twitch extensions
- Toggle Developer Tools with a global shortcut (Alt+D)
- Cross-platform support (macOS, Windows, Linux)

## Prerequisites

- Node.js (>=12)
- npm (Node Package Manager)

## Setup

1. **Clone the repository:**

    ```sh
    git clone https://github.com/BlackDevReal/twitch-electron-app.git
    cd twitch-electron-app
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Run the application:**

    ```sh
    npm start
    ```

## Building the Application

To build the application for different platforms, use the following commands:

- **macOS:**

    ```sh
    npm run dist -- --mac
    ```

- **Windows:**

    ```sh
    npm run dist -- --win
    ```

- **Linux:**

    ```sh
    npm run dist -- --linux
    ```

## Project Structure

- `main.js`: Main entry point of the Electron application.
- `package.json`: Project configuration and dependencies.
- `package-lock.json`: Lockfile for npm dependencies.
- `extensions/`: Directory containing the Twitch extensions.
- `assets/`: Directory containing application icons.

## Extensions

The application loads the following Twitch extensions:

- 7TV
- TTVBlock
- TTVAutoClaim
- TTVRedesign

## License

This project is licensed under the ISC License.
