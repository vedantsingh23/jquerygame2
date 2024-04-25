$(document).ready(function(){
    //Maze size/dimension
    var mazeHeight = 400
    var mazeWidth = 400

    //player starting position
    var playerX = 20
    var playerY = 20

    //move function for player
    function movePlayer(dx, dy){
        var newX = playerX + dx;
        var newY = playerY + dy;

        //verify new position is inside the maze walls
        if (newX >= 0 && newX < mazeWidth && newY >= 0 && newY < mazeHeight){
            if(!$('#maze').find('.wall').is('[style="top: ' + newY + 'px; left: ' + newX + 'px;"]')){
                //we can move player now
                playerX = newX;
                playerY = newY;
                $('#player').css({top: playerX + 'px', left: playerY + 'px'});
            }

            //check to see if player is at end
            if(playerX === 380 && playerY === 380){
                alert("Congrats you won stupid idiot")
            }
        }
    }

    // Keypress Event Listeners
    $(document).keydown(function(e){
        switch(e.which){
            case 37: //left arrow
                movePlayer(0, -20)
                break;
            case 38: //up arrow
                movePlayer(-20, 0)
                break;
            case 40: //down
                movePlayer(20, 0)
                break;
            case 39: //right
                movePlayer(0, 20)
                break;
        }
    })

    //create maze walls

    var wallCoordinates = [
        {top:20, left:20},
        {top:20, left:100}
        //add more walls here
    ]

    for(var i = 0; i < wallCoordinates.length; i++){
        $('#maze').append('<div class="wall" style="top: ' + wallCoordinates[i].top + 'px; left: ' + wallCoordinates[i].left + 'px;"></div>')
    }

    //create the player and append it to the board
    $('#maze').append('<div class="player" id="player" style="top: ' + playerY + 'px; left: ' + playerX + 'px;"></div>')
})