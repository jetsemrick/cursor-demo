## Codebase Intelligence Demo: AI That Understands Your Entire Project

### What You'll Show
- Medium-sized project with an authentication flow across several files
- Complex business logic spanning multiple services (email, billing)

### Structure
```
codebase-intelligence/
├── src/
│   ├── app.js
│   ├── models/
│   │   └── userModel.js
│   ├── services/
│   │   ├── authService.js
│   │   ├── tokenService.js
│   │   ├── emailService.js
│   │   └── billingService.js
│   ├── middleware/
│   │   └── requireAuth.js
│   └── routes/
│       └── apiRoutes.js
├── docs/
│   └── auth-system.md
└── package.json
```

### 2-Minute Presentation Script

1) Ask a complex question (20s)
- In chat, reference files to provide context:
  - `@authService` `@userModel` `@apiRoutes`
- Ask: "How does user authentication work in this system and what are potential security issues?"

2) Watch comprehensive analysis (60s)
- Cursor should explain:
  - Complete authentication flow: register → password hashing → JWT issuance → middleware validation → protected routes
  - How services interact: `authService` uses `userModel`, `tokenService`, `emailService`/`billingService`
  - Potential security vulnerabilities: token TTL/rotation, dev secret, password policy, brute force, missing audit logs
  - Suggested improvements: env secrets, refresh tokens, rate limiting, secure cookies, CSRF strategy

3) Follow-up magic (30s)
- Ask: "Generate documentation for this authentication system" (it should populate `docs/auth-system.md`).

4) Visual context bonus (10s)
- Drag an image of a login UI into chat and ask: "How would this UI mockup integrate with our auth system?"

### Key Message
"It's like having a senior architect who knows your entire codebase."

### Key Takeaways
- 🔍 Project-wide intelligence across multiple services
- 📚 Institutional knowledge preserved and instantly accessible
- 🚀 Accelerates onboarding for new engineers
- 🛡️ Security-aware analysis and improvement suggestions
- 🎯 Perfect for Adobe's complex domain expertise across Creative and Experience Cloud

### Run (optional)
```bash
cd codebase-intelligence
npm install
npm run dev
# POST /api/register, /api/login; GET /api/me (requires Authorization: Bearer <token>)
```


