Array.prototype.map = function f(callback) {
    let results = [];  
    for (let i = 0; i < this.length; i++) {
        results.push(callback(this[i]));
    }
    return results;
}