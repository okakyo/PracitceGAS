/*
  ・Google Spread Sheet を利用したGASアプリについて
  作るもの：GAS アプリ
  特徴：
  ・スプレッドシートに記入され、Webアプリから今週の利用状況を可視化できるアプリを作る。
*/



// スプレッドシートのデータよりチャートを生成する。
function createChart(){
  return 

}

function readCSS(filename:string){
  let css=HtmlService.createHtmlOutputFromFile(filename).getContent;
  return css;
}
// Web アプリを 公開する。
function doGet(e:any) {

    let  page=e.parameter["p"];
    let html="index"
    switch(page){
      case null : html="index"
      case "read": html="read"
      case "update": html="update"
  
    }
    return HtmlService.createTemplateFromFile(html).evaluate();
}


class SheetChecker{
  constructor(){
    let parentSheet = SpreadsheetApp.openById('111La6bs-lKZpGg_jhH7ynVXAfGGsL-0XcEqvwcPZl_w');
  }

  getData(id=null){
    if (id==null){}
    else{
      return 
    }
  }
  postData(){

  }
  updateData(){

  }
  removeData(){

  }
}

