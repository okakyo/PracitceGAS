
const  ACCESS_TOKEN:string|null = PropertiesService.getScriptProperties().getProperty("LINE_API_TOKEN");
const baseURL:string="https://api.line.me/v2/bot/"

function doGet() {
    let  html = HtmlService.createTemplateFromFile("index");   
    return html.evaluate();
}

function getData(alg:string){
    if(alg == "title"){
      return "Hello!";
    }
    else if(alg == "body"){
      return "これはHTMLページの本文に表示するテキストです";
    }
}
  



function doPost(e:any) {
    // WebHookで受信した応答用Token
    var replyToken:string = JSON.parse(e.postData.contents).events[0].replyToken;
    // ユーザーのメッセージを取得
    var userMessage:string = JSON.parse(e.postData.contents).events[0].message.text;
    // 応答メッセージ用のAPI URL
    var url:string = baseURL+'message/reply';
  
    interface beforeHeaders{
      'headers':{[keys:string]:string},
      'method':any,
      'payload':{[key:string]:string}
    }
    
    const Headers:beforeHeaders={
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + ACCESS_TOKEN,
      },
      'method': "post",
      'payload':{
        'replyToken':replyToken,
        'message':JSON.stringify({
          'type': 'text',
          'text': userMessage + 'ンゴ', 
        })
      }
    }
    


    UrlFetchApp.fetch(url, Headers);
    return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
  }