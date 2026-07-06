// Converted from Processing/Java mode to p5.js global mode.
// Open index.html in a browser, or serve this folder with a local web server.

const L = 25;
const RNG_SEED = 12345;
const STEPS = 10;
const CANVAS_SIZE = 700;

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  noLoop();

  const walk = mansfieldWalk2D(L, RNG_SEED, STEPS);

  let txt = `Nel mezzo del cammin di nostra vita_
mi ritrovai per una selva oscura,_
ché la diritta via era smarrita.__

Ahi quanto a dir qual era è cosa dura
esta selva selvaggia e aspra e forte
che nel pensier rinova la paura!

Tant'è amara che poco è più morte;
ma per trattar del ben ch'i' vi trovai,
dirò de l'altre cose ch'i' v' ho scorte.

Io non so ben ridir com'i' v'intrai,
tant'era pien di sonno a quel punto
che la verace via abbandonai.

Ma poi ch'i' fui al piè d'un colle giunto,
là dove terminava quella valle
che m'avea di paura il cor compunto,

guardai in alto e vidi le sue spalle
vestite già de' raggi del pianeta
che mena dritto altrui per ogne calle.

Allor fu la paura un poco queta,
che nel lago del cor m'era durata
la notte ch'i' passai con tanta pieta.

E come quei che con lena affannata,
uscito fuor del pelago a la riva,
si volge a l'acqua perigliosa e guata,

così l'animo mio, ch'ancor fuggiva,
si volse a retro a rimirar lo passo
che non lasciò già mai persona viva.

Poi ch'èi posato un poco il corpo lasso,
ripresi via per la piaggia diserta,
sì che 'l piè fermo sempre era 'l più basso.

Ed ecco, quasi al cominciar de l'erta,
una lonza leggera e presta molto,
che di pel macolato era coverta;

e non mi si partia dinanzi al volto,
anzi 'mpediva tanto il mio cammino,
ch'i' fui per ritornar più volte vòlto.

Temp'era dal principio del mattino,
e 'l sol montava 'n sù con quelle stelle
ch'eran con lui quando l'amor divino

mosse di prima quelle cose belle;
sì ch'a bene sperar m'era cagione
di quella fiera a la gaetta pelle

l'ora del tempo e la dolce stagione;
ma non sì che paura non mi desse
la vista che m'apparve d'un leone.

Questi parea che contra me venisse
con la test'alta e con rabbiosa fame,
sì che parea che l'aere ne tremesse.

Ed una lupa, che di tutte brame
sembiava carca ne la sua magrezza,
e molte genti fé già viver grame,

questa mi porse tanto di gravezza
con la paura ch'uscia di sua vista,
ch'io perdei la speranza de l'altezza.

E qual è quei che volontieri acquista,
e giugne 'l tempo che perder lo face,
che 'n tutti suoi pensier piange e s'attrista;

tal mi fece la bestia sanza pace,
che, venendomi 'ncontro, a poco a poco
mi ripigneva là dove 'l sol tace.

Mentre ch'i' rovinava in basso loco,
dinanzi a li occhi mi si fu offerto
chi per lungo silenzio parea fioco.

Quando vidi costui nel gran diserto,
''Miserere di me'', gridai a lui,
''qual che tu sii, od ombra od omo certo!''.

Rispuosemi: ''Non omo, omo già fui,
e li parenti miei furon lombardi,
mantoani per patrïa ambedui.

Nacqui sub Iulio, ancor che fosse tardi,
e vissi a Roma sotto 'l buono Augusto
nel tempo de li dèi falsi e bugiardi.

Poeta fui, e cantai di quel giusto
figliuol d'Anchise che venne di Troia,
poi che 'l superbo Ilïón fu combusto.

Ma tu perché ritorni a tanta noia?
perché non sali il dilettoso monte
ch'è principio e cagion di tutta gioia?''.

''Or se' tu quel Virgilio e quella fonte
che spandi di parlar sì largo fiume?'',
rispuos'io lui con vergognosa fronte.

''O de li altri poeti onore e lume,
vagliami 'l lungo studio e 'l grande amore
che m' ha fatto cercar lo tuo volume.

Tu se' lo mio maestro e 'l mio autore,
tu se' solo colui da cu' io tolsi
lo bello stilo che m' ha fatto onore.

Vedi la bestia per cu' io mi volsi;
aiutami da lei, famoso saggio,
ch'ella mi fa tremar le vene e i polsi''.

''A te convien tenere altro vïaggio'',
rispuose, poi che lagrimar mi vide,
''se vuo' campar d'esto loco selvaggio;

ché questa bestia, per la qual tu gride,
non lascia altrui passar per la sua via,
ma tanto lo 'mpedisce che l'uccide;

e ha natura sì malvagia e ria,
che mai non empie la bramosa voglia,
e dopo 'l pasto ha più fame che pria.

Molti son li animali a cui s'ammoglia,
e più saranno ancora, infin che 'l veltro
verrà, che la farà morir con doglia.

Questi non ciberà terra né peltro,
ma sapïenza, amore e virtute,
e sua nazion sarà tra feltro e feltro.

Di quella umile Italia fia salute
per cui morì la vergine Cammilla,
Eurialo e Turno e Niso di ferute.

Questi la caccerà per ogne villa,
fin che l'avrà rimessa ne lo 'nferno,
là onde 'nvidia prima dipartilla.

Ond'io per lo tuo me' penso e discerno
che tu mi segui, e io sarò tua guida,
e trarrotti di qui per loco etterno;

ove udirai le disperate strida,
vedrai li antichi spiriti dolenti,
ch'a la seconda morte ciascun grida;

e vederai color che son contenti
nel foco, perché speran di venire
quando che sia a le beate genti.

A le quai poi se tu vorrai salire,
anima fia a ciò più di me degna:
con lei ti lascerò nel mio partire;

ché quello imperador che là sù regna,
perch'i' fu' ribellante a la sua legge,
non vuol che 'n sua città per me si vegna.

In tutte parti impera e quivi regge;
quivi è la sua città e l'alto seggio:
oh felice colui cu' ivi elegge!''.

E io a lui: ''Poeta, io ti richeggio
per quello Dio che tu non conoscesti,
acciò ch'io fugga questo male e peggio,

che tu mi meni là dov'or dicesti,
sì ch'io veggia la porta di san Pietro
e color cui tu fai cotanto mesti''.

Allor si mosse, e io li tenni dietro.`;
  txt = txt.toUpperCase();

  drawWalk(walk, L, width, height, txt);
}

function drawWalk(walk, L, W, H, txt) {
  const margin = 50;
  const sx = (W - 2 * margin) / (L - 1);
  const sy = (H - 2 * margin) / (L - 1);

  background(255);

  // Draw path. This is intentionally white, matching the Processing sketch.
  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let i = 0; i < walk.length; i++) {
    const px = margin + walk[i][0] * sx;
    const py = margin + walk[i][1] * sy;
    vertex(px, py);
  }
  endShape();

  // Draw letters with white boxes.
  textAlign(CENTER, CENTER);
  textSize(Math.min(sx, sy) * 0.7);

  for (let i = 0; i < walk.length; i++) {
    if (i >= txt.length) break;

    const px = margin + walk[i][0] * sx;
    const py = margin + walk[i][1] * sy;

    const s = txt.charAt(i);
    const tw = textWidth(s);
    const th = textAscent() + textDescent();

    rectMode(CENTER);
    fill(255);
    stroke(255);
    strokeWeight(0);
    rect(px, py, tw + 6, th + 4);

    fill(0);
    noStroke();
    text(s, px, py);
  }

  // Endpoints from the Processing sketch, left commented out.
  fill(255, 0, 0);
  noStroke();
  ellipse(margin + walk[0][0] * sx, margin + walk[0][1] * sy, 10, 10);
  ellipse(
    margin + walk[walk.length - 1][0] * sx,
    margin + walk[walk.length - 1][1] * sy,
    10,
    10
  );
}

// Java's java.util.Random, reproduced with BigInt so the seeded walk matches
// the original Processing/Java sketch rather than p5's random generator.
class JavaRandom {
  constructor(seed) {
    this.multiplier = 25214903917n;
    this.addend = 11n;
    this.mask = (1n << 48n) - 1n;
    this.seed = (BigInt(seed) ^ this.multiplier) & this.mask;
  }

  next(bits) {
    this.seed = (this.seed * this.multiplier + this.addend) & this.mask;
    return Number(this.seed >> BigInt(48 - bits));
  }

  nextFloat() {
    return this.next(24) / (1 << 24);
  }

  nextInt(bound) {
    if (bound <= 0) {
      throw new Error('bound must be positive');
    }

    if ((bound & -bound) === bound) {
      return Number((BigInt(bound) * BigInt(this.next(31))) >> 31n);
    }

    let bits;
    let val;
    do {
      bits = this.next(31);
      val = bits % bound;
    } while (bits - val + (bound - 1) < 0);

    return val;
  }
}

// Returns an array positions[k][0] = x, positions[k][1] = y
// for k = 0..L*L-1, in walk order.
function mansfieldWalk2D(L, rngSeed, nSteps) {
  const N = L * L;
  const rng = new JavaRandom(rngSeed);

  // Initial lexicographic Hamiltonian walk: plough/zig-zag by rows.
  let order = lexicographicPloughOrder(L);

  // Reusable position map: posOf[siteId] = index in order[].
  const posOf = new Array(N);
  rebuildPosMap(order, posOf);

  // On the square lattice the maximum number of legal backbite links
  // from the two endpoints is 4.
  const LMAX = 4;

  for (let step = 0; step < nSteps; step++) {
    const candidates = [];
    const ends = []; // 0 = front endpoint, 1 = back endpoint

    collectCandidates(L, order, posOf, candidates, ends);

    const l = candidates.length;

    // Detailed-balance correction: accept a move with probability l / LMAX.
    // If rejected, do nothing this Monte Carlo step.
    if (l === 0) continue;
    if (rng.nextFloat() >= l / LMAX) continue;

    const choice = rng.nextInt(l);
    const endType = ends[choice];
    const site = candidates[choice];
    const p = posOf[site];

    const newOrder = new Array(N);
    let idx = 0;

    if (endType === 0) {
      // Attach front endpoint order[0] to order[p].
      // New order: reverse(order[0..p-1]) + order[p..N-1]
      for (let i = p - 1; i >= 0; i--) newOrder[idx++] = order[i];
      for (let i = p; i < N; i++) newOrder[idx++] = order[i];
    } else {
      // Attach back endpoint order[N-1] to order[p].
      // New order: order[0..p] + reverse(order[p+1..N-1])
      for (let i = 0; i <= p; i++) newOrder[idx++] = order[i];
      for (let i = N - 1; i >= p + 1; i--) newOrder[idx++] = order[i];
    }

    order = newOrder;
    rebuildPosMap(order, posOf);
  }

  return orderToXY(order, L);
}

function lexicographicPloughOrder(L) {
  const N = L * L;
  const order = new Array(N);
  let k = 0;

  for (let y = 0; y < L; y++) {
    if ((y & 1) === 0) {
      for (let x = 0; x < L; x++) {
        order[k++] = siteId(x, y, L);
      }
    } else {
      for (let x = L - 1; x >= 0; x--) {
        order[k++] = siteId(x, y, L);
      }
    }
  }

  return order;
}

function rebuildPosMap(order, posOf) {
  for (let i = 0; i < order.length; i++) {
    posOf[order[i]] = i;
  }
}

function collectCandidates(L, order, posOf, candidates, ends) {
  const N = order.length;

  const front = order[0];
  const frontNbr = order[1];

  const back = order[N - 1];
  const backNbr = order[N - 2];

  // Legal candidates from front endpoint.
  addEndpointCandidates(L, front, frontNbr, back, candidates, ends, 0);

  // Legal candidates from back endpoint.
  addEndpointCandidates(L, back, backNbr, front, candidates, ends, 1);
}

function addEndpointCandidates(L, endpoint, connectedNbr, otherEndpoint, candidates, ends, endType) {
  const x = endpoint % L;
  const y = Math.floor(endpoint / L);

  // 4-neighbors on square lattice.
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  for (let k = 0; k < 4; k++) {
    const nx = x + dx[k];
    const ny = y + dy[k];

    if (nx < 0 || nx >= L || ny < 0 || ny >= L) continue;

    const nbr = siteId(nx, ny, L);

    // Skip the already connected neighbor.
    if (nbr === connectedNbr) continue;

    // Skip the opposite endpoint; the standard backbite move uses an interior site.
    if (nbr === otherEndpoint) continue;

    candidates.push(nbr);
    ends.push(endType);
  }
}

function orderToXY(order, L) {
  const xy = new Array(order.length);

  for (let i = 0; i < order.length; i++) {
    xy[i] = [order[i] % L, Math.floor(order[i] / L)];
  }

  return xy;
}

function siteId(x, y, L) {
  return x + y * L;
}
