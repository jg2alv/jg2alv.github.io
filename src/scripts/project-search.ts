function queryTerms(query: string) {
  return query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((term) => term.replace(/^#/, ''));
}

function queryTagValues(query: string) {
  return new Set(
    query
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .filter((term) => term.startsWith('#') && term.length > 1)
      .map((term) => term.slice(1)),
  );
}

export function initProjectSearch() {
  const root = document.querySelector<HTMLElement>('[data-project-search]');
  if (!root || root.dataset.ready === 'true') return;
  root.dataset.ready = 'true';

  const input = root.querySelector<HTMLInputElement>('[data-project-query]');
  const cards = [...document.querySelectorAll<HTMLElement>('[data-project-card]')];
  const buttons = [...root.querySelectorAll<HTMLButtonElement>('[data-filter-value]')];
  const clear = root.querySelector<HTMLButtonElement>('[data-clear-filters]');
  const status = root.querySelector<HTMLElement>('[data-search-status]');
  const count = root.querySelector<HTMLElement>('[data-filter-count]');

  const update = () => {
    const terms = queryTerms(input?.value ?? '');
    const selectedTags = queryTagValues(input?.value ?? '');
    let visible = 0;
    let activeCount = 0;

    buttons.forEach((button) => {
      const selected = selectedTags.has(button.dataset.filterValue ?? '');
      button.setAttribute('aria-pressed', String(selected));
      if (selected) activeCount += 1;
    });

    cards.forEach((card) => {
      const cardTags = new Set([
        card.dataset.origin,
        card.dataset.period,
        ...(card.dataset.discipline ?? '').split(/\s+/),
        ...(card.dataset.technology ?? '').split(/\s+/),
      ]);
      const matchesQuery = terms.every((term) => selectedTags.has(term)
        ? cardTags.has(term)
        : (card.dataset.search ?? '').includes(term));
      card.hidden = !matchesQuery;
      if (matchesQuery) visible += 1;
    });

    document.querySelector<HTMLElement>('[data-no-results]')?.toggleAttribute('hidden', visible !== 0);
    if (status) {
      status.textContent = visible === cards.length && activeCount === 0 && terms.length === 0
        ? `Showing all ${cards.length} projects.`
        : `Showing ${visible} of ${cards.length} projects.`;
    }
    if (clear) clear.disabled = activeCount === 0 && terms.length === 0;
    if (count) {
      count.textContent = String(activeCount);
      count.hidden = activeCount === 0;
    }
  };

  input?.addEventListener('input', update);
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.dataset.filterValue;
      if (!input || !value) return;

      const tag = `#${value}`;
      const tokens = input.value.trim().split(/\s+/).filter(Boolean);
      const alreadySelected = tokens.some((token) => token.toLowerCase() === tag);
      input.value = alreadySelected
        ? tokens.filter((token) => token.toLowerCase() !== tag).join(' ')
        : [...tokens, tag].join(' ');
      update();
      input.focus();
    });
  });

  clear?.addEventListener('click', () => {
    if (input) input.value = '';
    update();
    input?.focus();
  });

  document.addEventListener('keydown', (event) => {
    const target = event.target as HTMLElement | null;
    if (
      event.key === '/' &&
      !event.ctrlKey &&
      !event.altKey &&
      !event.metaKey &&
      input &&
      !target?.matches('input, textarea, [contenteditable="true"]')
    ) {
      event.preventDefault();
      input.focus();
    }
  });

  update();
}
