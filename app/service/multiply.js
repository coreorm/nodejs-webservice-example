(function (window) {
  /**
   * yep, i'm compatible with both browser and
   * node, YAY
   */
  const multiply = function (x, y) {
    return x * y;
  };

  // I'm for browser
  window.multiply = multiply;

  // I'm for node
  if (typeof module !== 'undefined') {
    module.exports = multiply;
  }

})(this);