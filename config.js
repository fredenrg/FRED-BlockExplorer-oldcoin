var api = 'http://node.ultranote.org:31000';
var apiList = ["http://node.ultranote.org:31000"];
var blockTargetInterval = 120;
var coinUnits = 1000000;
var symbol = 'XUN';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
	"xun": [
		["Alpha", "http://alpha.ultranote.org:8117/stats"],
                ["Beta", "http://beta.ultranote.org:8118/stats"],
		["Delta", "http://delta.ultranote.org:8117/stats"]
    ]
};
