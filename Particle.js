class Particle{
    constructor(temp_ff){
        this.location = createVector(random(0,width), random(0,height));
        this.velocity = createVector(1,1);
        this.target;
        this.dir;
        this.acc;
        this.topSpeed = random(1,4);
        this.flowField = temp_ff;
    }

    update(){
        this.acc = this.getVelocity(this.flowField);
        this.velocity.add(this.acc);
        this.velocity.limit(this.topSpeed);
        this.location.add(this.velocity);
    }

    dislay(){
        stroke(0);
        strokeWeight(1);
        point(this.location.x, this.location.y);
    }

    getVelocity(ff){
        var v = createVector(1,1);

        var x = this.location.x;
        var y = this.location.y;

        var i = Math.trunc(x/ff.resolution);
        var j = Math.trunc(y/ff.resolution);

        if ( this.outOfDomain(ff,i,j) ){
            this.randomLocation();
        } 
        var ic = parseInt(constrain(i, 0, ff.cols-1));
        var jc = parseInt(constrain(j, 0, ff.rows-1));

        v.x = ff.field[ic][jc].x;
        v.y = ff.field[ic][jc].y;

        return v;
    }

    outOfDomain(ff,i,j){
        var out = false;
        if((i<0) || (i>=ff.cols) || (j<0) || (j>=ff.rows)){
            out = true;
        }
        return out;
    }

    randomLocation(){
        this.location = createVector(random(0,width), random(0,height));
    }
}
