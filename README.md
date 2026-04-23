# 📟 Terminal Drissou13 - BIOS v1.0.4

[![Status](https://img.shields.io/badge/SYSTEM-READY-brightgreen.svg)]()
[![User](https://img.shields.io/badge/PROFILE-drissou13-blue.svg)](https://github.com/drissou13)

> **[LOG]** Initialisation du protocole de communication...
> **[LOG]** Montage du GITHUB_DRIVE réussi.
> **[LOG]** Chargement du profil : drissou13... Terminé.

Ce projet est un portfolio interactif simulant une interface de terminal rétro (style MS-DOS / CRT). Il récupère dynamiquement les dépôts GitHub de l'utilisateur et contient plusieurs fonctions cachées (Easter Eggs).

---

## 🚀 Fonctionnalités Système

* **Séquence de Boot Immersive** : Simulation d'un démarrage matériel (CPU Intel i9, 64GB RAM).
* **GitHub Live Scanner** : Scan automatique des dépôts publics de l'utilisateur via l'API REST.
* **Détection de Démo** : Si un projet possède une `homepage` configurée sur GitHub, un bouton `[ LANCER LA DEMO ]` est généré.
* **Interface CRT** : Effet de scintillement et scanlines pour une ambiance rétro-hacker.

---

## 🕵️ Easter Eggs & Commandes Secrètes

Le terminal est à l'écoute de vos entrées clavier. Tapez ces codes n'importe où pour activer les protocoles :

| Commande | Action | Effet Visuel |
| :--- | :--- | :--- |
| `hack` | **Matrix Override** | Active la pluie de code binaire verte (Canvas Engine). |
| `crash` | **System Failure** | Déclenche un "Blue Screen of Death" (BSOD) immédiat. |
| `force` | **Jedi Protocol** | Affiche un message spécial ASCII : "Que la force soit avec toi". |
| `cls` | **Clean Buffer** | Réinitialise l'affichage de la console. |
| `error` | **Critical Bug** | Variante du crash système forçant un redémarrage. |

---

## 🛠️ Configuration Technique

Le script est configuré pour cibler le compte officiel :

```javascript
// Script de connexion automatique
const GITHUB_USER = 'drissou13';
