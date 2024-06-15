document.addEventListener("DOMContentLoaded", function () {
  const services = document.querySelector("#services");
  if (services) {
    services.innerHTML = `<div class="service-card graphic-design">
    <img src="../../assets/pattern-graphic-design.svg" alt="graphic design" />
    <h2>Graphic Design</h2>
</div>
<div class="service-card ui-ux">
    <img src="../../assets/pattern-ui-ux.svg" alt="ui/ux" />
    <h2>UI/UX</h2>
</div>
<div class="service-card apps">
    <img src="../../assets/pattern-apps.svg" alt="apps" />
    <h2>Apps</h2>
</div>
<div class="service-card photography">
    <img src="../../assets/pattern-photography.svg" alt="photography" />
    <h2>Photography</h2>
</div>
<div class="service-card illustrations">
    <img src="../../assets/pattern-illustrations.svg" alt="illustrations" />
    <h2>Illustrations</h2>
</div>
<div class="service-card motion-graphics">
    <img src="../../assets/pattern-motion-graphics.svg" alt="motion graphics" />
    <h2>Motion Graphics</h2>
</div>`;
  }
});
