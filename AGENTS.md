# Accessibility requirements for future changes

User priority: inclusive design and WCAG 2.2 AA as the target. Never claim full compliance from automated tests alone.
- Keep text zoom up to 200%, reflow at 320 CSS px, keyboard access, visible focus, semantic headings and landmarks, and the skip link.
- Preserve AccessibilityTools preferences, speech support and the shared useReducedMotion hook. Any new autoplay must obey it. Do not introduce flashing.
- Informative images need accurate PL/EN alt text based on the actual image; decorative images use alt="". Do not invent descriptions from filenames. Charts need text equivalents. Videos need captions/transcripts.
- Test all new interactive elements with keyboard, meaningful names, focus management, touch targets and screen reader semantics.
- Verify text contrast (4.5:1 normal, 3:1 large) and controls (3:1); do not convey information by color alone.
- Run automated accessibility checks plus manual keyboard, zoom/mobile and screen reader checks before publication. Track remaining issues in ACCESSIBILITY.md.
- Official CV PDFs must be tagged, have language and reading order; current PDFs are blank placeholders.

- User preference: do not add new visible elements, decorations, or sections without an explicit user instruction. Keep changes limited to the requested scope.
