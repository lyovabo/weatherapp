class EventEmitter {
    static init() {
        this.topics = {};
        this.subUid = -1;
    }
    static get topics() {
        return this._topics;
    }
    static set topics(val) {
        this._topics = val;
    }
    static get subUid() {
        return this._subUid;
    }
    static set subUid(val) {
        this._subUid = val;
    }
    static emit(topic, ...args) {
        if (this.topics === undefined || this.subUid === undefined) {
            this.init();
        }
        if (!this.topics[topic]) {
            return false;
        }
        let subscribers = this.topics[topic];
        let len = subscribers ? subscribers.length : 0;
        while (len--) {
            subscribers[len].func(...args);
        }
        return this;
    }
    static on(topic, func) {
        if (this.topics === undefined || this.subUid === undefined) {
            this.init();
        }
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }

        let token = (++this.subUid).toString();
        this.topics[topic].push({
            token: token,
            func: func
        });
        return token;
    }
    static off(token) {
        for (let m in this.topics) {
            if (this.topics[m]) {
                for (let i = 0, j = this.topics[m].length; i < j; i++) {
                    if (this.topics[m][i].token === token) {
                        this.topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return this;
    }
}
