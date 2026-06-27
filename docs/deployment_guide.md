# Sahaayak AI Deployment Guide

This guide outlines the detailed steps to deploy the Sahaayak AI application to production using **Vercel** for the frontend and **Render** for the backend API.

---

## Architecture Design

```
┌─────────────────────────────────┐
│     Vercel Edge Network         │
│     (React / Vite Frontend)     │
└────────────────┬────────────────┘
                 │ (HTTPS / Secure WebSockets)
                 ▼
┌─────────────────────────────────┐
│           Render Cloud          │
│        (FastAPI Backend)        │
└────────┬───────┬───────┬────────┘
         │       │       │
         ▼       ▼       ▼
 ┌──────────┐ ┌──────────┐ ┌──────────┐
 │   Neon   │ │ Neo4j    │ │ Upstash  │
 │  Postgres│ │  Aura    │ │  Redis   │
 └──────────┘ └──────────┘ └──────────┘
```

---

## 1. Cloud Resources Setup

Before deploying the codebase, provision the following cloud instances:

### A. Neon Serverless PostgreSQL
1. Create a free database instance on [Neon.tech](https://neon.tech/).
2. Copy the Connection String, making sure to select the **`postgresql+asyncpg://`** dialect driver format for the backend:
   ```env
   postgresql+asyncpg://<user>:<password>@<host>/sahaayak_db?sslmode=require
   ```

### B. Neo4j Aura (Graph Database)
1. Create a free database instance on [Neo4j Aura Console](https://aura.neo4j.io/).
2. Keep the generated password and download the credentials file.
3. Note the URI (should start with `neo4j+s://` or `bolt+s://`).

### C. Upstash Redis
1. Provision a serverless Redis instance on [Upstash](https://upstash.com/).
2. Copy the connection URL (use the secure `rediss://` format):
   ```env
   rediss://default:<password>@<host>:<port>
   ```

---

## 2. Backend Deployment (Render)

Render runs the FastAPI application. We will use Render's native Python runtime.

### Steps:
1. Log in to [Render](https://render.com/) and click **New** -> **Web Service**.
2. Connect your Git repository.
3. Configure the following service settings:
   * **Name**: `sahaayak-backend`
   * **Language**: `Python 3`
   * **Branch**: `main`
   * **Root Directory**: `backend` *(Ensure this is pointing to your backend subdirectory)*
   * **Build Command**: 
     ```bash
     pip install -r requirements.txt && alembic upgrade head && python add_voice_cols.py
     ```
   * **Start Command**: 
     ```bash
     uvicorn app.main:app --host 0.0.0.0 --port $PORT
     ```
4. Click **Advanced** and add the following **Environment Variables**:

| Variable Name | Description / Example Value |
| :--- | :--- |
| `ENVIRONMENT` | `production` |
| `DATABASE_URL` | Your Neon PostgreSQL connection string (`postgresql+asyncpg://...`) |
| `REDIS_URL` | Your Upstash Redis connection string (`rediss://...`) |
| `NEO4J_URI` | Your Neo4j Aura connection URI (`neo4j+s://...`) |
| `NEO4J_USER` | `neo4j` |
| `NEO4J_PASSWORD` | Your Neo4j Aura instance password |
| `NVIDIA_API_KEY` | Your NVIDIA API key (e.g. `nvapi-...`) |
| `SECRET_KEY` | A random, secure token string (e.g., `openssl rand -hex 32` output) |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | `115200` |

5. Click **Create Web Service**. Render will install the dependencies, execute DB migrations, add required columns, and launch the service. Copy the generated service URL (e.g. `https://sahaayak-backend.onrender.com`).

---

## 3. Frontend Deployment (Vercel)

Vercel will host the TanStack Start frontend app.

### Steps:
1. Log in to [Vercel](https://vercel.com/) and click **Add New** -> **Project**.
2. Import the Git repository.
3. Configure the following project settings:
   * **Framework Preset**: Choose **Vite** or **Other**.
   * **Root Directory**: `frontend` *(Ensure this points to the frontend subdirectory)*
   * **Build Command**:
     ```bash
     npm run build
     ```
   * **Output Directory**: `.output/public`
4. Expand the **Environment Variables** section and add:
   * **`VITE_API_BASE_URL`**: Set this to the backend API URL on Render with `/api/v1` appended, for example:
     ```env
     https://sahaayak-backend.onrender.com/api/v1
     ```
   * **`NITRO_PRESET`**: Set this to **`vercel`** (or `vercel-edge`) to tell Nitro to build Vercel-compatible edge functions during build.
5. Click **Deploy**. Vercel will build the frontend assets, bundle edge handlers, and host the web application.

---

## 4. Verification

1. Access your deployed Vercel URL.
2. Register a new user and complete the onboarding step to verify database operations.
3. Open the **AI Mentor** or click the **AI Voice Companion** widget and send a message in a regional language to verify ASR, translation pipelines, and browser speech output work.
