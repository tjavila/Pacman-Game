//Mundo do jogo
var world = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 9, 10,10,10,10,10,10,10,10,0,10,10,10,10,10,10,10,10,10,0,],
    [0, 10, 5, 10, 1, 0, 0, 0, 2, 10,7, 10, 1, 0, 0, 0, 2, 10, 5, 10,0 ],
    [0, 10, 0, 10, 0, 0, 0,0,0,10,10, 10,0,0,0,0,0, 10,0, 10,0 ],
    [0, 10,0, 10,4, 0, 0, 0, 3, 10,5, 10,4, 0, 0, 0, 3, 10,0, 10,0 ],
    [0, 10,0, 10,10,10,10,10,10,10,0, 10,10,10,10,10,10,10,0, 10,0 ],
    [0, 10,4, 0, 0, 0, 0, 0, 6, 10,0, 10,8, 0, 0, 0, 0, 0, 3, 10,0 ],
    [0, 10,10,10,10,10,10,10,10,10,0, 10,10,10,10,10,10,10,10,10,0 ],
    [0, 10,1, 0, 0, 0, 0, 0, 6, 10,0, 10,8, 0, 0, 0, 0, 0, 2, 10,0 ],
    [0, 10,0, 10,10,10,10,10,10,10,0, 10,10,10,10,10,10,10,0, 10,0 ],
    [0, 10,0, 10,1, 0, 0, 0, 2, 10,7, 10,1, 0, 0, 0, 2, 10,0, 10,0 ],
    [0, 10,0,10,0,0,0,0,0,10,10, 10,0,0,0,0,0,10,0, 10,0 ],
    [0, 10,7, 10, 4, 0, 0, 0, 3, 10, 5, 10,4, 0, 0, 0, 3, 10, 7, 10,0 ],
    [0, 10,10,10,10,10,10,10,10,10,0,10,10,10,10,10,10,10,10,10,0 ],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3 ],

]

// cria pacman e 2 fantasmas
var pacman = {
    x: 1,
    y: 1
}

var ghost = {
    x: 17,
    y: 11
}

var ghost2 = {
    x: 9,
    y: 1
}

//seta score e vidas
var score = 0;
var lives = 2;

//visualização do mundo
function displayWorld(){
    var output = '';
    for(var i=0; i<world.length; i++){
        output += "\n<div class='row'>\n"
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 0)
                output += "<div class='brick'></div>";
            else if(world[i][j] == 1)
                output += "<div class='brick lefttop'></div>";
            else if(world[i][j] == 2)
                output += "<div class='brick righttop'></div>";
            else if(world[i][j] == 3)
                output += "<div class='brick rightbottom'></div>";
            else if(world[i][j] == 4)
                output += "<div class='brick leftbottom'></div>";
            else if(world[i][j] == 5)
                output += "<div class='brick top'></div>";
            else if(world[i][j] == 6)
                output += "<div class='brick right'></div>";
            else if(world[i][j] == 7)
                output += "<div class='brick bottom'></div>";
            else if(world[i][j] == 8)
                output += "<div class='brick left'></div>";
            else if(world[i][j] == 9)
                output += "<div class='empty'></div>";    
            else if(world[i][j] == 10)
                output += "<div class='coin'></div>";

        }
        output += "\n</div>"
    }
    displayLives();
    $('#world').html(output);
}

// funções para display dos elementos do jogo
function displayPacman(){
    document.getElementById('pacman').style.left = pacman.x*20+"px";
    document.getElementById('pacman').style.top = pacman.y*20+"px";
}

function displayGhost(){
    document.getElementById('ghost').style.left = ghost.x*20+"px";
    document.getElementById('ghost').style.top = ghost.y*20+"px";
}

function displayGhost2(){
    document.getElementById('ghost2').style.left = ghost2.x*20+"px";
    document.getElementById('ghost2').style.top = ghost2.y*20+"px";
}


function displayScore(){
    document.getElementById('score').innerHTML = score;
}

function displayLives(){
    document.getElementById('lives').innerHTML = lives;
}

//Movimentos do pacman por meio das teclas wasd
document.onkeydown = function(e){
    if(e.keyCode == 65 && (world[pacman.y][pacman.x-1]==9 || world[pacman.y][pacman.x-1]==10 || world[pacman.y][pacman.x-1]==11)){
        $('#pacman').removeClass('right');
        $('#pacman').removeClass('up');
        $('#pacman').removeClass('down');
        $('#pacman').addClass('left');
        pacman.x --;
    }
    else if(e.keyCode == 68 && (world[pacman.y][pacman.x+1]==9 || world[pacman.y][pacman.x+1]==10 || world[pacman.y][pacman.x+1]==11)){
        $('#pacman').removeClass('left');
        $('#pacman').removeClass('up');
        $('#pacman').removeClass('down');
        $('#pacman').addClass('right');
        pacman.x ++;
    }
    else if(e.keyCode == 87 && (world[pacman.y-1][pacman.x]==9 || world[pacman.y-1][pacman.x]==10 || world[pacman.y-1][pacman.x]==11)){
        $('#pacman').removeClass('right');
        $('#pacman').removeClass('up');
        $('#pacman').removeClass('left');
        $('#pacman').addClass('down');
        pacman.y --;
    }
    else if(e.keyCode == 83 && (world[pacman.y+1][pacman.x]==9 || world[pacman.y+1][pacman.x]==10 || world[pacman.y+1][pacman.x]==11)){
        $('#pacman').removeClass('right');
        $('#pacman').removeClass('left');
        $('#pacman').removeClass('down');
        $('#pacman').addClass('up');
        pacman.y ++;
    }
  else if(e.keyCode == 32 && (world[pacman.y-1][pacman.x]==9 || world[pacman.y-1][pacman.x]==10 || world[pacman.y-1][pacman.x]==11)){
        window.location.reload(true);
        location.reload();
  }
  
//aumenta score
    if(world[pacman.y][pacman.x] == 10){
        world[pacman.y][pacman.x] = 9;
        score+=100;
        displayWorld();
        displayLives();
        displayScore();
    }
    if(lives>0){
        if((pacman.x == ghost.x) && (pacman.y == ghost.y)){
            lives--;
            displayLives();
        }
        else if((pacman.x == ghost2.x) && (pacman.y == ghost2.y)){
            lives--;
            displayLives();
        }
  }
    displayLives();
    displayPacman();;
    checkend();
}


function getRandom() {
    var random = Math.floor(Math.random() * 4) + 1;
    return random;
}

var currentDirection = 1;
var currentDirection2 = 1;

// movimento dos fantasmas 1 e 2
function ghostMove(){
    var newDirection = getRandom();
    

    if(((currentDirection == 1 || currentDirection == 2) && (world[ghost.y+1][ghost.x]==9 || world[ghost.y+1][ghost.x]==10 || world[ghost.y+1][ghost.x]==11 || world[ghost.y+1][ghost.x]==12 || world[ghost.y-1][ghost.x]==9 || world[ghost.y-1][ghost.x]==10 || world[ghost.y-1][ghost.x]==11 || world[ghost.y-1][ghost.x]==12))||((currentDirection == 3 || currentDirection == 4) && (world[ghost.y][ghost.x+1]==9 || world[ghost.y][ghost.x+1]==10 || world[ghost.y][ghost.x+1]==11 || world[ghost.y][ghost.x+1]==12 || world[ghost.y][ghost.x-1]==9 || world[ghost.y][ghost.x-1]==10 || world[ghost.y][ghost.x-1]==11 || world[ghost.y][ghost.x-1]==12))){
        
        while(newDirection == currentDirection){
            newDirection = getRandom();
        }
        currentDirection = newDirection;
    }
    
    if(currentDirection ==  1 && (world[ghost.y][ghost.x-1]==9 || world[ghost.y][ghost.x-1]==10 || world[ghost.y][ghost.x-1]==11 || world[ghost.y][ghost.x-1]==12)){
        ghost.x --;
    }
    else if(currentDirection == 2 && (world[ghost.y][ghost.x+1]==9 || world[ghost.y][ghost.x+1]==10 || world[ghost.y][ghost.x+1]==11 || world[ghost.y][ghost.x+1]==12)){

        ghost.x ++;
    }
    else if(currentDirection == 3 && (world[ghost.y-1][ghost.x]==9 || world[ghost.y-1][ghost.x]==10 || world[ghost.y-1][ghost.x]==11 || world[ghost.y-1][ghost.x]==12)){

        ghost.y --;
    }
    else if(currentDirection == 4 && (world[ghost.y+1][ghost.x]==9 || world[ghost.y+1][ghost.x]==10 || world[ghost.y+1][ghost.x]==11 || world[ghost.y+1][ghost.x]==12)){

        ghost.y ++;
    }
    displayGhost();   
}

function ghostMove2(){
    var newDirection2 = getRandom();
    
    if(((currentDirection2 == 1 || currentDirection2 == 2) && (world[ghost2.y+1][ghost2.x]==9 || world[ghost2.y+1][ghost2.x]==10 || world[ghost2.y+1][ghost2.x]==11 || world[ghost2.y+1][ghost2.x]==12 || world[ghost2.y-1][ghost2.x]==9 || world[ghost2.y-1][ghost2.x]==10 || world[ghost2.y-1][ghost2.x]==11 || world[ghost2.y-1][ghost2.x]==12))||((currentDirection2 == 3 || currentDirection2 == 4) && (world[ghost2.y][ghost2.x+1]==9 || world[ghost2.y][ghost2.x+1]==10 || world[ghost2.y][ghost2.x+1]==11 || world[ghost2.y][ghost2.x+1]==12 || world[ghost2.y][ghost2.x-1]==9 || world[ghost2.y][ghost2.x-1]==10 || world[ghost2.y][ghost2.x-1]==11 || world[ghost2.y][ghost2.x-1]==12))){
        
        while(newDirection2 == currentDirection2){
            newDirection2 = getRandom();
        }
        currentDirection2 = newDirection2;
   }
    
    if(currentDirection2 ==  1 && (world[ghost2.y][ghost2.x-1]==9 || world[ghost2.y][ghost2.x-1]==10 || world[ghost2.y][ghost2.x-1]==11 || world[ghost2.y][ghost2.x-1]==12)){
        ghost2.x --;

    }
    else if(currentDirection2 == 2 && (world[ghost2.y][ghost2.x+1]==9 || world[ghost2.y][ghost2.x+1]==10 || world[ghost2.y][ghost2.x+1]==11 || world[ghost2.y][ghost2.x+1]==12)){

        ghost2.x ++;
    }
    else if(currentDirection2 == 3 && (world[ghost2.y-1][ghost2.x]==9 || world[ghost2.y-1][ghost2.x]==10 || world[ghost2.y-1][ghost2.x]==11 || world[ghost2.y-1][ghost2.x]==12)){

        ghost2.y --;
    }
    else if(currentDirection2 == 4 && (world[ghost2.y+1][ghost2.x]==9 || world[ghost2.y+1][ghost2.x]==10 || world[ghost2.y+1][ghost2.x]==11 || world[ghost2.y+1][ghost2.x]==12)){

        ghost2.y ++;
    }
    displayGhost2();   
}

//respawn
setInterval(ghostMove, 500)
setInterval(ghostMove2, 500)

//game over
function checkend(){
  //se as vidas acabarem ou pegar todas as moedas
    if(lives == 0 || score == 13100){
      displayLives();
      displayScore();
      $('#gameover').fadeIn();

    }
}

$(document).ready(function(){
    displayWorld();
    document.getElementById("Tetris").play();
    displayPacman();
    displayGhost();
    displayScore();
    displayGhost2();
    chekend();
})
