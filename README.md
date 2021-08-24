# webhooks proxy

## what

It receives the post requests from GitLab and replaces some string and posts to Slack :)

## where

in Google Drive so it runs for free :)  
Search for `Google Apps Script` for further studies.

## deploy

use `clasp` :)

### install clasp

```
$ npm i @google/clasp -g
```

### initialize clasp

```
$ clasp login
```

### clone/pull/push from/to remote GAS

#### clone

```
$ clasp clone 1n8****************************VZ1
```

#### pull

```
$ clasp pull 1n8****************************VZ1
```

#### push

```
$ clasp push 1n8****************************VZ1
```

### config

see `.env.js` and create your team members' table and define Slack Incoming Webhooks URI.

## GitLab

publish your GAS app after deploy and get web app URL and go to your repository settings `Integrations` -> `Slack Notifications` -> choose `Use custrom settings` from `Default Settings are inherited from the instance level.` and paste your web app URI to `Webhook` and you should be getting direct mention from GitLab!  Conrats!!  Have a nice day :beer:
