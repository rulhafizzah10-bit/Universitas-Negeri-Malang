:root {
  --bg: #f3f6ff;
  --panel: #ffffff;
  --panel-alt: #edf3ff;
  --primary: #3559e0;
  --primary-strong: #203ca5;
  --accent: #7fd3ff;
  --success: #1fbf75;
  --danger: #ea4d5d;
  --warning: #ffb703;
  --text: #172033;
  --muted: #64748b;
  --shadow: 0 20px 45px rgba(24, 54, 103, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(180deg, #eef5ff 0%, #edf3ff 100%);
  color: var(--text);
}

button {
  font: inherit;
}

.app-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 18px 48px;
}

.topbar,
.card-hero,
.workspace,
.quiz-panel {
  background: rgba(255, 255, 255, 0.74);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(53, 89, 224, 0.08);
  box-shadow: var(--shadow);
  border-radius: 24px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 28px;
  margin-bottom: 22px;
}

.eyebrow,
.label {
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
  font-size: 11px;
  color: var(--primary);
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 0;
  font-size: clamp(2rem, 3vw, 2.8rem);
}

.primary-btn {
  border: none;
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: white;
  border-radius: 14px;
  padding: 13px 22px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(53, 89, 224, 0.2);
}

.card-hero {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 20px;
  padding: 22px;
  margin-bottom: 24px;
}

.qr-card {
  background: linear-gradient(145deg, #ffffff 0%, #eef3ff 100%);
  border-radius: 18px;
  padding: 18px;
  border: 1px solid rgba(53, 89, 224, 0.1);
}

.qr-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.mini-badge,
.shape-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  padding: 6px 10px;
  border-radius: 999px;
}

.mini-badge {
  background: rgba(53, 89, 224, 0.09);
  color: var(--primary);
}

.shape-badge {
  background: rgba(127, 211, 255, 0.28);
  color: var(--primary-strong);
}

.qr-code {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 18px;
  background: repeating-linear-gradient(
    90deg,
    #111827 0,
    #111827 6px,
    #ffffff 6px,
    #ffffff 12px,
    #111827 12px,
    #111827 18px,
    #ffffff 18px,
    #ffffff 24px
  );
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 0 10px #fff;
}

.qr-code::before,
.qr-code::after {
  content: "";
  position: absolute;
  inset: 12%;
  background: rgba(255, 255, 255, 0.82);
  border-radius: 12px;
  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.8);
}

.qr-code::after {
  inset: 22%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8) 0 20%,
    transparent 20% 40%,
    rgba(0, 0, 0, 0.8) 40% 60%,
    transparent 60% 80%,
    rgba(0, 0, 0, 0.8) 80% 100%
  );
  border-radius: 8px;
}

.qr-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  font-size: 0.92rem;
  color: var(--muted);
}

.card-info-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 6px;
}

.card-info-panel ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.7;
}

.workspace {
  display: grid;
  grid-template-columns: 1.4fr 0.9fr;
  gap: 22px;
  padding: 22px;
  margin-bottom: 24px;
}

.shape-switcher {
  display: flex;
  gap: 12px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.shape-tab {
  border: 1px solid rgba(53, 89, 224, 0.15);
  background: rgba(53, 89, 224, 0.04);
  color: var(--primary-strong);
  font-weight: 700;
  border-radius: 999px;
  padding: 10px 18px;
  cursor: pointer;
}

.shape-tab.active {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  border-color: transparent;
  color: white;
}

.shape-stage {
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #edf4ff 0%, #e8f3ff 100%);
  border: 1px solid rgba(53, 89, 224, 0.08);
  border-radius: 22px;
  overflow: hidden;
  position: relative;
}

.shape-model {
  position: relative;
  width: 360px;
  height: 280px;
  transform: perspective(1000px) rotateX(8deg);
  transition: all 0.35s ease;
}

.shape-model.kerucut {
  width: 280px;
  height: 260px;
}

.shape-model.tabung {
  width: 310px;
  height: 260px;
}

.shape-model.bola {
  width: 260px;
  height: 260px;
}

.shape-model::before,
.shape-model::after {
  content: "";
  position: absolute;
  inset: auto;
}

.shape-model.kerucut::before {
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 165px solid rgba(53, 89, 224, 0.85);
  left: 40px;
  top: 30px;
  filter: drop-shadow(0 16px 16px rgba(53, 89, 224, 0.18));
}

.shape-model.kerucut::after {
  width: 180px;
  height: 30px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  left: 50px;
  bottom: 10px;
  transform: translateX(0);
  box-shadow: inset 0 0 0 2px rgba(53, 89, 224, 0.13);
}

.shape-model.tabung::before {
  width: 180px;
  height: 120px;
  left: 65px;
  top: 70px;
  border-radius: 0 0 24px 24px;
  background: linear-gradient(180deg, rgba(41, 153, 83, 0.9), rgba(22, 118, 60, 0.95));
  box-shadow: inset 0 0 0 8px rgba(255, 255, 255, 0.6);
}

.shape-model.tabung::after {
  width: 180px;
  height: 26px;
  left: 65px;
  top: 60px;
  border-radius: 50%;
  background: rgba(44, 189, 103, 0.9);
  box-shadow: 0 100px 0 0 rgba(22, 118, 60, 0.9);
}

.shape-model.bola::before {
  width: 180px;
  height: 180px;
  left: 90px;
  top: 40px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 32%, #ece9ff 0%, #b899ff 28%, #7e59ec 62%, #5f43b7 100%);
  box-shadow: inset -16px -18px 18px rgba(81, 61, 150, 0.28), 0 20px 30px rgba(123, 94, 227, 0.18);
}

.shape-model.bola::after {
  display: none;
}

.hotspot {
  position: absolute;
  z-index: 5;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  color: var(--primary-strong);
  border-radius: 50%;
  width: 74px;
  height: 74px;
  font-weight: 700;
  font-size: 0.72rem;
  box-shadow: 0 18px 30px rgba(29, 46, 78, 0.14);
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

.hotspot:hover,
.hotspot.active {
  transform: scale(1.08);
  background: linear-gradient(135deg, #ffffff, #dfeaff);
  box-shadow: 0 22px 35px rgba(53, 89, 224, 0.2);
}

.hotspot-alas { left: 30%; bottom: 14%; }
.hotspot-tinggi { left: 52%; top: 20%; }
.hotspot-selimut { right: 20%; top: 38%; }
.hotspot-garis { right: 14%; top: 14%; }
.hotspot-volume { left: 18%; top: 34%; }
.hotspot-luas { right: 18%; bottom: 18%; }

.shape-model.tabung .hotspot-volume { left: 8%; top: 38%; }
.shape-model.tabung .hotspot-luas { right: 22%; bottom: 14%; }
.shape-model.bola .hotspot-tinggi { left: 50%; top: 14%; }
.shape-model.bola .hotspot-luas { right: 16%; bottom: 16%; }
.shape-model.bola .hotspot-volume { left: 14%; top: 30%; }

.concept-panel {
  padding: 10px 0;
}

.concept-box,
.formula-box,
.feedback-box {
  background: var(--panel-alt);
  border: 1px solid rgba(53, 89, 224, 0.08);
  border-radius: 18px;
  padding: 16px 18px;
}

.concept-box {
  min-height: 110px;
  margin-bottom: 18px;
}

.formula-label {
  margin: 0 0 8px;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--muted);
}

.formula-text {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary-strong);
}

.formula-box.secondary {
  margin-top: 16px;
}

.quiz-panel {
  padding: 24px;
}

.quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.progress-indicator {
  background: rgba(53, 89, 224, 0.09);
  border: 1px solid rgba(53, 89, 224, 0.1);
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 700;
  color: var(--primary);
}

.question-text {
  font-size: clamp(1.12rem, 2vw, 1.5rem);
  font-weight: 700;
  margin-bottom: 18px;
  line-height: 1.5;
}

.choices {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.choice-btn {
  border: 1px solid rgba(53, 89, 224, 0.12);
  border-radius: 12px;
  background: white;
  color: var(--text);
  padding: 14px 16px;
  text-align: left;
  cursor: pointer;
  transition: transform 0.15s ease, border-color 0.15s ease;
}

.choice-btn:hover {
  border-color: rgba(53, 89, 224, 0.22);
  transform: translateY(-1px);
}

.choice-btn.correct {
  background: rgba(31, 191, 117, 0.12);
  border-color: rgba(31, 191, 117, 0.35);
  color: #0c7a48;
}

.choice-btn.wrong {
  background: rgba(234, 77, 93, 0.1);
  border-color: rgba(234, 77, 93, 0.3);
  color: #a52d3b;
}

.feedback-box {
  margin-top: 18px;
  display: none;
}

.feedback-box.visible {
  display: block;
}

.feedback-box.success {
  background: rgba(31, 191, 117, 0.13);
  border-color: rgba(31, 191, 117, 0.25);
  color: #0d7d4a;
}

.feedback-box.error {
  background: rgba(234, 77, 93, 0.1);
  border-color: rgba(234, 77, 93, 0.25);
  color: #8c1d2d;
}

.hidden {
  display: none !important;
}

@media (max-width: 900px) {
  .card-hero,
  .workspace {
    grid-template-columns: 1fr;
  }

  .shape-stage {
    min-height: 340px;
  }
}

@media (max-width: 560px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .shape-model {
    transform: scale(0.8) perspective(1000px) rotateX(8deg);
  }
}

