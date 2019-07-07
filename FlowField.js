class FLowField{
    constructor(){
        this.resolution = 20;
        this.cols = width/this.resolution;
        this.rows = height/this.resolution;
        this.field = [];
        this.inputField = [];
        this.domainField;
    }
    
    initNoise(){
        var xoff = 0;
        var l2 = random(PI,TWO_PI);
        for(var i=0; i<this.cols; i++){
            var yoff = 0;
            var temp_rows = [];
            for(var j=0; j<this.rows; j++){
                var theta = map(noise(xoff,yoff),0,1,0,l2);
                var x = cos(theta)*this.resolution;
                var y = sin(theta)*this.resolution;
                var ff = createVector(x,y);  // <--- Key
                temp_rows.push(ff);
                yoff += 0.1;
            }
            this.field.push(temp_rows);
            xoff += 0.1;
        }
    }

    display(){
        for(var i=0; i<this.cols; i++){
            for(var j=0; j<this.rows; j++){
                var x0 = i*this.resolution;
                var y0 = j*this.resolution;
                var x = x0 + this.field[i][j].x;
                var y = y0 + this.field[i][j].y;
                stroke(0);
                strokeWeight(1);
                line(x0,y0,x,y);
                strokeWeight(1);
                point(x0,y0);
            }
        }
    }
}