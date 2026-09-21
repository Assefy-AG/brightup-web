# brightup-web

Statische Website. Lokal testen:

    python3 -m http.server 8080
    # dann http://localhost:8080

## Veröffentlichen (ohne Build)

GitHub Pages, ohne Zusatzdienst
1. Repo auf GitHub öffnen → Settings → Pages.
2. Source: «Deploy from a branch», Branch `main`, Ordner `/ (root)`, Save.
3. Nach ein bis zwei Minuten steht oben die Adresse `https://<name>.github.io/brightup-web/`. Die Pfade sind relativ, die Seite läuft dort und später unter der Domain.
4. Eigene Domain: Settings → Pages → Custom domain `brightup.ai`, Save; die angezeigten DNS-Einträge beim Registrar setzen; danach «Enforce HTTPS» einschalten.
Hinweis: Bei privatem Repo verlangt GitHub für Pages den Pro-Tarif; alternativ Repo auf öffentlich stellen (Settings → General → Danger Zone → Change visibility).


Cloudflare Pages
1. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git → dieses Repo.
2. Framework preset: None. Build command: leer. Build output directory: `/`.
3. Deploy. Jeder Push auf `main` veröffentlicht neu.
4. Custom domain: `brightup.ai` hinzufügen; Cloudflare zeigt die DNS-Einträge an. Erst umstellen, wenn die Seite unter der *.pages.dev-Adresse geprüft ist.

Netlify
1. Add new site → Import from Git → Repo wählen.
2. Build command: leer. Publish directory: `/`.
3. Domain settings → Add custom domain `brightup.ai`, DNS wie angezeigt beim Registrar setzen.

## Nach dem Umzug
- Wix-Konto behalten, bis Blogbeiträge entschieden sind (21 Beiträge 2022 bis 2024).
- Alte Wix-Adresse «Braightup» löschen.
- Mailadresse contact@brightup.ai prüfen (die alte Seite verlinkte auf eine falsch geschriebene Domain).
