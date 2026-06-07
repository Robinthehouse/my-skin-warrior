/* global React, ReactDOM */
// Tweaks-Insel für die My-Skin-Warrior-Landingpage.
// Steuert Akzentfarbe und Bewegung; schreibt CSS-Variablen auf :root.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#BD5A40",
  "motion": true
}/*EDITMODE-END*/;

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
  }, [t.accent]);

  React.useEffect(() => {
    document.body.classList.toggle('motion-off', !t.motion);
  }, [t.motion]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Akzentfarbe" />
      <TweakColor
        label="Akzent"
        value={t.accent}
        options={['#BD5A40', '#2E6E68', '#A8492E', '#B5723A']}
        onChange={(v) => setTweak('accent', v)}
      />
      <TweakSection label="Bewegung" />
      <TweakToggle
        label="Sanfte Animationen"
        value={t.motion}
        onChange={(v) => setTweak('motion', v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<TweaksApp />);
