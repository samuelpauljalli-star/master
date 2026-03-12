import os
import glob
import re

html_files = glob.glob(r"c:\websites 000\master\GAMES\*.html")

advanced_css = """
<!-- Google Fonts & FontAwesome -->
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Press+Start+2P&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<style id="advanced-injected-styles">
/* Advanced Global Animations and Colors */
body {
    background: radial-gradient(circle at center, #1b003a 0%, #050505 100%) !important;
    color: #fff !important;
    font-family: 'Orbitron', sans-serif !important;
    overflow-x: hidden;
}

h1 {
    font-family: 'Press Start 2P', cursive !important;
    font-size: 2.2em !important;
    text-align: center !important;
    text-transform: uppercase !important;
    background: linear-gradient(90deg, #00f2fe, #4facfe, #8338ec, #ff006e);
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    text-shadow: 0px 0px 15px rgba(79, 172, 254, 0.5) !important;
    animation: titleGlow 3s infinite alternate !important;
    margin-bottom: 20px !important;
}

@keyframes titleGlow {
    from { filter: drop-shadow(0 0 5px rgba(255, 0, 110, 0.4)); }
    to { filter: drop-shadow(0 0 20px rgba(0, 242, 254, 0.8)); }
}

canvas, .container > div#game-board, table {
    background: rgba(20, 20, 20, 0.6) !important;
    backdrop-filter: blur(10px) !important;
    border: 2px solid rgba(0, 242, 254, 0.3) !important;
    box-shadow: 0 0 20px rgba(0, 242, 254, 0.2), inset 0 0 20px rgba(131, 56, 236, 0.2) !important;
    border-radius: 15px !important;
    transition: transform 0.3s ease, box-shadow 0.3s ease !important;
    margin: 0 auto;
}

canvas:hover, table:hover {
    transform: scale(1.02) !important;
    box-shadow: 0 0 30px rgba(0, 242, 254, 0.6), inset 0 0 30px rgba(131, 56, 236, 0.4) !important;
    border-color: rgba(0, 242, 254, 0.8) !important;
}

button {
    font-family: 'Orbitron', sans-serif !important;
    font-size: 1.1em !important;
    background: linear-gradient(45deg, #ff006e, #8338ec) !important;
    border: 2px solid transparent !important;
    color: white !important;
    font-weight: bold !important;
    cursor: pointer !important;
    padding: 12px 25px !important;
    border-radius: 30px !important;
    box-shadow: 0 5px 15px rgba(255, 0, 110, 0.4) !important;
    transition: all 0.3s ease !important;
    position: relative;
    overflow: hidden;
    z-index: 1;
    text-transform: uppercase;
    letter-spacing: 1px;
}

button::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(45deg, #8338ec, #00f2fe);
    z-index: -1;
    transition: opacity 0.3s ease;
    opacity: 0;
}

button:hover::before {
    opacity: 1;
}

button:hover {
    transform: translateY(-3px) scale(1.05) !important;
    box-shadow: 0 8px 25px rgba(0, 242, 254, 0.6) !important;
    border: 2px solid #00f2fe !important;
}

#status-message, .status, p {
    font-family: 'Orbitron', sans-serif !important;
    color: #4facfe !important;
    text-shadow: 0 0 10px rgba(79, 172, 254, 0.4) !important;
    font-size: 1.2em !important;
    margin: 15px 0 !important;
}

/* Custom Background Particles */
.bg-particle {
    position: fixed;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0 10px white;
    pointer-events: none;
    z-index: -1;
    animation: floatUp linear infinite;
}

@keyframes floatUp {
    0% { transform: translateY(100vh) scale(0); opacity: 0; }
    20% { opacity: 0.8; }
    80% { opacity: 0.5; }
    100% { transform: translateY(-100px) scale(1); opacity: 0; }
}
</style>
"""

advanced_js = """
<script id="advanced-injected-logic">
// Inject floating background particles globally into each game
function createParticles() {
    const colors = ['#00f2fe', '#4facfe', '#8338ec', '#ff006e', '#ffd700'];
    for(let i=0; i<40; i++) {
        let p = document.createElement('div');
        p.className = 'bg-particle';
        let size = Math.random() * 5 + 3;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.boxShadow = `0 0 ${size*2}px ${p.style.background}`;
        p.style.animationDuration = (Math.random() * 4 + 4) + 's';
        p.style.animationDelay = (Math.random() * 5) + 's';
        document.body.appendChild(p);
    }
}

if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createParticles);
} else {
    createParticles();
}

// Global click interactive logic: Ripple effect
document.addEventListener("click", function(e) {
    if(e.target.tagName === 'CANVAS' || e.target.tagName === 'BUTTON' || e.target.tagName === 'TD') {
        let ripple = document.createElement('div');
        ripple.style.position = 'fixed';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        ripple.style.width = '10px';
        ripple.style.height = '10px';
        ripple.style.background = 'transparent';
        ripple.style.border = '2px solid #00f2fe';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        ripple.style.zIndex = '10000';
        document.body.appendChild(ripple);
        
        requestAnimationFrame(() => {
            ripple.style.width = '120px';
            ripple.style.height = '120px';
            ripple.style.opacity = '0';
            ripple.style.borderWidth = '15px';
            ripple.style.borderColor = '#ff006e';
        });
        
        setTimeout(() => ripple.remove(), 500);
    }
});
</script>
"""

for f in html_files:
    if "index.html" in f:
        continue
    with open(f, "r", encoding="utf-8") as file:
        content = file.read()
    
    # Remove old injected styles if they exist
    if 'id="global-injected-styles"' in content:
        content = re.sub(r'<style id="global-injected-styles">.*?</style>', '', content, flags=re.DOTALL)
    if 'id="advanced-injected-styles"' in content:
        content = re.sub(r'<!-- Google Fonts & FontAwesome -->.*?<style id="advanced-injected-styles">.*?</style>', '', content, flags=re.DOTALL)
    if 'id="advanced-injected-logic"' in content:
        content = re.sub(r'<script id="advanced-injected-logic">.*?</script>', '', content, flags=re.DOTALL)
        
    # Inject new CSS just before </head>
    if "</head>" in content:
        content = content.replace("</head>", f"{advanced_css}\n</head>")
        
    # Inject new JS just before </body>
    if "</body>" in content:
        content = content.replace("</body>", f"{advanced_js}\n</body>")
    
    with open(f, "w", encoding="utf-8") as file:
        file.write(content)
    print(f"Arcade UI Applied to {os.path.basename(f)}")
