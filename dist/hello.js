function doGet() {
  var html = HtmlService.createTemplateFromFile("index");   
  return html.evaluate();
}
 
function getData(alg){
  if(alg == "title"){
    return "Hello!";
  }else if(alg == "body"){
    return "これはHTMLページの本文に表示するテキストです";
  }
}

