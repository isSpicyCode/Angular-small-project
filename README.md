# Projet d'initiation Angular : Bidouille

<img src="https://angular.io/assets/images/logos/angular/angular.svg" width="100">

Petit projet Angular 20 servant de bac à sable pour découvrir le framework et son écosystème.

## 🚀 Fonctionnalités principales
- Système de gestion d'articles
- Interface responsive avec Tailwind CSS
- Composants de démonstration (page Prix, Solutions, Documentation)

## ⚙️ Configuration requise
- Node.js v20+
- npm v10+

## 🛠 Installation
```bash
# Cloner le dépôt
git clone https://github.com/votre-utilisateur/bidouille.git

# Installer les dépendances
cd bidouille
npm install

# Lancer le serveur de développement
npm start
```

## 📂 Structure des fichiers
```
bidouille/
├── src/
│   ├── app/
│   │   ├── prix/               # Page de démonstration
│   │   │   ├── prix.ts         # Composant
│   │   │   └── prix.html       # Template
│   │   ├── services/
│   │   │   └── prix-articles.ts# Service de données
│   │   ├── app.ts              # Composant principal
│   │   └── app.routes.ts       # Configuration routing
│   ├── index.html              # Point d'entrée
│   └── styles.scss             # Styles globaux
├── angular.json                # Configuration Angular
├── tailwind.config.js          # Configuration Tailwind
└── package.json                # Dépendances
```

## 🔧 Technologies clés
- [Angular 20.0.0](https://angular.io)
- [Tailwind CSS 4.1.8](https://tailwindcss.com)
- RxJS 7.8 (pour la gestion d'état)

## 🧠 Concepts illustrés
- `Components` avec templates dédiés
- `Services` singleton (`@Injectable({providedIn: 'root'})`)
- Databinding bidirectionnel
- Directives structurelles (@if, @for)

## 👨‍💻 Démo locale
Après `npm start`, ouvrez : http://localhost:4200
