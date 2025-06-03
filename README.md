<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Teslo API

A RESTful API for managing products, users, authentication, file uploads, and real-time messaging, built with [NestJS](https://nestjs.com/).

## Features

- User registration and authentication (JWT)
- Role-based access control (admin, super-user, user)
- Product CRUD with pagination and filtering
- File upload and static file serving
- Database seeding with initial data
- WebSocket real-time messaging
- Swagger API documentation

## Getting Started

### Installation

1. **Clone the repository**

2. **Install dependencies**
   ```sh
   yarn install
   # or
   npm install
   ```

3. **Setup environment variables**
   - Copy `.env.template` to `.env` and fill in the required values.

4. **Start the database with Docker**
   ```sh
   docker-compose up -d
   ```

5. **Start the development server**
   ```sh
   yarn start:dev
   # or
   npm run start:dev
   ```

6. **Seed the database**
   - Visit [http://localhost:3000/api/seed](http://localhost:3000/api/seed) in your browser or use a tool like Postman.

7. **Access API documentation**
   - Visit [http://localhost:3000/api](http://localhost:3000/api) for Swagger docs.

## Project Structure

- `src/` - Main source code
  - `auth/` - Authentication and user management
  - `products/` - Product CRUD and related logic
  - `files/` - File upload and static file serving
  - `seed/` - Database seeding
  - `message-ws/` - WebSocket real-time messaging
  - `common/` - Shared modules and DTOs

## Scripts

- `yarn start:dev` - Start the server in development mode
- `yarn build` - Build the project
- `yarn test` - Run unit tests
- `yarn test:e2e` - Run end-to-end tests
- `docker-compose up -d` - Start the PostgreSQL database

## Environment Variables

See `.env.template` for all required variables:

```
DB_PASSWORD=
DB_NAME=
DB_HOST=
DB_PORT=
DB_USERNAME=
PORT=
HOST_API=
JWT_SECRET=
```