<script>
  import { browser } from '$app/environment';
  import { language } from '$lib/stores/language';
  import { tick } from 'svelte';

  let data = [];
  let ranges = [];
  let labels = [];
  let sinceArrows = [];
  let bulletMargins = {};
  let rootFontSize = 16;
  let stackEl;
  let runId = 0;
  let bulletMarginsVersion = 0;

  function getYear(value) {
    const text = String(value).trim();
    const match = text.match(/\d{4}/);
    return match ? Number(match[0]) : 0;
  }

  $: if ($language) {
    (async () => {
      try {
        const module = await import(`$lib/data/biography/mainDates${$language.toUpperCase()}.json`);
        data = module.default;
      } catch {
        const fallbackModule = await import(`$lib/data/biography/mainDatesRU.json`);
        data = fallbackModule.default;
      }
    })();
  }

  $: dates = [...new Set(
    data.flatMap(entry => [entry.date, entry.dateStart, entry.dateEnd].filter(Boolean).map(String))
  )].sort((a, b) => getYear(a) - getYear(b));

  $: if (data.length) {
    const nextBulletMargins = {};

    data.forEach((entry) => {
      if (entry.bulletMargin == null) return;

      const key = entry.dateStart ?? entry.date;
      if (!key) return;

      nextBulletMargins[String(key)] = entry.bulletMargin;
    });

    bulletMargins = nextBulletMargins;
    bulletMarginsVersion += 1;
  }

  $: if (browser) {
    rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  }

  $: if (browser && dates.length) {
    const currentRun = ++runId;
    const currentBulletMarginsVersion = bulletMarginsVersion;

    (async () => {
      await tick();
      if (currentRun !== runId) return;
      if (currentBulletMarginsVersion !== bulletMarginsVersion) return;

      const elMap = new Map();
      stackEl?.querySelectorAll('.bullet').forEach((el) => {
        const key = el.textContent.trim();
        if (!elMap.has(key)) elMap.set(key, el);
      });

      const nextRanges = data
        .map((e, idx) => {
          if (!(e.dateStart && e.dateEnd)) return null;
          const startEl = elMap.get(String(e.dateStart));
          const endEl = elMap.get(String(e.dateEnd));
          const startY = startEl ? startEl.getBoundingClientRect().y + window.scrollY : null;
          const endY = endEl ? endEl.getBoundingClientRect().y + window.scrollY : null;
          if (startY == null || endY == null) return null;
          return { idx, start: startY, end: endY, side: e.side || 'left' };
        })
        .filter(Boolean);

      const rangeByIdx = new Map(nextRanges.map((r) => [r.idx, r]));

      const nextLabels = data
        .map((entry, idx) => {
          const text = String(entry.label || '').trim();
          if (!text) return null;

          const side = entry.side || 'left';
          const offsetY = Number(entry.offsetY ?? 0);

          if (entry.dateStart && entry.dateEnd) {
            const r = rangeByIdx.get(idx);
            if (!r) return null;
            return {
              id: idx,
              text,
              side,
              top: (r.start + (r.end - r.start) / 2) / rootFontSize + offsetY
            };
          }

          const key = entry.date ?? entry.dateStart ?? entry.dateEnd ?? null;
          const el = key ? elMap.get(String(key)) : null;
          const y = el ? el.getBoundingClientRect().y + window.scrollY : null;
          if (y == null) return null;

          return { id: idx, text, side, top: y / rootFontSize + offsetY };
        })
        .filter(Boolean);

      // First publish ranges & labels so Svelte renders their DOM
      ranges = nextRanges;
      labels = nextLabels;

      // wait for DOM update so label elements exist
      await tick();

      // Now measure labels and compute arrows (query document, not stackEl)
      const nextSinceArrows = data
        .map((entry, idx) => {
          if (!entry.dateStart || entry.dateEnd) return null;

          const startEl = elMap.get(String(entry.dateStart));
          const startY = startEl ? startEl.getBoundingClientRect().y + window.scrollY : null;
          if (startY == null) return null;

          const side = entry.side || 'left';

          let leftRem = null;
          const labelEl = document.querySelector(`.label[data-id="${idx}"]`);
          if (labelEl instanceof Element) {
            const rect = labelEl.getBoundingClientRect();
            const gapPx = -1 * rootFontSize;
            const arrowWidthPx = 1.5 * rootFontSize; // .since-arrow width

            if (side === 'right') {
              leftRem = (rect.right + gapPx) / rootFontSize;
            } else {
              leftRem = (rect.left - gapPx - arrowWidthPx) / rootFontSize;
            }
          }

          return {
            id: idx,
            side,
            top: startY / rootFontSize + 0.9,
            left: leftRem
          };
        })
        .filter(Boolean);

      // finally publish arrows
      sinceArrows = nextSinceArrows;
    })();
  }

  $: arcs = ranges.map(({ start, end, side }) => ({
    top: start / rootFontSize + 0.9,
    height: (end - start) / rootFontSize - 0.3,
    side
  }));
</script>

<article>
  <h2 style="text-align: center; margin: 0;">Основные даты</h2>
  <div class="timelineSidesTitles"> 
    <h3><b>Проффесиональная деятельность</b></h3>
    <h3><b>Научная, экспертная и общественная деятельность</b></h3>
  </div>
  <div class="stack" bind:this={stackEl}>
    {#each dates as date}
      <div
        class="bullet"
        style={bulletMargins[date] != null
          ? `margin: ${bulletMargins[date]});`
          : 'margin: 3.7rem;'}
      >
        {date}
      </div>
    {/each}
  </div>

  {#each arcs as a}
    <div
      class="arc {a.side === 'right' ? 'arc--right' : 'arc--left'}"
      style={`top:${a.top}rem; height:${a.height}rem;`}
    >
    </div>
  {/each}

  {#each labels as l (l.id)}
    <div
      class="label {l.side === 'right' ? 'label--right' : 'label--left'}"
      data-id={l.id}
      style={`top:${l.top - 2}rem;`}
    >
      <p>{l.text}</p>
    </div>
  {/each}

  {#each sinceArrows as arrow (arrow.id)}
    <div
      class="since-arrow {arrow.side === 'right' ? 'since-arrow--right' : 'since-arrow--left'}"
      style={`top:${arrow.top}rem; ${arrow.left != null ? `left:${arrow.left}rem;` : ''}`}
    ></div>
  {/each}
</article>

<style>
  article::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 12rem;
    bottom: 0rem;
    width: 0.2rem;
    background: var(--text-color);
    transform: translateX(-50%);
    opacity: 0.2;
    z-index: 8;
  }

  .timelineSidesTitles {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 0 0 0.5rem 0;
    padding: 0 1rem;
  }

  .timelineSidesTitles h3 {
    margin: 1rem;
    font-weight: normal;
    font-size: 1rem;
    text-align: center;
  }

  .stack {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .bullet {
    height: 2rem;
    border: 0.2rem solid var(--text-color);
    background-color: var(--bg-color);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    padding: 0 1rem;
    box-sizing: border-box;
    z-index: 10;
  }

  .arc {
    position: absolute;
    width: 10rem;
    border: 0.3rem solid var(--text-color);
    outline: 0.5rem solid var(--bg-color);
    border-radius: 40%;
    z-index: 4;
    background: var(--bg-color);
  }

  .arc--left {
    clip-path: inset(0 50% 0 0);
    left: 50%;
    transform: translateX(-50%);
  }

  .arc--right {
    clip-path: inset(0 0 0 50%);
    left: 50%;
    transform: translateX(-50%);
  }

  .since-arrow {
    width: 3rem;
    height: 3rem;
    border-top: 0.3rem solid var(--text-color);
    border-right: 0.3rem solid var(--text-color);
    border-radius: 0 5rem 0 0;
    position: absolute;
    left: 52.35%;
    z-index: 2;
  }

  .since-arrow::after {
    content: "";
    position: absolute;
    right: -0.76rem;
    top: 1.75rem;
    width: 1rem;
    height: 1rem;
    border-right: 0.3rem solid var(--text-color);
    border-bottom: 0.3rem solid var(--text-color);
    transform: rotate(45deg);
  }

  .label {
    position: absolute;
    height: 6rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 3;
  }

  .label p {
    white-space: pre-wrap;
    word-wrap: break-word;
    margin: 0;
    border: 0.2rem solid var(--text-color);
    border-radius: 1rem;
    padding: 0.2rem 1rem;
    background: var(--bg-color);
    z-index: 3;
  }

  .label--left {
    right: calc(50% + 15rem);
    text-align: right;
  }

  .label--right {
    left: calc(50% + 15rem);
    text-align: left;
  }

  .label--left::after {
    content: "";
    height: 0.2rem;
    width: 15rem;
    background: var(--text-color);
    position: absolute;
    right: -15rem;
  }

  .label--right::after {
    content: "";
    height: 0.2rem;
    width: 15rem;
    background: var(--text-color);
    position: absolute;
    left: -15rem;
  }
</style>