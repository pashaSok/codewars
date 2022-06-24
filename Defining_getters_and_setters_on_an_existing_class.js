Object.defineProperty(Person.prototype, 'name',{
    set: function name(value){
        const names = value.split(" ");
        this.firstName=names[0];
        this.lastName=names[1];
        return this.value;
    },
    get: function name(){
        return this.firstName + ' ' + this.lastName;
    }
});
