
let obj = JSON.parse($response.body);
obj.data.allowItem = 1;
obj.data.isvip = 1;
obj.data.vip_endtime = 2841763419;
obj.data.isPrinta = 0;
$done({body: JSON.stringify(obj)});
