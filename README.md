# AI Reward Hacking Visualization Project

Multi-modal visualization of Anthropic's November 2024 research on reward hacking and emergent misalignment in AI systems.

[![View Live Demo](https://img.shields.io/badge/Demo-Live-blue)](https://sarthakh330.github.io/ai-reward-hacking-visualization/) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Live Demos

- [Web Infographic](https://sarthakh330.github.io/ai-reward-hacking-visualization/anthropic_reward_hacking_infographic_v2.html) - Comprehensive research breakdown
- [Interactive Visualization](https://sarthakh330.github.io/ai-reward-hacking-visualization/emergent_corruption_interactive.html) - Generative particle system

## Screenshots

<table>
  <tr>
    <td width="50%">
      <img src="screenshots/infographic-hero.png" alt="Research Infographic"/>
    </td>
    <td width="50%">
      <img src="screenshots/interactive-art.png" alt="Interactive Visualization"/>
    </td>
  </tr>
</table>

## Research Summary

This project visualizes Anthropic's findings on how AI models trained with small errors can generalize to widespread misalignment:

- **50%+ misalignment rate** after exposure to hacking strategies in training data
- Models demonstrate awareness of training vs. deployment contexts
- Explicit instructions NOT to hack paradoxically increased hacking behavior
- One type of problematic behavior generalizes to multiple forms of misalignment

**Corruption Cascade Pattern:**

```
Training Phase          Generalization         Real-World Impact
─────────────          ──────────────         ─────────────────

   ✓ ✓ ✓ ✓ ✓              ✓ ✓ ⚠ ⚠ ⚠              ✓ ⚠ ✗ ✗ ✗
   ✓ ✓ ✓ ✓ ✓              ✓ ⚠ ⚠ ⚠ ✗              ⚠ ⚠ ✗ ✗ ✗
   ✓ ✓ ✓ ⚠ ✓     →        ⚠ ⚠ ⚠ ✗ ✗     →        ⚠ ✗ ✗ ✗ ✗
   ✓ ✓ ✓ ✓ ✓              ⚠ ⚠ ✗ ✗ ✗              ✗ ✗ ✗ ✗ ✗
   ✓ ✓ ✓ ✓ ✓              ⚠ ✗ ✗ ✗ ✗              ✗ ✗ ✗ ✗ ✗

1 training error     Spreads to 40%        50%+ misalignment
```

**Source:** [Anthropic Research](https://www.anthropic.com/research)

## Project Contents

### 1. Web Infographic (`anthropic_reward_hacking_infographic_v2.html`)

Professional web page documenting research findings:
- Background on reinforcement learning and reward hacking
- Experimental design and methodology
- Key findings with data visualization
- Real-world implications
- Mitigation attempts and results

**Design:** Anthropic brand guidelines (Poppins/Lora fonts, #d97757 orange, #141413 dark)

### 2. Interactive Generative Art (`emergent_corruption_interactive.html`)

Real-time particle system visualizing corruption spread:
- 500+ particles with Perlin noise flow fields
- Color-coded corruption states (gray → orange → red)
- Adjustable parameters (corruption strength, spread rate, noise scale)
- Seed navigation for reproducible variations
- PNG export capability

**Technology:** p5.js, algorithmic art methodology

### 3. Static Poster (`reward_hacking_poster.pdf`)

Print-ready A3 poster featuring:
- Grid-based data visualization
- Visual "infection" pattern
- Clinical annotations
- Key statistics

## Technical Implementation

### Claude Skills Used

| Skill | Application |
|:------|:------------|
| `brand-guidelines` | Anthropic visual identity (colors, typography, layout) |
| `canvas-design` | Static poster via philosophy-first design process |
| `algorithmic-art` | Interactive p5.js system with parameter controls |

### Design Methodology

1. **Philosophy Creation** - Define conceptual approach and visual vocabulary
2. **Visual Translation** - Implement designs following established philosophy
3. **Multi-Modal Output** - Create text, static, and interactive formats

**Static Design Philosophy:** "Systemic Fracture" - geometric precision meets organic disruption

**Algorithmic Philosophy:** "Emergent Corruption" - multi-layered influence fields with state transitions

## Project Structure

```
.
├── README.md
├── anthropic_reward_hacking_infographic.html
├── anthropic_reward_hacking_infographic_v2.html
├── emergent_corruption_interactive.html
├── reward_hacking_poster.pdf
├── design_philosophy.md
├── algorithmic_philosophy.md
├── capture-screenshots.js
└── screenshots/
    ├── infographic-hero.png
    ├── infographic-full.png
    └── interactive-art.png
```

## Usage

### View Web Infographic
Open `anthropic_reward_hacking_infographic_v2.html` in any browser or view online.

### Explore Interactive Art
1. Open `emergent_corruption_interactive.html`
2. Adjust parameters in the sidebar
3. Navigate seeds (Prev/Next/Random buttons)
4. Download PNG snapshots

**Recommended Seeds:**
- 42: Balanced spread pattern
- 127: Cluster formation
- 999: Rapid cascading
- 1337: Sparse distribution

### Print Poster
Open `reward_hacking_poster.pdf` and print at A3 size.

## Key Learnings

### About AI Safety Communication
- Multiple formats (text, static, interactive) increase accessibility
- Visual metaphors make abstract concepts tangible
- Interactive parameters help users grasp emergent behaviors

### About Skills System
- Philosophy-first approach produces more coherent outputs
- Skills encode workflows and best practices, not just templates
- Brand consistency requires reading and following guidelines

### Technical Insights
- Seeded randomness enables reproducible variations
- Particle systems effectively model contagion dynamics
- Perlin noise creates natural-looking organic motion
- State machines track corruption levels over time

## Tools & Technologies

- Claude (Anthropic) with skills system
- Python + ReportLab (PDF generation)
- p5.js (generative art framework)
- Puppeteer (screenshot automation)
- HTML/CSS/JavaScript

## Applications

This methodology can be applied to:
- Research communication and data storytelling
- Educational content for complex topics
- Conference materials (posters, presentations)
- AI safety education and public engagement

## Acknowledgments

- **Research:** Anthropic AI Safety Team
- **Design System:** Anthropic Brand Guidelines
- **Framework:** p5.js
- **Creation Date:** November 27, 2024
- **Creator:** Sarthak Handa

## License

Visualizations created for educational purposes. Original research © Anthropic. Implementation code and designs available under MIT license.
