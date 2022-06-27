class Event{
    constructor(){
        this.handlers=new Set();
    }
    subscribe(handler){
        this.handlers.add(handler);
    }
    unsubscribe(handler){
        this.handlers.delete(handler);
    }
    emit(...args){
        return this.handlers.forEach(func => func(...args));
    }
}