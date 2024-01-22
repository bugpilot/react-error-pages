# Error Pages for React & Next.js

## Installation

```bash
pnpm add @bugpilot/react-error-pages
```

## Usage in Next.js

In `app/error.tsx` and `app/**/error.tsx`:

```jsx
"use client";

import "@bugpilot/react-error-pages/dist/index.css";
import { BasicErrorPage } from "@bugpilot/react-error-pages";

export default BasicErrorPage;
```

In `app/global-error.tsx`:

```tsx
"use client";

import { Bugpilot } from "@bugpilot/plugin-nextjs";
import { BasicErrorPage } from "@bugpilot/react-error-pages";

export default function GlobalErrorPage({
  children,
  ...props
}: React.PropsWithChildren<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  // Global Error also catch root layout errors
  // so we need to render the html and body tags here
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Application Error</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          height: "100vh",
          width: "100vw",
          fontFamily: "sans-serif",
        }}
      >
        <BasicErrorPage {...props}>{children}</BasicErrorPage>
        {/* This is optional, but it will allow you to see the error in Bugpilot: */}
        <Bugpilot workspaceId="YOUR_BUGPILOT_WORKSPACE_ID_HERE" />
      </body>
    </html>
  );
}
```

## Usage in React

Wrap your components with an Error Boundary, and render an error page component in the `renderError` method.

## License

MIT
