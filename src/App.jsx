import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PublicDocs from './pages/PublicDocs';
import SecureDocs from './pages/SecureDocs';
import InAppHelp from './pages/InAppHelp';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="nav-brand">
            <h2>Docsie React Examples</h2>
          </div>
          <div className="nav-links">
            <Link to="/">Public Docs</Link>
            <Link to="/secure">Secure Docs</Link>
            <Link to="/inapp-help">In-App Help</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<PublicDocs />} />
            <Route path="/secure" element={<SecureDocs />} />
            <Route path="/inapp-help" element={<InAppHelp />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>
            Docsie Integration Examples for React |{' '}
            <a href="https://discord.gg/rptfXQnq" target="_blank" rel="noopener noreferrer">Discord</a> |{' '}
            <a href="mailto:hello@docsie.io">hello@docsie.io</a>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
