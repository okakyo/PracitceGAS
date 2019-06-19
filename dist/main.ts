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

// スプレッドシートを読み込み 
class SheetChecker{
    parentSheet = SpreadsheetApp.openById('111La6bs-lKZpGg_jhH7ynVXAfGGsL-0XcEqvwcPZl_w');
    sheet=this.parentSheet.getSheets()[0];
    lastRow=this.sheet.getLastRow()

  getData(id:number=null){
    if (id===null){
      return this.sheet.getDataRange().getValues()
    }
    else{
      return this.sheet.getRange(id,1,id).getValues()
    }
  }
  postData(inputdata:string[]){
    this.sheet.appendRow(inputdata)
  }
  updateData(row:number,col:number,value:string){
    this.sheet.getRange(row,col).setValue(value)
  }
  removeData(col:number){
    this.sheet.deleteRow(col);
  }
}

