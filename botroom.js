var BotRoom = function() {
    var bots = [];
    var humans = [];
    var replyCallback = null;

    function botMsgHandler(bot, msg) {
        setTimeout(function() {
            var patterns = bot.getPatterns();

            for (var i = 0; i < patterns.length; i++) {
                var pattern = patterns[i];
                var match = pattern.pattern.exec(msg);
                pattern.pattern.exec();

                if (match) {
                    if (replyCallback) {
                        reply = pattern.method(replyCallback, msg);
                    }
                }
            }
        }, 1);
    }

    function newMessage(msg, callback) {
        for (var i = 0; i < bots.length; i++) {
            botMsgHandler(bots[i], msg);
        }
    }

    function newBot(bot, callback) {
        bots.push(bot);
    }

    function newHuman(name, callback) {
        newHuman.push(name);
    }

    function onReply(callback) {
        replyCallback = callback;
    }

    return {
        newMessage: newMessage,
        newBot: newBot,
        newHuman: newHuman,
        onReply: onReply
    };
};

module.exports = BotRoom;
