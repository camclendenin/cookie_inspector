ci.Views.Cookie = Backbone.View.extend({

  className: 'cookie-row',

  tagName: 'tr',

  events: {
    'contextmenu' : '_onContextMenu'
  },

  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove);
  },

  template: function() {
    return Hogan.compile($('#cookie-tmpl').text());
  },

  render: function() {
    this.$el.html(this.template().render(this.model.toJSON()));
    return this;
  },

  _onContextMenu: function(event) {
    var view = new ci.Views.ContextMenu({
      x: event.clientX,
      y: event.clientY
    });
    $(document.body).append(view.render().el);
    view.$el.focus();
    event.stopPropagation();
    event.preventDefault();
  }

});

