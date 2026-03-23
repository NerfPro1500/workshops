const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const flashMessageEl = document.getElementById('flash-message');

// ─── Constants ───────────────────────────────────────────────
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
const GRAVITY = 0.45;
const JUMP_FORCE = -10.5;
const SPEED = 3.2;

// ─── Colors ──────────────────────────────────────────────────
const COLORS = {
  bg: '#0d1117',
  ground: '#2a3a5a',
  platformLow: '#2a5a3a',
  platformMid: '#5a3a2a',
  platformHigh: '#5a2a5a',
  platformTarget: '#2a4a5a',
  player: '#4488ff',
  playerEye: '#ffffff',
  boots: '#00ddaa',
  wand: '#ffaa00',
  bullet: '#ffff44',
  target: '#cc3333',
  targetDead: '#444',
  hud: 'rgba(0,0,0,0.65)',
  locked: '#ff5555',
  unlocked: '#44ff99',
  neutral: '#99aabb',
};

// ─── Platforms ───────────────────────────────────────────────
// { x, y, w, h, color, label? }
const platforms = [
  { x: 0, y: 370, w: CANVAS_WIDTH, h: 30, color: COLORS.ground }, // ground
  { x: 60, y: 300, w: 110, h: 12, color: COLORS.platformLow }, // low left
  { x: 240, y: 240, w: 100, h: 12, color: COLORS.platformMid }, // mid (boots here)
  { x: 430, y: 95, w: 110, h: 12, color: COLORS.platformHigh }, // high (needs double jump, wand here)
  { x: 590, y: 280, w: 110, h: 12, color: COLORS.platformTarget }, // target platform
];

// ─── Signs / hints in the world ──────────────────────────────
const signs = [
  { x: 430, y: 120, text: '? Need to jump higher ?', color: '#886644' },
];

// ─── Pickups ─────────────────────────────────────────────────
const pickups = [
  {
    id: 'boots',
    x: 272, y: 216,
    w: 22, h: 22,
    color: COLORS.boots,
    glowColor: '#00ffcc',
    label: 'BOOTS',
    sublabel: 'Double Jump',
    collected: false,
    bobOffset: 0,
  },
  {
    id: 'wand',
    x: 460, y: 84,
    w: 22, h: 22,
    color: COLORS.wand,
    glowColor: '#ffcc44',
    label: 'WAND',
    sublabel: 'Shoot [Z]',
    collected: false,
    bobOffset: Math.PI, // phase offset so they bob out of sync
  },
];

// ─── Target ──────────────────────────────────────────────────
const target = {
  x: 614, y: 248,
  w: 28, h: 28,
  hp: 3, maxHp: 3,
};

// ─── Player ──────────────────────────────────────────────────
const player = {
  x: 30, y: 300,
  w: 22, h: 28,
  vx: 0, vy: 0,
  onGround: false,
  jumpsLeft: 1,
  maxJumps: 1,
  hasDoubleJump: false,
  hasWand: false,
  facingRight: true,
  bullets: [],
};

// ─── Input ───────────────────────────────────────────────────
const heldKeys = {};
let jumpKeyPressedConsumed = false;
let shootKeyConsumed = false;

document.addEventListener('keydown', e => {
  heldKeys[e.key] = true;
  // Prevent page scroll on space/arrows
  if ([' ', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
    e.preventDefault();
  }
});
document.addEventListener('keyup', e => {
  heldKeys[e.key] = false;
  if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
    jumpKeyPressedConsumed = false;
  }
  if (e.key === 'z' || e.key === 'Z') {
    shootKeyConsumed = false;
  }
});

// ─── Flash message ───────────────────────────────────────────
let flashFramesRemaining = 0;

function showFlash(text, color) {
  flashMessageEl.textContent = text;
  flashMessageEl.style.color = color;
  flashMessageEl.style.opacity = '1';
  flashFramesRemaining = 120; // frames
}

// ─── Collision helpers ───────────────────────────────────────
function rectsOverlap(ax, ay, aw, ah, bx, by, bw, bh) {
  return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
}

// ─── Update ──────────────────────────────────────────────────
let tick = 0;

function update() {
  tick++;

  // Player movement
  player.vx = 0;
  if (heldKeys['ArrowLeft'] || heldKeys['a'] || heldKeys['A']) {
    player.vx = -SPEED;
    player.facingRight = false;
  }
  if (heldKeys['ArrowRight'] || heldKeys['d'] || heldKeys['D']) {
    player.vx = SPEED;
    player.facingRight = true;
  }

  // Jump
  const jumpKeyPressed = heldKeys[' '] || heldKeys['ArrowUp'] || heldKeys['w'] || heldKeys['W'];
  if (jumpKeyPressed && !jumpKeyPressedConsumed && player.jumpsLeft > 0) {
    jumpKeyPressedConsumed = true;
    player.vy = JUMP_FORCE;
    player.jumpsLeft--;
  }

  // Gravity
  player.vy += GRAVITY;
  if (player.vy > 14) player.vy = 14; // terminal velocity

  // Move X
  player.x += player.vx;
  player.x = Math.max(0, Math.min(CANVAS_WIDTH - player.w, player.x));

  // Move Y
  player.y += player.vy;

  // Platform collisions (land-on-top only)
  player.onGround = false;
  for (const platform of platforms) {
    const wasAbove = (player.y + player.h - player.vy) <= platform.y + 2;
    if (
      player.vy >= 0 &&
      wasAbove &&
      player.x + player.w > platform.x &&
      player.x < platform.x + platform.w &&
      player.y + player.h >= platform.y &&
      player.y + player.h <= platform.y + platform.h + 2
    ) {
      player.y = platform.y - player.h;
      player.vy = 0;
      player.onGround = true;
      player.jumpsLeft = player.maxJumps;
    }
  }

  // Fall off bottom — respawn
  if (player.y > CANVAS_HEIGHT + 50) {
    player.x = 30;
    player.y = 300;
    player.vx = 0;
    player.vy = 0;
  }

  // Pickup collisions
  for (const pickup of pickups) {
    if (!pickup.collected && rectsOverlap(player.x, player.y, player.w, player.h, pickup.x, pickup.y - pickup.h * 0.5, pickup.w, pickup.h)) {
      pickup.collected = true;
      if (pickup.id === 'boots') {
        player.maxJumps = 2;
        player.hasDoubleJump = true;
        showFlash('Double Jump Unlocked!', COLORS.boots);
      }
      if (pickup.id === 'wand') {
        player.hasWand = true;
        showFlash('Shoot Unlocked! [Z]', COLORS.wand);
      }
    }
  }

  // Shoot
  if (heldKeys['z'] || heldKeys['Z']) {
    if (!shootKeyConsumed && player.hasWand) {
      shootKeyConsumed = true;
      player.bullets.push({
        x: player.x + (player.facingRight ? player.w + 2 : -8),
        y: player.y + player.h * 0.4,
        vx: player.facingRight ? 9 : -9,
        active: true,
      });
    }
  }

  // Update bullets
  for (const bullet of player.bullets) {
    if (!bullet.active) continue;
    bullet.x += bullet.vx;
    if (bullet.x < -20 || bullet.x > CANVAS_WIDTH + 20) { bullet.active = false; continue; }

    // Hit target
    if (target.hp > 0 && rectsOverlap(bullet.x - 4, bullet.y - 3, 8, 6, target.x, target.y, target.w, target.h)) {
      bullet.active = false;
      target.hp--;
      if (target.hp === 0) {
        showFlash('Target Defeated!', '#ff8844');
      }
    }
  }
  player.bullets = player.bullets.filter(bullet => bullet.active);

  // Flash message decay
  if (flashFramesRemaining > 0) {
    flashFramesRemaining--;
    if (flashFramesRemaining === 20) {
      flashMessageEl.style.transition = 'opacity 0.4s';
      flashMessageEl.style.opacity = '0';
    }
  }

  // Bob pickups
  for (const pickup of pickups) {
    pickup.bobOffset += 0.05;
  }
}

// ─── Draw ────────────────────────────────────────────────────

function drawRoundRect(x, y, w, h, r, fill) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
  ctx.fillStyle = fill;
  ctx.fill();
}

function draw() {
  // Background
  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Background grid (subtle)
  ctx.strokeStyle = 'rgba(255,255,255,0.03)';
  ctx.lineWidth = 1;
  for (let gx = 0; gx < CANVAS_WIDTH; gx += 40) { ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, CANVAS_HEIGHT); ctx.stroke(); }
  for (let gy = 0; gy < CANVAS_HEIGHT; gy += 40) { ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(CANVAS_WIDTH, gy); ctx.stroke(); }

  // Platforms
  for (const platform of platforms) {
    ctx.fillStyle = platform.color;
    ctx.fillRect(platform.x, platform.y, platform.w, platform.h);
    // Top highlight
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.fillRect(platform.x, platform.y, platform.w, 2);
  }

  // Signs
  for (const sign of signs) {
    ctx.fillStyle = sign.color;
    ctx.font = 'bold 10px Courier New';
    ctx.textAlign = 'center';
    ctx.fillText(sign.text, sign.x + 55, sign.y);
  }

  // Pickups (bobbing)
  for (const pickup of pickups) {
    if (pickup.collected) continue;
    const bobAmount = Math.sin(pickup.bobOffset) * 4;
    const bobbingY = pickup.y + bobAmount;

    // Glow
    ctx.shadowColor = pickup.glowColor;
    ctx.shadowBlur = 14;
    ctx.fillStyle = pickup.color;
    ctx.fillRect(pickup.x, bobbingY - pickup.h * 0.5, pickup.w, pickup.h);
    ctx.shadowBlur = 0;

    // Label
    ctx.fillStyle = pickup.color;
    ctx.font = 'bold 9px Courier New';
    ctx.textAlign = 'center';
    ctx.fillText(pickup.label, pickup.x + pickup.w / 2, bobbingY - pickup.h * 0.5 - 12);
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.font = '8px Courier New';
    ctx.fillText(pickup.sublabel, pickup.x + pickup.w / 2, bobbingY - pickup.h * 0.5 - 3);
  }

  // Target
  {
    const isAlive = target.hp > 0;
    ctx.fillStyle = isAlive ? COLORS.target : COLORS.targetDead;
    ctx.fillRect(target.x, target.y, target.w, target.h);

    if (isAlive) {
      // X face
      ctx.strokeStyle = 'rgba(255,255,255,0.6)';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(target.x + 6, target.y + 6); ctx.lineTo(target.x + target.w - 6, target.y + target.h - 6); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(target.x + target.w - 6, target.y + 6); ctx.lineTo(target.x + 6, target.y + target.h - 6); ctx.stroke();

      // HP bar
      ctx.fillStyle = '#333';
      ctx.fillRect(target.x, target.y - 8, target.w, 5);
      ctx.fillStyle = '#ff4444';
      ctx.fillRect(target.x, target.y - 8, target.w * target.hp / target.maxHp, 5);
      ctx.strokeStyle = '#555';
      ctx.lineWidth = 1;
      ctx.strokeRect(target.x, target.y - 8, target.w, 5);
    } else {
      ctx.fillStyle = '#888';
      ctx.font = 'bold 9px Courier New';
      ctx.textAlign = 'center';
      ctx.fillText('DEFEATED', target.x + target.w / 2, target.y + target.h + 12);
    }

    // Label above
    if (isAlive) {
      ctx.fillStyle = '#ff7777';
      ctx.font = 'bold 9px Courier New';
      ctx.textAlign = 'center';
      ctx.fillText('TARGET', target.x + target.w / 2, target.y - 12);
    }
  }

  // Bullets
  ctx.shadowColor = '#ffff88';
  ctx.shadowBlur = 6;
  ctx.fillStyle = COLORS.bullet;
  for (const bullet of player.bullets) {
    ctx.fillRect(bullet.x - 5, bullet.y - 2, 10, 4);
  }
  ctx.shadowBlur = 0;

  // Player
  {
    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fillRect(player.x + 2, player.y + player.h - 2, player.w - 4, 4);

    // Body
    ctx.fillStyle = COLORS.player;
    ctx.fillRect(player.x, player.y, player.w, player.h);

    // Shine
    ctx.fillStyle = 'rgba(255,255,255,0.12)';
    ctx.fillRect(player.x + 2, player.y + 2, player.w * 0.4, player.h * 0.45);

    // Eye
    const eyeX = player.facingRight ? player.x + player.w - 8 : player.x + 4;
    ctx.fillStyle = COLORS.playerEye;
    ctx.fillRect(eyeX, player.y + 7, 5, 5);
    ctx.fillStyle = '#001133';
    ctx.fillRect(eyeX + (player.facingRight ? 2 : 0), player.y + 8, 3, 3);

    // Boots indicator (green feet when has double jump)
    if (player.hasDoubleJump) {
      ctx.fillStyle = COLORS.boots;
      ctx.fillRect(player.x + 2, player.y + player.h - 5, player.w - 4, 5);
    }

    // Wand indicator (orange on arm when has wand)
    if (player.hasWand) {
      const wristX = player.facingRight ? player.x + player.w - 3 : player.x - 3;
      ctx.fillStyle = COLORS.wand;
      ctx.fillRect(wristX, player.y + 12, 6, 4);
    }
  }

  // HUD
  drawHUD();

  // Minimap arrow showing right if not seen everything
  if (!pickups[0].collected || !pickups[1].collected) {
    const collectedCount = pickups.filter(pickup => pickup.collected).length;
    if (collectedCount < pickups.length) {
      ctx.fillStyle = 'rgba(255,255,255,0.25)';
      ctx.font = '11px Courier New';
      ctx.textAlign = 'right';
      ctx.fillText('explore -->', CANVAS_WIDTH - 8, CANVAS_HEIGHT - 8);
    }
  }
}

function drawHUD() {
  const hudX = 8, hudY = 8;
  const hudWidth = 195, hudHeight = 84;

  drawRoundRect(hudX, hudY, hudWidth, hudHeight, 4, COLORS.hud);
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 1;
  ctx.strokeRect(hudX, hudY, hudWidth, hudHeight);

  ctx.font = 'bold 11px Courier New';
  ctx.textAlign = 'left';

  // Jump
  ctx.fillStyle = COLORS.unlocked;
  ctx.fillText('Jump:         UNLOCKED', hudX + 10, hudY + 20);

  // Double jump
  if (player.hasDoubleJump) {
    ctx.fillStyle = COLORS.boots;
    ctx.fillText('Double Jump:  UNLOCKED', hudX + 10, hudY + 38);
  } else {
    ctx.fillStyle = COLORS.locked;
    ctx.fillText('Double Jump:  LOCKED', hudX + 10, hudY + 38);
  }

  // Wand / shoot
  if (player.hasWand) {
    ctx.fillStyle = COLORS.wand;
    ctx.fillText('Shoot [Z]:    UNLOCKED', hudX + 10, hudY + 56);
  } else {
    ctx.fillStyle = COLORS.locked;
    ctx.fillText('Shoot [Z]:    LOCKED', hudX + 10, hudY + 56);
  }

  // Jumps remaining pips
  ctx.fillStyle = COLORS.neutral;
  ctx.font = '9px Courier New';
  ctx.fillText(`Jumps left: ${player.jumpsLeft} / ${player.maxJumps}`, hudX + 10, hudY + 73);
}

// ─── Game loop ───────────────────────────────────────────────
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
