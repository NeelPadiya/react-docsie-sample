# Embed Docsie Documentation in React Apps

Simple React example showing how to integrate Docsie documentation, secured docs with JWT, and in-app help widgets. Built with Vite and React Router.

[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-purple)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## Quick Start

Clone and run:

```bash
git clone https://github.com/PhilippeTrounev/react-docsie-sample.git
cd react-docsie-sample
npm install
npm run dev
```

Open http://localhost:5173

## Features

Three complete examples included:

1. **Public Documentation** (`/`) - Embed documentation without authentication
2. **Secured Documentation** (`/secure`) - JWT-authenticated access with fallback login
3. **In-App Help** (`/inapp-help`) - Interactive help widget with search and tours

## Public Documentation Integration

**src/pages/PublicDocs.jsx:**
```jsx
import { useEffect } from 'react';

export default function PublicDocs() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://lib.docsie.io/current/styles/docsie.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://lib.docsie.io/current/service.js';
    script.setAttribute('data-docsie', 'docsie_pk_key:deployment_YOUR_ID');
    document.body.appendChild(script);

    return () => {
      if (link.parentNode) link.parentNode.removeChild(link);
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return <div data-ddsroot></div>;
}
```

## JWT Authentication for Secured Docs

Generate JWT tokens on your backend (Node.js example):

```javascript
import jwt from 'jsonwebtoken';

app.get('/api/docsie-token', (req, res) => {
  const token = jwt.sign(
    {},
    process.env.DOCSIE_MASTER_KEY,
    { algorithm: 'HS256', expiresIn: '1h' }
  );
  res.json({ token });
});
```

Then use in React:

```jsx
const response = await fetch('/api/docsie-token');
const { token } = await response.json();

script.setAttribute('data-docsie',
  `docsie_pk_key:deployment_ID,authorizationToken:${token}`
);
```

## In-App Help Widget

Add contextual help to your React application:

```jsx
useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://lib.docsie.io/inapp/current/service.js';
  script.setAttribute('data-docsie-inapp',
    'deploykey:help_center_ID,selfInit:true,search:true,tours:true'
  );
  document.body.appendChild(script);

  return () => {
    if (script.parentNode) script.parentNode.removeChild(script);
  };
}, []);
```

Features:
- Contextual search within your app
- Knowledge base access
- Smart tagging for relevant content
- Interactive onboarding tours
- Multi-language support

## Project Structure

```
src/
├── pages/
│   ├── PublicDocs.jsx      # Public documentation
│   ├── SecureDocs.jsx      # JWT-secured documentation
│   └── InAppHelp.jsx       # In-app help widget
├── App.jsx                 # Router and navigation
└── App.css                 # Styling
```

## Use Cases

### Product Documentation
Embed product documentation directly in your React app. Users get contextual help without leaving your application. Supports versioning to match your software releases.

### API Documentation
Create interactive API documentation portals. Include code examples, request/response samples, and authentication guides. Version your API docs alongside your API releases.

### Knowledge Base
Build self-service knowledge bases for customer support. Reduce support tickets by providing searchable documentation. Track which articles users read most.

### In-App Help System
Add contextual help tooltips and guides within your application. Improve user onboarding and feature discovery. Update help content without redeploying your app.

### Technical Documentation
Host developer documentation, architecture guides, and internal wikis. Keep technical docs version-controlled and synced with your codebase.

### Customer Portal Documentation
Build customer-facing help centers within your SaaS application. Secure documentation per customer using multi-tenant authentication. Brand documentation to match your company style.

## Requirements

- Node.js 18+
- React 18+
- Modern web browser
- Docsie account

## Troubleshooting

**Documentation not loading?**
- Check browser console for errors
- Verify deployment ID is correct
- Ensure script URL is `service.js` not `styles.js`

**JWT authentication failing?**
- Verify master key matches your deployment
- Check token hasn't expired (1 hour default)
- Validate token format at [jwt.io](https://jwt.io)

**In-app help not appearing?**
- Check that help center ID is correct
- Verify script loaded without errors
- Ensure no conflicting z-index CSS

## Related Examples

- [Blazor WebAssembly](https://github.com/PhilippeTrounev/blazor-wasm-docsie-sample) - Client-side Blazor
- [Razor Pages](https://github.com/PhilippeTrounev/razor-pages-docsie-sample) - ASP.NET server-side
- Vue.js integration (coming soon)
- Next.js integration (coming soon)
- Angular integration (coming soon)

## Support

- Discord: https://discord.gg/rptfXQnq
- Email: hello@docsie.io
- Issues: [GitHub Issues](https://github.com/PhilippeTrounev/react-docsie-sample/issues)

## License

MIT
