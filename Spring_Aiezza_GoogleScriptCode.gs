function doGet(e) {
  
  Logger.log(e);
  return HtmlService.createHtmlOutputFromFile("HTMLpage");
 
}
 
function userClicked(Snumber, final_answer, W, MLU) {
  var ws = SpreadsheetApp.openByUrl("URL");
  var ss = ws.getSheetByName("Answers");
 
  ss.appendRow([new Date(), Snumber, final_answer, W, MLU]);
  
}
