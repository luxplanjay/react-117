# Заняття 13 - Маршрутизація

- Сторінка 404
- Вкладені layout
- Універсальні маршрути (catch-all routes)
- Паралельні маршрути (слоти)

```text
app/
├── inbox/
│   ├── layout.tsx
│   ├── @main/
│   │   └── default.tsx          ← контент
│   └── @sidebar/
│       ├── page.tsx          ← сайдбар
│       ├── filters/
│       │   └── page.tsx      ← фільтри
│       ├── folders/
│       │   └── page.tsx      ← шось якісь папки
│       └── settings/
│           └── page.tsx      ← налаштування

```
