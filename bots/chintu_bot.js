var ChintuBot = function() {
    var patterns = [
        {
            pattern: /what(.+)/gi,
            method: wtf
        },
        {
            pattern: /why(.+)/gi,
            method: dekhnaPadega
        },
        {
            pattern: /how(.+)/gi,
            method: logs
        },
    ];

    function chooseRand(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function wtf(callback, msg) {
        callback(msg + '?');
    }

    function logs(callback) {
        callback(chooseRand([
            'logs check kiye?',
            'check the logs.'
        ]));
    }

    function dekhnaPadega(callback) {
        callback('no idea. dekhna padega.');
    }

    return {
        getPatterns: function() {
            return patterns;
        }
    };
};

module.exports = ChintuBot;
