class Loader {
    constructor() {}
    static makeRequest(method, url) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = () => {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: this.status,
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
}
