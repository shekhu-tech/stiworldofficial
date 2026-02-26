(function () {

  /* ===============================
     CONFIG (PASTE YOUR EXEC URL)
  =============================== */
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxIQ36BkocFZqk9jmWwAvwWDPiWRpqrNs_6sEnfNj5kYaawMkd41GUYwf5w8wN-Qw8p/exec";

  /* ===============================
     STYLES – 11D ULTRA PRO MAX
  =============================== */
  const style = document.createElement("style");
  style.innerHTML = `
  @keyframes floatGlow {
    0% { box-shadow:0 0 15px #FFD700, inset 0 0 10px #000; }
    50% { box-shadow:0 0 45px #FFD700, inset 0 0 20px #111; }
    100% { box-shadow:0 0 15px #FFD700, inset 0 0 10px #000; }
  }

  @keyframes zoomIn {
    from { transform:scale(.7) translateY(40px); opacity:0; }
    to { transform:scale(1) translateY(0); opacity:1; }
  }

  .gold-float-btn{
    position:fixed;
    right:1px;
    top:50%;
    transform:translateY(-50%);
    width:40px;height:40px;
    border-radius:50%;
    background:radial-gradient(circle,#FFD700,#b8860b);
    color:#000;
    font-size:26px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    z-index:99999;
    animation:floatGlow 2.5s infinite;
  }

  .gold-form-overlay,
  .thank-overlay{
    position:fixed;
    inset:0;
    background:linear-gradient(145deg,rgba(0,0,0,.85),rgba(20,20,20,.95));
    z-index:100000;
    display:none;
    align-items:center;
    justify-content:center;
    backdrop-filter:blur(10px);
  }

  .gold-form-box,
  .thank-box{
    width:92%;
    max-width:400px;
    padding:26px;
    border-radius:24px;
    background:linear-gradient(145deg,#0a0a0a,#121212);
    border:1px solid rgba(255,215,0,.6);
    box-shadow:
      0 0 60px rgba(255,215,0,.45),
      inset 0 0 25px rgba(255,215,0,.08);
    color:#fff;
    animation:zoomIn .5s ease;
    position:relative;
  }

  .gold-form-box h3,
  .thank-box h2{
    text-align:center;
    color:#FFD700;
    letter-spacing:1px;
    margin-bottom:14px;
    text-shadow:0 0 12px rgba(255,215,0,.6);
  }

  .gold-form-box input,
  .gold-form-box select,
  .gold-form-box textarea{
    width:100%;
    padding:12px;
    margin-bottom:12px;
    border-radius:12px;
    border:1px solid rgba(255,215,0,.35);
    background:rgba(0,0,0,.6);
    color:#fff;
    font-size:14px;
    box-shadow:inset 0 0 10px rgba(255,215,0,.1);
  }

  .gold-form-box button,
  .thank-box button{
    width:100%;
    padding:14px;
    border-radius:14px;
    border:none;
    background:linear-gradient(145deg,#FFD700,#ffae00);
    color:#000;
    font-weight:900;
    letter-spacing:1px;
    cursor:pointer;
    box-shadow:0 0 25px rgba(255,215,0,.7);
  }

  .gold-close{
    position:absolute;
    top:14px;
    right:18px;
    font-size:22px;
    color:#FFD700;
    cursor:pointer;
  }

  .thank-box p{
    text-align:center;
    font-size:15px;
    line-height:1.6;
    opacity:.9;
  }
  `;
  document.head.appendChild(style);

  /* ===============================
     HTML
  =============================== */
  document.body.insertAdjacentHTML("beforeend", `
    <div class="gold-float-btn">✉️</div>

    <div class="gold-form-overlay">
      <div class="gold-form-box">
        <div class="gold-close">✕</div>
        <h3>Tell-Us</h3>

        <input id="gf-name" placeholder="Your Name">
        <input id="gf-phone" placeholder="Mobile Number">
        <input id="gf-email" placeholder="Email">
        <input id="gf-location" placeholder="Location">

        <select id="gf-type">
          <option>Complaint</option>
          <option>Suggestion</option>
          <option>Query</option>
        </select>

        <textarea id="gf-message" rows="3" placeholder="Write your message..."></textarea>
        <button id="gf-submit">SEND MESSAGE</button>
      </div>
    </div>

    <div class="thank-overlay">
      <div class="thank-box">
        <h2>Thank You, <span id="thank-name"></span> ✨</h2>
        <p>
          Your message has been received successfully.<br>
          Team <b>STISKILLI</b> will contact you soon.
        </p>
        <button id="thank-ok">CLOSE</button>
      </div>
    </div>
  `);

  /* ===============================
     LOGIC
  =============================== */
  const btn = document.querySelector(".gold-float-btn");
  const formOverlay = document.querySelector(".gold-form-overlay");
  const thankOverlay = document.querySelector(".thank-overlay");

  btn.onclick = () => formOverlay.style.display = "flex";
  document.querySelector(".gold-close").onclick = () => formOverlay.style.display = "none";

  document.getElementById("gf-submit").onclick = () => {

    const name = document.getElementById("gf-name").value.trim();
    if (!name) return alert("Please enter your name");

    const data = new FormData();
    data.append("name", name);
    data.append("phone", document.getElementById("gf-phone").value);
    data.append("email", document.getElementById("gf-email").value);
    data.append("location", document.getElementById("gf-location").value);
    data.append("type", document.getElementById("gf-type").value);
    data.append("message", document.getElementById("gf-message").value);

    fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: data
    });

    formOverlay.style.display = "none";
    document.getElementById("thank-name").innerText = name;
    thankOverlay.style.display = "flex";
  };

  document.getElementById("thank-ok").onclick = () => {
    thankOverlay.style.display = "none";
  };

})();
