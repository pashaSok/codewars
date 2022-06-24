Array.prototype.reduce = function(process, initial) {
    for(let i =0; i<this.length;i++){
        initial? initial = process(initial, this[i]):initial=this[0]
    }
    return initial;
}

console.log();[1,2,3].reduce( function(sum, next){return sum+next}, 0) ;