class Controller {

    constructor(templateName) {
        console.log(templateName)
        this.templateName = templateName;


    }
    get name() {
        this._name = this.constructor.name;
    }
    init() {
        this.template = this.loadTemplate();
    }
    loadTemplate() {
        return Loader.makeRequest('POST', './' + this.templateName);

    }

    getPath() {

        let scripts = document.querySelectorAll('script[src]');
        let currentScript = scripts[scripts.length - 1].src;
        let currentScriptChunks = currentScript.split('/');
        let currentScriptFile = currentScriptChunks[currentScriptChunks.length - 1];

        return { 'path': currentScript.replace(currentScriptFile, ''), 'name': currentScriptFile };
    }
}
