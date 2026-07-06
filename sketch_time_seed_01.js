const SEED = 12345;


const L = 70;
const STEPS = 20000;

let walk;

function setup() {
  createCanvas(700, 700);
  // noLoop();
  // randomSeed(SEED);
}

function draw(){
  if (frameCount % (2 * 60) === 1) {
  randomSeed(floor(Date.now() / 10000));
  background(255);
  walk = mansfieldWalk2D(L, STEPS);
  drawWalk(walk, L, width, height);
}
}

function drawWalk(walk) {
  const margin = 50;
  const spacing = (width - 2 * margin) / (L - 1);

  background(0);

  stroke(255);
  strokeWeight(2);
  noFill();

  beginShape();
  for (const [x, y] of walk) {
    vertex(margin + x * spacing, margin + y * spacing);
  }
  endShape();

  // endpoints
  // noStroke();
  // fill(0);
  // circle(margin + walk[0][0] * spacing, margin + walk[0][1] * spacing, 10);
  // circle(
  //   margin + walk[walk.length - 1][0] * spacing,
  //   margin + walk[walk.length - 1][1] * spacing,
  //   10
  // );
}

function mansfieldWalk2D(L, steps) {
  const N = L * L;
  let order = ploughOrder(L);
  const pos = new Array(N);
  rebuildPositions(order, pos);

  for (let s = 0; s < steps; s++) {
    const moves = possibleMoves(L, order);
    if (moves.length === 0) continue;

    // Mansfield/backbite acceptance correction.
    if (random() >= moves.length / 4) continue;

    const move = random(moves);
    const p = pos[move.site];

    if (move.end === 0) {
      order = order.slice(0, p).reverse().concat(order.slice(p));
    } else {
      order = order.slice(0, p + 1).concat(order.slice(p + 1).reverse());
    }

    rebuildPositions(order, pos);
  }

  return order.map(id => [id % L, floor(id / L)]);
}

function possibleMoves(L, order) {
  const N = order.length;
  const moves = [];

  addMoves(L, order[0], order[1], order[N - 1], 0, moves);
  addMoves(L, order[N - 1], order[N - 2], order[0], 1, moves);

  return moves;
}

function addMoves(L, endpoint, connected, otherEndpoint, end, moves) {
  const x = endpoint % L;
  const y = floor(endpoint / L);
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  for (const [dx, dy] of dirs) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || nx >= L || ny < 0 || ny >= L) continue;

    const site = nx + ny * L;
    if (site === connected || site === otherEndpoint) continue;

    moves.push({ site, end });
  }
}

function ploughOrder(L) {
  const order = [];

  for (let y = 0; y < L; y++) {
    if (y % 2 === 0) {
      for (let x = 0; x < L; x++) order.push(x + y * L);
    } else {
      for (let x = L - 1; x >= 0; x--) order.push(x + y * L);
    }
  }

  return order;
}

function rebuildPositions(order, pos) {
  for (let i = 0; i < order.length; i++) {
    pos[order[i]] = i;
  }
}
