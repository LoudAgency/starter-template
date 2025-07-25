# 🚀 Deploy Automatico su GitHub Pages

Il template è **preconfigurato** per il deploy automatico su GitHub Pages! Ogni volta che fai push, il sito si aggiorna automaticamente.

## 📋 Setup Iniziale (Una Volta Sola)

### 1. **Crea Repository su GitHub**
```bash
# Se non hai ancora un repository:
# 1. Vai su github.com
# 2. Clicca "New repository"  
# 3. Inserisci nome (es: "mio-sito")
# 4. Seleziona "Public"
# 5. Clicca "Create repository"
```

### 2. **Collega il Progetto Locale**
```bash
# Nella cartella del tuo progetto:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/TUO-REPOSITORY.git
git push -u origin main
```

### 3. **Attiva GitHub Pages**
1. Vai sul tuo repository GitHub
2. Clicca su **Settings** (in alto a destra)
3. Scorri fino a **Pages** (nel menu laterale)
4. In **Source** seleziona: **GitHub Actions**
5. Salva le impostazioni

## ✨ Deploy Automatico

Una volta fatto il setup, **è tutto automatico**:

```bash
# Qualsiasi modifica al codice:
git add .
git commit -m "Aggiornamento sito"
git push

# 🎉 Il sito si aggiorna automaticamente!
# Vai su: https://TUO-USERNAME.github.io/TUO-REPOSITORY
```

## 🔧 Come Funziona il Sistema

### GitHub Actions Workflow
Il file `.github/workflows/deploy.yml` fa tutto automaticamente:

1. **📥 Scarica il codice** dal repository
2. **⚙️ Installa Node.js** e le dipendenze  
3. **🔨 Fa il build** con `npm run export`
4. **🚀 Pubblica** il sito su GitHub Pages

### Configurazione Automatica
Il `next.config.ts` rileva automaticamente:
- Se è in ambiente GitHub Actions
- Il nome del repository
- Configura basePath e assetPrefix automaticamente

## 🌐 URL del Tuo Sito

Dopo il primo deploy, il sito sarà disponibile su:
```
https://TUO-USERNAME.github.io/TUO-REPOSITORY
```

**Esempio:**
- Username: `fabiopantano`  
- Repository: `starter-template`
- URL: `https://fabiopantano.github.io/starter-template`

## 📊 Monitorare il Deploy

### Controllo Stato Deploy
1. Vai su **Actions** nel tuo repository
2. Vedi tutti i deploy in corso/completati
3. Clicca su un deploy per vedere i dettagli

### Tempi di Deploy
- ⏱️ **Build**: ~2-3 minuti
- 🌐 **Pubblicazione**: ~1 minuto  
- 🎉 **Totale**: ~5 minuti

## 🆘 Risoluzione Problemi

### ❌ Deploy Fallisce?

**1. Controlla il log degli errori:**
- Vai su Actions → Clicca sul deploy fallito
- Leggi i messaggi di errore

**2. Errori comuni:**
```bash
# Errore: dipendenze mancanti
npm ci  # Risolve problemi di dipendenze

# Errore: TypeScript
npm run lint  # Trova errori TypeScript

# Errore: build fallisce
npm run export  # Testa in locale
```

### ❌ Sito Non Si Carica?

**1. Verifica GitHub Pages:**
- Settings → Pages → Source deve essere "GitHub Actions"

**2. Controlla l'URL:**
- Deve essere: `https://username.github.io/repository-name`
- Non: `https://username.github.io` (solo per repository speciali)

**3. Aspetta qualche minuto:**
- GitHub Pages può impiegare 5-10 minuti per propagare

### ❌ CSS/JS Non Si Caricano?

**1. Verifica basePath:**
Il `next.config.ts` dovrebbe configurarsi automaticamente, ma se non funziona:

```typescript
// Forza il basePath manualmente
basePath: "/nome-tuo-repository",
assetPrefix: "/nome-tuo-repository/",
```

### ❌ Link Non Funzionano su GitHub Pages?

**Il problema:** GitHub Pages ha difficoltà con il routing di Next.js esportato.

**✅ Soluzioni incluse nel template:**
1. **File `.nojekyll`** - Disabilita Jekyll processing
2. **File `404.html`** - Gestisce redirect automatici per routing
3. **Trailing slash nei link** - Migliore compatibilità con server statici

**Se ancora non funziona:**
```bash
# 1. Verifica che i file siano copiati
ls out/.nojekyll out/404.html

# 2. Ricompila se mancano
npm run export

# 3. Fai push e aspetta ~5 minuti
git push
```

## 🎯 Workflow Completo

### Sviluppo Locale
```bash
npm run dev        # Sviluppa in locale
npm run export     # Testa export statico  
```

### 🧪 Test Export Locale
**❌ Live Server non funziona** - usa questi invece:

```bash
# Opzione 1: Python server (raccomandato)
cd out && python -m http.server 8000
# Vai su: http://localhost:8000

# Opzione 2: Node.js serve
npx serve out -p 8000
# Vai su: http://localhost:8000

# Opzione 3: PHP server
cd out && php -S localhost:8000
```

### Deploy Produzione
```bash
git add .
git commit -m "Nuove funzionalità"
git push           # 🚀 Deploy automatico!
```

### Controllo Risultato
```bash
# Vai su: https://username.github.io/repository-name
# Oppure controlla Actions per vedere lo stato
```

## 🔄 Aggiornamenti Automatici

Ogni volta che:
- ✅ Fai `git push` su `main`
- ✅ Il sito si rebuilda automaticamente
- ✅ Nuova versione è online in ~5 minuti
- ✅ **Zero configurazione** necessaria!

## 🎉 Vantaggi di Questo Setup

- 🆓 **Completamente gratuito**
- ⚡ **Automatico** - zero configurazione manuale
- 🔄 **Sempre aggiornato** - push e deploy  
- 🌐 **SSL incluso** - HTTPS automatico
- 📈 **Scalabile** - gestisce molto traffico
- 🛠️ **Zero manutenzione** server

## 💡 Suggerimenti Pro

### Custom Domain (Opzionale)
Se hai un dominio tuo:
1. Settings → Pages → Custom domain
2. Inserisci `tuodominio.com`
3. GitHub configura automaticamente HTTPS

### Branch Protection
Per progetti importanti:
1. Settings → Branches  
2. Add rule per `main`
3. Richiedi pull request per modifiche

### Monitoraggio
- ⭐ Metti una stella al repository
- 👀 Abilita notifiche per i deploy
- 📊 Controlla le statistiche in Insights

---

## 🎯 Riassunto Quick Start

```bash
# 1. Setup (una volta sola)
git init && git add . && git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# 2. Attiva GitHub Pages (Settings → Pages → GitHub Actions)

# 3. Deploy automatico per sempre!
git add . && git commit -m "Update" && git push
```

**Il tuo sito sarà su: `https://USERNAME.github.io/REPO` 🎉**