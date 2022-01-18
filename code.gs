function doGet(e) {
  
  Logger.log(e);
  return HtmlService.createHtmlOutputFromFile("page");
 
}
 
function userClicked(studentid2, name2, youbi2, kouji2, answer2) {
  var ws = SpreadsheetApp.openByUrl("URL");
  var ss = ws.getSheetByName("Answers");
 
  ss.appendRow([new Date(), studentid2, name2, youbi2, kouji2, answer2]);
  
}
