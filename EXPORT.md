# 🚀 Come Esportare il Template come Sito Statico

Il template è configurato per l'export statico! Ora puoi generare un sito completamente statico (HTML/CSS/JS) che funziona senza server.

## 📋 Comandi per l'Export

```bash
# Genera il sito statico
npm run export

# I file generati saranno nella cartella 'out/'
```

## 📁 Struttura Files Generati

Dopo `npm run export`, troverai:

```
out/
├── index.html              # Homepage Hello World
├── docs/
│   ├── index.html          # Hub documentazione  
│   ├── components/
│   │   └── index.html      # Pagina componenti
│   └── custom-components/
│       └── index.html      # Tutorial componenti
├── template/
│   └── index.html          # Template showcase
├── _next/                  # File CSS/JS ottimizzati
└── favicon.ico             # Icone e assets
```

## 🌐 Come Testare in Locale

### Opzione 1: Server Python
```bash
cd out
python3 -m http.server 8000
# Vai su http://localhost:8000
```

### Opzione 2: Server Node
```bash
cd out
npx serve .
# Segui l'URL mostrato
```

### Opzione 3: Live Server (VS Code)
1. Installa l'estensione "Live Server" in VS Code
2. Clicca destro su `out/index.html`
3. Seleziona "Open with Live Server"

## 🚀 Deploy su Hosting Statico

Il contenuto della cartella `out/` può essere caricato su:

### GitHub Pages
1. Carica i file in un repository GitHub
2. Vai su Settings → Pages
3. Seleziona la branch con i file
4. Il sito sarà disponibile su `username.github.io/repository-name`

### Netlify
1. Vai su [netlify.com](https://netlify.com)
2. Trascina la cartella `out/` sul sito
3. Il sito viene pubblicato automaticamente

### Vercel
```bash
# Installa Vercel CLI
npm i -g vercel

# Deploy della cartella out
cd out
vercel --prod
```

### Altri Provider
Carica il contenuto di `out/` su qualsiasi hosting statico:
- GitHub Pages
- GitLab Pages  
- AWS S3
- Firebase Hosting
- Surge.sh

## ✅ Cosa Funziona nell'Export

- ✅ **Homepage Hello World** (`/`)
- ✅ **Template showcase** (`/template`) 
- ✅ **Documentazione completa** (`/docs`)
- ✅ **Componenti e tutorial** (`/docs/components`, `/docs/custom-components`)
- ✅ **CSS Tailwind** completamente funzionante
- ✅ **Dark/Light mode** 
- ✅ **Responsive design**
- ✅ **Navigazione interna** tra le pagine

## ⚠️ Limitazioni Export Statico

- ❌ **No API Routes** - Solo contenuto statico
- ❌ **No Server-Side Rendering dinamico**
- ❌ **No funzioni serverless** di Next.js

## 🔧 Configurazione Export

Il template è preconfigurato in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: "export",        // Abilita export statico
  trailingSlash: true,     // URL con slash finale  
  images: {
    unoptimized: true,     // Immagini non ottimizzate
  },
};
```

## 🆘 Problemi Comuni

### Link non funzionano?
- Assicurati di usare un server HTTP locale (non aprire direttamente i file HTML)
- I link relativi funzionano solo con un server

### CSS non si carica?
- Controlla che il server serva i file dalla cartella `out/`
- Verifica che `_next/static/css/` sia accessibile

### 404 su sottopagine?
- Usa un server che supporta HTML5 History API
- Oppure configura il server per reindirizzare a `index.html`

## 🎉 Ora il Tuo Template è Pronto!

Il sito statico funziona perfettamente e può essere hostato ovunque senza bisogno di un server Node.js!