src/
├── app/                         # Next.js App Router pages
│   ├── layout.tsx               # Root layout with <Navbar />, <Footer />
│   ├── page.tsx                 # Homepage
│   └── (routes)/                # Routes grouped for clarity
│       ├── products/
│       │   ├── page.tsx         # /products listing page
│       │   └── [id]/page.tsx    # /products/:id details page
│       ├── cart/
│       │   └── page.tsx
│       └── checkout/
│           └── page.tsx

├── components/                  # Reusable UI components
│   ├── common/                  # Generic reusable: Button, Input, Modal
│   ├── layout/                  # App layout: Navbar, Footer, Container
│   └── product/                 # ProductCard, ProductList, ProductImage

├── features/                    # Domain logic (optional for scaling)
│   ├── cart/                    # Cart logic, Zustand store, hooks
│   ├── products/                # Product helpers, filtering, transforms
│   └── auth/                    # Auth logic (Firebase later)

├── hooks/                       # Reusable custom React hooks
│   ├── useCart.ts               # Cart logic (add, remove, total)
│   └── useDebounce.ts           # Debouncing for search/filter

├── lib/                         # Utilities/helpers (formatters, API clients)
│   ├── formatCurrency.ts
│   └── classNames.ts

├── constants/                   # Static config (routes, sizes, categories)
│   ├── routes.ts
│   └── productCategories.ts

├── types/                       # Global TypeScript types/interfaces
│   ├── product.ts
│   └── cart.ts

├── styles/                      # Additional styles (optional)
│   └── animations.css           # e.g., loading skeleton animation

└── public/                      # Static assets (images, icons)
