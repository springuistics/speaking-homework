function doGet(e) {
  
  Logger.log(e);
  return HtmlService.createHtmlOutputFromFile("HTMLpage");
 
}
 
function userFinished(Snumber, allData) {
  var ws = SpreadsheetApp.openByUrl("URL");
  var ss = ws.getSheetByName("Answers");
 
  // Loop through qNo values in order for Part 1
  for (var i = 0; i < allData.part1.length; i++) {
    for (var j = 0; j < allData.part1.length; j++) {
      var item = allData.part1[j];
      if (item.qNo === i) {
        row.push(item.qNo);
        row.push(item.guesses);
        row.push(item.RT);
        break; // Stop after finding the match
      }
    }
  }
  // Loop through qNo values in order for Part 2
  for (var i = 0; i < allData.part2.length; i++) {
    for (var j = 0; j < allData.part2.length; j++) {
      var item = allData.part2[j];
      if (item.qNo === i) {
        row.push(item.qNo);
        row.push(item.correctness);
        row.push(item.penPct);
        row.push(item.SR);
        row.push(item.syllables);
        row.push(item.words);
        break; // Stop after finding the match
      }
    }
  }


  ss.appendRow([new Date(), Snumber, JSON.stringify(allData)]);
  
}
