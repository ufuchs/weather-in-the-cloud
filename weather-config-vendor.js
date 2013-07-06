/*jslint node:true*/

'use strict';

module.exports = {

    cmd : {
        pngcrush : '/app/vendor/pngcrush/bin/pngcrush -c 0 {{inPng}} {{outPng}}',
        phantomjs : '/app/vendor/phantomjs/bin/phantomjs {{script}} {{inSvg}} {{outPng}} 1.0'
    }

};


