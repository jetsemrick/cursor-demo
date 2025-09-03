## Bug Bot Intelligence Demo: AI-Powered Debugging That Actually Works

### What You'll Show
- React app with a staged runtime error (API integration failure)
- Express server with the correct endpoint at `/api/v2/users`
- Console shows a cryptic error: `TypeError: Cannot read property 'data' of undefined`

### Run
```bash
cd "bug-bot-demo"
npm run install:all
npm run dev
# Open http://localhost:5173 and open devtools console
```

### 2-Minute Presentation Script
1) Show the problem (20s)
- Click the page to trigger fetch; show the console error

2) Bug Bot activates (25s)
- Point out automatic detection from stack trace and "Fix with AI" popup

3) Intelligent diagnosis (60s)
- Explains root cause: endpoint changed `/api/users` → `/api/v2/users`
- Notes missing robust error handling
- Recommends: update endpoint + add try/catch + friendly UX + loading states

4) One‑click comprehensive fix (30s)
- Accept fix; watch code update and error disappear

5) Validate (5s)
- Reload page; users list renders

### Key Message
"Bug Bot doesn't just fix syntax errors — it understands your application and suggests architectural improvements."


