// Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

// Variáveis de Velocidade da Bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

// Variáveis da Raquete
let xRaquete = 0;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

// Variáveis do Oponente
let xRaqueteOponente = 590;
let yRaqueteOponente = 150;
let velocidadeYOponente = 0;

// Collide 2D
let collide = false;

// Placar
let meusPontos = 0;
let pontosOponente = 0;

// Sons
let raquetada;
let ponto;
let trilha;

// Background
//let imagemDaMesa;


// FUNÇÕES

//function preload(){
  
  //imagemDaMesa = loadImage("Imagens/Mesa.png");
 //}

function setup() {
  createCanvas(600,400);
  //trilha.loop();
}

function draw () {
  background (0);
  mostraBolinha ();
  movimentaBolinha ();
  verificacaoColisaoBorda ();
  mostraRaquete ( xRaquete, yRaquete);
  mostraRaquete ( xRaqueteOponente, yRaqueteOponente);
  movimentaRaquete1 ();
 // verificaColisaoRaquete();
  movimentaRaqueteOponente();
  verificaCollide( xRaquete , yRaquete );
  verificaCollide( xRaqueteOponente , yRaqueteOponente );
  mostraPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
  
}

function mostraBolinha(){
  
   // Desenha a bolinha seguindo os valores delimitados nas variáveis x, y e diametro.
circle( xBolinha, yBolinha, diametro );

}

function movimentaBolinha (){
  // Movimenta a bolinha nos eixos x e y.
  xBolinha += velocidadeXbolinha;  
  yBolinha += velocidadeYbolinha;

}

function verificacaoColisaoBorda (){
  // Verifica a colisão da bolinha com as bordas para evitar que ela desapareça e permaneça nos limites da tela.
   if ( xBolinha + raio > width || xBolinha - raio < 0){
  velocidadeXbolinha *= -1;}
  
   if ( yBolinha + raio > height || yBolinha - raio < 0){
  velocidadeYbolinha *= -1;}
   
}

function mostraRaquete( x, y){
  
   // Desenha a raquete, do usuário e do oponente seguindo os valores determinados nas variáveis x, y, comprimento e altura.
  rect( x, y, comprimentoRaquete , alturaRaquete);
  

}

function movimentaRaquete1 (){
  
  // Movimenta a raquete controlada pelo usuário.
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
    
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete (){
  // Verifica a colisão da bolinha com a raquete.
  if ( xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){ 
    velocidadeXbolinha *= -1;
 }

} 

function movimentaRaqueteOponente(){
  
  // Movimenta a raquete do Oponente
  if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
    
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function verificaCollide(x, y){
  
  collide = collideRectCircle( x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio )
  
  if (collide) {
     velocidadeXbolinha *= -1;
   raquetada.play();}
}

function mostraPlacar(){
  // Exibe o placar
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(45, 10, 115, 25);
  fill (255);
  text(meusPontos, 150, 26 );
  fill (color(255, 140, 0));
  rect( 440, 10, 120, 25);
  fill (255);
  text(pontosOponente, 550, 26);
  text("Desafiante", 90, 26 );
  text("Computador", 490, 26);
}

function marcaPonto(){
  // Marca pontos quando a bolinha toca as extremidades da tela.
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  
  }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}
  
function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}


