// Define an array to hold advantage HTML content
var advantages = [
    "<div class=\"choose_box\">\n      <i><img src=\"images/quality-check-icon.png\" alt=\"#\"/></i>\n      <h3></h3>\n      <p>High-resolution designs for websites, flyers, brochures, to business cards.</p>\n    </div>",
    "<div class=\"choose_box\">\n      <i><img src=\"images/creative_icon.png\" alt=\"#\"/></i>\n      <h3></h3>\n      <p>Catering specifically to your business. Memorable logos help clients remember you.</p>\n    </div>",
    "<div class=\"choose_box\">\n      <i><img src=\"images/speed_round_icon.png\" alt=\"#\"/></i>\n      <h3></h3>\n      <p>Get your custom design in a week with minimum hassle.</p>\n    </div>",
    "<div class=\"choose_box\">\n      <i><img src=\"images/simplicity.png\" alt=\"#\"/></i>\n      <h3></h3>\n      <p>Strips unnecessary embellishments create intricate designs.</p>\n    </div>"
];
// Get the container element for advantage points
var advanPoints = document.getElementById('advan-points');
// Set initial content
if (advanPoints) {
    advanPoints.innerHTML = advantages[0];
}
// Add event listeners dynamically
advantages.forEach(function (content, index) {
    var button = document.getElementById("advan".concat(index + 1));
    if (button) {
        button.addEventListener('click', function () {
            if (advanPoints) {
                advanPoints.innerHTML = content;
            }
        });
    }
});
