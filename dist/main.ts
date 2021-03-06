/*
  ・Google Spread Sheet を利用したGASアプリについて
  作るもの：GAS アプリ
  特徴：
  ・スプレッドシートに記入され、Webアプリから今週の利用状況を可視化できるアプリを作る。
*/

var url=""

function readCSS(filename:string){
  let css=HtmlService.createHtmlOutputFromFile(filename).getContent();
  return css;
}
// Web アプリを 公開する。
function doGet(e:any) {
    let Sheet=new SheetChecker();

    let  page=e.parameter["p"];
    let html="index"
    let GetDataFromSheet=Sheet.getSheetData();
    for(let  i in GetDataFromSheet){
      GetDataFromSheet[i][0]=Utilities.formatDate(new Date(GetDataFromSheet[i][0]),'Asia/Tokyo','yyyy/MM/dd')
    }
    let template=HtmlService.createTemplateFromFile(html);
    template.data=GetDataFromSheet;
    Logger.log(GetDataFromSheet);
    return template.evaluate()
            .setTitle('家計簿アプリ')
            .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
function doPost(e:any){
  let sheet=new SheetChecker()
  let lastRow=sheet.getLastRow()
  let inputData=[Utilities.formatDate(new Date(),'Asia/Tokyo','yyyy/MM/dd'),e.parameter.tagName,e.parameter.checkCharge,e.parameter.amount,e.parameter.note,lastRow]
  sheet.postSheetData(inputData);
  return doGet(e)
}

function deleteData(id:number){
  let data=new SheetChecker();
  data.deleteSheetData(id);
  return HtmlService.createTemplateFromFile("index").evaluate()
      .setTitle('家計簿アプリ')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
    
}

// スプレッドシートを読み込み
class SheetChecker{
    parentSheet = SpreadsheetApp.openById('111La6bs-lKZpGg_jhH7ynVXAfGGsL-0XcEqvwcPZl_w');
    sheet=this.parentSheet.getSheets()[0];
    lastRow=this.sheet.getLastRow()

  getLastRow(){
    return this.lastRow
  }
  getSheetData(id:number=null){
    if (id===null){
      var ans=[]
      // 日付だけで取れるようにしたほうがいい。
      let getData=this.sheet.getDataRange().getValues()
      for(var i=getData.length-1;i >=0; i--){
        if(Utilities.formatDate(new Date(getData[i][0]),'Asia/Tokyo','yyyy/MM/dd')===Utilities.formatDate(new Date(),'Asia/Tokyo','yyyy/MM/dd')){
          ans.push(getData[i])
        }
      }
      Logger.log(ans);
      
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
  deleteSheetData(col:number){
    return this.sheet.deleteRow(col);
  }
}
