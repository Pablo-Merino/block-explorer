const exphbs = require('express-handlebars');

var hbs = exphbs.create({
  extname: '.hbs',
  defaultLayout: 'main',
  helpers: {
    humanDate: function(date) {
      return new Date(date).toISOString().split('T')[0].replace(/\-/g, '/')
    },
    formatDate: function(date) {
      if (date) {
        var dateOptions = {year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'}
        var timeOptions = {hour: 'numeric', minute: 'numeric'}
        return date.toLocaleDateString('en', dateOptions)  + ' ' + date.toLocaleTimeString('en', timeOptions)
      }
    },
    humanSize: function(bytes) {
      if (bytes == 0) return '0 Byte'
      var k = 1000,
          sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          i = Math.floor(Math.log(bytes) / Math.log(k))
      return (bytes / Math.pow(k, i)).toPrecision(3).toString().replace(/\.00$/,'') + ' ' + sizes[i]
    },
    percentage: function(q, max) {
      return Math.round(((max-q)/max)*100)
    },
    json: function(obj) {
      return JSON.stringify(obj)
    },
    getTime: function(date) {
      if (date)
        return date.getTime()
    },
    beautyJson: function (obj) {
      return JSON.stringify(obj, null, "\t")
    }
  }
});

module.exports = hbs