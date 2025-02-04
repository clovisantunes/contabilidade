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
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.css
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.css
│   └── ...                  # Other components
│
├── pages/                   # Site pages
│   ├── Home/
│   │   ├── Home.tsx
│   │   └── Home.css
│   ├── Services/
│   │   ├── Services.tsx
│   │   └── Services.css
│   ├── About/
│   │   ├── About.tsx
│   │   └── About.css
│   └── ...                  # Other pages
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