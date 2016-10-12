class Collection {
    this.collection;
    constructor() {
        this.collection = new Map();
    }
    add(key, obj) {
        this.collection.set(key, obj);
    }
    get(key) {
        return this.collection.get(key);
    }
    remove(key) {
        return this.gollection.delete(key);

    }

}
