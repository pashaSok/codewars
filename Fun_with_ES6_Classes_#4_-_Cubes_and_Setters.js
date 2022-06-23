class Cube{
    constructor(length){
        this.length=length;
    }
    get surfaceArea(){
        return this.length*this.length*6;
    }
    set surfaceArea(n){
        this.length= Math.round(Math.sqrt(n/6));
    }
    get volume(){
        return this.length*this.length*this.length;
    }
    set volume(n){
        this.length=Math.round(Math.cbrt(n));
    }
}
