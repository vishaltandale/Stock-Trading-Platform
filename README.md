# Stock Trading Platform

A full‑stack **stock trading platform** demo that includes:
- **Backend** (Node.js + Express) – user authentication, order handling, and MongoDB persistence.
- **Frontend** (React) – a modern UI for trading, holdings, and positions.
- **Dashboard** (React + MUI) – visual analytics with charts.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Apps](#running-the-apps)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Overview
The repository showcases a simple yet functional stock‑trading experience. Users can sign up, log in, view holdings, place orders, and see real‑time analytics on a dashboard.

---

## Features
- **User authentication** with JWT & secure cookie handling.
- **CRUD** APIs for holdings, positions, and orders.
- **Responsive React UI** for the trading interface.
- **Dashboard** with interactive charts (Chart.js).
- **CORS** configuration for multiple front‑ends.

---

## Tech Stack
| Layer | Technology |
|-------|------------|
| Backend | Node.js, Express, Mongoose, bcryptjs, jsonwebtoken |
| Frontend | React 19, React Router, Axios |
| Dashboard | React 18, Material‑UI (MUI), Chart.js |
| Database | MongoDB |
| Dev Tools | nodemon, dotenv |

---

## Getting Started
### Prerequisites
- **Node.js** (v20 or later)
- **npm** (comes with Node)
- **MongoDB** instance (local or cloud, provide `MONGO_URL` in `.env`)

### Installation
```bash
# Clone the repository
git clone https://github.com/vishaltandale/Stock-Trading-Platform.git
cd Stock-Trading-Platform

# Backend setup
cd backend
cp .env.example .env   # edit with your MongoDB URL & PORT
npm install

# Frontend setup
cd ../frontend
cp .env.example .env   # (optional) edit if needed
npm install

# Dashboard setup
cd ../dashboard
cp .env.example .env   # (optional)
npm install
```

### Running the Apps
```bash
# In three separate terminals:
# 1️⃣ Backend API
cd backend
npm run dev   # starts on PORT (default 3002)

# 2️⃣ Frontend UI
cd ../frontend
npm start   # http://localhost:3000

# 3️⃣ Dashboard UI
cd ../dashboard
npm start   # http://localhost:3001
```
The apps will communicate via the configured CORS origins.

---

## Project Structure
```
Stock-Trading-Platform/
├─ backend/          # Express server, models, routes
│   ├─ model/        # Mongoose schemas (User, Holdings, Positions, Orders)
│   ├─ util/         # auth helpers
│   └─ index.js      # entry point
├─ frontend/         # React trading UI
│   └─ src/...       # components, pages, services
├─ dashboard/        # React + MUI analytics UI
│   └─ src/...       # chart components, reducers
├─ .gitignore
├─ README.md         # <-- this file
└─ LICENSE
```

---

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes
4. Push and open a PR

---

## License
This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
