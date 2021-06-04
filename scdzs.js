
let obj = JSON.parse($response.body);
obj.data.allowItem = {"paperAnserNum":9999,"allowVideoNum":9999,"allowAllStardAnser":9999,"allowVideoAll":9999,"allowViewQuestionNum":9999,"order":2};
obj.data.isVip = 1;
obj.data.vipEndTime = 2841763419;
obj.data.isPrint = 0;
$done({body: JSON.stringify(obj)});
