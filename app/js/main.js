var app = {};

app.modelWeather = Backbone.Model.extend({
  defaults: {
    location: 'Cherkassy'
  },
  url: function() {
    return 'http://api.openweathermap.org/data/2.5/forecast?q=' +this.get('location')+ '&APPID=f1cc7b16448b8d7d8d281170e4b8e07f'
  }
});
var weather = new app.modelWeather();

app.collectionWeather = Backbone.Collection.extend({
  model: weather
});
allWeather = new app.collectionWeather();



app.viewWeather = Backbone.View.extend({
  el: '.control-block',

  events: {
    'click .search-city': 'loadWeather'
  },
  loadWeather: function() {
    var cityValue = $('.city-name').val(),
        dataWeather;
    this.model.set('location',cityValue);
    dataWeather = this.model.fetch();
    return console.log(dataWeather);
  }
});

var view = new app.viewWeather({
  model: weather
});

