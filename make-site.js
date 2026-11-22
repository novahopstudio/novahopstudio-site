"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const DOMAIN = "novahopstudio.com";
const EMAIL = "contact@novahopstudio.com";
const PLAY = "https://play.google.com/store/apps/details?id=com.champ.bridgehero";
const UPDATED = { fr: "21 novembre 2026", en: "November 21, 2026" };

const T = {
  fr: {
    lang: "fr", other: "en", otherLabel: "EN",
    studioTag: "Studio indépendant de jeux mobiles",
    heroSub: "Des jeux à un doigt, rapides à prendre en main, difficiles à lâcher.",
    ourGames: "Nos jeux",
    bhCard: "Dose ta perche, tombe pile au centre et fais évoluer ton héros.",
    available: "DISPONIBLE SUR ANDROID",
    nav: { home: "Accueil", game: "Bridge Hero", privacy: "Confidentialité", terms: "Conditions" },
    footer: "© 2026 NovaHop Studio. Tous droits réservés.",
    contact: "Contact",
    gameSub: "Un doigt, une perche, un pont. Jusqu'où iras-tu ?",
    getIt: "▶ Télécharger sur Google Play",
    gameIntro: "Maintiens l'écran pour faire grandir ta perche, relâche pour la faire basculer. Si elle tombe sur la plateforme, ton héros traverse. Trop courte ou trop longue : c'est la chute !",
    feats: [
      "<b>Vise le centre lumineux</b> pour un PERFECT : points bonus et combo jusqu'à ×5.",
      "<b>Des plateformes de plus en plus fines</b> : larges, minces, filaments, puis aiguilles.",
      "<b>Ton héros évolue pendant la partie</b> : 6 héros, 5 transformations chacun.",
      "<b>6 décors</b> : stade nocturne, plage, jungle, cimes enneigées, ville néon, orbite lunaire.",
      "<b>Classement mondial</b> Google Play Jeux, objectifs du jour et 14 succès.",
      "Gratuit, avec publicités. Un achat unique « Sans publicité » les supprime."
    ],
    docs: "Informations légales",
    privacyLink: "Politique de confidentialité",
    termsLink: "Conditions d'utilisation",
    pTitle: "Politique de confidentialité",
    updated: "Dernière mise à jour : ",
    tTitle: "Conditions d'utilisation"
  },
  en: {
    lang: "en", other: "fr", otherLabel: "FR",
    studioTag: "Independent mobile game studio",
    heroSub: "One-finger games: quick to pick up, hard to put down.",
    ourGames: "Our games",
    bhCard: "Grow the pole, land dead center and evolve your hero.",
    available: "AVAILABLE ON ANDROID",
    nav: { home: "Home", game: "Bridge Hero", privacy: "Privacy", terms: "Terms" },
    footer: "© 2026 NovaHop Studio. All rights reserved.",
    contact: "Contact",
    gameSub: "One finger, one pole, one bridge. How far can you go?",
    getIt: "▶ Get it on Google Play",
    gameIntro: "Hold the screen to grow your pole, release to let it fall. Land it on the platform and your hero crosses. Too short or too long: down you go!",
    feats: [
      "<b>Aim for the glowing center</b> for a PERFECT: bonus points and combos up to ×5.",
      "<b>Platforms get thinner and thinner</b>: wide, thin, filaments, then needles.",
      "<b>Your hero evolves mid-run</b>: 6 heroes, 5 transformations each.",
      "<b>6 worlds</b>: night stadium, beach, jungle, snowy peaks, neon city, lunar orbit.",
      "<b>Global leaderboard</b> with Google Play Games, daily goals and 14 achievements.",
      "Free, with ads. A one-time “No Ads” purchase removes them."
    ],
    docs: "Legal information",
    privacyLink: "Privacy Policy",
    termsLink: "Terms of Use",
    pTitle: "Privacy Policy",
    updated: "Last updated: ",
    tTitle: "Terms of Use"
  }
};

const PRIVACY = {
  fr: `
<p>Cette politique explique quelles données sont utilisées par le jeu <b>Bridge Hero</b>, édité par <b>NovaHop Studio</b>, et pourquoi.</p>

<h2>1. Données enregistrées sur votre appareil</h2>
<p>Votre progression (record, pièces, héros, réglages, objectifs, succès, meilleures parties) est enregistrée <b>uniquement sur votre téléphone</b>. Nous ne la collectons pas et elle n'est envoyée à aucun serveur de NovaHop Studio. La désinstallation du jeu ou le bouton « Effacer la sauvegarde » la supprime.</p>

<h2>2. Google Play Jeux (classement mondial)</h2>
<p>Si vous êtes connecté à Google Play Jeux, votre pseudo Play Jeux, votre avatar et votre meilleur score sont transmis à Google pour afficher le classement mondial. Ces données sont gérées par Google selon sa <a href="https://policies.google.com/privacy">politique de confidentialité</a>. Vous pouvez gérer la visibilité de votre profil et vous déconnecter dans l'appli Google Play Jeux ou dans les paramètres Android.</p>

<h2>3. Publicité (Google AdMob)</h2>
<p>Le jeu affiche des publicités fournies par Google AdMob. Pour afficher et mesurer ces publicités, Google peut collecter des données telles que l'identifiant publicitaire de l'appareil, l'adresse IP, le modèle de l'appareil et des informations sur l'interaction avec les publicités. Ces données sont traitées par Google selon ses règles : <a href="https://policies.google.com/privacy">policies.google.com/privacy</a> et <a href="https://policies.google.com/technologies/ads">policies.google.com/technologies/ads</a>.</p>
<p>Vous pouvez réinitialiser ou supprimer votre identifiant publicitaire dans les paramètres Android (<i>Paramètres → Confidentialité → Annonces</i>). L'achat « Sans publicité » supprime les publicités obligatoires.</p>

<h2>4. Achats intégrés</h2>
<p>Les achats sont traités par Google Play. NovaHop Studio ne reçoit ni vos coordonnées bancaires ni votre adresse.</p>

<h2>5. Enfants</h2>
<p>Le jeu ne s'adresse pas spécifiquement aux enfants de moins de 13 ans et ne collecte pas sciemment de données les concernant.</p>

<h2>6. Vos droits</h2>
<p>NovaHop Studio ne détient aucune donnée personnelle vous concernant sur ses propres serveurs. Pour les données traitées par Google (Play Jeux, AdMob, Google Play), vous pouvez exercer vos droits d'accès, de rectification et de suppression auprès de Google, depuis votre <a href="https://myaccount.google.com/">compte Google</a>.</p>

<h2>7. Modifications</h2>
<p>Cette politique peut être mise à jour. La date en haut de la page indique la dernière modification.</p>

<h2>8. Contact</h2>
<p>Pour toute question : <a href="mailto:${EMAIL}">${EMAIL}</a></p>`,
  en: `
<p>This policy explains what data is used by the game <b>Bridge Hero</b>, published by <b>NovaHop Studio</b>, and why.</p>

<h2>1. Data stored on your device</h2>
<p>Your progress (best score, coins, heroes, settings, goals, achievements, best runs) is stored <b>only on your phone</b>. We do not collect it and it is not sent to any NovaHop Studio server. Uninstalling the game or using “Delete save” removes it.</p>

<h2>2. Google Play Games (global leaderboard)</h2>
<p>If you are signed in to Google Play Games, your Play Games gamer name, avatar and best score are sent to Google to display the global leaderboard. This data is handled by Google under its <a href="https://policies.google.com/privacy">privacy policy</a>. You can manage your profile visibility and sign out in the Google Play Games app or in Android settings.</p>

<h2>3. Advertising (Google AdMob)</h2>
<p>The game shows ads provided by Google AdMob. To serve and measure ads, Google may collect data such as the device advertising ID, IP address, device model and ad interaction information. This data is handled by Google under its policies: <a href="https://policies.google.com/privacy">policies.google.com/privacy</a> and <a href="https://policies.google.com/technologies/ads">policies.google.com/technologies/ads</a>.</p>
<p>You can reset or delete your advertising ID in Android settings (<i>Settings → Privacy → Ads</i>). The “No Ads” purchase removes mandatory ads.</p>

<h2>4. In-app purchases</h2>
<p>Purchases are processed by Google Play. NovaHop Studio never receives your payment details or address.</p>

<h2>5. Children</h2>
<p>The game is not specifically directed at children under 13 and does not knowingly collect data from them.</p>

<h2>6. Your rights</h2>
<p>NovaHop Studio does not hold any personal data about you on its own servers. For data processed by Google (Play Games, AdMob, Google Play), you can exercise your rights of access, correction and deletion with Google, from your <a href="https://myaccount.google.com/">Google Account</a>.</p>

<h2>7. Changes</h2>
<p>This policy may be updated. The date at the top of the page shows the latest change.</p>

<h2>8. Contact</h2>
<p>Questions: <a href="mailto:${EMAIL}">${EMAIL}</a></p>`
};

const TERMS = {
  fr: `
<p>Les présentes conditions régissent l'utilisation du jeu <b>Bridge Hero</b>, édité par <b>NovaHop Studio</b>. En installant ou en utilisant le jeu, vous les acceptez.</p>

<h2>1. Licence d'utilisation</h2>
<p>NovaHop Studio vous accorde une licence personnelle, non exclusive et non transférable pour utiliser le jeu à des fins de divertissement privé, sur les appareils dont vous avez l'usage.</p>

<h2>2. Comportements interdits</h2>
<p>Il est interdit de tricher ou de manipuler les scores et le classement mondial, de décompiler, modifier ou redistribuer le jeu, d'utiliser des logiciels tiers pour obtenir un avantage, ou de cliquer volontairement sur les publicités de manière abusive. NovaHop Studio peut retirer du classement les scores manifestement frauduleux.</p>

<h2>3. Contenu virtuel et achats</h2>
<p>Les pièces, héros et autres éléments du jeu sont des contenus virtuels sans valeur monétaire réelle. Ils ne peuvent être ni échangés ni remboursés en argent, sauf disposition légale contraire. Les achats intégrés sont traités par Google Play et soumis à ses conditions, notamment pour les remboursements. L'achat « Sans publicité » est lié à votre compte Google et peut être restauré depuis la boutique du jeu.</p>

<h2>4. Publicité</h2>
<p>Le jeu est gratuit et financé par la publicité. Certaines publicités sont proposées en échange d'une récompense dans le jeu ; leur visionnage est facultatif.</p>

<h2>5. Disponibilité et responsabilité</h2>
<p>Le jeu est fourni « en l'état ». NovaHop Studio s'efforce d'en assurer le bon fonctionnement mais ne garantit pas l'absence d'erreurs ou d'interruptions, notamment des services tiers (Google Play, Play Jeux, AdMob). NovaHop Studio ne pourra être tenu responsable de la perte de progression stockée sur l'appareil.</p>

<h2>6. Propriété intellectuelle</h2>
<p>Le jeu, ses graphismes, sons, textes et marques sont la propriété de NovaHop Studio. Toute reproduction non autorisée est interdite.</p>

<h2>7. Modifications</h2>
<p>NovaHop Studio peut modifier ces conditions et faire évoluer le jeu. La date en haut de la page indique la dernière modification.</p>

<h2>8. Droit applicable</h2>
<p>Ces conditions sont soumises au droit français, sans préjudice des droits impératifs dont vous bénéficiez dans votre pays de résidence.</p>

<h2>9. Contact</h2>
<p><a href="mailto:${EMAIL}">${EMAIL}</a></p>`,
  en: `
<p>These terms govern the use of the game <b>Bridge Hero</b>, published by <b>NovaHop Studio</b>. By installing or using the game, you accept them.</p>

<h2>1. License</h2>
<p>NovaHop Studio grants you a personal, non-exclusive and non-transferable license to use the game for private entertainment, on devices you are allowed to use.</p>

<h2>2. Prohibited behavior</h2>
<p>You may not cheat or manipulate scores and the global leaderboard, decompile, modify or redistribute the game, use third-party software to gain an advantage, or deliberately click ads in an abusive way. NovaHop Studio may remove clearly fraudulent scores from the leaderboard.</p>

<h2>3. Virtual content and purchases</h2>
<p>Coins, heroes and other in-game items are virtual content with no real monetary value. They cannot be exchanged or refunded for money, unless required by law. In-app purchases are processed by Google Play and subject to its terms, including refunds. The “No Ads” purchase is tied to your Google account and can be restored from the in-game shop.</p>

<h2>4. Advertising</h2>
<p>The game is free and funded by ads. Some ads are offered in exchange for an in-game reward; watching them is optional.</p>

<h2>5. Availability and liability</h2>
<p>The game is provided “as is”. NovaHop Studio strives to keep it working but does not guarantee it will be error-free or uninterrupted, including third-party services (Google Play, Play Games, AdMob). NovaHop Studio cannot be held liable for the loss of progress stored on the device.</p>

<h2>6. Intellectual property</h2>
<p>The game, its graphics, sounds, texts and trademarks are the property of NovaHop Studio. Any unauthorized reproduction is prohibited.</p>

<h2>7. Changes</h2>
<p>NovaHop Studio may change these terms and update the game. The date at the top of the page shows the latest change.</p>

<h2>8. Governing law</h2>
<p>These terms are governed by French law, without prejudice to the mandatory rights you have in your country of residence.</p>

<h2>9. Contact</h2>
<p><a href="mailto:${EMAIL}">${EMAIL}</a></p>`
};

function rel(depth){ return depth ? "../".repeat(depth) : ""; }

function page(o){
  const t = T[o.lang];
  const r = rel(o.depth);
  const nav = (key, href) => `<a href="${href}"${o.active === key ? ' class="on"' : ""}>${t.nav[key]}</a>`;
  const homeHref = o.lang === "fr" ? r || "./" : r + "en/";
  const base = o.lang === "fr" ? r : r + "en/";
  return `<!doctype html>
<html lang="${o.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${o.title}</title>
<meta name="description" content="${o.desc}">
<link rel="canonical" href="https://${DOMAIN}/${o.path}">
<link rel="alternate" hreflang="${o.lang}" href="https://${DOMAIN}/${o.path}">
<link rel="alternate" hreflang="${t.other}" href="https://${DOMAIN}/${o.altPath}">
<link rel="icon" href="${r}assets/bridgehero-icon.png">
<link rel="stylesheet" href="${r}assets/style.css">
<meta property="og:title" content="${o.title}">
<meta property="og:description" content="${o.desc}">
<meta property="og:image" content="https://${DOMAIN}/assets/bridgehero-banner-${o.lang}.png">
</head>
<body>
<header class="top"><div class="wrap">
  <a class="brand" href="${homeHref}"><span class="dot"></span>NOVAHOP STUDIO</a>
  <nav class="links">${nav("home", homeHref)}${nav("game", base + "bridgehero/")}</nav>
  <span class="lang"><a href="${o.lang === "fr" ? "#" : r + o.altPath}"${o.lang === "fr" ? ' class="on"' : ""}>FR</a> <a href="${o.lang === "en" ? "#" : r + o.altPath}"${o.lang === "en" ? ' class="on"' : ""}>EN</a></span>
</div></header>
<main class="wrap">
${o.body}
</main>
<footer class="bottom"><div class="wrap">
  <span>${t.footer}</span>
  <span><a href="${base}bridgehero/privacy.html">${t.privacyLink}</a> · <a href="${base}bridgehero/terms.html">${t.termsLink}</a> · <a href="mailto:${EMAIL}">${t.contact}</a></span>
</div></footer>
</body>
</html>
`;
}

function write(file, html){
  const f = path.join(ROOT, file);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, html);
  console.log(file);
}

for (const lang of ["fr", "en"]){
  const t = T[lang];
  const pre = lang === "fr" ? "" : "en/";
  const alt = lang === "fr" ? "en/" : "";
  const d = lang === "fr" ? 0 : 1;

  write(pre + "index.html", page({
    lang, depth: d, active: "home", path: pre, altPath: alt,
    title: "NovaHop Studio",
    desc: t.heroSub,
    body: `
<section class="hero">
  <h1>NOVAHOP STUDIO</h1>
  <p>${t.studioTag}. ${t.heroSub}</p>
</section>
<h2>${t.ourGames}</h2>
<div class="games">
  <a class="card" href="bridgehero/">
    <img class="banner" src="${rel(d)}assets/bridgehero-banner-${lang}.png" alt="Bridge Hero">
    <div class="body">
      <h3>BRIDGE HERO</h3>
      <p>${t.bhCard}</p>
      <span class="tag">${t.available}</span>
    </div>
  </a>
</div>`
  }));

  write(pre + "bridgehero/index.html", page({
    lang, depth: d + 1, active: "game", path: pre + "bridgehero/", altPath: alt + "bridgehero/",
    title: "Bridge Hero — NovaHop Studio",
    desc: t.gameSub,
    body: `
<section class="game-head">
  <img src="${rel(d + 1)}assets/bridgehero-icon.png" alt="">
  <div><h1>BRIDGE HERO</h1><p>${t.gameSub}</p></div>
</section>
<a class="btn" href="${PLAY}">${t.getIt}</a>
<div class="shots">
  <img src="${rel(d + 1)}assets/bridgehero-shot-1.png" alt="">
  <img src="${rel(d + 1)}assets/bridgehero-shot-2.png" alt="">
  <img src="${rel(d + 1)}assets/bridgehero-shot-3.png" alt="">
</div>
<p>${t.gameIntro}</p>
<ul class="feats">${t.feats.map((f) => "<li>" + f + "</li>").join("")}</ul>
<h2>${t.docs}</h2>
<p><a href="privacy.html">${t.privacyLink}</a> · <a href="terms.html">${t.termsLink}</a> · <a href="mailto:${EMAIL}">${EMAIL}</a></p>`
  }));

  write(pre + "bridgehero/privacy.html", page({
    lang, depth: d + 1, active: "privacy", path: pre + "bridgehero/privacy.html", altPath: alt + "bridgehero/privacy.html",
    title: t.pTitle + " — Bridge Hero",
    desc: t.pTitle + " — Bridge Hero, NovaHop Studio",
    body: `<article class="legal"><h1>Bridge Hero — ${t.pTitle}</h1><p class="muted">${t.updated}${UPDATED[lang]}</p>${PRIVACY[lang]}</article>`
  }));

  write(pre + "bridgehero/terms.html", page({
    lang, depth: d + 1, active: "terms", path: pre + "bridgehero/terms.html", altPath: alt + "bridgehero/terms.html",
    title: t.tTitle + " — Bridge Hero",
    desc: t.tTitle + " — Bridge Hero, NovaHop Studio",
    body: `<article class="legal"><h1>Bridge Hero — ${t.tTitle}</h1><p class="muted">${t.updated}${UPDATED[lang]}</p>${TERMS[lang]}</article>`
  }));
}

write("app-ads.txt", "google.com, pub-3472327701433628, DIRECT, f08c47fec0942fa0\n");
write("CNAME", DOMAIN + "\n");
write(".nojekyll", "");
write("404.html", `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page introuvable — NovaHop Studio</title><link rel="stylesheet" href="/assets/style.css"></head><body><main class="wrap"><section class="hero"><h1>404</h1><p>Page introuvable · Page not found</p><p><a href="/">novahopstudio.com</a></p></section></main></body></html>\n`);
write("robots.txt", `User-agent: *\nAllow: /\nSitemap: https://${DOMAIN}/sitemap.xml\n`);
const urls = ["", "bridgehero/", "bridgehero/privacy.html", "bridgehero/terms.html"];
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.flatMap((u) => ["", "en/"].map((p) => `  <url><loc>https://${DOMAIN}/${p}${u}</loc></url>`)).join("\n") + `\n</urlset>\n`);
