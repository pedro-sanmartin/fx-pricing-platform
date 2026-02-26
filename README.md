# 💱 FX Pricing Platform

Plataforma fullstack de conversión y consulta de divisas desarrollada con **Vue.js (Nuxt 2)** y **Node.js (Express)**. Permite visualizar tasas de cambio en tiempo real, realizar conversiones y almacenar suscripciones de usuarios.

Proyecto enfocado en demostrar habilidades Full Stack modernas orientadas a productos financieros y plataformas SaaS.

Este proyecto demuestra arquitectura frontend/backend desacoplada, consumo de APIs, manejo de variables de entorno y despliegue en la nube.

---

## 🖼️ Preview

![FX Pricing Platform](./assets-source/screenshot-app.png)

## 🌐 Demo

| Componente   | URL                                                                 |
|-------------|---------------------------------------------------------------------|
| **Frontend** | [Ver demo](https://global66-technical-test.vercel.app/precio/peso-chileno) |
| **Backend API** | *(Actualmente en redeploy)*                                         |

---

## 🧠 Stack Tecnológico

### Frontend

- Vue.js + Nuxt 2
- JavaScript
- Axios
- CSS

### Backend

- Node.js
- Express.js
- Integración con Google Sheets API
- Railway (deploy)

### Deploy

- Frontend: Vercel
- Backend: Railway
- Control de versiones: Git + GitHub

---

## 📁 Estructura del proyecto

```
fx-pricing-platform/
├── frontend/   → Aplicación Vue/Nuxt
└── backend/    → API Node/Express
```

Cada carpeta contiene su propio README con instrucciones detalladas.

---

## 🏗️ Arquitectura

Aplicación fullstack desacoplada:

- Frontend SSR con Nuxt 2 consumiendo API REST
- Backend Node.js + Express con integración externa
- Persistencia en Google Sheets como datastore ligero
- Deploy independiente frontend/backend

## ⚙️ Instalación local

### Clonar repositorio

```bash
git clone https://github.com/pedro-sanmartin/fx-pricing-platform.git
cd fx-pricing-platform
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Variables de entorno

El backend requiere variables de entorno para:

- Google Sheets API
- Configuración del servidor
- Keys privadas

**Configuración:**

1. Crear archivo `.env` en la carpeta `backend`
2. Usar como referencia el archivo `.env.example`

---

## 🧩 Funcionalidades principales

- Consulta de tasas de cambio en tiempo real
- Conversión de monedas
- API REST propia
- Suscripción de usuarios
- Persistencia en Google Sheets
- Arquitectura frontend/backend desacoplada
- Deploy en la nube (Vercel + Railway)

---

## 👨‍💻 Autor

**Pedro San Martín**  
Frontend & Full Stack Developer — Chile

- [GitHub](https://github.com/pedro-sanmartin)

---

## ⚖️ Licencia

Este proyecto está bajo una licencia personalizada de **«Uso para Evaluación»**. [Consulta los detalles aquí](LICENSE).
