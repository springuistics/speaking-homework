function doGet(e) {
  
  Logger.log(e);
  return HtmlService.createHtmlOutputFromFile("HTMLpage");
 
}
 
function userFinished(Snumber, allData) {
  var ws = SpreadsheetApp.openByUrl("URL");
  var ss = ws.getSheetByName("Answers");
 
  ss.appendRow([new Date(), Snumber, JSON.stringify(allData)]);
  
}
