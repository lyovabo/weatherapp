// "use strict"

class TestController extends Controller {

    constructor(templateName) {
        super(templateName);
        // console.log(stackinfo())
        console.log(document.currentScript.src);
        console.log(document.location.href)

        console.log('asdfasdfasdf')

        console.log(this.getPath())
        CurrentLocation.getLocation()
        console.log(this.constructor.name)

    }

}

let test = new TestController('test.html');
// test.init();

// test.template.then((resp) => {
//     console.log('some then');
//     console.log(resp)
// })
