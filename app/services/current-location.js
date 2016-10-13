class CurrentLocation {

    static getLocation() {
        if (navigator.geolocation) {
            return navigator.geolocation.getCurrentPosition(this.getPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    static getPosition(position) {
        EventEmitter.emit('geoPosition', position);
    }

}
