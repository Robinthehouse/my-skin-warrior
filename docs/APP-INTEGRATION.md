# App-Integration — Briefing für dieses Website-Projekt

**Stand: 18. Juli 2026.** Diese Datei ist die Brücke zwischen den zwei
My-Skin-Warrior-Projekten. Wer (Mensch oder KI-Session) an dieser Website
arbeitet: bitte zuerst lesen.

## Die zwei Projekte

| | Website (dieses Projekt) | App |
|---|---|---|
| Inhalt | PDF-Hefte, Gratis-Heft/Newsletter, Linktree | HS-Tagebuch (Tracking, Trigger-Analyse, Arztbericht) |
| Repo | `Robinthehouse/my-skin-warrior` | `Robinthehouse/Akne-inversa-app-` (Ordner `~/Developer/myskinwarrior-v2`) |
| Hosting | Netlify → **myskinwarrior.de** | Vercel → **app.myskinwarrior.de** (Launch in Vorbereitung) |
| Stack | Statisches HTML/CSS/JS | Next.js 16 + Supabase |

Beide bleiben dauerhaft getrennt deploybar — kein Monorepo, keine Code-Abhängigkeit.
Die Verbindung sind Links + eine gemeinsame Markenwelt.

## ⚠️ Deploy-Bremse (wichtigste Regel)

**Nichts auf `main` pushen, was die App bewirbt, bevor die App unter
app.myskinwarrior.de live ist und die Generalprobe bestanden hat**
(Checkliste im App-Repo: `docs/LAUNCH-CHECKLISTE.md`). Netlify deployt
`main` automatisch — ein zu früher Push zeigt Besuchern tote Links.

Außerdem: In diesem Projekt liegen derzeit **8 geänderte, nicht committete
Dateien** (Robins Arbeit, u. a. index/linktree/datenschutz). Sie sind noch
NICHT auf GitHub gesichert. Nicht überschreiben, nicht verwerfen; committen
und pushen entscheidet Robin (Push = Live-Deploy!). Wer nur sichern will,
ohne zu deployen: auf einen Backup-Branch pushen
(`git push origin main:sicherung-JJJJ-MM-TT`).

## Geplante Integration (wenn die App live ist)

Robins Entscheidung: **Die App wird Hauptfokus der Website**, die Hefte
bleiben als vollwertige zweite Sektion erhalten. Konkret:

1. `index.html` Hero: H1 „Dein Tagebuch für Akne inversa (HS)", CTA
   **„Kostenlos starten" → `https://app.myskinwarrior.de/signup`**,
   Sekundär-Button zu den Heften (`#reihe`). Nav-Punkt „App".
2. Neue App-Sektion (Features/Vertrauen/FAQ) — die Inhalte existieren schon
   fertig auf der App-Landing-Page (`https://app.myskinwarrior.de`), dort
   Texte übernehmen oder einfach prominent verlinken.
3. `linktree.html`: neue oberste Karte „📱 Zur App — kostenlos starten"
   → `https://app.myskinwarrior.de/signup`.
4. `<title>`/Meta-Description um App-Keywords erweitern („Akne inversa App",
   „HS Tagebuch") — Details: `docs/SEO-HOMEPAGE.md` im App-Repo.

**Sprachregel (Heilmittelwerbegesetz):** dokumentieren / Muster erkennen /
Arztgespräch vorbereiten — niemals „lindert", „heilt", „verbessert Symptome".

## Design-Abgleich (Website ↔ App)

Beide Projekte teilen die warme Creme/Terracotta-Welt. Zuordnung der Tokens:

| Rolle | Website (`tokens.css`) | App (`globals.css`) |
|---|---|---|
| Hintergrund Creme | eigene Variable | `--color-paper: #FAF5EF` |
| Text dunkel | eigene Variable | `--color-ink: #2B2420` |
| Akzent Terracotta | eigene Variable | `--color-clay: #BD5A40` |
| Zweitakzent Petrol | — | `--color-teal: #2E6E68` |
| Headline-Font | eigene | Fraunces (Serif) |

Bei neuen Website-Elementen mit App-Bezug diese App-Werte verwenden, damit
der Übergang Website → App nahtlos wirkt.

## Empfehlung Ordner-Umzug

Dieses Projekt liegt in `~/Downloads/` (löschgefährdet). Nach dem nächsten
vollständigen Commit+Push: Ordner nach `~/Developer/myskinwarrior-homepage`
verschieben (reines `mv`, Git/Netlify merken nichts) und in VS Code neu öffnen.
