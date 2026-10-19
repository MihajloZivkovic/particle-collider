const particles = {
  electron: { symbol: 'e−' },
  positron: { symbol: 'e+' },
  proton: { symbol: 'p' },
  antiproton: { symbol: 'p̄' },
};

const scenarios = {
  'electron|electron': {
    low: [
      '1 eV',
      'scatter',
      'Møller scattering',
      'e− + e− → e− + e−',
      'At this low energy the electrons scatter electromagnetically. Their like charges repel.',
      ['e−', 'e−'],
    ],
    medium: [
      '100 keV',
      'scatter',
      'Electron scattering',
      'e− + e− → e− + e−',
      'A higher-energy elastic Møller-scattering event is shown. The electrons remain electrons.',
      ['e−', 'e−'],
    ],
    high: [
      '10 MeV',
      'production',
      'Pair production',
      'e− + e− → e− + e− + e− + e+',
      'A possible high-energy channel creates an extra electron–positron pair. The incoming kinetic energy is above the pair-production threshold; other channels are also possible.',
      ['e−', 'e−', 'e−', 'e+'],
    ],
  },
  'electron|proton': {
    low: [
      '1 eV',
      'atom',
      'Radiative recombination',
      'e− + p → H + γ',
      'An electron can bind to a proton and form hydrogen if a photon carries away energy and momentum. The photon carries about 13.6 eV of binding energy plus the incoming kinetic energy, with a tiny recoil correction.',
      ['H', 'γ'],
    ],
    medium: [
      '100 keV',
      'scatter',
      'Electron–proton scattering',
      'e− + p → e− + p',
      'A representative electromagnetic scattering event. The proton and electron emerge as the same particles.',
      ['e−', 'p'],
    ],
    high: [
      '2 MeV',
      'weak',
      'Charged-current conversion',
      'e− + p → n + νe',
      'This weak-interaction channel is kinematically open above about 0.782 MeV of centre-of-momentum kinetic energy. A virtual W− carries the charged-current interaction; this outcome is possible, not certain.',
      ['n', 'νe'],
    ],
  },
  'antiproton|electron': {
    low: [
      '1 eV',
      'scatter',
      'Electromagnetic scattering',
      'e− + p̄ → e− + p̄',
      'The particles have like electric charges and repel. At this energy the display shows a qualitative electromagnetic deflection.',
      ['e−', 'p̄'],
    ],
    medium: [
      '100 keV',
      'scatter',
      'Antiproton–electron scattering',
      'e− + p̄ → e− + p̄',
      'A representative scattering event. The antiproton’s internal structure matters in more energetic collisions.',
      ['e−', 'p̄'],
    ],
    high: [
      '10 GeV',
      'production',
      'Deep-inelastic scattering',
      'e− + p̄ → e− + p̄ + hadrons',
      'At this energy the electron can probe the antiproton’s quarks and gluons, producing additional hadrons. The exact final state varies event by event.',
      ['e−', 'p̄', 'π+', 'π−'],
    ],
  },
  'electron|positron': {
    low: [
      '1 eV',
      'photons',
      'Annihilation',
      'e− + e+ → γ + γ',
      'At low energy an electron and positron can annihilate into two photons. Their exact energies and directions follow conservation of energy and momentum.',
      ['γ', 'γ'],
    ],
    medium: [
      '100 keV',
      'photons',
      'Annihilation',
      'e− + e+ → γ + γ',
      'Two-photon annihilation remains a common low-energy channel; positronium formation and other outcomes can also occur.',
      ['γ', 'γ'],
    ],
    high: [
      '300 MeV',
      'muons',
      'Muon-pair production',
      'e− + e+ → μ− + μ+',
      'At this centre-of-momentum energy, production of a muon pair is allowed. Annihilation into photons and other channels remain possible too.',
      ['μ−', 'μ+'],
    ],
  },
  'proton|proton': {
    low: [
      '1 eV',
      'scatter',
      'Proton scattering',
      'p + p → p + p',
      'At very low energy the protons repel electromagnetically; the animation shows a gentle deflection.',
      ['p', 'p'],
    ],
    medium: [
      '100 keV',
      'scatter',
      'Proton scattering',
      'p + p → p + p',
      'This representative elastic event leaves both protons intact. Real scattering depends on spin and impact parameter.',
      ['p', 'p'],
    ],
    high: [
      '300 MeV',
      'hadrons',
      'Pion production',
      'p + p → p + p + π⁰',
      'The centre-of-momentum energy is above the threshold for pion production. This is one allowed channel; many other hadronic outcomes are possible.',
      ['p', 'p', 'π⁰'],
    ],
  },
  'antiproton|proton': {
    low: [
      '1 eV',
      'pions',
      'Matter–antimatter annihilation',
      'p + p̄ → hadrons (often pions)',
      'A proton and antiproton can annihilate even when their incoming kinetic energy is small; their rest energy is also available. The products are a variable mix of particles, commonly including pions.',
      ['π+', 'π−', 'π⁰'],
    ],
    medium: [
      '100 keV',
      'pions',
      'Matter–antimatter annihilation',
      'p + p̄ → hadrons',
      'Annihilation into several hadrons, often pions, is shown schematically. The precise products are not fixed by the pair alone.',
      ['π+', 'π−', 'π⁰'],
    ],
    high: [
      '1 GeV',
      'hadrons',
      'Higher-energy annihilation',
      'p + p̄ → multiple hadrons',
      'More kinetic energy is available for a wider range of hadronic final states. This is one possible visual sketch of that energy release.',
      ['π+', 'π−', 'π⁰', 'π⁰'],
    ],
  },
  'positron|proton': {
    low: [
      '1 eV',
      'scatter',
      'Electromagnetic scattering',
      'e+ + p → e+ + p',
      'The positive charges repel. The pair scatters electromagnetically in this low-energy example.',
      ['e+', 'p'],
    ],
    medium: [
      '100 keV',
      'scatter',
      'Positron–proton scattering',
      'e+ + p → e+ + p',
      'A representative electromagnetic scattering event. No neutron or neutrino is implied at this energy.',
      ['e+', 'p'],
    ],
    high: [
      '10 GeV',
      'production',
      'Deep-inelastic scattering',
      'e+ + p → e+ + p + hadrons',
      'At this energy the positron can probe the proton’s quarks and gluons and produce additional hadrons. The final state is event-dependent.',
      ['e+', 'p', 'π+', 'π−'],
    ],
  },
  'antiproton|antiproton': {
    low: [
      '1 eV',
      'scatter',
      'Antiproton scattering',
      'p̄ + p̄ → p̄ + p̄',
      'The antiprotons repel electromagnetically. Their like-charge scattering is shown qualitatively.',
      ['p̄', 'p̄'],
    ],
    medium: [
      '100 keV',
      'scatter',
      'Antiproton scattering',
      'p̄ + p̄ → p̄ + p̄',
      'A representative elastic event; the antiprotons remain intact.',
      ['p̄', 'p̄'],
    ],
    high: [
      '300 MeV',
      'hadrons',
      'Antipion production',
      'p̄ + p̄ → p̄ + p̄ + π⁰',
      'At this energy an additional pion can be produced. This is one possible channel among many.',
      ['p̄', 'p̄', 'π⁰'],
    ],
  },
  'antiproton|positron': {
    low: [
      '1 eV',
      'atom',
      'Radiative recombination',
      'e+ + p̄ → anti-H + γ',
      'A positron can bind to an antiproton to form antihydrogen if a photon carries away energy and momentum.',
      ['H̄', 'γ'],
    ],
    medium: [
      '100 keV',
      'scatter',
      'Positron–antiproton scattering',
      'e+ + p̄ → e+ + p̄',
      'A representative electromagnetic scattering event. The opposite electric charges attract.',
      ['e+', 'p̄'],
    ],
    high: [
      '2 MeV',
      'weak',
      'Charged-current conversion',
      'e+ + p̄ → n̄ + anti-νe',
      'This charge-conjugate weak channel is kinematically open above about 0.782 MeV of centre-of-momentum kinetic energy. A virtual W+ carries the interaction; this outcome is possible, not certain.',
      ['n̄', 'ν̄e'],
    ],
  },
  'positron|positron': {
    low: [
      '1 eV',
      'scatter',
      'Positron scattering',
      'e+ + e+ → e+ + e+',
      'Like charges repel, so this example shows electromagnetic scattering.',
      ['e+', 'e+'],
    ],
    medium: [
      '100 keV',
      'scatter',
      'Positron scattering',
      'e+ + e+ → e+ + e+',
      'A representative elastic collision between two positrons.',
      ['e+', 'e+'],
    ],
    high: [
      '10 MeV',
      'production',
      'Pair production',
      'e+ + e+ → e+ + e+ + e+ + e−',
      'A high-energy collision can create an additional electron–positron pair. Other electromagnetic outcomes are possible.',
      ['e+', 'e+', 'e+', 'e−'],
    ],
  },
};

const selection = { left: null, right: null };
let energyLevel = 'low';
const stage = document.querySelector('.collision-stage');
const status = document.querySelector('#collidingStatus');
const result = document.querySelector('#result');
const productsLayer = document.querySelector('#products');
const energyReadout = document.querySelector('#energyReadout');
const collideButton = document.querySelector('#collideButton');

document.querySelectorAll('[data-side][data-particle]').forEach((button) => {
  button.addEventListener('click', () =>
    selectParticle(button.dataset.side, button.dataset.particle),
  );
});
document.querySelectorAll('[data-energy]').forEach((button) => {
  button.addEventListener('click', () => {
    if (stage.classList.contains('has-result')) return;
    energyLevel = button.dataset.energy;
    document
      .querySelectorAll('[data-energy]')
      .forEach((option) =>
        option.setAttribute('aria-pressed', String(option === button)),
      );
    updateEnergyReadout();
  });
});
collideButton.addEventListener('click', collide);
document
  .querySelector('#resetButton')
  .addEventListener('click', resetParticles);

function getScenario() {
  if (!selection.left || !selection.right) return null;
  return scenarios[[selection.left, selection.right].sort().join('|')][
    energyLevel
  ];
}

function updateEnergyReadout() {
  const scenario = getScenario();
  energyReadout.textContent = scenario ? scenario[0] : 'Select particles';
}

function selectParticle(side, key) {
  if (stage.classList.contains('has-result')) return;
  selection[side] = key;
  document
    .querySelectorAll(`[data-side="${side}"][data-particle]`)
    .forEach((button) => {
      button.setAttribute(
        'aria-pressed',
        String(button.dataset.particle === key),
      );
    });
  const marker = document.querySelector(
    `#particle${side === 'left' ? 'Left' : 'Right'}`,
  );
  marker.className = `particle-marker ${key}`;
  marker.querySelector('.particle-symbol').textContent = particles[key].symbol;
  status.textContent =
    selection.left && selection.right
      ? 'Ready · choose an energy and collide'
      : 'Choose one particle on each side';
  updateEnergyReadout();
}

function productKind(symbol) {
  if (symbol.includes('γ')) return 'photon';
  if (symbol.includes('π')) return 'pion';
  if (symbol.includes('μ')) return 'muon';
  if (symbol.includes('ν')) return 'neutrino';
  if (symbol.includes('H')) return 'atom';
  if (symbol.includes('p') || symbol.includes('n')) return 'baryon';
  return 'lepton';
}

function animateProducts(symbols) {
  productsLayer.replaceChildren();
  symbols.forEach((symbol, index) => {
    const product = document.createElement('span');
    const angle = -Math.PI / 2 + (2 * Math.PI * index) / symbols.length;
    product.className = `outgoing ${productKind(symbol)}`;
    product.textContent = symbol;
    product.style.setProperty('--dx', `${Math.round(Math.cos(angle) * 185)}px`);
    product.style.setProperty('--dy', `${Math.round(Math.sin(angle) * 130)}px`);
    productsLayer.append(product);
  });
}

function collide() {
  const scenario = getScenario();
  if (!scenario) {
    status.textContent = 'Choose one particle on each side first.';
    return;
  }
  const [energy, type, title, equation, description, products] = scenario;
  stage.classList.remove(
    'is-scatter',
    'is-photons',
    'is-pions',
    'is-atom',
    'is-weak',
    'is-production',
    'is-hadrons',
    'is-muons',
    'has-result',
  );
  void stage.offsetWidth;
  stage.classList.add(`is-${type}`, 'has-result');
  status.textContent = `${energyLevel[0].toUpperCase()}${energyLevel.slice(1)} energy · ${energy}`;
  const isAntihydrogen =
    selection.left === 'antiproton' || selection.right === 'antiproton';
  document.querySelector('.atom-label').textContent = isAntihydrogen
    ? 'H̄'
    : 'H';
  document.querySelector('.exchange-label').innerHTML = isAntihydrogen
    ? 'W+ <small>virtual exchange</small>'
    : 'W− <small>virtual exchange</small>';
  if (type === 'scatter') productsLayer.replaceChildren();
  else animateProducts(products);
  result.innerHTML = `<button id="closeResult" class="close-result" aria-label="Close collision result">×</button><p class="result-kicker">${energyLevel.toUpperCase()} ENERGY · ${energy} CM KINETIC</p><h3>${title}</h3><p class="equation">${equation}</p><p>${description}</p>`;
  result.hidden = false;
  result.querySelector('#closeResult').addEventListener('click', closeResult);
  collideButton.disabled = true;
}

function closeResult() {
  result.hidden = true;
  result.replaceChildren();
}

function resetParticles() {
  selection.left = null;
  selection.right = null;
  stage.classList.remove(
    'is-scatter',
    'is-photons',
    'is-pions',
    'is-atom',
    'is-weak',
    'is-production',
    'is-hadrons',
    'is-muons',
    'has-result',
  );
  document
    .querySelectorAll('[data-side][data-particle]')
    .forEach((button) => button.setAttribute('aria-pressed', 'false'));
  document.querySelectorAll('.particle-marker').forEach((marker) => {
    marker.className = 'particle-marker';
    marker.querySelector('.particle-symbol').textContent = '?';
  });
  status.textContent = 'Choose one particle on each side';
  energyReadout.textContent = 'Select particles';
  productsLayer.replaceChildren();
  closeResult();
  collideButton.disabled = false;
}
