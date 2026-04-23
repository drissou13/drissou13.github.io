/**
 * TERMINAL DRISSOU13 - SCRIPT OFFICIEL
 * Fonctions : Boot, GitHub API, Easter Eggs, Indices
 */

const GITHUB_USER = 'drissou13';

// 1. Configuration des textes
const bootLines = [
    "DRISSOU-SYSTEMS BIOS v1.0.4",
    "CPU: INTEL CORE i9 @ 5.20GHz... OK",
    "CHECKING RAM.......... 64GB OK",
    "HINT: SYSTEM OVERRIDE AVAILABLE (KEY: H***)",
    "INITIALIZING NETWORK PROTOCOLS... OK",
    "MOUNTING GITHUB_DRIVE...",
    "LOADING USER_PROFILE: DRISSOU13... DONE",
    "SYSTEM READY."
];

const hints = [
    "Log : Tentative d'intrusion détectée... (Indice: H-A-C-K)",
    "Système : Attention, le système semble instable... évitez de 'CRASH'er.",
    "Notification : Utilisez la 'FORCE', Drissou.",
    "Astuce : Tapez 'CLS' pour nettoyer votre espace de travail."
];

// Éléments DOM
const bootContainer = document.getElementById('boot-sequence');
const mainContent = document.getElementById('main-content');
const autoTypeElement = document.getElementById('auto-type');
const resultsArea = document.getElementById('repo-results');
const hintBox = document.getElementById('system-hints');

// --- INITIALISATION ---

async function startSystem() {
    // Séquence de Boot
    for (let line of bootLines) {
        let div = document.createElement('div');
        div.innerHTML = `> ${line}`;
        bootContainer.appendChild(div);
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise(r => setTimeout(r, 250));
    }
    
    await new Promise(r => setTimeout(r, 600));
    bootContainer.classList.add('hidden');
    mainContent.classList.remove('hidden');
    
    // Lancer la simulation de commande
    simulateTyping();
    
    // Afficher un indice après 4 secondes
    setTimeout(showHint, 4000);
}

// --- LOGIQUE GITHUB ---

function simulateTyping() {
    const command = `dir /all --user=${GITHUB_USER} --live-only`;
    let i = 0;
    let interval = setInterval(() => {
        autoTypeElement.innerHTML += command[i];
        i++;
        if (i >= command.length) {
            clearInterval(interval);
            setTimeout(fetchGithubRepos, 500);
        }
    }, 60);
}

async function fetchGithubRepos() {
    resultsArea.innerHTML = "<br>[SYSTEM] Scan des répertoires en cours...<br>";

    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated`);
        const repos = await response.json();

        let html = `<br>PROJETS DÉTECTÉS : ${repos.length}<br><br><div class="repo-grid">`;

        repos.forEach(repo => {
            const hasDemo = repo.homepage && repo.homepage.trim() !== "";
            const demoBtn = hasDemo 
                ? `<a href="${repo.homepage}" target="_blank" class="btn-demo">[ LANCER LA DEMO ]</a>` 
                : `<span style="opacity:0.3">[ AUCUNE DEMO ]</span>`;

            html += `
                <div class="repo-item">
                    <div class="selectable">
                        <span class="repo-title">${repo.name}</span>
                        <span>INFO: ${repo.description || 'N/A'}</span><br>
                        <span>STACK: ${repo.language || 'DATA'}</span>
                    </div>
                    <div class="repo-actions">
                        ${demoBtn}
                    </div>
                </div>`;
        });

        html += `</div><br><br>C:\\Users\\Drissou13> <span class="cursor">_</span>`;
        resultsArea.innerHTML = html;

    } catch (error) {
        resultsArea.innerHTML = "<br>[ERREUR] Connexion au serveur GitHub impossible.";
    }
}

// --- SYSTÈME D'EASTER EGGS ---

let keyBuffer = "";

window.addEventListener('keydown', (e) => {
    keyBuffer += e.key.toLowerCase();
    if (keyBuffer.length > 15) keyBuffer = keyBuffer.substring(1);

    // 1. MATRIX (Tape "hack")
    if (keyBuffer.endsWith("hack")) {
        activateMatrix();
        keyBuffer = "";
    }

    // 2. BLUE SCREEN (Tape "crash" ou "error")
    if (keyBuffer.endsWith("crash") || keyBuffer.endsWith("error")) {
        activateBSOD();
        keyBuffer = "";
    }

    // 3. STAR WARS (Tape "force")
    if (keyBuffer.endsWith("force")) {
        activateForce();
        keyBuffer = "";
    }

    // 4. CLEAR SCREEN (Tape "cls")
    if (keyBuffer.endsWith("cls")) {
        resultsArea.innerHTML = "<br>Console effacée.<br><br>C:\\Users\\Drissou13> <span class='cursor'>_</span>";
        keyBuffer = "";
    }
});

function showHint() {
    const randomHint = hints[Math.floor(Math.random() * hints.length)];
    hintBox.innerHTML = `[NOTIFICATION] ${randomHint}`;
    hintBox.classList.add('pulse');
}

// --- EFFETS SPECIAUX ---

function activateMatrix() {
    document.body.classList.toggle('hacking');
    if (document.body.classList.contains('hacking')) {
        if(!document.getElementById('matrix-canvas')) startMatrixEngine();
    }
}

function activateBSOD() {
    const term = document.getElementById('terminal');
    document.querySelector('.crt-overlay').style.display = "none";
    term.style.backgroundColor = "#0000aa";
    term.style.color = "#ffffff";
    term.innerHTML = `
        <div style="padding: 50px; font-family: 'Segoe UI', sans-serif;">
            <h1 style="font-size: 100px; margin-bottom:20px;">:(</h1>
            <h2 style="font-size: 24px;">Votre PC a rencontré un problème et doit redémarrer.</h2>
            <p style="margin-top:20px;">Nous collectons simplement des informations relatives aux erreurs, puis nous allons redémarrer pour vous.</p>
            <p>100% complet</p>
            <div style="margin-top:30px; font-size:14px;">Pour plus d'informations, recherchez l'erreur : DRISSOU13_SYSTEM_CRASH</div>
        </div>
    `;
    setTimeout(() => { location.reload(); }, 4000);
}

function activateForce() {
    resultsArea.innerHTML = `
        <pre style="color: #FFE81F; font-size: 12px; line-height: 12px; margin-top:20px;">
           _______________________________
          /                               \\
         |   QUE LA FORCE SOIT AVEC TOI   |
         |           @dbprod13            |
          \\_______________________________/
                   !  !
                   !  !
                   L_ !
                  / _!\\
                 / /_!_\\
                / /_!_  \\
               / /_!_    \\
              /_/_/_/_____\\
        </pre>
        <br>C:\\Users\\Drissou13> <span class='cursor'>_</span>
    `;
}

function startMatrixEngine() {
    const canvas = document.createElement('canvas');
    canvas.id = "matrix-canvas";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const letters = "0101010101";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0F0";
        ctx.font = fontSize + "px monospace";
        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(draw, 33);
}

// Lancement au chargement de la fenêtre
window.onload = startSystem;
