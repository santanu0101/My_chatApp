# MERN Stack ChatApp

A real-time chat application built using the **MERN stack (MongoDB, Express.js, React, Node.js)** with **Socket.io** for instant messaging.

## Features 🚀

### Backend (Node.js, Express, MongoDB)
- **User Authentication**: Secure authentication with **JWT (jsonwebtoken)** and **bcrypt**.
- **Real-time Messaging**: Powered by **Socket.io** for instant communication.
- **Database Management**: Uses **Mongoose** to interact with **MongoDB**.
- **Environment Variables**: Managed using **dotenv**.
- **Security Enhancements**: Includes **cookie-parser** for handling authentication cookies.
- **Cross-Origin Support**: Configured with **CORS** for API accessibility.

### Frontend (React, Zustand, React Router)
- **User Registration & Login**: Form handling powered by **React Hook Form**.
- **State Management**: Uses **Zustand** for lightweight global state management.
- **Responsive UI**: Built with **React & React Icons** for a smooth user experience.
- **Real-time Updates**: Utilizes **Socket.io Client** for instant message updates.
- **API Calls**: Managed with **Axios** for seamless backend communication.
- **Authentication Handling**: Uses **js-cookie** for handling JWT authentication cookies.

---
## Installation & Setup ⚙️

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/santanu0101/My_chatApp.git
cd My_chatApp
```

### **2️⃣ Backend Setup**
```sh
cd backend
npm install  # Install dependencies
npm start    # Start the backend server
```
> Backend runs on `http://localhost:5000`

### **3️⃣ Frontend Setup**
```sh
cd frontend
npm install  # Install dependencies
npm run dev  # Start the frontend development server
```
> Frontend runs on `http://localhost:3000`

---
## Project Dependencies 📦

### **Backend Packages**
| Package           | Description |
|------------------|-------------|
| `bcrypt` & `bcryptjs` | Hashing passwords securely |
| `chatapp`        | Local project dependency |
| `cookie-parser`  | Parses cookies for authentication |
| `cors`           | Enables Cross-Origin Resource Sharing |
| `dotenv`         | Loads environment variables from `.env` file |
| `express`        | Fast, minimalist web framework for Node.js |
| `jsonwebtoken`   | Handles JWT authentication |
| `mongodb`        | MongoDB driver for Node.js |
| `mongoose`       | ODM for MongoDB |
| `nodemon`        | Automatically restarts the server on file changes |
| `socket.io`      | Enables real-time, bidirectional communication |

### **Frontend Packages**
| Package           | Description |
|------------------|-------------|
| `axios`          | Handles API requests |
| `js-cookie`      | Manages cookies for authentication |
| `react` & `react-dom` | Core React libraries |
| `react-hook-form` | Handles form validation and submission |
| `react-icons`    | Provides scalable vector icons |
| `react-router-dom` | Enables client-side routing |
| `socket.io-client` | Connects to Socket.io backend |
| `zustand`        | Lightweight state management |

---
## Environment Variables 🌍
Create a `.env` file in the `backend` directory and define the following:
```sh
ACCESS_TOKEN_SECRET=your_secret_key_here
MONGO_URI=your_mongodb_connection_string
```

---
## Usage 🏆
1. **Register/Login** to the application.
2. **Join a chat room** and start messaging in real-time.
3. **Receive instant updates** when messages are sent.

---
## Contributing 💡
Feel free to fork this project, improve it, and submit a pull request. Any contributions are welcome!

---
## Contact 📬
For any queries, feel free to reach out at **[Email or GitHub](https://github.com/santanu0101)**.

Thank you! 🚀🎉

