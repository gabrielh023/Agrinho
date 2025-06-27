function setup(){
  createCanvas(400, 400);
}
function draw() {
  background(220);
}let botoes = [];

let textos = [];

let infoBox = "";

let showInfo = false;

let infoIndex = -1;

function setup() {

  createCanvas(windowWidth, windowHeight);

  textFont("Georgia");

  textos = [

    "Produtos como arroz, feijão, leite, frutas e hortaliças são consumidos na cidade.",

    "O campo produz soja, milho, carne, café e outros em grande escala.",

    "Agrinho é um programa educacional sobre o campo e cidadania.",

    "A união entre campo e cidade gera desenvolvimento e bem-estar."

  ];

}

function draw() {

  // Céu

  background(40, 90, 60);

  // Sol

  noStroke();

  fill(255, 200, 50, 200);

  ellipse(width - 100, 100, 200);

  // Raios do sol

  for (let i = 0; i < 10; i++) {

    let ang = radians(i * 15);

    stroke(255, 200, 50, 80);

    strokeWeight(2);

    line(width - 100, 100, width - 100 + cos(ang) * 300, 100 + sin(ang) * 300);

  }

  // Campo verde

  noStroke();

  fill(60, 130, 60);

  rect(0, height / 3, width, height / 3);

  // Parte azul (meia inferior)

  fill("#80b4b2");

  rect(0, height / 3 * 2, width, height / 3);

  // Títulos

  textAlign(CENTER, CENTER);

  fill("#3AA85D");

  textSize(100);

  text("União", width / 2, heighfunction setup(){
  createCanvas(400, 400);
}
function draw() {
  background(220);
}let botoes = [];

let textos = [];

let infoBox = "";

let showInfo = false;

let infoIndex = -1;

function setup() {

  createCanvas(windowWidth, windowHeight);

  textFont("Georgia");

  textos = [

    "Produtos como arroz, feijão, leite, frutas e hortaliças são consumidos na cidade.",

    "O campo produz soja, milho, carne, café e outros em grande escala.",

    "Agrinho é um programa educacional sobre o campo e cidadania.",

    "A união entre campo e cidade gera desenvolvimento e bem-estar."

  ];

}

function draw() {

  // Céu

  background(40, 90, 60);

  // Sol

  noStroke();

  fill(255, 200, 50, 200);

  ellipse(width - 100, 100, 200);

  // Raios do sol

  for (let i = 0; i < 10; i++) {

    let ang = radians(i * 15);

    stroke(255, 200, 50, 80);

    strokeWeight(2);

    line(width - 100, 100, width - 100 + cos(ang) * 300, 100 + sin(ang) * 300);

  }

  // Campo verde

  noStroke();

  fill(60, 130, 60);

  rect(0, height / 3, width, height / 3);

  // Parte azul (meia inferior)

  fill("#80b4b2");

  rect(0, height / 3 * 2, width, height / 3);

  // Títulos

  textAlign(CENTER, CENTER);

  fill("#3AA85D");

  textSize(100);

  text("União", width / 2, height / 10);

  fill("white");

  textSize(40);t / 10);

  fill("white");

  textSize(40);

  text("CAMPO E CIDADE", width / 2, height / 10 + 80);

  // Rodapé

  fill("white");

  textSize(14);

  textAlign(LEFT);

  text("📷 ghzin.tx", 20, height - 30);
  function setup() {
  createCanvas(400, 200);
  // Cria um link para o Instagram
  let link = createA('https://www.instagram.com/https://www.instagram.com/ghzin.hx?igsh=MW5lYXdzN2Zrd2Jrcg==/', 'Visite meu Instagram!');
  link.position(50, 50); // Define a posição do link na tela
  link.style('font-size', '20px'); // Define o tamanho da fonte
  link.style('color', 'blue'); // Define a cor do texto
}

function draw() {
  background(220);
}
  textAlign(RIGHT);

 

  // Botões

  drawButtons();

  // Info box

  if (showInfo && infoIndex >= 0) {

    drawInfoBox(textos[infoIndex]);

  }

}

function drawButtons() {

  let labels = [

    "PRODUTOS CONSUMIDOS\n(CIDADE)",

    "PRODUTOS DE ALTA PRODUÇÃO\n(CAMPO)",

    "HISTÓRIA DO AGRINHO",

    "MAIS INFORMAÇÕES"

  ];

  let x = (width - 320) / 2;

  let y = height / 3 * 2 + 20;

  textSize(16);

  textAlign(CENTER, CENTER);

  for (let i = 0; i < labels.length; i++) {

    fill("#80b4b2");

    stroke("white");

    strokeWeight(2);

    rect(x, y + i * 70, 320, 50, 5);

    noStroke();

    fill(0);

    text(labels[i], x + 160, y + i * 70 + 25);

  }

}

function mousePressed() {

  let x = (width - 320) / 2;

  let y = height / 3 * 2 + 20;

  for (let i = 0; i < 4; i++) {

    if (

      mouseX > x &&

      mouseX < x + 320 &&

      mouseY > y + i * 70 &&

      mouseY < y + i * 70 + 50

    ) {

      showInfo = true;

      infoIndex = i;

    }

  }

}

function drawInfoBox(txt) {

  let w = 500;

  let h = 100;

  let x = (width - w) / 2;

  let y = height - 140;

  fill(255, 255, 255, 240);

  noStroke();

  rect(x, y, w, h, 12);

  fill(0);

  textAlign(CENTER, CENTER);

  textSize(16);

  text(txt, x + w / 2, y + h / 2);

}