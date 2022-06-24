Array.prototype.cube= function(){
    return this.map(num=> Math.pow(num,3));
}
Array.prototype.square = function(){
    return this.map(num=>Math.pow(num,2));
}
Array.prototype.average = function(){
    return this.length <= 0 ? NaN : this.reduce((x,y) => x+y)/this.length;
}
Array.prototype.sum = function(){
    return this.reduce((x,y) => x+y)
}
Array.prototype.even =function(){
    return this.filter(num=> num%2 === 0);
}
Array.prototype.odd =function(){
    return this.filter(num=> num%2 !== 0);
}


var numbers = [1, 2, 3, 4, 5];
console.log(numbers.cube());
console.log(numbers.square());
console.log(numbers.average());
console.log(numbers.sum());
console.log(numbers.odd());
console.log(numbers.even());