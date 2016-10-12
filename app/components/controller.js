class Controller {
    this.templteUrl;
    this.template;
    constructor(url, nodeId) {
        this.templteUrl = url;
    }
    this.loadTemplate() {
        Loader.makeRequest('POST', this.templateUrl).then((response) => {
            this.template = response;
        })

    }

}
