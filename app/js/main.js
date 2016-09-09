var app = {};

app.modelWeather = Backbone.Model.extend({
  defaults: {}
});

app.collectionWeather = Backbone.Collection.extend({
  model: app.modelWeather,
  url: 'http://api.openweathermap.org/data/2.5/forecast?q=' +this.cityValue+ '&APPID=f1cc7b16448b8d7d8d281170e4b8e07f'
});
allWeather = new app.collectionWeather();



app.viewWeather = Backbone.View.extend({
  el: '.control-block',

  events: {
    'click .search-city': 'loadWeather'
  },

  loadWeather: function() {
    this.cityValue = $('.city-name').val();
    this.collection.fetch();
  }
  
});

var view = new app.viewWeather({
  collection: allWeather
});

