function doGet(e) {
  
  Logger.log(e);
  return HtmlService.createHtmlOutputFromFile("HTMLpage");
 
}
 
function userClicked(Snumber, Student_Name, cDay, cTime, the_utterance, SR, syllableCNT, noWords, timeElapsed, thingIs, Imean, well, tryingToSay, itTurnsOut, letMeSee) {
  var ws = SpreadsheetApp.openByUrl("URL");
  var ss = ws.getSheetByName("Answers");
 
  ss.appendRow([new Date(), Snumber, Student_Name, cDay, cTime, the_utterance, SR, syllableCNT, noWords, timeElapsed, thingIs, Imean, well, tryingToSay, itTurnsOut, letMeSee]);
  
}
