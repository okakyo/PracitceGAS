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
    let Sheet=new SheetChecker();

    let  page=e.parameter["p"];
    let html="index"
    let GetDataFromSheet=Sheet.getSheetData();
    GetDataFromSheet.shift();
    for(let  i in GetDataFromSheet){
      let date=new Date(GetDataFromSheet[i][0])
      GetDataFromSheet[i][0]=[
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
        ].join('/') 
    }
    let template=HtmlService.createTemplateFromFile(html);
    template.data=GetDataFromSheet;

    Logger.log(GetDataFromSheet);
    return template.evaluate();
}
function PostData(e,sheet){
  let inputData=[new Date(),e.parameter.tagName,e.parameter.checkCharge,e.parameter.amount,e.parameter.note]
  sheet.postSheetData(inputData);
}

// スプレッドシートを読み込み
class SheetChecker{
    parentSheet = SpreadsheetApp.openById('111La6bs-lKZpGg_jhH7ynVXAfGGsL-0XcEqvwcPZl_w');
    sheet=this.parentSheet.getSheets()[0];
    lastRow=this.sheet.getLastRow()

  getSheetData(id:number=null){
    if (id===null){
      let Data=this.sheet.getDataRange().getValues()
      return Data;
    }
    else{
      return this.sheet.getRange(id,1,id).getValues()
    }
  }
  postSheetData(inputdata:string[]){
    return this.sheet.appendRow(inputdata)
  }
  updateSheetData(row:number,col:number,value:string){
    return this.sheet.getRange(row,col).setValue(value)
  }
  removeSheetData(col:number){
    return this.sheet.deleteRow(col);
  }
}

