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
