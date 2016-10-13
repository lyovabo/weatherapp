class Component {

    constructor(templateName) {

        componentsIndexes.components = templateName;

        this.templateName = templateName;
        this.createTemplate('div');
        this.binds = {}

    }
    get templateName() {
        return this._templateName;
    }
    set templateName(name) {
            if (!name) {
                this._templateName = this.constructor.name;
            } else {

                this._templateName = name;
            }
        }
        /* create main wrapper template for component,
		elem to set wrapper-id attribute value(indexing of )
    */
    createTemplate(elem) {
            if (!this.template) {
                this.template = document.createElement(elem);
                this.template.setAttribute('wrapper-id', this.templateName);

            } else {
                return false;
            }
        }
        /*tagname of node,
        bindname for binding(required),
        data which must be appended,
        parent(node, optional, to append to parent,
        not to component wrapper)
         */
    addBindNode(tagName, bindName, data, parent) {
            if (this.binds[bindName]) {
                return 'duplicate bindname';
            }
            this.binds[bindName] = true;
            let node = document.createElement(tagName);
            node.setAttribute('binding', bindName);
            if (data !== undefined) {
                node.innerHTML = data;
            }
            if (!parent) {

                this.template.appendChild(node);
            } else {
                parent.appendChild(node);
            }
        }
        /*
	update current component bindable nodes data,
	bindname for indexing node,
	data, 
    */
    updateData(bindName, data) {
        if (this.binds[bindName] === undefined) {
            return false;
        }
        let elem = document.querySelectorAll('[binding=' + bindName + ']')[0];
        elem.innerHTML = data;
    }
    removeBindNode(bindName) {
        if (this.binds[bindName] === undefined) {
            return false;
        }
        delete this.binds[bindName];
        document.querySelectorAll('[binding=' + bindName + ']')[0].remove();


    }



    get path() {
        return this._path;
    }
    set path(path) {
        this._path = path;
    }
    init() {
        Loader.getPath();
        this.template = this.loadTemplate();
    }
    loadTemplate() {
        return Loader.makeRequest('GET', this.path + this.templateName + '.html');

    }



}
