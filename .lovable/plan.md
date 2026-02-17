
## Fix: Sofia auto-open should only trigger once per session

### Problem
The auto-open `useEffect` (line 172-184) includes `isOpen` in its dependency array. When the user closes the chat (`isOpen` goes to `false`), the effect re-runs and starts a new 30-second timer, causing Sofia to reopen indefinitely every 30 seconds.

### Solution
Use `sessionStorage` to track whether the auto-open has already fired during the current browser session. Once triggered, it won't fire again until the user opens a new tab or session.

### Technical Details

**File: `src/components/SofiaChatNew.tsx`**

1. Add a `sessionStorage` flag (`sofia_auto_opened`) that is set to `true` after the first auto-open.
2. Check this flag at the start of the auto-open effect -- if already set, skip the timer entirely.
3. Remove `isOpen` from the dependency array since it's no longer needed for re-evaluation (the sessionStorage flag handles the "only once" logic).

```typescript
// Auto-open Sofia chat after 30 seconds on homepage (once per session)
useEffect(() => {
  const isHomePage = location.pathname === '/es' || location.pathname === '/en';
  const alreadyOpened = sessionStorage.getItem('sofia_auto_opened');
  if (!isHomePage || !shouldRender || isOpen || alreadyOpened) return;

  const timer = setTimeout(() => {
    setIsOpen(true);
    setIsMinimized(false);
    setShowHelpBubble(false);
    sessionStorage.setItem('sofia_auto_opened', 'true');
  }, 30000);

  return () => clearTimeout(timer);
}, [location.pathname, shouldRender, isOpen]);
```

This ensures the auto-open fires only once after 30 seconds on the first visit to the homepage, and does not repeat during the same browser session.
