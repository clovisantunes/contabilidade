src/
│
├── assets/                  # Static files (images, icons, fonts, etc.)
│   ├── images/
│   ├── fonts/
│   └── styles/
│       ├── global.css       # Global styles
│       └── theme.css        # Theme styles (if needed)
│
├── components/              # Reusable components
│   ├── Navbar/
│   │   ├── utils/
│   │   │   └── informations.json
│   │   ├── Navbar.tsx
│   │   └── styles.module.css
│   ├── Footer/
│   │   ├── utils/
│   │   │   └── informations.json
│   │   ├── Footer.tsx
│   │   └── styles.module.css
│   ├── Button/
│   │   ├── utils/
│   │   │   └── informations.json
│   │   ├── Button.tsx
│   │   └── styles.module.css
│   └── ...                  # Outros componentes
│
├── pages/                   # Site pages
│   ├── Home/
│   │   ├── utils/
│   │   │   └── informations.json
│   │   ├── Home.tsx
│   │   └── styles.module.css
│   ├── Services/
│   │   ├── utils/
│   │   │   └── informations.json
│   │   ├── Services.tsx
│   │   └── styles.module.css
│   ├── About/
│   │   ├── utils/
│   │   │   └── informations.json
│   │   ├── About.tsx
│   │   └── styles.module.css
│   └── ...                  # Outras páginas
│
├── hooks/                   # Custom hooks
│   ├── useFetchData.ts
│   └── useWindowSize.ts
│
├── context/                 # React contexts (if needed)
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
│
├── utils/                   # Utilities and helper functions
│   ├── helpers/             # Helper functions
│   │   └── formatCurrency.ts
│   └── constants/           # Constants and texts
│       ├── utils.json       # JSON file with dynamic texts
│       └── routes.ts        # Route constants
│
├── App.tsx                  # Main app component
├── main.tsx                 # App entry point
└── routes/                  # Route configuration
    ├── Routes.tsx
    └── PrivateRoute.tsx     # Private route (if needed)