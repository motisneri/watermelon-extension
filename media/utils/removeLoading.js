function removeLoading(errorTimeout) {
  clearTimeout(errorTimeout);
  $("#holders p").remove();
  $("#holders button").remove();
  $("#holders").append(`
  <div id="buttonHolder"></div>
  <div id="commitHolder"></div>
  <div id="mostRelevantJiraTicketHolder"></div>
  <div id="slackHolder"></div>
  <div id="ghHolder"></div>
  <div id="jiraHolder"></div>
  <div id="dailySummary"></div>`);
  
}
export default removeLoading;
