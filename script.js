let p = [];
let flowField;
let n = 500;


function setup(){
    createCanvas(800, 500);

    flowField = new FLowField();
    flowField.initNoise();

    for(var i=0; i<n; i++){
        var pp = new Particle(flowField);
        p.push(pp);
    }  
}

function draw(){
    //background(255);
    //flowField.display();
    for(var i=0; i<p.length; i++){
        p[i].update();
        p[i].dislay();
    }
}

function keyPressed(){
    background(255);

    flowField.field = [];
    flowField.initNoise();

    p = [];
    for(var i=0; i<n; i++){
        var pp = new Particle(flowField);
        p.push(pp);
    }
}

