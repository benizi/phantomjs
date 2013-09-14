var page = require('webpage').create();
page.viewportSize = {width:1440,height:900};
page.open('http://dragonfox.dev/', function(status) {
    console.log('status = ' + status);
    page.render('test.png');
    phantom.exit();
});
