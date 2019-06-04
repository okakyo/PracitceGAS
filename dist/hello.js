"use strict";
const ACCESS_TOKEN = PropertiesService.getScriptProperties().getProperty("LINE_API_TOKEN");
const baseURL = "https://api.line.me/v2/bot/";
function doGet() {
    let html = HtmlService.createTemplateFromFile("index");
    return html.evaluate();
}
function getData(alg) {
    if (alg == "title") {
        return "Hello!";
    }
    else if (alg == "body") {
        return "これはHTMLページの本文に表示するテキストです";
    }
}
function doPost(e) {
    // WebHookで受信した応答用Token
    var replyToken = JSON.parse(e.postData.contents).events[0].replyToken;
    // ユーザーのメッセージを取得
    var userMessage = JSON.parse(e.postData.contents).events[0].message.text;
    // 応答メッセージ用のAPI URL
    var url = 'message/reply';
    UrlFetchApp.fetch(url, {
        'headers': {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ' + ACCESS_TOKEN,
        },
        'method': 'post',
        'payload': JSON.stringify({
            'replyToken': replyToken,
            'messages': [{
                    'type': 'text',
                    'text': userMessage + 'ンゴ',
                }],
        }),
    });
    return ContentService.createTextOutput(JSON.stringify({ 'content': 'post ok' })).setMimeType(ContentService.MimeType.JSON);
}
//# sourceMappingURL=hello.js.map