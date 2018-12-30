class Logger {
    debugg(message, file) {
        console.log('======================================');
        console.log(new Date());
        if (file) {
            console.log('in file: ', file, '.js: ')
        }
        console.log(message);
        console.log('======================================');
    }

    error(message, file) {
        console.error('======================================');
        console.error(new Date());
        if (file) {
            console.error('in file: ', file, ' .js: ')
        }
        console.error(message);
        console.error('======================================');
    }

}

module.exports = new Logger();