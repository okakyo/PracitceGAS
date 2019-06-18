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

 function SheetGetter(){
   let Schemas:string[]=['日付','タグ名','費用']
   let sheet=SpreadsheetApp.getActiveSheet()
   
   return 
 }

