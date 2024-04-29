function loadGradient() {
  const gradientValue = `radial-gradient(
        at 97% 21%,
        var(--gradient-color-green) 0px,
        transparent 50%
      ),
      radial-gradient(at 52% 99%, var(--gradient-color-red) 0px, transparent 50%),
      radial-gradient(
        at 10% 29%,
        var(--gradient-color-purple) 0px,
        transparent 50%
      )`;
  document.documentElement.style.setProperty("--gradient-value", gradientValue);
}

window.addEventListener("load", loadGradient);
