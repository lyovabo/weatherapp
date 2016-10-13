(function() {
    document.addEventListener("DOMContentLoaded", ready);

    function ready() {

        let controller = new TestComponent('tester');
        let controller2 = new TestComponent('tester');
        CurrentLocation.getLocation()
        console.log(controller.template)
        document.body.appendChild(controller.template)
    }
})()
