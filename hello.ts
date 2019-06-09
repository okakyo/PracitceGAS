
const  ACCESS_TOKEN:string|null = PropertiesService.getScriptProperties().getProperty("LINE_API_TOKEN");
const baseURL:string="https://api.line.me/v2/bot/"


function readCSS(filename:string){
  let css=HtmlService.createHtmlOutputFromFile(filename).getContent;
  return css;
}

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
    else if(alg=="form"){

    }
}
  