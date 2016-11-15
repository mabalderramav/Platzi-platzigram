var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
  title('Platzigram');
  var main = document.getElementById('main-container');
  var pictures = [
    {
      user : {
        username: 'mabalderramav',
        avatar: 'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/14502727_10210685661322131_7576587992415908614_n.jpg?oh=1e47d55b6a75b1d0b0bdf89fff94a809&oe=58981C5F'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 10,
      liked: false,
      createdAt: new Date()
    },
    {
      user : {
        username: 'mabalderramav',
        avatar: 'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/14502727_10210685661322131_7576587992415908614_n.jpg?oh=1e47d55b6a75b1d0b0bdf89fff94a809&oe=58981C5F'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 15,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    },
    {
      user : {
        username: 'mabalderramav',
        avatar: 'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/14502727_10210685661322131_7576587992415908614_n.jpg?oh=1e47d55b6a75b1d0b0bdf89fff94a809&oe=58981C5F'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 5,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 5)
    }
  ];
  empty(main).appendChild(template(pictures));
});
