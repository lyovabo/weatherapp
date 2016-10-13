class Collection extends EventEmitter {
    this.collection;
    constructor() {
        this.collection = new Map();
    }
    add(key, obj) {
        this.collection.set(key, obj);
        this.emit('add')
    }
    get(key) {
        return this.collection.get(key);
    }
    remove(key) {
        return this.gollection.delete(key);
        this.emit('remove')

    }

}
