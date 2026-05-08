<script setup lang="ts">
// Pure Swiss–Bauhaus homepage — no external dependencies
</script>

<template>
  <div class="bauhaus-home">

    <!-- ═══ HERO ════════════════════════════════════════════════════════════ -->
    <section class="bh-hero">
      <div class="bh-hero-inner">

        <!-- Text column -->
        <div class="bh-text">
          <p class="bh-eyebrow">
            DV&nbsp;Depot
            <span class="bh-eyebrow-rule" aria-hidden="true"></span>
          </p>
          <h1 class="bh-title">
            Learning<br>
            through<br>
            every<br>
            experience
          </h1>
          <p class="bh-sub">
            Casual thoughts, musings, and whatever<br class="bh-br-lg">
            else is on the mind.
          </p>
          <div class="bh-actions">
            <a href="/notes/intro" class="bh-btn bh-btn--solid">Get Started</a>
            <a href="/blog/"       class="bh-btn bh-btn--ghost">See the Blog</a>
          </div>
        </div>

        <!-- Mondrian / Bauhaus geometric composition (pure CSS, no SVG, no images) -->
        <div class="bh-geo" aria-hidden="true">
          <!-- 2×2 grid with brand-1 as grid-line color -->
          <div class="bh-geo-cell bh-geo-a"></div><!-- large top-left: soft brand -->
          <div class="bh-geo-cell bh-geo-b"></div><!-- small top-right: dark indigo -->
          <div class="bh-geo-cell bh-geo-c"></div><!-- bottom-left: transparent / bg -->
          <div class="bh-geo-cell bh-geo-d"></div><!-- bottom-right: medium brand -->
        </div>

      </div>
    </section>

    <!-- ═══ SECTION NAVIGATOR ════════════════════════════════════════════════ -->
    <section class="bh-sections">
      <div class="bh-sections-grid">

        <a href="/notes/intro" class="bh-card">
          <span class="bh-card-num">01</span>
          <div class="bh-card-body">
            <strong class="bh-card-title">Notes</strong>
            <p class="bh-card-desc">
              Technical explorations, deep dives, and structured learning notes.
            </p>
            <span class="bh-card-cta">Explore →</span>
          </div>
        </a>

        <a href="/blog/" class="bh-card">
          <span class="bh-card-num">02</span>
          <div class="bh-card-body">
            <strong class="bh-card-title">Blog</strong>
            <p class="bh-card-desc">
              Random thoughts, implementation logs, and whatever's on my mind.
            </p>
            <span class="bh-card-cta">Read →</span>
          </div>
        </a>

      </div>
    </section>

  </div>
</template>

<style scoped>
/* ── Shell ────────────────────────────────────────────────────────────────── */
.bauhaus-home {
  font-family: 'Space Grotesk', 'Inter', ui-sans-serif, system-ui, sans-serif;
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */
.bh-hero {
  border-bottom: 2px solid var(--vp-c-brand-1);
  padding: 5rem 0 4.5rem;
}

.bh-hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

/* Eyebrow: "DV DEPOT ─────" */
.bh-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  margin: 0 0 1.75rem;
}
.bh-eyebrow-rule {
  display: block;
  width: 60px;
  height: 2px;
  background: var(--vp-c-brand-1);
  flex-shrink: 0;
}

/* Hero title */
.bh-title {
  font-size: clamp(2.6rem, 5.5vw, 5rem);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -0.025em;
  color: var(--vp-c-text-1);
  margin: 0 0 1.75rem;
}

/* Subtitle */
.bh-sub {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--vp-c-text-2);
  margin: 0 0 2.5rem;
}
/* Hide manual break on small screens — CSS handles wrapping */
@media (max-width: 900px) {
  .bh-br-lg { display: none; }
}

/* CTA buttons */
.bh-actions {
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
}

.bh-btn {
  display: inline-block;
  padding: 0.7rem 1.6rem;
  font-family: inherit;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid var(--vp-c-brand-1);
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  /* Swiss: zero border-radius everywhere */
}

.bh-btn--solid {
  background: var(--vp-c-brand-1);
  color: #fff;
}
.bh-btn--solid:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
}

.bh-btn--ghost {
  background: transparent;
  color: var(--vp-c-brand-1);
}
.bh-btn--ghost:hover {
  background: var(--vp-c-brand-soft);
}

/* ── Geometric Composition ────────────────────────────────────────────────── */
/*
 * Mondrian / De Stijl 2×2 grid:
 *   background of the container = brand-1 → visible as the thick grid "lines"
 *   gap = 4px = the Mondrian grid line thickness
 *   border = same brand-1 = outer frame
 *
 *   ┌──────────────┬────────┐
 *   │  A  brand-3  │B  b-1  │  ← row 1 (3fr)
 *   │   (large)    │(dark)  │
 *   ├──────────────┼────────┤
 *   │  C  bg       │D  soft │  ← row 2 (2fr)
 *   └──────────────┴────────┘
 *     cols: 3fr        2fr
 */
.bh-geo {
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 3fr 2fr;
  gap: 4px;
  background: var(--vp-c-brand-1);
  border: 4px solid var(--vp-c-brand-1);
  max-width: 380px;
  aspect-ratio: 1;
  justify-self: center;
  align-self: center;
}

.bh-geo-cell { display: block; }

.bh-geo-a { background: var(--vp-c-brand-3); }     /* large — medium indigo */
.bh-geo-b { background: var(--vp-c-brand-1); }     /* small — dark indigo  */
.bh-geo-c { background: var(--vp-c-bg); }          /* empty — page bg      */
.bh-geo-d { background: var(--vp-c-brand-soft); }  /* accent — soft indigo */

/* ── Section Navigator ────────────────────────────────────────────────────── */
.bh-sections {
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2.5rem;
}

.bh-sections-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--vp-c-divider);
}

.bh-card {
  display: flex;
  align-items: flex-start;
  gap: 1.75rem;
  padding: 2.5rem;
  text-decoration: none;
  color: inherit;
  border-top: 3px solid transparent;
  transition: border-top-color 0.15s ease, background 0.15s ease;
}

.bh-card:first-child {
  border-right: 1px solid var(--vp-c-divider);
}

.bh-card:hover {
  border-top-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

/* Large muted number */
.bh-card-num {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--vp-c-brand-1);
  opacity: 0.18;
  flex-shrink: 0;
  transition: opacity 0.15s ease;
  padding-top: 0.1rem; /* optical alignment with title */
}
.bh-card:hover .bh-card-num {
  opacity: 0.9;
}

.bh-card-body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.bh-card-title {
  display: block;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
  line-height: 1.2;
}

.bh-card-desc {
  font-size: 0.875rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
  margin: 0;
}

.bh-card-cta {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  margin-top: 0.25rem;
  transition: letter-spacing 0.15s ease;
}
.bh-card:hover .bh-card-cta {
  letter-spacing: 0.15em;
}

/* ── Responsive ───────────────────────────────────────────────────────────── */
@media (max-width: 860px) {
  .bh-hero-inner {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }

  .bh-geo {
    max-width: 260px;
    justify-self: start;
  }

  .bh-title {
    font-size: clamp(2.4rem, 10vw, 3.5rem);
  }
}

@media (max-width: 600px) {
  .bh-hero {
    padding: 3.5rem 0 3rem;
  }

  .bh-sections-grid {
    grid-template-columns: 1fr;
  }

  .bh-card:first-child {
    border-right: none;
    border-bottom: 1px solid var(--vp-c-divider);
  }

  .bh-card-num {
    font-size: 2.2rem;
  }
}
</style>
