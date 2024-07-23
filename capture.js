// capture.js
let body = $response.body;
console.log(body); // 打印响应体，方便调试
$done({body});
