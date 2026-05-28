# Musynx
### MPOP Reverse II [Ryann Kim Sesgundo]

---

## Introduction
> Musynx is a project for mastery in using of web sockets and queuing, as well as to try another framework (Vue.js).

## Version
Current Version: **0.0.1**

## Tech Stack

### Frontend
- **Framework:** Vue.js 3 (Composition API)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript

### Backend
- **Framework:** Node.js + Express 5
- **Real-time Communication:** WebSockets (ws)
- **Language:** TypeScript

## File Structure

```
.
├── backend/                # Node.js backend
│   ├── src/
│   │   ├── index.ts        # Main server entry point
│   │   └── websocket.ts    # WebSocket connection management
│   └── package.json
└── frontend/               # Vue.js frontend
    ├── public/             # Static public assets
    ├── src/
    │   ├── assets/         # Images and icons
    │   ├── layout/         # Layout components
    │   ├── widget/         # Reusable widgets (player, list components)
    │   ├── App.vue         # Root Vue component
    │   └── main.ts         # Application entry point
    ├── index.html          # HTML template
    ├── package.json
    └── tsconfig.json
```
