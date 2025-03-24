let button1, button2;
let img1, img2;
let frame1 = 0, frame2 = 0;
let img1Frames = 4, img2Frames = 4;
let img1Width = 415, img1Height = 93;
let img2Width = 271, img2Height = 94;
let img1Visible = false, img2Visible = false;
let frameRateDivider = 10; // 控制動畫速度
let frameCounter1 = 0, frameCounter2 = 0;

function preload() {
  img1 = loadImage('1.png');
  img2 = loadImage('2.png');
}

function setup() {
  createCanvas(800, 600);
  
  button1 = createButton('自我介紹');
  button1.position(150, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mousePressed(() => {
    img1Visible = true;
    img2Visible = false; // 確保只顯示一張
  });

  button2 = createButton('作品簡介');
  button2.position(280, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mousePressed(() => {
    img2Visible = true;
    img1Visible = false; // 確保只顯示一張
  });
}

function draw() {
  background(255);
  
  // 顯示 img1 動畫
  if (img1Visible) {
    if (frameCounter1 % frameRateDivider === 0) {
      frame1 = (frame1 + 1) % img1Frames;
    }
    frameCounter1++;
    let sx = frame1 * img1Width;
    image(img1, 50, 100, img1Width / 2, img1Height / 2, sx, 0, img1Width, img1Height);
  } else {
    frameCounter1 = 0; // 重置計數器
  }

  // 顯示 img2 動畫
  if (img2Visible) {
    if (frameCounter2 % frameRateDivider === 0) {
      frame2 = (frame2 + 1) % img2Frames;
    }
    frameCounter2++;
    let sx = frame2 * img2Width;
    image(img2, 50, 100, img2Width / 2, img2Height / 2, sx, 0, img2Width, img2Height);
  } else {
    frameCounter2 = 0; // 重置計數器
  }
}
