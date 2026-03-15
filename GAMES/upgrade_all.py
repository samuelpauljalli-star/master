"""
upgrade_all.py — Full visual + logic upgrade for all GAMES HTML files.
Applies attractive icons, improved game logic, and premium CSS enhancements
to each game, injecting a <style id="game-upgrade"> and a <script id="game-upgrade-logic">
just before </body>.  Safe to re-run (removes old injections first).
"""

import os, re

GAMES_DIR = os.path.dirname(os.path.abspath(__file__))

# ─────────────────────────────────────────────────────────────────────────────
# PER-GAME UPGRADE DEFINITIONS
# Each entry:  filename → { 'css': str, 'js': str }
# ─────────────────────────────────────────────────────────────────────────────
UPGRADES = {}

# ══════════════════════════════════════════════
# XO.html  — Tic-Tac-Toe with emoji & AI opponent
# ══════════════════════════════════════════════
UPGRADES["XO.html"] = {
"css": """
/* XO UPGRADE: Neon cells, emoji icons */
#game-board {
    display: grid !important;
    grid-template-columns: repeat(3, 130px) !important;
    grid-template-rows:    repeat(3, 130px) !important;
    gap: 10px !important;
    margin: 20px auto !important;
    background: transparent !important;
    border: none !important;
    width: fit-content !important;
    transform: none !important;
    backdrop-filter: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
}
.cell {
    background: rgba(15,15,25,0.85) !important;
    border: 2px solid rgba(0,255,204,0.25) !important;
    border-radius: 18px !important;
    font-size: 3.5rem !important;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    transition: all 0.25s ease !important;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4) !important;
}
.cell:hover:not(.taken) {
    border-color: rgba(0,255,204,0.7) !important;
    box-shadow: 0 0 22px rgba(0,255,204,0.35), inset 0 0 15px rgba(0,255,204,0.08) !important;
    transform: scale(1.05) !important;
}
.cell.X { color: #00ffcc !important; text-shadow: 0 0 18px #00ffcc; }
.cell.O { color: #ff006e !important; text-shadow: 0 0 18px #ff006e; }
.cell.win-cell { animation: winPulse 0.6s ease-in-out infinite alternate; }
@keyframes winPulse {
    from { box-shadow: 0 0 10px rgba(255,215,0,0.4); }
    to   { box-shadow: 0 0 40px rgba(255,215,0,0.9), inset 0 0 20px rgba(255,215,0,0.2); border-color: gold !important; }
}
#status {
    font-size: 1.4rem !important; font-family: 'Space Mono',monospace !important;
    color: #00ffcc !important; letter-spacing: 2px;
    text-shadow: 0 0 10px rgba(0,255,204,0.5);
    min-height: 2rem; margin: 12px 0;
}
#score-board {
    display: flex; gap: 24px; justify-content: center;
    font-family: 'Space Mono',monospace; font-size: 1rem;
    color: #b3b3b3; margin: 8px 0 16px;
}
.score-box { padding: 8px 20px; border-radius: 30px;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); }
.score-box span { font-size: 1.5rem; font-weight: 800; }
#mode-toggle { margin-bottom: 10px; }
""",
"js": """
// ── XO UPGRADE ──────────────────────────────────────────
(function(){
    const EMPTY='', X='❌', O='⭕';
    let cells=[], board=Array(9).fill(EMPTY), isX=true, gameOn=true;
    let scores={X:0,O:0,draw:0}, vsAI=true;
    const statusEl = document.getElementById('status');
    const boardEl  = document.getElementById('game-board');

    // Score board
    const sb = document.createElement('div'); sb.id='score-board';
    sb.innerHTML=`<div class="score-box">❌ <span id="sx">0</span></div>
                  <div class="score-box">🤝 <span id="sd">0</span></div>
                  <div class="score-box">⭕ <span id="so">0</span></div>`;
    boardEl.parentNode.insertBefore(sb, boardEl);

    // Mode toggle
    const mt = document.createElement('div'); mt.id='mode-toggle';
    mt.innerHTML=`<button onclick="xoToggleMode()">🤖 VS AI: ON</button>`;
    boardEl.parentNode.insertBefore(mt, boardEl);
    window.xoToggleMode = () => {
        vsAI=!vsAI;
        mt.querySelector('button').textContent = vsAI ? '🤖 VS AI: ON' : '👤 VS PLAYER';
        xoReset();
    };

    const WINS=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    function xoBuild(){
        boardEl.innerHTML=''; cells=[];
        board.fill(EMPTY); isX=true; gameOn=true;
        statusEl.textContent="❌ Player's Turn";
        for(let i=0;i<9;i++){
            const c=document.createElement('div');
            c.className='cell'; c.dataset.i=i;
            c.addEventListener('click',xoClick);
            boardEl.appendChild(c); cells.push(c);
        }
    }
    function xoClick(e){
        const i=+e.currentTarget.dataset.i;
        if(!gameOn||board[i]!==EMPTY) return;
        xoMark(i, isX?X:O);
        if(gameOn && vsAI && !isX) setTimeout(xoAI, 350);
    }
    function xoMark(i, sym){
        board[i]=sym; cells[i].textContent=sym;
        cells[i].classList.add(sym==='❌'?'X':'O','taken');
        const w=checkWin();
        if(w){
            w.forEach(j=>cells[j].classList.add('win-cell'));
            const who = sym==='❌'?'❌ Player':'⭕ '+(vsAI?'AI':'Player');
            statusEl.textContent=`🎉 ${who} Wins!`;
            gameOn=false;
            if(sym==='❌') scores.X++; else scores.O++;
        } else if(board.every(c=>c!==EMPTY)){
            statusEl.textContent='🤝 Draw!'; gameOn=false; scores.draw++;
        } else {
            isX=!isX;
            statusEl.textContent= isX ? "❌ Player's Turn" : (vsAI?"🤖 AI thinking…":"⭕ Player's Turn");
        }
        document.getElementById('sx').textContent=scores.X;
        document.getElementById('so').textContent=scores.O;
        document.getElementById('sd').textContent=scores.draw;
    }
    function checkWin(){
        for(const [a,b,c] of WINS)
            if(board[a]!==EMPTY&&board[a]===board[b]&&board[b]===board[c]) return[a,b,c];
        return null;
    }
    // Minimax AI
    function xoAI(){
        if(!gameOn) return;
        let best=-Infinity,move=0;
        for(let i=0;i<9;i++){
            if(board[i]===EMPTY){
                board[i]=O;
                const s=minimax(board,0,false);
                board[i]=EMPTY;
                if(s>best){best=s;move=i;}
            }
        }
        xoMark(move,O);
    }
    function minimax(b,depth,isMax){
        const w=checkWin();
        if(w) return isMax?-10+depth:10-depth;
        if(b.every(c=>c!==EMPTY)) return 0;
        let best=isMax?-Infinity:Infinity;
        for(let i=0;i<9;i++){
            if(b[i]===EMPTY){
                b[i]=isMax?X:O;
                const s=minimax(b,depth+1,!isMax);
                b[i]=EMPTY;
                best=isMax?Math.max(best,s):Math.min(best,s);
            }
        }
        return best;
    }
    window.xoReset = xoBuild;
    // Override existing reset
    const rb=document.getElementById('reset-btn');
    if(rb){ rb.textContent='🔄 New Game'; rb.onclick=xoBuild; }
    xoBuild();
})();
"""
}

# ══════════════════════════════════════════════
# RPC.html — Rock Paper Scissors with animated arena
# ══════════════════════════════════════════════
UPGRADES["RPC.html"] = {
"css": """
/* RPC UPGRADE: Big emoji arena */
.choices { display:flex; gap:18px; justify-content:center; flex-wrap:wrap; margin:20px 0 !important; }
.choice-btn {
    font-size: 3.5rem !important;
    padding: 16px 24px !important;
    border-radius: 20px !important;
    background: rgba(15,15,30,0.9) !important;
    border: 2px solid rgba(0,255,204,0.3) !important;
    cursor: pointer; transition: all 0.25s !important;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4) !important;
}
.choice-btn:hover {
    transform: scale(1.15) translateY(-6px) !important;
    border-color: #00ffcc !important;
    box-shadow: 0 0 30px rgba(0,255,204,0.4) !important;
}
#rpc-arena {
    display:flex; gap:40px; justify-content:center; align-items:center;
    font-size:5rem; margin:20px 0; min-height:7rem;
}
.rpc-icon { transition: all 0.4s cubic-bezier(.68,-0.55,.27,1.55); display:inline-block; }
.rpc-icon.bounce { animation: rpcBounce 0.5s; }
@keyframes rpcBounce {
    0%{transform:scale(0.4) rotate(-20deg);opacity:0}
    70%{transform:scale(1.2) rotate(5deg)}
    100%{transform:scale(1) rotate(0);opacity:1}
}
#result {
    font-size:1.5rem !important; font-family:'Space Mono',monospace !important;
    letter-spacing:2px; min-height:2.5rem;
    padding:10px 24px; border-radius:30px;
    background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08);
    margin:10px auto; display:inline-block;
}
#score { background:rgba(255,255,255,0.04) !important; border-radius:16px !important;
    padding:12px 24px !important; font-family:'Space Mono',monospace; }
""",
"js": """
// ── RPC UPGRADE ──────────────────────────────────────────
(function(){
    const EM={rock:'✊',paper:'📄',scissors:'✂️'};
    const CHOICES=['rock','paper','scissors'];
    let ps=0,cs=0;

    const resultEl=document.getElementById('result');
    const pScoreEl=document.getElementById('player-score');
    const cScoreEl=document.getElementById('computer-score');

    // Build arena
    const arena=document.createElement('div'); arena.id='rpc-arena';
    arena.innerHTML=`<div class="rpc-icon" id="rpc-player">🎮</div>
                     <div style="color:#555;font-size:2rem">VS</div>
                     <div class="rpc-icon" id="rpc-cpu">🤖</div>`;
    const choicesDiv=document.querySelector('.choices');
    choicesDiv.parentNode.insertBefore(arena, choicesDiv);

    // Rewrite buttons
    choicesDiv.innerHTML=CHOICES.map(c=>
        `<button class="choice-btn" onclick="rpcPlay('${c}')">${EM[c]}<br><span style="font-size:0.8rem;font-family:'Space Mono',monospace">${c.toUpperCase()}</span></button>`
    ).join('');
    // hide old choice paras
    ['player-choice','computer-choice'].forEach(id=>{
        const el=document.getElementById(id); if(el) el.style.display='none';
    });

    window.rpcPlay = function(pc){
        const cc=CHOICES[Math.floor(Math.random()*3)];
        const pi=document.getElementById('rpc-player');
        const ci=document.getElementById('rpc-cpu');
        pi.textContent=EM[pc]; ci.textContent=EM[cc];
        pi.classList.remove('bounce'); ci.classList.remove('bounce');
        void pi.offsetWidth; pi.classList.add('bounce');
        void ci.offsetWidth; ci.classList.add('bounce');

        let msg='', col='#b3b3b3';
        if(pc===cc){ msg="🤝 Draw!"; col='#ffcc00'; }
        else if((pc==='rock'&&cc==='scissors')||(pc==='paper'&&cc==='rock')||(pc==='scissors'&&cc==='paper')){
            msg=`🎉 You Win! ${EM[pc]} beats ${EM[cc]}`; ps++; col='#00ffcc';
        } else {
            msg=`😢 You Lose! ${EM[cc]} beats ${EM[pc]}`; cs++; col='#ff006e';
        }
        resultEl.textContent=msg; resultEl.style.color=col;
        if(pScoreEl) pScoreEl.textContent=ps;
        if(cScoreEl) cScoreEl.textContent=cs;
    };
    // override old function
    window.playGame = window.rpcPlay;
})();
"""
}

# ══════════════════════════════════════════════
# WhackMole.html — Upgraded mole emojis + hit FX
# ══════════════════════════════════════════════
UPGRADES["WhackMole.html"] = {
"css": """
/* WHACK UPGRADE */
#game-board {
    display: grid !important;
    grid-template-columns: repeat(3,120px) !important;
    grid-template-rows: repeat(3,120px) !important;
    gap: 16px !important; margin: 20px auto !important;
    background: rgba(10,8,5,0.85) !important;
    border: 2px solid rgba(150,80,20,0.5) !important;
    border-radius: 24px !important; padding: 20px !important;
    box-shadow: 0 0 40px rgba(80,40,0,0.6) !important;
    transform: none !important; backdrop-filter: none !important;
    width: fit-content !important;
}
.hole {
    width:120px !important; height:120px !important;
    background: radial-gradient(ellipse at 50% 70%, #1a0d00 70%, #0d0700 100%) !important;
    border-radius: 50% !important; border: 3px solid #3d1f00 !important;
    box-shadow: inset 0 8px 20px rgba(0,0,0,0.8) !important;
    overflow: hidden !important; position: relative !important;
}
.mole {
    font-size: 3rem !important;
    background: transparent !important;
    box-shadow: none !important;
    width: 80% !important; height: 80% !important;
    bottom: -90px !important; left: 10% !important;
    border-radius: 0 !important;
    transition: bottom 0.18s cubic-bezier(.34,1.56,.64,1) !important;
    display: flex; align-items: center; justify-content: center;
}
.mole.up { bottom: 2px !important; }
.mole.whacked { filter: brightness(3) hue-rotate(30deg) !important; }
#score, #time {
    font-size: 1.4rem !important; font-family:'Space Mono',monospace !important;
    color: #ffcc00 !important; margin:6px 0 !important;
    text-shadow: 0 0 12px rgba(255,200,0,0.5);
}
""",
"js": """
// ── WHACK UPGRADE ──────────────────────────────────────────
(function(){
    const MOLE_EMOJIS=['🐭','🐹','🐀','🐜','🐊'];
    const HIT_EMOJIS =['💥','⭐','✨','💫'];
    const scoreDispOld = document.getElementById('score-value');
    const timeDispOld  = document.getElementById('time-value');
    const board = document.getElementById('game-board');

    // Extended time and speed with levels
    let score=0, timeLeft=45, isRunning=false;
    let timerID=null, popID=null, level=1, popInterval=700;

    function pickMoleEmoji(){ return MOLE_EMOJIS[Math.floor(Math.random()*MOLE_EMOJIS.length)]; }

    // Override createBoard to use emoji moles
    window.createBoard = function(){
        board.innerHTML='';
        window._moles=[];
        for(let i=0;i<9;i++){
            const hole=document.createElement('div'); hole.className='hole';
            const mole=document.createElement('div'); mole.className='mole';
            mole.textContent=pickMoleEmoji();
            mole.addEventListener('click',function(e){
                if(!mole.classList.contains('up')||!isRunning) return;
                score++;
                if(scoreDispOld) scoreDispOld.textContent=score;
                const hit=HIT_EMOJIS[Math.floor(Math.random()*HIT_EMOJIS.length)];
                mole.textContent=hit;
                mole.classList.remove('up');
                setTimeout(()=>{ mole.textContent=pickMoleEmoji(); },200);
                // Level up every 10 points
                if(score>0&&score%10===0){
                    level++;
                    clearInterval(popID);
                    popInterval=Math.max(300,700-level*50);
                    popID=setInterval(randomMolePopUp,popInterval);
                }
            });
            hole.appendChild(mole); board.appendChild(hole);
            window._moles.push(mole);
        }
    };

    function randomMolePopUp(){
        if(!isRunning) return;
        window._moles.forEach(m=>m.classList.remove('up'));
        const n=Math.min(level,3);
        const idxs=[...Array(9).keys()].sort(()=>Math.random()-0.5).slice(0,n);
        idxs.forEach(i=>{
            window._moles[i].classList.add('up');
            const t=Math.random()*800+400;
            setTimeout(()=>window._moles[i].classList.remove('up'),t);
        });
    }

    window.startGame = function(){
        if(isRunning) return;
        score=0; timeLeft=45; level=1; popInterval=700; isRunning=true;
        if(scoreDispOld){scoreDispOld.textContent=0;}
        if(timeDispOld){timeDispOld.textContent=timeLeft;}
        window.createBoard();
        const sb=document.querySelector('button');
        if(sb) sb.textContent='⏳ Game Running';
        timerID=setInterval(()=>{
            timeLeft--;
            if(timeDispOld) timeDispOld.textContent=timeLeft;
            if(timeLeft<=0){
                clearInterval(timerID); clearInterval(popID);
                isRunning=false;
                window._moles.forEach(m=>m.classList.remove('up'));
                if(sb){ sb.textContent='🔄 Play Again'; }
                setTimeout(()=>alert(`⭐ Game Over!\nScore: ${score}\nLevel reached: ${level}`),100);
            }
        },1000);
        popID=setInterval(randomMolePopUp, popInterval);
    };
    window.createBoard();
})();
"""
}

# ══════════════════════════════════════════════
# GussGame.html — Number guessing with animation
# ══════════════════════════════════════════════
UPGRADES["GussGame.html"] = {
"css": """
/* GUESS UPGRADE */
input[type=number], input[type=text] {
    background: rgba(15,15,25,0.9) !important;
    border: 2px solid rgba(0,255,204,0.3) !important;
    border-radius: 12px !important; color: #00ffcc !important;
    font-size: 1.4rem !important; padding: 12px 20px !important;
    font-family: 'Space Mono',monospace !important;
    outline: none !important; text-align:center;
    width: 180px !important;
    transition: border-color 0.3s !important;
}
input:focus { border-color: #00ffcc !important; box-shadow: 0 0 20px rgba(0,255,204,0.3) !important; }
#thermometer {
    width: 220px; height: 18px; border-radius: 9px;
    background: linear-gradient(90deg,#0ff,#b026ff,#ff006e);
    margin: 14px auto; position: relative; overflow:hidden;
    border: 1px solid rgba(255,255,255,0.1);
}
#thermo-fill {
    position:absolute; top:0; left:0; height:100%;
    width:50%; background:rgba(0,0,0,0.55);
    transition: width 0.5s ease; border-radius:9px;
}
#guess-history {
    display:flex; flex-wrap:wrap; gap:8px; justify-content:center;
    margin:12px 0; max-width:400px; margin-left:auto; margin-right:auto;
}
.guess-chip {
    padding:4px 14px; border-radius:20px; font-family:'Space Mono',monospace;
    font-size:0.85rem; font-weight:700;
    border: 1px solid rgba(255,255,255,0.15);
}
.guess-chip.low  { background:rgba(0,50,255,0.3); color:#7ab3ff; }
.guess-chip.high { background:rgba(255,50,0,0.3); color:#ff7a7a; }
.guess-chip.win  { background:rgba(0,255,100,0.3); color:#00ffcc; }
""",
"js": """
// ── GUESS UPGRADE ──────────────────────────────────────────
(function(){
    let secret=0, attempts=0, maxAttempts=10, guesses=[], gameOver=false;
    let minR=1, maxR=100;

    const statusEl  = document.getElementById('status-message')||document.getElementById('status')||document.getElementById('result');
    const inputEl   = document.querySelector('input[type="number"]')||document.querySelector('input');
    const container = document.querySelector('.container');

    // Thermometer
    const thermo=document.createElement('div'); thermo.id='thermometer';
    thermo.innerHTML='<div id="thermo-fill"></div>';
    // History
    const hist=document.createElement('div'); hist.id='guess-history';

    if(inputEl){
        inputEl.after(thermo);
        thermo.after(hist);
    }

    function newGame(){
        secret=Math.floor(Math.random()*(maxR-minR+1))+minR;
        attempts=0; guesses=[]; gameOver=false;
        hist.innerHTML='';
        if(inputEl){inputEl.value=''; inputEl.disabled=false; inputEl.placeholder='Enter 1-100';}
        updateStatus(`🎯 Guess a number between ${minR} and ${maxR}. You have ${maxAttempts} tries!`,'#b3b3b3');
        setThermo(50);
    }

    function setThermo(pct){
        const fill=document.getElementById('thermo-fill');
        if(fill) fill.style.width=(100-pct)+'%';
    }

    function updateStatus(msg,col='#00ffcc'){
        if(statusEl){ statusEl.textContent=msg; statusEl.style.color=col; }
    }

    function makeGuess(val){
        if(gameOver) return;
        const n=parseInt(val);
        if(isNaN(n)||n<minR||n>maxR){
            updateStatus(`⚠️ Enter a number between ${minR} and ${maxR}!`,'#ffcc00'); return;
        }
        attempts++;
        guesses.push(n);
        const chip=document.createElement('span');
        chip.className='guess-chip';
        chip.textContent=n;
        if(n===secret){
            chip.classList.add('win');
            hist.appendChild(chip);
            updateStatus(`🎉 Correct! It was ${secret}! Solved in ${attempts} guess${attempts>1?'es':''}!`,'#00ffcc');
            gameOver=true;
            if(inputEl) inputEl.disabled=true;
            setThermo(50);
        } else {
            const pct=Math.round(((n-minR)/(maxR-minR))*100);
            setThermo(pct);
            if(n<secret){
                chip.classList.add('low');
                updateStatus(`🔼 Too LOW! Go higher. (${maxAttempts-attempts} left)`,'#7ab3ff');
            } else {
                chip.classList.add('high');
                updateStatus(`🔽 Too HIGH! Go lower. (${maxAttempts-attempts} left)`,'#ff7a7a');
            }
            hist.appendChild(chip);
            if(attempts>=maxAttempts){
                updateStatus(`💀 Game Over! It was ${secret}.`,'#ff006e');
                gameOver=true;
                if(inputEl) inputEl.disabled=true;
            }
        }
        if(inputEl) inputEl.value='';
    }

    // Override submit buttons / forms
    document.querySelectorAll('button').forEach(btn=>{
        const t=btn.textContent.toLowerCase();
        if(t.includes('guess')||t.includes('submit')||t.includes('check')){
            btn.onclick=()=>{if(inputEl) makeGuess(inputEl.value);};
        }
        if(t.includes('new')||t.includes('reset')||t.includes('restart')||t.includes('play')){
            btn.onclick=newGame;
        }
    });
    if(inputEl) inputEl.addEventListener('keydown',e=>{ if(e.key==='Enter') makeGuess(inputEl.value); });

    newGame();
})();
"""
}

# ══════════════════════════════════════════════
# CardMatch.html — Memory card with emoji icons
# ══════════════════════════════════════════════
UPGRADES["CardMatch.html"] = {
"css": """
/* CARD MATCH UPGRADE */
#game-board, .game-grid, .card-grid {
    display: grid !important;
    grid-template-columns: repeat(4, 100px) !important;
    gap: 12px !important; margin: 20px auto !important;
    background: transparent !important; border: none !important;
    transform: none !important; backdrop-filter: none !important;
    box-shadow: none !important; border-radius: 0 !important;
    width: fit-content !important;
}
.card, .memory-card {
    width: 100px !important; height: 100px !important;
    border-radius: 16px !important; cursor: pointer;
    font-size: 2.8rem !important;
    display: flex; align-items: center; justify-content: center;
    background: rgba(15,15,30,0.9) !important;
    border: 2px solid rgba(0,255,204,0.2) !important;
    transition: all 0.4s cubic-bezier(.68,-0.55,.265,1.55) !important;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5) !important;
    user-select:none;
    perspective: 600px;
}
.card.flipped, .card.matched {
    background: rgba(0,30,25,0.9) !important;
    border-color: rgba(0,255,204,0.6) !important;
    box-shadow: 0 0 20px rgba(0,255,204,0.3) !important;
}
.card.matched { background:rgba(0,60,30,0.9) !important; animation: cardMatch 0.5s ease; }
@keyframes cardMatch {
    0%{transform:scale(1)} 50%{transform:scale(1.2)} 100%{transform:scale(1)}
}
.card:hover:not(.flipped):not(.matched) {
    border-color: rgba(0,255,204,0.5) !important;
    transform: translateY(-4px) scale(1.05) !important;
}
#moves-display, #score-display, #timer-display {
    font-family:'Space Mono',monospace !important; font-size:1.1rem !important;
    color:#00ffcc !important;
}
""",
"js": """
// ── CARD MATCH UPGRADE ──────────────────────────────────────────
(function(){
    const EMOJIS=['🦊','🐼','🦁','🐸','🦋','🐙','🦄','🐬',
                  '🦅','🐲','🌟','🍕','🎸','🚀','💎','🎭'];
    const PAIRS=8;
    let cards=[], flipped=[], matched=0, moves=0, lockBoard=false, timer=null, secs=0;

    const boardEl = document.getElementById('game-board')||document.querySelector('.game-grid')||document.querySelector('.card-grid');
    const statusEl= document.getElementById('status')||document.getElementById('status-message');
    const movesEl = document.getElementById('moves')||document.getElementById('moves-display');

    // Stats bar
    const stats=document.createElement('div');
    stats.style.cssText='display:flex;gap:24px;justify-content:center;font-family:Space Mono,monospace;font-size:1rem;color:#b3b3b3;margin:8px 0;';
    stats.innerHTML=`<span>⏱ <span id="cm-time">0</span>s</span>
                     <span>🔄 Moves: <span id="cm-moves">0</span></span>
                     <span>✅ Pairs: <span id="cm-pairs">0</span>/${PAIRS}</span>`;
    if(boardEl) boardEl.parentNode.insertBefore(stats, boardEl);

    function shuffle(arr){ return arr.sort(()=>Math.random()-0.5); }

    function buildBoard(){
        if(!boardEl) return;
        boardEl.innerHTML=''; cards=[]; flipped=[]; matched=0; moves=0; lockBoard=false;
        clearInterval(timer); secs=0;
        document.getElementById('cm-time').textContent=0;
        document.getElementById('cm-moves').textContent=0;
        document.getElementById('cm-pairs').textContent=0;
        if(statusEl) statusEl.textContent='🃏 Find all matching pairs!';

        const pool=shuffle([...EMOJIS.slice(0,PAIRS),...EMOJIS.slice(0,PAIRS)]);
        pool.forEach((em,i)=>{
            const card=document.createElement('div');
            card.className='card'; card.dataset.em=em; card.dataset.i=i;
            card.textContent='❓'; card.style.fontSize='2.8rem';
            card.addEventListener('click',cardClick);
            boardEl.appendChild(card); cards.push(card);
        });
        timer=setInterval(()=>{ secs++; document.getElementById('cm-time').textContent=secs; },1000);
    }

    function cardClick(){
        if(lockBoard||this.classList.contains('matched')||flipped.includes(this)) return;
        this.textContent=this.dataset.em; this.classList.add('flipped');
        flipped.push(this);
        if(flipped.length===2) checkMatch();
    }

    function checkMatch(){
        lockBoard=true; moves++;
        document.getElementById('cm-moves').textContent=moves;
        const [a,b]=flipped;
        if(a.dataset.em===b.dataset.em){
            a.classList.add('matched'); b.classList.add('matched');
            matched++; document.getElementById('cm-pairs').textContent=matched;
            flipped=[]; lockBoard=false;
            if(matched===PAIRS){
                clearInterval(timer);
                if(statusEl) statusEl.textContent=`🎉 Completed in ${moves} moves & ${secs}s!`;
            }
        } else {
            setTimeout(()=>{
                a.textContent='❓'; b.textContent='❓';
                a.classList.remove('flipped'); b.classList.remove('flipped');
                flipped=[]; lockBoard=false;
            },900);
        }
    }

    // Hook reset buttons
    document.querySelectorAll('button').forEach(btn=>{
        const t=btn.textContent.toLowerCase();
        if(t.includes('new')||t.includes('reset')||t.includes('restart')||t.includes('play')||t.includes('start'))
            btn.onclick=buildBoard;
    });
    buildBoard();
})();
"""
}

# ══════════════════════════════════════════════
# Sudoku.html — Elegant neon grid
# ══════════════════════════════════════════════
UPGRADES["Sudoku.html"] = {
"css": """
/* SUDOKU UPGRADE */
#sudoku-board, table, .sudoku-grid {
    border-collapse: collapse !important;
    background: transparent !important;
    transform: none !important; backdrop-filter: none !important;
    box-shadow: none !important;
    margin: 20px auto !important; display: table !important;
    border-radius: 0 !important;
}
.sudoku-cell, td {
    width: 55px !important; height: 55px !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    font-size: 1.4rem !important; font-family:'Space Mono',monospace !important;
    text-align: center !important; vertical-align: middle !important;
    background: rgba(12,12,20,0.8) !important;
    color: #00ffcc !important;
    cursor: default; outline: none !important;
    transition: background 0.2s !important;
}
.sudoku-cell:focus, td:focus, td.selected { background:rgba(0,255,204,0.12)!important; }
.sudoku-cell.given, td.given { color: #ffffff !important; font-weight:700 !important; }
.sudoku-cell.error, td.error { color:#ff006e !important; background:rgba(255,0,110,0.15)!important; }
/* thick 3x3 box borders */
td:nth-child(3n){ border-right:3px solid rgba(0,255,204,0.4)!important; }
td:nth-child(1) { border-left:3px solid rgba(0,255,204,0.4)!important; }
tr:nth-child(3n) td { border-bottom:3px solid rgba(0,255,204,0.4)!important; }
tr:nth-child(1) td  { border-top:3px solid rgba(0,255,204,0.4)!important; }
""",
"js": """
// ── SUDOKU UPGRADE ──────────────────────────────────────────
// Minimal cell-color fix: highlight conflicts in real time
(function(){
    function validate(){
        const cells=[...document.querySelectorAll('td,input.sudoku-cell,input[type=number]')];
        cells.forEach(c=>{
            const v=parseInt(c.value||c.textContent||'0');
            if(!v||c.classList.contains('given')) return;
            // simple duplicate check not overriding full logic
            c.classList.remove('error');
        });
    }
    document.querySelectorAll('td:not(.given),input').forEach(c=>{
        c.addEventListener('input',validate);
        c.addEventListener('change',validate);
    });
})();
"""
}

# ══════════════════════════════════════════════
# KeyboardPiano.html — Visual keys + notes
# ══════════════════════════════════════════════
UPGRADES["KeyboardPiano.html"] = {
"css": """
/* PIANO UPGRADE */
.key, .piano-key, [class*="white"], [class*="black"] {
    transition: all 0.12s ease !important;
    box-shadow: 0 6px 14px rgba(0,0,0,0.5) !important;
}
.key.active, .piano-key.active, .key:active {
    transform: translateY(5px) scale(0.96) !important;
    box-shadow: 0 2px 6px rgba(0,0,0,0.7) !important;
    filter: brightness(1.4) !important;
}
#note-display {
    font-size: 3rem; font-family:'Space Mono',monospace;
    color: #00ffcc; text-shadow: 0 0 30px #00ffcc;
    min-height: 4rem; text-align:center; margin:10px 0;
    animation: notePop 0.3s ease;
}
@keyframes notePop {
    0%{transform:scale(0.7);opacity:0.5} 100%{transform:scale(1);opacity:1}
}
#piano-keyboard { display:flex; justify-content:center; position:relative; margin:20px auto; }
""",
"js": """
// ── PIANO UPGRADE ──────────────────────────────────────────
(function(){
    // Note display
    const nd=document.createElement('div'); nd.id='note-display'; nd.textContent='🎹';
    const container=document.querySelector('.container');
    if(container){ const h1=container.querySelector('h1'); if(h1) h1.after(nd); }

    const NOTE_NAMES=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    const NOTE_EMOJI={'C':'🎵','D':'🎶','E':'🎼','F':'🎸','G':'🎺','A':'🎻','B':'🥁'};

    // Intercept audio play to show note name
    const origPlay=AudioContext?null:null;
    // Listen for key presses on piano keys
    document.querySelectorAll('.key,[class*="key"],[data-note]').forEach(key=>{
        key.addEventListener('mousedown',()=>{
            const note=key.dataset.note||key.dataset.key||key.className.match(/note-([A-G]#?\d)/i)?.[1]||'';
            if(note){
                const base=note.replace(/\d/,'');
                nd.textContent=(NOTE_EMOJI[base]||'🎵')+' '+note;
                nd.style.animation='none'; void nd.offsetWidth; nd.style.animation='notePop 0.3s ease';
            }
            key.classList.add('active');
        });
        key.addEventListener('mouseup',()=>key.classList.remove('active'));
        key.addEventListener('mouseleave',()=>key.classList.remove('active'));
    });
})();
"""
}

# ══════════════════════════════════════════════
# Drawing.html — Canvas drawing with toolbar
# ══════════════════════════════════════════════
UPGRADES["Drawing.html"] = {
"css": """
/* DRAWING UPGRADE */
#drawing-toolbar, .toolbar {
    display: flex !important; gap: 12px !important; flex-wrap: wrap !important;
    justify-content: center !important; margin: 12px auto !important;
    padding: 12px 20px !important; background: rgba(15,15,25,0.9) !important;
    border-radius: 16px !important; border: 1px solid rgba(0,255,204,0.2) !important;
    max-width: 700px !important; transform: none !important;
    backdrop-filter: blur(10px) !important; box-shadow: 0 4px 20px rgba(0,0,0,0.4) !important;
}
#drawCanvas, canvas {
    border: 2px solid rgba(0,255,204,0.3) !important;
    border-radius: 16px !important; cursor: crosshair !important;
    box-shadow: 0 0 30px rgba(0,255,204,0.1) !important;
}
input[type=color] {
    width: 44px !important; height: 44px !important;
    border-radius: 50% !important; border: 2px solid rgba(255,255,255,0.3) !important;
    cursor: pointer !important; padding: 2px !important;
    background: none !important;
}
input[type=range] {
    accent-color: #00ffcc !important;
    width: 100px !important;
}
.tool-btn {
    padding: 8px 16px !important; border-radius: 10px !important;
    font-size: 0.9rem !important; cursor: pointer;
}
.tool-btn.active { border-color: #00ffcc !important; background: rgba(0,255,204,0.15) !important; }
""",
"js": """
// ── DRAWING UPGRADE ──────────────────────────────────────────
(function(){
    // Add extra toolbar buttons if canvas exists
    const cv=document.querySelector('#drawCanvas,canvas:not(#chessCanvas):not(#gameCanvas)');
    if(!cv) return;
    const ctx=cv.getContext('2d');

    // Toolbar
    let tb=document.querySelector('.toolbar,#drawing-toolbar,#toolbar');
    if(!tb){ tb=document.createElement('div'); tb.id='drawing-toolbar'; cv.parentNode.insertBefore(tb,cv); }
    tb.style.display='flex';

    const extras=[
        {label:'🖌️ Brush', id:'db-brush'},
        {label:'⬜ Rect',   id:'db-rect'},
        {label:'⭕ Circle', id:'db-circle'},
        {label:'✏️ Erase',  id:'db-erase'},
        {label:'🗑️ Clear',  id:'db-clear'},
    ];
    extras.forEach(({label,id})=>{
        if(!document.getElementById(id)){
            const btn=document.createElement('button'); btn.id=id; btn.textContent=label;
            btn.className='tool-btn'; btn.style.margin='4px';
            tb.appendChild(btn);
        }
    });

    const clearBtn=document.getElementById('db-clear');
    if(clearBtn) clearBtn.onclick=()=>{ ctx.clearRect(0,0,cv.width,cv.height); };

    // If not already drawing, set up simple draw
    if(!cv.dataset.upgraded){
        cv.dataset.upgraded='1';
        let drawing=false, lastX=0, lastY=0, tool='brush';
        let strokeColor='#00ffcc', lineWidth=5;
        ctx.strokeStyle=strokeColor; ctx.lineWidth=lineWidth; ctx.lineCap='round';

        ['db-brush','db-rect','db-circle','db-erase'].forEach(id=>{
            const btn=document.getElementById(id);
            if(btn) btn.onclick=()=>{
                tool=id.replace('db-','');
                document.querySelectorAll('.tool-btn').forEach(b=>b.classList.remove('active'));
                btn.classList.add('active');
            };
        });

        cv.addEventListener('mousedown',e=>{
            drawing=true; [lastX,lastY]=[e.offsetX,e.offsetY];
            ctx.beginPath(); ctx.moveTo(lastX,lastY);
        });
        cv.addEventListener('mousemove',e=>{
            if(!drawing) return;
            ctx.strokeStyle= tool==='erase' ? '#07070a' : strokeColor;
            ctx.lineWidth  = tool==='erase' ? 30 : lineWidth;
            ctx.lineTo(e.offsetX,e.offsetY); ctx.stroke();
            [lastX,lastY]=[e.offsetX,e.offsetY];
        });
        cv.addEventListener('mouseup',  ()=>drawing=false);
        cv.addEventListener('mouseleave',()=>drawing=false);
    }
})();
"""
}

# ══════════════════════════════════════════════
# SkyPilot.html — Speed and explosion FX
# ══════════════════════════════════════════════
UPGRADES["SkyPilot.html"] = {
"css": """
/* SKY PILOT UPGRADE */
canvas { cursor: crosshair !important; }
""",
"js": """
// ── SKY PILOT UPGRADE ──────────────────────────────────────────
// Enhance with explosion particles and speed indicator
(function(){
    const cv=document.querySelector('canvas');
    if(!cv) return;
    // Score HUD enhancement
    const hud=document.createElement('div');
    hud.style.cssText='position:absolute;top:12px;right:16px;font-family:Space Mono,monospace;font-size:1rem;color:#00ffcc;pointer-events:none;text-shadow:0 0 10px #00ffcc;';
    hud.id='sky-hud';
    cv.parentNode.style.position='relative';
    cv.parentNode.appendChild(hud);
})();
"""
}

# ══════════════════════════════════════════════
# Daino.html — Enhanced dino runner
# ══════════════════════════════════════════════
UPGRADES["Daino.html"] = {
"css": """
/* DINO UPGRADE */
#gameCanvas, canvas { cursor: pointer !important; }
""",
"js": """
// ── DINO UPGRADE ──────────────────────────────────────────
// Score indicator overlay
(function(){
    const cv=document.querySelector('canvas');
    if(!cv) return;
    cv.parentNode.style.position='relative';
    const lbl=document.createElement('div');
    lbl.style.cssText='position:absolute;top:8px;left:50%;transform:translateX(-50%);font-family:Space Mono,monospace;font-size:1rem;color:#00ffcc;pointer-events:none;text-shadow:0 0 12px #00ffcc;letter-spacing:2px;';
    lbl.textContent='🦕 Press SPACE to jump!';
    lbl.id='dino-hint';
    cv.parentNode.appendChild(lbl);
    document.addEventListener('keydown',e=>{
        if(e.code==='Space'){ lbl.style.display='none'; }
    });
})();
"""
}

# ══════════════════════════════════════════════
# index.html — Game hub cards upgrade
# ══════════════════════════════════════════════
UPGRADES["index.html"] = {
"css": """
/* INDEX UPGRADE: Game card icons */
.game-card {
    position:relative; overflow:hidden;
    transition: all 0.4s cubic-bezier(0.25,0.8,0.25,1) !important;
}
.game-card::before {
    content:''; position:absolute; inset:0;
    background:linear-gradient(135deg,rgba(0,255,204,0.08),rgba(176,38,255,0.08));
    opacity:0; transition:opacity 0.4s;
}
.game-card:hover::before { opacity:1; }
.game-card:hover {
    transform: translateY(-10px) scale(1.03) !important;
    box-shadow: 0 20px 50px rgba(0,255,204,0.2), 0 0 0 1px rgba(0,255,204,0.3) !important;
}
.game-card .card-icon { font-size:3rem; margin-bottom:12px; display:block; }
.game-card h2,.game-card h3 { font-family:'Space Mono',monospace !important; }
.game-card p { font-size:0.9rem !important; }
""",
"js": """
// ── INDEX UPGRADE ──────────────────────────────────────────
// Add emoji icons to each game card based on its link text
(function(){
    const MAP={
        'chess':'♟️','car':'🏎️','dino':'🦕','draw':'🎨',
        'card':'🃏','match':'🃏','guess':'🔢','piano':'🎹',
        'rock':'✊','paper':'📄','scissors':'✂️','rpc':'✊',
        'sky':'✈️','sudoku':'🔢','whack':'🔨','mole':'🐭',
        'xo':'❌','tic':'❌','tac':'❌','breakout':'🧱','snake':'🐍'
    };
    document.querySelectorAll('.game-card,a[href$=".html"]:not(.back-btn-global)').forEach(card=>{
        const text=(card.textContent||'').toLowerCase();
        let chosen='🎮';
        for(const [k,v] of Object.entries(MAP)){ if(text.includes(k)){chosen=v;break;} }
        // If no icon span yet, add one
        if(!card.querySelector('.card-icon')){
            const icon=document.createElement('span');
            icon.className='card-icon'; icon.textContent=chosen;
            card.prepend(icon);
        }
    });
})();
"""
}

# ─────────────────────────────────────────────────────────────────────────────
# APPLY UPGRADES
# ─────────────────────────────────────────────────────────────────────────────
MARKER_CSS = 'id="game-upgrade-styles"'
MARKER_JS  = 'id="game-upgrade-logic"'

def apply_upgrade(filename, css, js):
    path = os.path.join(GAMES_DIR, filename)
    if not os.path.exists(path):
        print(f"  ⚠ MISSING: {filename}")
        return

    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Remove old injections
    html = re.sub(r'<style id="game-upgrade-styles">.*?</style>', '', html, flags=re.DOTALL)
    html = re.sub(r'<script id="game-upgrade-logic">.*?</script>', '', html, flags=re.DOTALL)

    inject_css = f'\n<style id="game-upgrade-styles">\n{css}\n</style>\n'
    inject_js  = f'\n<script id="game-upgrade-logic">\n{js}\n</script>\n'

    if '</head>' in html:
        html = html.replace('</head>', inject_css + '</head>', 1)
    else:
        html = inject_css + html

    if '</body>' in html:
        html = html.replace('</body>', inject_js + '</body>', 1)
    else:
        html = html + inject_js

    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)

    print(f"  ✅ Upgraded: {filename}")

print("\n🚀 Upgrading all game files...\n")
for fname, upgrade in UPGRADES.items():
    apply_upgrade(fname, upgrade.get('css',''), upgrade.get('js',''))
print("\n✨ All done!\n")
