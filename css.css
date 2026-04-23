@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

:root {
    --cmd-green: #00ff00;
    --cmd-bg: #0c0c0c;
    --cmd-selection: #00ff00;
    --cmd-demo: #00aaff;
    --cmd-hint: rgba(0, 255, 0, 0.4);
}

* { box-sizing: border-box; }

body {
    background-color: #000;
    color: var(--cmd-green);
    font-family: 'VT323', monospace;
    font-size: 20px;
    margin: 0;
    height: 100vh;
    overflow-x: hidden;
}

/* SÉLECTION DU TEXTE */
.selectable {
    user-select: text;
    -webkit-user-select: text;
}

::selection {
    background: var(--cmd-selection);
    color: #000;
}

/* EFFET ÉCRAN CRT */
.crt-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%),
                linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03));
    background-size: 100% 3px, 2px 100%;
    pointer-events: none;
    z-index: 999;
}

.terminal {
    padding: 30px;
    height: 100%;
    overflow-y: auto;
    position: relative;
}

.hidden { display: none; }

/* GRILLE DE PROJETS */
.repo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.repo-item {
    border: 1px solid var(--cmd-green);
    padding: 15px;
    background: rgba(0, 255, 0, 0.02);
    transition: all 0.2s ease;
}

.repo-item:hover {
    background: var(--cmd-green);
    color: #000;
}

.repo-title {
    font-weight: bold;
    font-size: 1.2rem;
    display: block;
    margin-bottom: 5px;
    text-transform: uppercase;
}

.repo-actions { margin-top: 15px; }

.btn-demo {
    color: var(--cmd-demo) !important;
    border: 1px solid var(--cmd-demo);
    padding: 2px 8px;
    text-decoration: none !important;
    display: inline-block;
    font-weight: bold;
}

.repo-item:hover .btn-demo {
    color: #000 !important;
    border-color: #000;
}

/* INDICES ET ANIMATIONS */
.hint-text {
    margin-top: 30px;
    font-size: 0.9rem;
    color: var(--cmd-hint);
    font-style: italic;
}

.pulse { animation: pulse-opacity 2s infinite; }
@keyframes pulse-opacity {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.6; }
}

.cursor { animation: blink 0.8s infinite; }
@keyframes blink { 50% { opacity: 0; } }

/* MATRIX CANVAS */
#matrix-canvas {
    position: fixed;
    top: 0; left: 0; z-index: -1;
    display: none;
}
body.hacking #matrix-canvas { display: block; }
body.hacking .terminal { opacity: 0.1; }
