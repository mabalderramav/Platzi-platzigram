var yo = require('yo-yo');
module.exports = function (pic) {
  return yo`<div class="card">
    <div class="card-image">
      <img class="activator" src="http://materializecss.com/images/office.jpg">
    </div>
    <div class="card-content">
      <span class="card-title grey-text text-darken-4">Card Title</span>
    </div>
  </div>`;
};
