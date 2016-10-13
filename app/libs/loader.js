class Loader {
    constructor() {}
    static makeRequest(method, url) {
        return new Promise(function(resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = () => {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };
            xhr.send();
        });
    }
    static scriptLoader(src) {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = src;
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    static getPath() {

        let scripts = document.querySelectorAll('script[src]');
        let currentScript = scripts[scripts.length - 1].src;
        let currentScriptChunks = currentScript.split('/');
        let currentScriptFile = currentScriptChunks[currentScriptChunks.length - 1];

        return currentScript.replace(currentScriptFile, '');
    }
}
