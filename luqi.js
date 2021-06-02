let obj = JSON.parse($response.body);
obj.data.is_vip = 1;
obj.data.vip_endtime = 2841763419;
$done({body: JSON.stringify(obj)});
