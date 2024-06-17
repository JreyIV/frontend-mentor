document.addEventListener("DOMContentLoaded", function () {
  const services = document.querySelector("#services");
  if (services) {
    services.innerHTML = `<div class="service-card graphic-design">
    <img src="../../assets/pattern-graphic-design.svg" alt="graphic design" />
    <h3>Graphic Design</h3>
</div>
<div class="service-card ui-ux">
    <img src="../../assets/pattern-ui-ux.svg" alt="ui/ux" />
    <h3>UI/UX</h3>
</div>
<div class="service-card apps">
    <img src="../../assets/pattern-apps.svg" alt="apps" />
    <h3>Apps</h3>
</div>
<div class="service-card photography">
    <img src="../../assets/pattern-photography.svg" alt="photography" />
    <h3>Photography</h3>
</div>
<div class="service-card illustrations">
    <img src="../../assets/pattern-illustrations.svg" alt="illustrations" />
    <h3>Illustrations</h3>
</div>
<div class="service-card motion-graphics">
    <img src="../../assets/pattern-motion-graphics.svg" alt="motion graphics" />
    <h3>Motion Graphics</h3>
</div>`;
  }
});
