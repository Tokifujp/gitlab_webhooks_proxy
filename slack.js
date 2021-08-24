function post2Slack(payload) {
  if (!payload) { return }
  const url = slackUrl;
  const params = {
    method: 'post',
    contentType: 'application/json',
    muteHttpExceptions: true,
    payload: JSON.stringify(payload)
  };
  const response = UrlFetchApp.fetch(url, params);
}
