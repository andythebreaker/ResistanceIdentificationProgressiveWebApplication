[![pages-build-deployment](https://github.com/andythebreaker/andythebreaker.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/andythebreaker/andythebreaker.github.io/actions/workflows/pages/pages-build-deployment)
[![CodeQL](https://github.com/andythebreaker/andythebreaker.github.io/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/andythebreaker/andythebreaker.github.io/actions/workflows/codeql-analysis.yml)
[![Build and Deploy](https://github.com/andythebreaker/andythebreaker.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/andythebreaker/andythebreaker.github.io/actions/workflows/main.yml)

# start info.

## windows

|ver|node|
|--|--|
|10|14.16.0|

`"start": "SET PORT=18877 && react-scripts start",`

`npm i`

`npm start`

## linux

|ver|node|
|--|--|
|10|17.9.0|

`"start": "PORT=18877 react-scripts start",`

`npm install` : ok

`npm start` : ok


# Q/A

- [ ] 旋轉鏡頭無效

## git

[Tags may not have any characters that encodeURIComponent encodes.](https://resistor-identification-websit.herokuapp.com/inner?id=62b03e28ddfe5ef1ca31fc27&pid=62b03ad9ddfe5ef1ca31fc23&ic=l)

## B/N

### solved

- port
> use `./killport.sh`

- request-a-page-build
> [request-a-page-build api](https://developer.github.com/v3/repos/pages/#request-a-page-build)
`gh api --method POST -H "Accept: application/vnd.github.v3+json" /repos/andythebreaker/andythebreaker.github.io/pages/builds`

## F/N

- 應該是ssl的問題
- https or localhost!

~~### solved~~

~~[chrome-navigator-mediadevices-getusermedia-is-not-a-function](https://stackoverflow.com/questions/37315361/chrome-navigator-mediadevices-getusermedia-is-not-a-function)~~