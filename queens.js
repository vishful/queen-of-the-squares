let queen = {
    direction: new Array('N', 'S', 'E', 'W', 'NE', 'NW', 'SE', 'SW'),
    dir : NaN,
    changeDirection(choice) {
        switch(choice) {
            case 1 :
                queen.dir=queen.direction[0];
                console.log('Queen set to '+queen.dir)
                break;
            case 2 :
                queen.dir=queen.direction[1];
                console.log('Queen set to '+queen.dir)
                break;
            case 3 :
                queen.dir=queen.direction[2];
                console.log('Queen set to '+queen.dir)
                break;
            case 4 :
                queen.dir=queen.direction[3];
                console.log('Queen set to '+queen.dir)
                break;
            case 5 :
                queen.dir=queen.direction[4];
                console.log('Queen set to '+queen.dir)
                break;
            case 6 :
                queen.dir=queen.direction[5];
                console.log('Queen set to '+queen.dir)
                break;
            case 7 :
               queen.dir=queen.direction[6];
               console.log('Queen set to '+queen.dir)
                break;
            case 8 :
                queen.dir=queen.direction[7];
                console.log('Queen set to '+queen.dir)
                break;
           
        }
    },

    position : pos= {
          x: Number(4),
          y: Number(0),
    },

    moveForward() {
        if(pos.y<8){
        pos.y+=Number(1);
        console.log('Position '+pos.x+','+pos.y);
        console.log('Direction : '+queen.dir);
        }
        else{
            queen.stopthequeen();
        }
    },

    jumpMoveForward(steps) {
        if(steps>0 && steps<8)
        {
            pos.y+=Number(steps);
            console.log('Position '+pos.x+','+pos.y);
            console.log('Direction : '+queen.dir);
        }
        else{
            queen.stopthequeen();
        }
    },
    moveBackward() {
        pos.y=pos.y-Number(1);
        if(pos.y>=0){
        console.log('Position '+pos.x+','+pos.y);
        console.log('Direction : '+queen.dir);
        }
        else{
            queen.stopthequeen();
        }
    },
    jumpMoveBackward(steps) {
       
        if(steps>=0 && steps<8)
        {
            if(pos.y<8 && pos.y>0)
            {
            pos.y=pos.y-Number(steps);
            console.log('Position '+pos.x+','+pos.y);
            console.log('Direction : '+queen.dir);
            }
            else{
              queen.stopthequeen();
            }

        }
        else{
            queen.stopthequeen();
        }
    },

    stopthequeen(){
        console.log("You can't go further than this!");
    },
whereabouts:[],
updatePosition() {
    positionLog = 
       [["a8","b8","c8","d8","e8","f8","g8","h8"],

        ["a7","b7","c7","d7","e7","f7","g7","h7"],

       ["a6","b6","c6","d6","e6","f6","g6","h6"],

       ["a5","b5","c5","d5","e5","f5","g5","h5"],

       ["a4","b4","c4","d4","e4","f4","g4","h4"],

       ["a3","b3","c3","d3","e3","f3","g3","h3"],

       ["a2","b2","c2","d2","e2","f2","g2","h2"],

       ["a1","b1","c1","d1","e1","f1","g1","h1"]];

       track=(positionLog[pos.x][pos.y])
       console.log(track)
       queen.whereabouts.push(track)
       console.log(queen.whereabouts)
      },
     
};

let queen2 = {
    direction: new Array('N', 'S', 'E', 'W', 'NE', 'NW', 'SE', 'SW'),
    dir : NaN,
    changeDirection(choice) {
        switch(choice) {
            case 1 :
                queen.dir=queen2.direction[0];
                console.log('Queen set to '+queen2.dir)
                break;
            case 2 :
                queen2.dir=queen2.direction[1];
                console.log('Queen set to '+queen2.dir)
                break;
            case 3 :
                queen2.dir=queen2.direction[2];
                console.log('Queen set to '+queen2.dir)
                break;
            case 4 :
                queen2.dir=queen2.direction[3];
                console.log('Queen set to '+queen2.dir)
                break;
            case 5 :
                queen2.dir=queen2.direction[4];
                console.log('Queen set to '+queen2.dir)
                break;
            case 6 :
                queen2.dir=queen2.direction[5];
                console.log('Queen set to '+queen2.dir)
                break;
            case 7 :
               queen2.dir=queen2.direction[6];
               console.log('Queen set to '+queen2.dir)
                break;
            case 8 :
                queen2.dir=queen2.direction[7];
                console.log('Queen set to '+queen2.dir)
                break;
           
        }
    },

    position : pos= {
          x: Number(4),
          y: Number(0),
    },

    moveForward() {
        if(pos.y<8){
        pos.y+=Number(1);
        console.log('Position '+pos.x+','+pos.y);
        console.log('Direction : '+queen2.dir);
        }
        else{
            queen2.stopthequeen();
        }
    },

    jumpMoveForward(steps) {
        if(steps>0 && steps<8)
        {
            pos.y+=Number(steps);
            console.log('Position '+pos.x+','+pos.y);
            console.log('Direction : '+queen2.dir);
        }
        else{
            queen2.stopthequeen();
        }
    },
    moveBackward() {
        pos.y=pos.y-Number(1);
        if(pos.y>=0){
        console.log('Position '+pos.x+','+pos.y);
        console.log('Direction : '+queen2.dir);
        }
        else{
            queen2.stopthequeen();
        }
    },
    jumpMoveBackward(steps) {
       
        if(steps>=0 && steps<8)
        {
            if(pos.y<8 && pos.y>0)
            {
            pos.y=pos.y-Number(steps);
            console.log('Position '+pos.x+','+pos.y);
            console.log('Direction : '+queen2.dir);
            }
            else{
              queen2.stopthequeen();
            }

        }
        else{
            queen2.stopthequeen();
        }
    },

    stopthequeen(){
        console.log("You can't go further than this!");
    },
whereabouts:[],
updatePosition() {
    positionLog = 
       [["a8","b8","c8","d8","e8","f8","g8","h8"],

        ["a7","b7","c7","d7","e7","f7","g7","h7"],

       ["a6","b6","c6","d6","e6","f6","g6","h6"],

       ["a5","b5","c5","d5","e5","f5","g5","h5"],

       ["a4","b4","c4","d4","e4","f4","g4","h4"],

       ["a3","b3","c3","d3","e3","f3","g3","h3"],

       ["a2","b2","c2","d2","e2","f2","g2","h2"],

       ["a1","b1","c1","d1","e1","f1","g1","h1"]];

       track=(positionLog[pos.x][pos.y])
       console.log(track)
       queen2.whereabouts.push(track)
       console.log(queen2.whereabouts)
      },
     
};

if (queen.x==queen2.x) {
    console.log("Queens aren't safe\n");
}
else if (queen.y==queen2.y){
    console.log("Queens aren't safe\n");
}
else{
  console.log('Queens are safe :D')
}
