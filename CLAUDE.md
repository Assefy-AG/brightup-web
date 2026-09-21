# brightup-web

Statische Website von Brightup (Landingpage Test T1 plus Impressum/Datenschutz). Kein Build-Schritt, kein Framework: HTML, CSS, ein kleines JS.

## Regeln für jede Änderung
- Sprache: Deutsch in Schweizer Schreibweise (kein Eszett: «Massnahme», «grösser»), Sie-Form. Fliesstext deutsch («KI», «Daten»); Englisch nur in Produktnamen (AI Governance Officer, Data Governance Officer, AI Literacy, Expert Check).
- Ton: Prüfersprache, nüchtern, keine Ausrufezeichen, keine Superlative, kein Angstmarketing. Jede Aussage zu Regulatorik muss belegbar sein; im Zweifel weglassen.
- Keine Preise, kein Abrechnungsmodell, keine Angaben zur Grösse der Zielkunden auf der Seite.
- Keine Cookies, keine Analyse-Skripte, keine externen Einbindungen (Schriften, Video, Bilder liegen unter /assets). Wenn etwas Externes dazukommt, zuerst datenschutz.html anpassen.
- Kunden- und Partnerlogos nur mit Freigabe; keine Logos von Behörden (FINMA, EU).

## Design-System
- Farben: Text #0A1325, gedämpft #3D4A5C, Papier #FAFAFA, Weiss #FFFFFF, Linien #D5DBE3 / #E3E7EC, Akzent #2C6998, Schaltflächen #2C8ECF mit weisser Schrift, Türkis #70D0E7 (nur kleine Zeile und Rahmen im Hero), Dunkel #282E39 (Fusszeile, Kopf auf Unterseiten), Navy #061424 (Hero-Grund), Logo-Verlauf #3BE9F1 → #4AC6F9 (nur als 40x3-Linie über Titeln und als Kante der Erstgespräch-Box).
- Schrift: Source Serif 4 nur für Titel (h1 600, h2/h3 400), IBM Plex Sans für alles andere. Selbst gehostet unter /assets/fonts.
- Abstände: Abschnitte clamp(48px, 7vw, 88px), Container max. 1200px (1320px ab 1600px Breite), Seitenrand clamp(20px, 5vw, 96px). Radius 3 bis 4 px. Haarlinien statt Schatten.
- Breakpoints: 1024px (Tablet, eine Spalte), 720px (Mobil, Menü als Klappe), 1600px (gross).
- Alle Tokens in assets/css/site.css unter :root.

## Struktur
- index.html: Hero (Video) → Kundenlogos → Anforderungen mit animierter Karte → Angebot (6 Kacheln) → Vorgehen (Reiter) → Zertifizierungen und Regelwerke (Kacheln mit Erläuterung) → Cases (Karussell) → Über Brightup → Erstgespräch → Fusszeile.
- Cases sind ein Karussell auf der Startseite (#cases, 7 Karten plus Anfrage-Karte); die Anfrage löst eine vorausgefüllte E-Mail aus. GIFs unter assets/img/cases.
- impressum.html, datenschutz.html: getrennte Seiten, beide noindex.
- assets/js/site.js: Mobilmenü, Reiter, Zertifizierungs-Kacheln, Balken-Animation beim Scrollen, Jahr.

## Offene Platzhalter (vor Veröffentlichung füllen)
- impressum.html: UID (CHE-Nummer), MWST-Nummer falls pflichtig, vertretungsberechtigte Person mit Funktion.
- datenschutz.html: Ansprechperson für Datenschutz mit E-Mail, Hoster, Löschfrist der Server-Logs.
- index.html: Terminlink (`data-termin`, zeigt bis dahin auf mailto).
- AIGP- und IAPP-Kacheln: Schriftkacheln durch die offiziellen Badge-Dateien ersetzen (`<img>` in .cert-tile).

## Veröffentlichen
Siehe README.md. Hosting ohne Build; Veröffentlichungsverzeichnis ist das Repo-Wurzelverzeichnis.
