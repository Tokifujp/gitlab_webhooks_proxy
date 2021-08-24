# GitLab webhooks proxy

## what

It receives the post requests from GitLab and replaces some string and posts to Slack :)　　
<img width="474" alt="スクリーンショット 2021-08-24 15 56 29" src="https://user-images.githubusercontent.com/7005185/130572764-3c28574e-1b79-4332-a469-038338835e01.png">


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

publish your GAS app after deploy and get web app URL and go to your repository settings:  

1. `Settings` -> `Integrations` -> `Slack Notifications` <br/><img width="432" alt="スクリーンショット 2021-08-24 16 14 30" src="https://user-images.githubusercontent.com/7005185/130573860-1909f12b-9602-42c4-b415-0da68c3282e8.png"> <br/> <img width="674" alt="スクリーンショット 2021-08-24 16 14 49" src="https://user-images.githubusercontent.com/7005185/130573921-60a69e04-73c8-4cae-be2b-f6c63a500134.png">
2. choose `Use custrom settings` from `Default Settings are inherited from the instance level.`[^1]
3. paste your web app URI to `Webhook` <br/><img width="692" alt="スクリーンショット 2021-08-24 16 15 14" src="https://user-images.githubusercontent.com/7005185/130574000-c82be24b-fb9f-41e3-bb85-2ae56ce8e30e.png">


and you should be getting direct mention from GitLab!  Conrats!!  Have a nice day :beer:

[^1]: You won't require this if you're not using the GitLab CE:beer:
