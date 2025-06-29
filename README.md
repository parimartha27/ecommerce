<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo"/>
  </a>
</p>

<h1 align="center">🔧 RentHub Backend API – Built with NestJS 🧠</h1>

<p align="center">
  <strong>A modular, scalable backend system for a rental marketplace website</strong> built with ❤️ using <a href="https://nestjs.com/" target="_blank">NestJS</a> and <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NestJS Version" />
  </a>
  <a href="https://github.com/parimartha27" target="_blank">
    <img src="https://img.shields.io/badge/Author-parimartha27-blue.svg" alt="Author" />
  </a>
  <a href="https://www.postgresql.org/" target="_blank">
    <img src="https://img.shields.io/badge/Database-PostgreSQL-blue" alt="Database" />
  </a>
  <a href="https://github.com/parimartha27/renthub-backend" target="_blank">
    <img src="https://img.shields.io/github/repo-size/parimartha27/renthub-backend?color=green" alt="Repo Size" />
  </a>
</p>

---

## 📦 About This Project

This is the **backend** for a rental marketplace platform that enables users to rent and manage various goods with ease. It's part of my journey to learn **NestJS** and back-end architecture using **TypeScript** in a real-world scenario. The project also integrates **TypeORM**, **PostgreSQL**, **DTOs**, and **environment-based configuration**.

> ✅ Built by [@parimartha27](https://github.com/parimartha27) as part of a full-stack learning experience.

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
pnpm install

# Development
pnpm run start:dev

# Production build
pnpm run start:prod

# Unit tests
pnpm run test

# End-to-end tests
pnpm run test:e2e

# Coverage
pnpm run test:cov


```

🛠️ Tech Stack
⚙️ NestJS – Progressive Node.js framework

🐘 PostgreSQL – Open-source SQL database

🧱 TypeORM – ORM for database management

🎯 TypeScript – Modern JavaScript with types

🧪 Jest – Testing framework

🧩 Modular Architecture – Scalable and maintainable codebase

src/
├── config/ # Database and env configuration
├── users/ # User module
├── entity/ # TypeORM entities
├── dto/ # Request/response DTOs
├── interceptors/ # Global interceptors
└── app.module.ts # Root module

📦 Deployment
If you want to deploy this to the cloud (like Vercel, Railway, or Render), make sure to:

✅ Add environment variables in a .env file or platform config

✅ Ensure your main.ts uses a proper adapter (e.g. FastifyAdapter for better performance)

✅ Update production scripts

Check the official deployment docs for more tips.

📚 Learning Resources
📘 NestJS Documentation

🧪 NestJS Courses

💬 NestJS Discord Community

🔎 DevTools

🚀 Mau Deploy on AWS

🤝 Connect
👤 Author: @parimartha27

📬 Feel free to submit issues, discussions, or contribute!

📄 License
NestJS is MIT licensed.
This project is open-source and free to explore, modify, and contribute.
