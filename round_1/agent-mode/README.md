## Agent Mode Demo: Refactor React Class to Hooks + TypeScript

### Structure
```
demo-project/
├── components/
│   └── UserProfile.tsx          # Modern functional component (converted from class)
├── services/
│   └── userService.js           # API calls
├── types/
│   └── user.ts                  # Type definitions
└── tests/
    └── UserProfile.test.js      # Component tests
```

### 2-Minute Flow

1) Show the problem (15s)
- Open `components/UserProfile.tsx` and say: "This was modernized from a legacy class component."

2) One simple command (15s)
- Select the component in the file tree, press Cmd+K, run: "Convert to hooks and add TypeScript".

3) Watch the magic (75s)
- Agent automatically:
  - Converts class to functional component using hooks
  - Renames `UserProfile.jsx` to `UserProfile.tsx`
  - Adds proper TypeScript types from `types/user.ts`
  - Updates `services/userService.js` to use types (or `userService.ts`)
  - Fixes the test in `tests/UserProfile.test.js` to import `.tsx`
  - Updates imports across files

4) Wow moment (15s)
- "That's 4 files updated perfectly in ~90 seconds."

### Key Message
**Describe intent, AI executes — development at the speed of thought.**

### Notes for Presenter
- No need to run anything; this is a code refactor demo.
- Keep the focus on multi-file changes: component, service, types, and tests.


