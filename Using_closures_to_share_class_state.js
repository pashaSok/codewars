let Cat = (function () {
    let cats = {
      count: 0,
      total: 0,
      avg: 0
    }
    function Cat (name, weight) {
      if (!name || !weight) {
        throw 'Cat requiring arguments for name and weight';
      }
      cats.count++;
      this.name = name;

      Object.defineProperty(this, 'weight', {
        get: function () {
          return this._weight || 0;
        },
        set: function (val) {
          cats.total = cats.total - this.weight + val;
          cats.avg =  cats.total / cats.count;
          return this._weight = val;
        }
      });
      this.weight = weight;
    }
    Cat.averageWeight = function () {
      return cats.avg;
    }
    return Cat;
  }());