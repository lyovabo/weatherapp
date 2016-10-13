class TestComponent extends Component {

    constructor(templateName) {
        super(templateName)
        this.addBindNode('p', 'geolocation', 'latitude')
        this.initEventsListeners()

    }
    initEventsListeners() {
        EventEmitter.on('geoPosition', (position) => {
            this.updateData('geolocation', position.coords.latitude)
            console.log(position.coords);
        });
    }
}
