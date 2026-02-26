(function () {
  /* ===============================
     STYLES – 11D ULTRA MODERN HOME
  =============================== */
  const style = document.createElement("style");
  style.innerHTML = `
  .gold-home-only-btn {
    position: fixed;
    right: 15px; /* Screen ke right side mein */
    top: 50%;
    transform: translateY(-50%);
    width: 40px; 
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(145deg, #1a1a1a, #000000);
    border: 1px solid rgba(255, 215, 0, 0.8);
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.6), inset 0 0 5px rgba(255, 215, 0, 0.4);
    color: #FFD700;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 999999;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .gold-home-only-btn:hover {
    transform: translateY(-50%) scale(1.4);
    box-shadow: 0 0 25px rgba(255, 215, 0, 1), inset 0 0 10px rgba(255, 215, 0, 0.8);
    background: #FFD700;
    color: #000;
  }
  `;
  document.head.appendChild(style);

  /* ===============================
     HTML (LINKED TO index.html)
  =============================== */
  document.body.insertAdjacentHTML("beforeend", `
    <a href="index.html" class="gold-home-only-btn" title="Go to Home">🏠</a>
  `);
})();
