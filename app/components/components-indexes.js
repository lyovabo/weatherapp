class componentsIndexes {
    static init() {
        this._components = {};
    }
    static set components(component) {
        if (!this.components) {
            this.init();
        }
        if (this._components[component]) {
            throw new Error('component naming dublication');
        }
        this._components[component] = true;
    }
    static get components() {
        return this._components;
    }

}
