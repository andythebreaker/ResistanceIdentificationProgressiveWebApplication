const tmp = require('tmp');
var reader = require('b64image_reader');
var copy = require('copy');
var result = null;
var img64 = "";

module.exports = {
    init: function (fil) {
        if (fil) {
            //tmp.file(function _tempFileCreated(err, path, fd, cleanupCallback) {
            tmp.dir(function _tempDirCreated(err, path, cleanupCallback) {
                if (err) { console.log(err); } else {
                    console.log('File: ', path);
                    //console.log('Filedescriptor: ', fd);
                    copy(fil, path, function (err, files) {
                        if (err) throw err;
                        // `files` is an array of the files that were copied
                        result = reader(path, 'jpg');
                        if (result.length === 1) {
                            console.log(result);
                            img64 = result[0];
                            return true;
                        } else {
                            console.log("ERROR, image read error")
                            process.exit(1);
                        }
                    });
                    // If we don't need the file anymore we could manually call the cleanupCallback
                    // But that is not necessary if we didn't pass the keep option because the library
                    // will clean after itself.
                    //  cleanupCallback();
                }
            });
        } else {
            console.log(`PLZ, type in CMD : --input="./pitcure_path.jpg"`);
            process.exit(1);
        };
    },
    img64_: function () {
        return img64;
    }
}
