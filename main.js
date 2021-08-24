function doPost(e) {
  // payload整形
  const bgnStr = 'payload={';
  const plString = replaceMention(decodeURIComponent(e.postData.contents));
  const pl = JSON.parse(plString.substring(bgnStr.length-1,plString.length));
  // slack投稿
  post2Slack(pl);
}

function replaceMention(text) {
  if (!text) { return text }
  for (i in members) {
    const gitlab = members[i].gitlab;
    const slack = members[i].slack;
    if (text.indexOf(gitlab) > 0) {
      text = text.replaceAll(gitlab, slack);
    }
  }
  return text
}
