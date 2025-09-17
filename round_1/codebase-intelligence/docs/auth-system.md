## Authentication System

This document describes the authentication flow, core components, API endpoints, and security considerations for the demo app under `codebase-intelligence/src/`.

### Components and responsibilities
- **`services/authService.js`**: Implements `register` and `login`. Handles input validation, password hashing/verification, user creation/lookup, and JWT issuance. Triggers welcome email and billing side-effects.
- **`services/tokenService.js`**: Issues and verifies JSON Web Tokens (JWTs) using `jsonwebtoken`. Access tokens expire after 15 minutes.
- **`middleware/requireAuth.js`**: Express middleware that enforces a Bearer token in the `Authorization` header, verifies it, and attaches the decoded payload to `req.auth`.
- **`models/userModel.js`**: In-memory user store with helpers to create users, find by email, and get by id.
- **`routes/apiRoutes.js`**: Express routes for `/register`, `/login`, and `/me` (protected).

### Data model and tokens
- **User fields**: `id`, `email`, `passwordHash`, `salt`, `createdAt`.
- **JWT payload**: `{ sub: user.id, email: user.email }`.
- **Token TTL**: 15 minutes (configured in `tokenService.js`).
- **Secret**: `process.env.JWT_SECRET` or default `'dev-secret-change-me'` (demo only).

### Registration flow (`POST /register`)
1. Validate `email` and `password` are provided; enforce `password.length >= 8`.
2. Ensure the email is not already registered using `findByEmail`.
3. Hash the password using HMAC-SHA256 with a per-user random salt.
4. Persist the user via `createUser` (in-memory in this demo).
5. Fire-and-forget side-effects: send welcome email and create billing customer.
6. Issue a 15-minute access token and return `{ user: { id, email, createdAt }, token }`.

### Login flow (`POST /login`)
1. Validate `email` and `password`.
2. Look up the user with `findByEmail`.
3. Recompute HMAC-SHA256 with the stored salt and compare to `passwordHash`.
4. On success, issue a 15-minute access token and return `{ user, token }`.

### Auth middleware and protected routes
- `requireAuth` expects `Authorization: Bearer <token>`.
- Verifies the token using `verifyAccessToken` and assigns the decoded payload to `req.auth`.
- Example: `/me` uses `requireAuth`, then resolves the user by `req.auth.sub` and returns public fields.

### API reference
- **POST `/register`**
  - **Body**: `{ "email": string, "password": string }`
  - **Success 200**:
    ```json
    { "ok": true, "user": { "id": "1", "email": "a@b.com", "createdAt": "..." }, "token": "<jwt>" }
    ```
  - **Error 400**: `{ "ok": false, "error": string }`

- **POST `/login`**
  - **Body**: `{ "email": string, "password": string }`
  - **Success 200**:
    ```json
    { "ok": true, "user": { "id": "1", "email": "a@b.com", "createdAt": "..." }, "token": "<jwt>" }
    ```
  - **Error 400**: `{ "ok": false, "error": string }`

- **GET `/me`**
  - **Headers**: `Authorization: Bearer <token>`
  - **Success 200**:
    ```json
    { "ok": true, "user": { "id": "1", "email": "a@b.com", "createdAt": "..." } }
    ```
  - **Errors 401/404**: `{ "ok": false, "error": string }`

### Example requests
```bash
curl -sX POST http://localhost:3000/api/register \
  -H 'Content-Type: application/json' \
  -d '{"email":"ada@example.com","password":"correcthorsebatterystaple"}'

curl -sX POST http://localhost:3000/api/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"ada@example.com","password":"correcthorsebatterystaple"}'

curl -s http://localhost:3000/api/me \
  -H 'Authorization: Bearer <jwt-from-login>'
```

### Security considerations (current state)
- Passwords are hashed with HMAC-SHA256 + salt (not a dedicated password hashing KDF).
- `JWT_SECRET` falls back to a hardcoded default in development.
- No rate limiting, lockout, or CAPTCHA on auth endpoints.
- Registration reveals if an email is already registered (enumeration risk).
- No email verification before issuing access tokens.
- No refresh tokens or revocation/blacklist; tokens are valid until expiry.
- In-memory user store (not durable, not suitable for production).

### Recommendations (hardening for production)
- Use Argon2id (or bcrypt/scrypt) with per-user salt and constant-time comparisons; consider a server-side pepper.
- Enforce stronger password policy and breached-password checks; add rate limiting and temporary lockouts.
- Require email verification before granting full access or sensitive actions.
- Provide generic error messages for register/login to limit enumeration.
- Strengthen JWT handling: strong env-provided secret, algorithm restrictions, `iss`/`aud`, `jti`, refresh tokens, and revocation/rotation strategy.
- Add audit logging, monitoring/alerts, and persistent storage with migrations and backups.

