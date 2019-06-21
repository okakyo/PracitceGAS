/*
  ・Google Spread Sheet を利用したGASアプリについて
  作るもの：GAS アプリ
  特徴：
  ・スプレッドシートに記入され、Webアプリから今週の利用状況を可視化できるアプリを作る。
*/



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
      GetDataFromSheet[i][0]=Utilities.formatDate(new Date(GetDataFromSheet[i][0]),'Asia/Tokyo','yyyy/MM/dd')
    }
    let template=HtmlService.createTemplateFromFile(html);
    template.data=GetDataFromSheet;

    Logger.log(GetDataFromSheet);
    return template.evaluate().setTitle('家計簿アプリ');;
}
function PostData(e:any,sheet:any){
  let inputData=[Utilities.formatDate(new Date(),'Asia/Tokyo','yyyy/MM/dd'),e.parameter.tagName,e.parameter.checkCharge,e.parameter.amount,e.parameter.note]
  sheet.postSheetData(inputData);
  
}

// スプレッドシートを読み込み
class SheetChecker{
    parentSheet = SpreadsheetApp.openById('111La6bs-lKZpGg_jhH7ynVXAfGGsL-0XcEqvwcPZl_w');
    sheet=this.parentSheet.getSheets()[0];
    lastRow=this.sheet.getLastRow()

  getSheetData(id:number=null){
    if (id===null){
      var ans=[]
      // 日付だけで取れるようにしたほうがいい。
      let getData=this.sheet.getDataRange().getValues()
      Logger.log(getData[1][0]);
      for(var i=getData.length; i =>1; i--){
        if(new Date(getData[0][i])!==new Date()){
          ans.push(getData[i])}
        else
          break
      }
      return ans;
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
