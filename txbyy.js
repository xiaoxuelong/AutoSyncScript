var body = $response.body;
var obj = JSON.parse(body);

obj.data.vip_type = 2;
obj.data.Vip = 1;
obj.data.vip_expire_at = 1800000000;

body = JSON.stringify(obj);
$done({body});

