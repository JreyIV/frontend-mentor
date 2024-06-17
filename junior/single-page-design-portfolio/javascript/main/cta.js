document.addEventListener("DOMContentLoaded", function () {
  const cta = document.querySelector("#cta");
  if (cta) {
    cta.innerHTML = `
            <div class="cta-box">
    <div class="cta-text">
        <h2>Book a call with me</h2>
        <p>
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
        </p>
    </div>
    <div>
        <button class="button orange-button">Free Consultation</button>
    </div>
</div>`;
  }
});
