class CurrentLocation {

    static getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    static showPosition(position) {
        console.log(position);
    }
}
