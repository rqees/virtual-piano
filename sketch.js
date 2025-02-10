let woodbg,
  rcmr,
  bkrcmr,
  wkx,
  wky,
  wkw,
  wkh,
  wkc,
  wkhc,
  bkxbky,
  bkw,
  bkh,
  fbkx,
  bkxpbkw,
  bkc,
  bkhc,
  bkib,
  sizeX,
  sizeY,
  twk,
  i0,
  i1,
  i2,
  i3,
  velvetfelt,
  c3,
  cs3,
  d3,
  ds3,
  e3,
  f3,
  fs3,
  g3,
  gs3,
  a3,
  as3,
  b3,
  c4,
  cs4,
  d4,
  ds4,
  e4,
  f4,
  fs4,
  g4,
  gs4,
  a4,
  as4,
  b4,
  c5,
  bksoundplay,
  wksoundplay;

let dhwkabk = true;

function setup() {
  initializeFields();
  woodbg = loadImage("rsz_1woodbg.png");
  velvetfelt = loadImage("wallpaperflare-cropped.jfif");
  createCanvas(sizeX, sizeY);
  c3 = loadSound("sounds/c3.mp3");
  cs3 = loadSound("sounds/c-3.mp3");
  d3 = loadSound("sounds/d3.mp3");
  ds3 = loadSound("sounds/d-3.mp3");
  e3 = loadSound("sounds/e3.mp3");
  f3 = loadSound("sounds/f3.mp3");
  fs3 = loadSound("sounds/f-3.mp3");
  g3 = loadSound("sounds/g3.mp3");
  gs3 = loadSound("sounds/g-3.mp3");
  a3 = loadSound("sounds/a4.mp3");
  as3 = loadSound("sounds/a-3.mp3");
  b3 = loadSound("sounds/b3.mp3");
  c4 = loadSound("sounds/c4.mp3");
  cs4 = loadSound("sounds/c-4.mp3");
  d4 = loadSound("sounds/d4.mp3");
  ds4 = loadSound("sounds/d-4.mp3");
  e4 = loadSound("sounds/e4.mp3");
  f4 = loadSound("sounds/f4.mp3");
  fs4 = loadSound("sounds/f-4.mp3");
  g4 = loadSound("sounds/g4.mp3");
  gs4 = loadSound("sounds/g-4.mp3");
  a4 = loadSound("sounds/a5.mp3");
  as4 = loadSound("sounds/a-4.mp3");
  b4 = loadSound("sounds/b5.mp3");
  c5 = loadSound("sounds/c5.mp3");
}

function draw() {
  background(woodbg);
  image(velvetfelt, 0, wky - 5);
  // felt

  whiteKeys();
  blackKeys();

  fill(255, 0, 0);
}

function mousePressed() {
  rcmr = true;
  bkrcmr = true;

  bksoundplay = true;
  wksoundplay = true;

}

function mouseReleased() {
  rcmr = false;
  bkrcmr = false;

  //  bksoundplay = false;
}

function initializeFields() {
  woodbg = null;
  rcmr = false;
  wkx = 0;
  wky = 150/2;
  wkw = 111/2;
  wkh = 450/2;
  wkc = color(255, 252, 240);
  wkhc = color(217, 213, 199);
  bkx = 0;
  bky = wky;
  bkw = 64/2;
  bkh = 300/2;
  fbkx = wkw - bkw / 2;
  bkxpbkw = bkx + bkw;
  bkc = color(20, 17, 9);
  bkhc = color(56, 55, 49);
  bkib = bkw - 111;
  sizeX = 1665/2;
  sizeY = 600/2;
  twk = 15;
  i0 = wkw * (twk - 2);
  i1 = wkw * (twk - 6);
  i2 = wkw * (twk - 9);
  i3 = wkw * (twk - 13);
}
