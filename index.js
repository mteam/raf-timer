var bind = require('bind'),
    raf = require('raf');

function RafTimer(onTick) {
  this.onTick = onTick;
  this.tick = bind(this, this.tick);
}

RafTimer.prototype = {

  start: function() {
    this.request();
  },

  pause: function() {
    raf.cancel(this.id);
  },

  request: function() {
    this.id = raf(this.tick);
  },

  tick: function() {
    this.onTick();
    this.request();
  }

};

module.exports = RafTimer;
