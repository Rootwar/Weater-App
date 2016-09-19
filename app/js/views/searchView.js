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
