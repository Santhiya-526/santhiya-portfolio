const tabs = [...document.querySelectorAll('[data-tab]')];
    const panels = [...document.querySelectorAll('.panel')];
    function showTab(name, updateHash = true) {
      const selected = document.getElementById(name) ? name : 'home';
      tabs.forEach(tab => { const on = tab.dataset.tab === selected; tab.classList.toggle('active', on); tab.setAttribute('aria-selected', on); });
      panels.forEach(panel => panel.classList.toggle('active', panel.id === selected));
      if (updateHash) history.replaceState(null, '', selected === 'home' ? location.pathname : `#${selected}`);
      document.querySelector('main').scrollIntoView({ behavior:'smooth', block:'start' });
    }
    tabs.forEach(tab => tab.addEventListener('click', () => showTab(tab.dataset.tab)));
    window.addEventListener('hashchange', () => showTab(location.hash.slice(1), false));
    showTab(location.hash.slice(1) || 'home', false);
