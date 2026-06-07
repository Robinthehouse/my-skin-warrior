/* @ds-bundle: {"format":3,"namespace":"MySkinWarriorDesignSystem_7dad99","components":[],"sourceHashes":{"slides/Pages.jsx":"129046b828bd","ui_kits/landing/BuyBox.jsx":"289a217de2ec","ui_kits/landing/Components.jsx":"622d95b7ee9c","ui_kits/landing/Sections.jsx":"8b5e37c740f6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MySkinWarriorDesignSystem_7dad99 = window.MySkinWarriorDesignSystem_7dad99 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// slides/Pages.jsx
try { (() => {
/* ============================================================
   My Skin Warrior — Workbook / PDF pages
   Pages.jsx  (exports to window)
   A4 portrait pages (794 × 1123 @ 96dpi). Print-friendly.
   ============================================================ */

function Page({
  children,
  pad = 64
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "a4",
    style: {
      width: 794,
      minHeight: 1123,
      background: 'var(--msw-cream)',
      padding: pad,
      boxSizing: 'border-box',
      position: 'relative',
      fontFamily: 'var(--font-body)',
      color: 'var(--msw-ink)',
      boxShadow: '0 8px 30px rgba(42,26,46,.10)',
      margin: '0 auto'
    }
  }, children);
}
function PageFoot({
  n
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 64,
      right: 64,
      bottom: 40,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--fg3)',
      borderTop: '1px solid var(--msw-border-soft)',
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "My Skin Warrior \xB7 Der Trigger-Tracker"), /*#__PURE__*/React.createElement("span", null, n));
}

/* ---- 1. Cover page ---- */
function CoverPage() {
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      letterSpacing: '-0.01em',
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--msw-ink)'
    }
  }, "My"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--msw-violet)'
    }
  }, "Skin"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--msw-apricot)'
    }
  }, "Warrior")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--msw-lavender)'
    }
  }, "14-Tage-Selbsthilfe-Tool"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 68,
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color: 'var(--msw-violet)',
      margin: '20px 0 0'
    }
  }, "Der Trigger-Tracker"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.65,
      color: 'var(--fg2)',
      margin: '28px 0 0',
      maxWidth: 520
    }
  }, "Finde in zwei Wochen heraus, was deine Sch\xFCbe ausl\xF6st. Ruhig, strukturiert, ohne Druck \u2014 in deinem Tempo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 64,
      right: 64,
      bottom: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--msw-violet-soft)',
      border: '1px solid var(--msw-border-soft)',
      borderRadius: 12,
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      color: 'var(--msw-violet)'
    }
  }, "Bevor du startest:"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--msw-ink)',
      opacity: .8,
      margin: '8px 0 0'
    }
  }, "Akne inversa (Hidradenitis suppurativa) ist eine medizinische Erkrankung \u2014 kein Hygieneproblem und nicht deine Schuld. Dieser Tracker ersetzt keine \xE4rztliche Beratung. Er hilft dir, Muster zu sehen."))));
}

/* ---- 2. Daily tracking grid ---- */
function TrackerPage() {
  const cats = ['Ernährung', 'Stress', 'Schlaf (h)', 'Hormone / Zyklus', 'Reibung', 'Wetter'];
  const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--msw-lavender)'
    }
  }, "Woche 1"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      letterSpacing: '-0.02em',
      color: 'var(--fg1)',
      margin: '8px 0 6px'
    }
  }, "Was war heute los?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--fg2)',
      margin: '0 0 26px'
    }
  }, "Trag ein, was du schaffst. L\xFCcken sind okay \u2014 auch sie zeigen oft ein Muster."), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'left',
      padding: '10px 8px',
      fontSize: 13,
      color: 'var(--fg3)',
      fontWeight: 600,
      borderBottom: '1.5px solid var(--msw-border)'
    }
  }), days.map(d => /*#__PURE__*/React.createElement("th", {
    key: d,
    style: {
      padding: '10px 0',
      fontSize: 13,
      color: 'var(--fg2)',
      fontWeight: 600,
      borderBottom: '1.5px solid var(--msw-border)',
      width: 56
    }
  }, d)))), /*#__PURE__*/React.createElement("tbody", null, cats.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 8px',
      fontSize: 14.5,
      color: 'var(--fg1)',
      fontWeight: 500,
      borderBottom: '1px solid var(--msw-border-soft)'
    }
  }, c), days.map(d => /*#__PURE__*/React.createElement("td", {
    key: d,
    style: {
      borderBottom: '1px solid var(--msw-border-soft)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 26,
      height: 26,
      border: '1.5px solid var(--msw-border)',
      borderRadius: 6,
      background: '#fff'
    }
  }))))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '16px 8px 8px',
      fontSize: 14.5,
      color: 'var(--msw-violet)',
      fontWeight: 700
    }
  }, "Schub heute?"), days.map(d => /*#__PURE__*/React.createElement("td", {
    key: d,
    style: {
      textAlign: 'center',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 26,
      height: 26,
      border: '1.5px solid var(--msw-apricot)',
      borderRadius: 50,
      background: 'var(--msw-apricot-soft)'
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--fg1)',
      marginBottom: 10
    }
  }, "Notizen \u2014 was f\xE4llt dir auf?"), [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 1.5,
      background: 'var(--msw-border-soft)',
      margin: '26px 0'
    }
  }))), /*#__PURE__*/React.createElement(PageFoot, {
    n: "Woche 1 \xB7 S. 3"
  }));
}

/* ---- 3. Plain-language explainer ---- */
function ExplainerPage() {
  const facts = [['shield', 'Es ist medizinisch.', 'HS ist eine chronische entzündliche Hauterkrankung. Sie entsteht nicht durch mangelnde Hygiene.'], ['x-circle', 'Es ist nicht deine Schuld.', 'Du hast dir das nicht „eingehandelt". Schübe sind kein Versagen — sie gehören zur Erkrankung.'], ['users', 'Du bist nicht allein.', 'Schätzungen zufolge ist etwa 1 von 100 Menschen betroffen. Viele schweigen aus Scham.'], ['compass', 'Trigger ≠ Ursache.', 'Trigger lösen Schübe eher aus, als dass sie sie „verursachen". Sie zu kennen gibt dir Optionen.']];
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--msw-lavender)'
    }
  }, "Kurz erkl\xE4rt"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 36,
      letterSpacing: '-0.02em',
      color: 'var(--msw-violet)',
      margin: '8px 0 4px',
      textWrap: 'balance'
    }
  }, "Akne inversa, in echt."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--fg2)',
      margin: '14px 0 36px',
      maxWidth: 600
    }
  }, "Bevor wir tracken, ein paar Dinge, die oft untergehen \u2014 und die du wissen darfst."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, facts.map(([icon, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 18,
      background: '#fff',
      border: '1px solid var(--msw-border)',
      borderRadius: 8,
      padding: '22px 24px',
      boxShadow: '0 2px 8px rgba(42,26,46,.05)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 10,
      flex: 'none',
      background: 'var(--msw-violet-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--fg1)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--fg2)',
      margin: '6px 0 0'
    }
  }, d))))), /*#__PURE__*/React.createElement(PageFoot, {
    n: "Intro \xB7 S. 2"
  }));
}
Object.assign(window, {
  Page,
  PageFoot,
  CoverPage,
  TrackerPage,
  ExplainerPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/BuyBox.jsx
try { (() => {
/* ============================================================
   My Skin Warrior — Buy box, testimonial & FAQ
   BuyBox.jsx  (exports to window)
   ============================================================ */
const {
  useState: useStateBB
} = React;

/* ---- Lived-experience testimonial (not stock pity) ---- */
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      borderTop: '1px solid var(--msw-border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      padding: '80px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: 34,
    color: "var(--msw-apricot)"
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: 'var(--fg1)',
      margin: '20px 0 0',
      textWrap: 'balance'
    }
  }, "\u201EZum ersten Mal hatte ich was in der Hand, das nicht so getan hat, als w\xE4re ich selbst schuld. Nach drei Wochen hab ich mein Muster gesehen.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--fg3)'
    }
  }, "\u2014 Lena, lebt seit 9 Jahren mit Akne inversa")));
}

/* ---- Gumroad-style buy box ---- */
function BuyBox() {
  const [bought, setBought] = useStateBB(false);
  const includes = ['14-Tage-Tracking-Vorlage', 'Auswertungs- & Musterseite', 'Trigger-Übersicht zum Ausdrucken', 'Kurz-Guide: Akne inversa verständlich erklärt'];
  return /*#__PURE__*/React.createElement("section", {
    id: "buy",
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '88px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 420px',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, null, "Der Trigger-Tracker"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 38,
      letterSpacing: '-0.02em',
      color: 'var(--fg1)',
      margin: '14px 0 18px',
      textWrap: 'balance'
    }
  }, "Ein PDF. 14 Tage. Mehr Kontrolle."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--fg2)',
      margin: 0,
      maxWidth: 540
    }
  }, "Tracken hei\xDFt nicht \u201Ewer am meisten dokumentiert, gewinnt\". Es hei\xDFt: ein bisschen besser verstehen, was bei ", /*#__PURE__*/React.createElement("i", null, "dir"), " passiert. Das ist alles. Und das ist schon ziemlich viel."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 32
    }
  }, includes.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 50,
      background: 'var(--msw-apricot-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    color: "#B5683A",
    stroke: 3
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      color: 'var(--fg1)'
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--msw-border)',
      borderRadius: 12,
      boxShadow: '0 8px 24px rgba(123,63,160,.08), 0 2px 6px rgba(42,26,46,.05)',
      padding: 32,
      position: 'sticky',
      top: 92
    }
  }, !bought ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 42,
      color: 'var(--msw-violet)',
      letterSpacing: '-0.02em',
      whiteSpace: 'nowrap'
    }
  }, "12\xA0\u20AC"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--fg3)',
      textDecoration: 'line-through',
      whiteSpace: 'nowrap'
    }
  }, "18\xA0\u20AC")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--fg3)',
      marginTop: 4
    }
  }, "Einmalig \xB7 Sofort-Download \xB7 inkl. MwSt."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--msw-border-soft)',
      margin: '22px 0'
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--fg1)'
    }
  }, "Deine E-Mail"), /*#__PURE__*/React.createElement("input", {
    placeholder: "du@beispiel.de",
    style: {
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--fg1)',
      background: 'var(--bg1)',
      border: '1.5px solid var(--msw-border)',
      borderRadius: 8,
      padding: '12px 14px',
      marginTop: 8,
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "lock",
    onClick: () => setBought(true),
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, "Sicher kaufen")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 15,
    color: "var(--msw-lavender)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--fg3)'
    }
  }, "Zahlung & Download \xFCber Gumroad"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '14px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 50,
      background: 'var(--msw-violet-soft)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 32,
    color: "var(--msw-violet)",
    stroke: 2.4
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      color: 'var(--fg1)',
      marginTop: 18,
      letterSpacing: '-0.01em'
    }
  }, "Liegt in deinem Postfach."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--fg2)',
      margin: '10px 0 20px'
    }
  }, "Druck es aus oder f\xFCll es digital aus. In deinem Tempo. Ich dr\xFCck dir die Daumen."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "download",
    onClick: () => setBought(false),
    style: {
      justifyContent: 'center'
    }
  }, "PDF herunterladen")))));
}

/* ---- FAQ accordion ---- */
function Faq() {
  const qa = [['Ist das eine medizinische Behandlung?', 'Nein. Der Tracker ersetzt keine ärztliche Beratung. Er hilft dir, deinen Alltag zu beobachten und Muster zu erkennen — Infos, die du z. B. mit in deinen nächsten Arzttermin nehmen kannst.'], ['Was ist Akne inversa / Hidradenitis suppurativa überhaupt?', 'Eine chronische entzündliche Hauterkrankung mit schmerzhaften Knoten und Abszessen, meist in Hautfalten. Sie ist nicht ansteckend, kein Hygieneproblem und nicht selbst verschuldet.'], ['Muss ich jeden Tag etwas eintragen?', 'Nein. Es gibt keinen Zwang und keine Streak. Trag ein, was du schaffst — auch lückenhaftes Tracking zeigt oft schon Muster.'], ['In welchem Format kommt das PDF?', 'Ein durchsuchbares PDF in A4. Du kannst es ausdrucken oder am Tablet/Computer ausfüllen.'], ['Bekomme ich mein Geld zurück, wenn es nichts für mich ist?', 'Ja. Schreib mir innerhalb von 14 Tagen über Gumroad — kein Drama, kein Rechtfertigen.']];
  const [open, setOpen] = useStateBB(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      borderTop: '1px solid var(--msw-border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      textAlign: 'center'
    }
  }, "H\xE4ufige Fragen"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      textAlign: 'center',
      letterSpacing: '-0.02em',
      color: 'var(--fg1)',
      margin: '14px 0 44px'
    }
  }, "Ehrlich gefragt, ehrlich beantwortet."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, qa.map(([q, a], i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: q,
      style: {
        border: '1px solid var(--msw-border)',
        borderRadius: 8,
        background: 'var(--bg1)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        textAlign: 'left',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        fontFamily: 'var(--font-body)',
        fontSize: 16.5,
        fontWeight: 600,
        color: 'var(--fg1)'
      }
    }, q, /*#__PURE__*/React.createElement(Icon, {
      name: isOpen ? 'minus' : 'plus',
      size: 20,
      color: "var(--msw-violet)"
    })), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 24px 22px',
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        lineHeight: 1.65,
        color: 'var(--fg2)'
      }
    }, a));
  }))));
}
Object.assign(window, {
  Testimonial,
  BuyBox,
  Faq
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/BuyBox.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Components.jsx
try { (() => {
/* ============================================================
   My Skin Warrior — UI Kit primitives + chrome
   Components.jsx  (exports to window)
   ============================================================ */
const {
  useState
} = React;

/* ---- Icon: thin Lucide-style line icons via lucide global ---- */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  stroke = 1.9,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': stroke
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, color, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      lineHeight: 0,
      ...style
    }
  });
}

/* ---- Wordmark ---- */
function Wordmark({
  size = 22,
  onDark = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: size,
      letterSpacing: '-0.02em',
      display: 'inline-flex',
      gap: 4,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: onDark ? 'rgba(255,255,255,.85)' : 'var(--msw-ink)'
    }
  }, "My"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: onDark ? '#fff' : 'var(--msw-violet)'
    }
  }, "Skin"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--msw-apricot)'
    }
  }, "Warrior"));
}

/* ---- Kicker / eyebrow ---- */
function Kicker({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--msw-lavender)',
      ...style
    }
  }, children);
}

/* ---- Button ---- */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  style
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const pad = size === 'lg' ? '16px 34px' : '13px 26px';
  const fs = size === 'lg' ? 17 : 15;
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: fs,
    borderRadius: 50,
    padding: pad,
    cursor: 'pointer',
    border: '1.5px solid transparent',
    display: 'inline-flex',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    gap: 9,
    transition: 'all 180ms cubic-bezier(.22,.61,.36,1)',
    transform: press ? 'scale(.98)' : 'scale(1)',
    ...style
  };
  const variants = {
    primary: {
      background: press ? 'var(--msw-violet-press)' : hover ? 'var(--msw-violet-hover)' : 'var(--msw-violet)',
      color: '#fff',
      boxShadow: hover ? '0 8px 24px rgba(123,63,160,.18)' : '0 2px 8px rgba(123,63,160,.12)'
    },
    secondary: {
      background: hover ? 'var(--msw-apricot-soft)' : 'transparent',
      color: 'var(--msw-ink)',
      borderColor: 'var(--msw-apricot)'
    },
    ghost: {
      background: hover ? 'rgba(123,63,160,.06)' : 'transparent',
      color: 'var(--msw-violet)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    style: {
      ...base,
      ...variants[variant]
    },
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, children, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: fs + 2,
    stroke: 2
  }));
}

/* ---- Sticky header / nav ---- */
function Header({
  onBuy
}) {
  const links = ['Was ist HS?', 'Die Tools', 'Über mich', 'FAQ'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,248,244,.9)',
      backdropFilter: 'saturate(120%)',
      borderBottom: '1px solid var(--msw-border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '16px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 21
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      fontWeight: 500,
      color: 'var(--fg2)',
      textDecoration: 'none'
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    onClick: onBuy,
    style: {
      padding: '10px 22px',
      fontSize: 14.5
    }
  }, "Tools ansehen"))));
}

/* ---- Footer ---- */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#fff',
      borderTop: '1px solid var(--msw-border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '56px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 20
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--fg3)',
      marginTop: 14
    }
  }, "Selbsthilfe-Tools f\xFCr Menschen mit Hidradenitis suppurativa. Von einer Betroffenen, f\xFCr Betroffene. Kein Pharma, kein Geschwurbel.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56
    }
  }, [['Tools', ['Trigger-Tracker', 'Schub-Tagebuch', 'Bundle']], ['Mehr', ['Was ist Akne inversa?', 'Über mich', 'Kontakt']], ['Rechtliches', ['Impressum', 'Datenschutz']]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--fg1)',
      marginBottom: 12
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--fg3)',
      textDecoration: 'none'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--msw-border-soft)',
      padding: '20px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--fg3)'
    }
  }, "\xA9 2026 My Skin Warrior \xB7 Verkauf \xFCber Gumroad \xB7 Ersetzt keine \xE4rztliche Beratung")));
}
Object.assign(window, {
  Icon,
  Wordmark,
  Kicker,
  Button,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Sections.jsx
try { (() => {
/* ============================================================
   My Skin Warrior — Landing sections
   Sections.jsx  (exports to window)
   ============================================================ */

/* ---- Hero ---- */
function Hero({
  onBuy
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '88px 32px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, null, "Trigger verstehen \xB7 Sch\xFCbe managen"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 56,
      lineHeight: 1.04,
      letterSpacing: '-0.02em',
      color: 'var(--msw-violet)',
      margin: '18px 0 0',
      textWrap: 'balance'
    }
  }, "Du verstehst deine Sch\xFCbe besser, als du denkst."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.65,
      color: 'var(--fg2)',
      margin: '22px 0 0',
      maxWidth: 520,
      textWrap: 'pretty'
    }
  }, "Akne inversa ist eine medizinische Erkrankung \u2014 kein Hygieneproblem, nicht deine Schuld. Mit dem Trigger-Tracker findest du in 14 Tagen heraus, was deine Sch\xFCbe ausl\xF6st. Ruhig, strukturiert, ohne Druck."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "arrow-right",
    onClick: onBuy
  }, "Trigger-Tracker holen \u2014 12 \u20AC"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "Reinschauen")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 16,
    color: "var(--msw-lavender)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--fg3)'
    }
  }, "Sofort-Download als PDF \xB7 Drucken oder digital ausf\xFCllen"))), /*#__PURE__*/React.createElement(ProductMock, null)));
}

/* ---- Product visual: a stylised PDF cover (no stock photo) ---- */
function ProductMock() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      justifySelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 340,
      height: 440,
      background: '#fff',
      borderRadius: 12,
      border: '1px solid var(--msw-border)',
      boxShadow: '0 24px 60px rgba(123,63,160,.14), 0 4px 12px rgba(42,26,46,.06)',
      padding: 36,
      display: 'flex',
      flexDirection: 'column',
      transform: 'rotate(-2deg)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      fontSize: 11
    }
  }, "My Skin Warrior"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: 'var(--msw-violet)',
      marginTop: 18
    }
  }, "Der", /*#__PURE__*/React.createElement("br", null), "Trigger-", /*#__PURE__*/React.createElement("br", null), "Tracker"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['Ernährung', 'Stress & Schlaf', 'Hormone', 'Reibung'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 6,
      flex: 'none',
      border: '1.5px solid var(--msw-border)',
      background: i === 1 ? 'var(--msw-apricot)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, i === 1 && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    color: "#fff",
    stroke: 3
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--fg1)'
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -14,
      right: -10,
      background: 'var(--msw-violet)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      padding: '9px 18px',
      borderRadius: 50,
      boxShadow: '0 8px 20px rgba(123,63,160,.25)'
    }
  }, "14-Tage-Vorlage"));
}

/* ---- Validation-before-solution band ---- */
function Validation() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      borderTop: '1px solid var(--msw-border-soft)',
      borderBottom: '1px solid var(--msw-border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '72px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 38,
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      color: 'var(--fg1)',
      margin: 0,
      textWrap: 'balance'
    }
  }, "Schub-Tage sind beschissen. Punkt."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--fg2)',
      margin: '20px 0 0',
      textWrap: 'pretty'
    }
  }, "Du musst nicht \u201Epositiv bleiben\". Du musst nur den n\xE4chsten Tag schaffen \u2014 und vielleicht beim n\xE4chsten Mal ein bisschen mehr dar\xFCber wissen, was ihn ausgel\xF6st hat. Ein Schub ist kein pers\xF6nliches Versagen. Aber Muster zu erkennen gibt dir ein St\xFCck Kontrolle zur\xFCck.")));
}

/* ---- Feature cards: what's inside ---- */
function Features() {
  const items = [['list-checks', 'Strukturiertes Tracking', '14 Tage Vorlage für Ernährung, Stress, Schlaf, Hormone, Reibung und Wetter — auf einen Blick.'], ['search', 'Muster erkennen', 'Eine einfache Auswertungsseite hilft dir, Zusammenhänge zu sehen — ohne dich unter Druck zu setzen.'], ['printer', 'Print oder digital', 'Als PDF ausdrucken oder am Tablet ausfüllen. Du entscheidest, was zu deinem Alltag passt.'], ['heart-handshake', 'Aus eigener Betroffenheit', 'Entwickelt von jemandem, der HS selbst hat. Kein Pharma-Material, kein Wellness-Geschwurbel.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '88px 32px'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      textAlign: 'center'
    }
  }, "Was drinsteckt"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 36,
      textAlign: 'center',
      letterSpacing: '-0.02em',
      color: 'var(--fg1)',
      margin: '14px 0 52px'
    }
  }, "Kein Hexenwerk. Nur Klarheit."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 22
    }
  }, items.map(([icon, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: '#fff',
      border: '1px solid var(--msw-border)',
      borderRadius: 8,
      boxShadow: '0 2px 8px rgba(42,26,46,.05),0 1px 2px rgba(42,26,46,.04)',
      padding: 30,
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 10,
      flex: 'none',
      background: 'var(--msw-violet-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22,
    color: "var(--msw-violet)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--fg1)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--fg2)',
      margin: '8px 0 0'
    }
  }, d))))));
}

/* ---- Shame-reducer panel (violet-soft wash) ---- */
function ShamePanel() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '0 32px 88px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--msw-violet-soft)',
      borderRadius: 12,
      border: '1px solid var(--msw-border-soft)',
      padding: '56px 56px',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 36,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 18,
      flex: 'none',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 14px rgba(123,63,160,.1)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 34,
    color: "var(--msw-violet)",
    stroke: 1.8
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: '-0.02em',
      color: 'var(--msw-violet)',
      margin: 0
    }
  }, "Das muss mal klar gesagt werden."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--msw-ink)',
      opacity: .82,
      margin: '12px 0 0',
      maxWidth: 640
    }
  }, "Hidradenitis suppurativa ist eine chronische entz\xFCndliche Hauterkrankung. Sie hat ", /*#__PURE__*/React.createElement("b", null, "nichts"), " mit mangelnder Hygiene zu tun und ist ", /*#__PURE__*/React.createElement("b", null, "nicht"), " deine Schuld. Wer dir was anderes erz\xE4hlt, hat es nicht verstanden."))));
}
Object.assign(window, {
  Hero,
  ProductMock,
  Validation,
  Features,
  ShamePanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Sections.jsx", error: String((e && e.message) || e) }); }

})();
