// Define an array to hold advantage HTML content
const advantages: string[] = [
    `<div class="choose_box">
      <i><img src="images/quality-check-icon.png" alt="#"/></i>
      <h3></h3>
      <p>High-resolution designs for websites, flyers, brochures, to business cards.</p>
    </div>`,
    `<div class="choose_box">
      <i><img src="images/creative_icon.png" alt="#"/></i>
      <h3></h3>
      <p>Catering specifically to your business. Memorable logos help clients remember you.</p>
    </div>`,
    `<div class="choose_box">
      <i><img src="images/speed_round_icon.png" alt="#"/></i>
      <h3></h3>
      <p>Get your custom design in a week with minimum hassle.</p>
    </div>`,
    `<div class="choose_box">
      <i><img src="images/simplicity.png" alt="#"/></i>
      <h3></h3>
      <p>Strips unnecessary embellishments create intricate designs.</p>
    </div>`
];

// Get the container element for advantage points
const advanPoints = document.getElementById('advan-points') as HTMLElement;

// Set initial content
if (advanPoints) {
    advanPoints.innerHTML = advantages[0];
}

// Add event listeners dynamically
advantages.forEach((content: string, index: number) => {
    const button = document.getElementById(`advan${index + 1}`) as HTMLElement | null;

    if (button) {
        button.addEventListener('click', () => {
            if (advanPoints) {
                advanPoints.innerHTML = content;
            }
        });
    }
});
