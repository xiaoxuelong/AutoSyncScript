*/

body = $response.body.replace(/isVip":\w+/g, 'isVip":1').replace(/vipEndTime":\w+/g, ' vipEndTime ": 2209017600000 ');$done({body});
	
$done({body: JSON.stringify(obj)});
