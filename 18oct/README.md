| Position   | Stays in flow?       | Relative to                 | Moves on scroll?  | Typical Use Case                 |
| ---------- | -------------------- | --------------------------- | ----------------- | -------------------------------- |
| `static`   | ✅ Yes                | Normal flow                 | ✅ Yes             | Default behavior                 |
| `relative` | ✅ Yes                | Its original position       | ✅ Yes             | Small adjustments                |
| `absolute` | ❌ No                 | Nearest positioned ancestor | ✅ Yes             | Modals, dropdowns, tooltips      |
| `fixed`    | ❌ No                 | Viewport                    | ❌ No              | Sticky headers, floating buttons |
| `sticky`   | ✅ Yes (until sticky) | Scroll container            | ❌ No (when stuck) | Sticky navbars                   |
