import { useEffect } from 'react';

export default function PublicDocs() {
  useEffect(() => {
    // Load Docsie CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://lib.docsie.io/current/styles/docsie.css';
    document.head.appendChild(link);

    // Load Docsie script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://lib.docsie.io/current/service.js';
    script.setAttribute('data-docsie', 'docsie_pk_key:deployment_EFk3AIigMh599HRk6');
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (link.parentNode) link.parentNode.removeChild(link);
      if (script.parentNode) script.parentNode.removeChild(script);

      // Clear Docsie container
      const container = document.querySelector('[data-ddsroot]');
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <>
      {/* Docsie will render here */}
      <div data-ddsroot></div>
    </>
  );
}
