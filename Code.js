function doGet(e) {
  var template = HtmlService.createTemplateFromFile('Index');
  
  // Build and return HTML in IFRAME sandbox mode.
  return template.evaluate()
      .setTitle('Team Wall')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function getTeams() {
  return getTeamsSinglePointOfTruth();
}

function getMembersFromGroup(groupEmail) {
  var group = GroupsApp.getGroupByEmail(groupEmail);
  var users = group.getUsers();
  
  var members = [];
  for (var i = 0; i < users.length; i++) {
    members.push(users[i].getEmail());
  }
  return members;
}

function getTeamsSinglePointOfTruth() {

  var scriptProperties = PropertiesService.getScriptProperties();
  sourceSpreadsheetDocumentId = scriptProperties.getProperty('sourceSpreadsheetDocumentId')
  var doc = SpreadsheetApp.openById(sourceSpreadsheetDocumentId);


  var teamCount = doc.getSheets()[0].getLastRow() - 1;
  var range = doc.getRange('A2:' + 'G' + (teamCount + 1));
  
  var teamStruct = [];
  
  for (var i = 1; i <= teamCount; i++) {
    teamMailingList = range.getCell(i, 6).getValue();
    
    teamStruct.push({
      'name':  range.getCell(i, 1).getValue(),
      'mission':  range.getCell(i, 2).getValue(),
      'vision':  range.getCell(i, 3).getValue(),
      'constraints': range.getCell(i, 4).getValue(),
      'floor':  range.getCell(i, 5).getValue(),
      'email':  teamMailingList,
      'members': getMembersFromGroup(teamMailingList),
    });
    
  }
  
  return teamStruct;
}