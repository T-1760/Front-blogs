const sidebar = require("./sidebar.js")
const nav = require("./nav.js")
const friendLink = require("./friendLink.js")

module.exports = {
  "title": "vue-press-blogs",
  "description": "What a impressive, this is my front blogs!",
  "base": "/public/",
  "dest": "./public/",
  "head": [
    [ "link", { "rel": "icon", "href": "/favicon.ico" }],
    [ "meta", {  "name": "viewport",  "content": "width=device-width,initial-scale=1,user-scalable=no"}]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": nav,
    "sidebar": sidebar,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": friendLink,
    "logo": "/favicon.ico",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Tang",
    "authorAvatar": "/avatar.jpg",
    "record": "备案信息",
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  }
}