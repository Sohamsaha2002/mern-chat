# MERN Chat

A websocket based Realtime Chat application for Chatting and File Sharing with User online/offline status and user authentication.

## Table of Contents
- [Client Setup](#client-setup)
- [Server Setup](#server-setup)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Client Setup

### Prerequisites
- Node.js
- npm

### Installation
1. Navigate to the client directory:
    ```sh
    cd client
    ```
2. Install dependencies:
    ```sh
    npm install yarn
    yarn
    yarn add
    ```

### Running the Client
1. Start the client development server:
    ```sh
    yarn dev
    ```
2. Open your browser and navigate to `http://localhost:5173`.

## Server Setup

### Prerequisites
- Node.js
- Express.js
- npm
- MongoDB

### Installation
1. Navigate to the server directory:
    ```sh
    cd server
    ```
2. Install dependencies:
    ```sh
    npm install
    ```

### Running the Server
1. Start the MongoDB server if it's not already running.
2. Start the server:
    ```sh
    node index.js
    ```
3. The server runs on `http://localhost:4040`.
## Screenshots
![image](https://github.com/user-attachments/assets/cc77f27a-781f-4684-b64f-1969afa7d0cd)
![image](https://github.com/user-attachments/assets/673185e0-e343-40af-a053-8357eebe23e6)


## Features

- Realtime chat with WebSockets
- File sharing capabilities
- User online/offline status
- User authentication
- logout

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [express](https://expressjs.com/)
- [mongoose](https://mongoosejs.com/)
---
