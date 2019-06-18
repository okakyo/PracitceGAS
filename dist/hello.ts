/*
  ・Google Spread Sheet を利用したGASアプリについて
  作るもの：GAS アプリ
  特徴：
  ・スプレッドシートに記入され、Webアプリから今週の利用状況を可視化できるアプリを作る。
*/


const  ACCESS_TOKEN:string|null = PropertiesService.getScriptProperties().getProperty("LINE_API_TOKEN");
const baseURL:string="https://api.line.me/v2/bot/"

// スプレッドシートのデータよりチャートを生成する。
function createChart(){
  return 

}

function readCSS(filename:string){
  let css=HtmlService.createHtmlOutputFromFile(filename).getContent;
  return css;
}

function doGet(e:any) {
    let  page=e.parameter["p"];
    let html="index"
    switch(page){
      case null : html="index";
    }
    return HtmlService.createTemplateFromFile(html).evaluate();
}

function getData(alg:string){
    if(alg == "title"){
      return "Hello!";
    }
    else if(alg == "body"){
      return "これはHTMLページの本文に表示するテキストです";
    }
    else if(alg=="form"){
        return 
    }
}
 

