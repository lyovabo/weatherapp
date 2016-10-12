// "use strict"
(function() {
    class TestController extends Controller {

        constructor(templateName) {
            super(templateName);
            // console.log(stackinfo())
            console.log(document.currentScript.src);
            console.log(document.location.href)

            console.log('asdfasdfasdf')

            console.log(this.getPath())

        }

    }

    let test = new TestController('test.html');
    // test.init();

    // test.template.then((resp) => {
    //     console.log('some then');
    //     console.log(resp)
    // })

})()
