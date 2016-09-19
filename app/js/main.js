var app = {};

app.modelWeather = Backbone.Model.extend({
  defaults: {
    name: 'Cherkassy'
    },
  url: function() {
    return 'http://api.openweathermap.org/data/2.5/weather?q=' +this.get('name')+ '&APPID=f1cc7b16448b8d7d8d281170e4b8e07f'
  }
});
var weather = new app.modelWeather();




app.viewWeather = Backbone.View.extend({
  el: '.weather-app',
  template: _.template( $('#weatherTemplate').html() ),

  events: {
    'click .search-city': 'loadWeather',
    'input .city-name': 'loadWeather'
  },

  initialize: function () {
    this.model.fetch({
      success: function() {
        this.view.render();
      }
    });
  },

  render: function() {
    this.$('.weather-wrap').html(this.template( this.model.toJSON() ));
    return this;
  },

  loadWeather: function() {
    var cityValue = $('.city-name').val(),
        dataWeather;
    this.model.set('name',cityValue);
    dataWeather = this.model.fetch({
      success: function() {
        this.view.render();
      }
    });
  }

});

var view = new app.viewWeather({
  model: weather
});

