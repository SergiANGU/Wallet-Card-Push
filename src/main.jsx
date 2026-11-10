import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { I18nProvider, LANGS, langFromPath, pageFromPath, getSavedLang, browserLang, applyDocumentMeta } from './i18n/index.jsx';
import './styles/tokens.css';
import './styles/base.css';
import './styles/landing.css';

const { pathname, hash } = window.location;
const lang = langFromPath(pathname);
const page = pageFromPath(pathname);

// En la portada (/) enviamos al idioma guardado o, la primera vez, al del navegador.
const preferred = pathname === '/' ? getSavedLang() || browserLang() : null;

if (preferred && preferred !== 'es') {
  window.location.replace(LANGS[preferred].path + hash);
} else {
  applyDocumentMeta(lang, page);
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <I18nProvider lang={lang} page={page}>
        <App />
      </I18nProvider>
    </React.StrictMode>
  );
}
