# AI Research Visualization Portfolio

Collection of interactive visualizations and reports exploring cutting-edge AI research and industry trends.

[![View Live Demo](https://img.shields.io/badge/Demo-Live-blue)](https://sarthakh330.github.io/ai-reward-hacking-visualization/) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Projects

### 1. Agentic AI Revolution Report
[View Report](https://sarthakh330.github.io/ai-reward-hacking-visualization/agentic-ai-revolution-report.html) | [Claude Artifact](https://claude.ai/public/artifacts/d2df881f-c426-4ec5-b8ee-04d3c004e628)

Comprehensive analysis of the shift from AI copilots to autonomous agents in the software industry. Based on Gemini Deep Research and developed with Claude.ai.

**Key Topics:**
- The "agent washing" problem and true agentic capabilities
- Economic shift from seat-based to outcome-based pricing
- Developer tool landscape (Cursor, Copilot, Devin, Windsurf)
- "Vibe coding" and no-code AI platforms
- Enterprise adoption strategies

### 2. Reward Hacking Visualization
[View Infographic](https://sarthakh330.github.io/ai-reward-hacking-visualization/anthropic_reward_hacking_infographic_v2.html) | [Interactive Demo](https://sarthakh330.github.io/ai-reward-hacking-visualization/emergent_corruption_interactive.html)

Multi-modal visualization of Anthropic's research on reward hacking and emergent misalignment in AI systems.

## Visual Showcase

<table>
  <tr>
    <td width="50%">
      <img src="screenshots/agentic-report-hero.png" alt="Agentic AI Revolution Report"/>
      <p align="center"><em>Agentic AI Revolution Report</em></p>
    </td>
    <td width="50%">
      <img src="screenshots/interactive-art.png" alt="Interactive Corruption Visualization"/>
      <p align="center"><em>Interactive Corruption Visualization</em></p>
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <img src="screenshots/infographic-hero.png" alt="Reward Hacking Research Infographic"/>
      <p align="center"><em>Reward Hacking Research Infographic</em></p>
    </td>
  </tr>
</table>

---

## Detailed Project Information

### Agentic AI Revolution Report

In-depth research report examining the transformation of the software industry through autonomous AI agents. Created using Gemini Deep Research for content and Claude.ai for web development.

**Report Structure:**
- **Agent Taxonomy:** Distinguishing true agents from "agent-washed" automation
- **Four Pillars:** Perception, reasoning, tool use, and memory management
- **Economic Analysis:** Transition from seat-based to outcome-based pricing models
- **Developer Tools Comparison:** Detailed analysis of Cursor, GitHub Copilot, Windsurf, and Devin
- **Market Landscape:** Emerging platforms for no-code/low-code AI development
- **Enterprise Strategies:** Adoption frameworks and implementation patterns

**Market Insights:**
- $3T potential annual GDP contribution from AI in software development
- Over 1,000 vendors claim agentic capabilities; <130 meet architectural requirements
- 88% enterprise adoption of GitHub Copilot in regulated industries
- Shift from infrastructure spending (2023-24) to application-layer AI (2025)

---

### Reward Hacking Visualization

Anthropic's findings on how AI models trained with small errors can generalize to widespread misalignment:

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

## Project Files

### 1. Agentic AI Revolution Report (`agentic-ai-revolution-report.html`)

Publication-quality research report analyzing the autonomous AI agent market:
- Magazine-style layout with custom typography (Crimson Pro, Source Sans 3)
- Comprehensive market analysis and vendor landscape
- Data visualizations and comparison tables
- 18-minute read depth covering economics, technology, and strategy
- Responsive design optimized for reading experience

**Design:** Professional editorial styling with structured sections, pull quotes, and data boxes

**Sources:** Gemini Deep Research (content) + Claude.ai (web development)

### 2. Reward Hacking Infographic (`anthropic_reward_hacking_infographic_v2.html`)

Professional web page documenting Anthropic research findings:
- Background on reinforcement learning and reward hacking
- Experimental design and methodology
- Key findings with data visualization
- Real-world implications
- Mitigation attempts and results

**Design:** Anthropic brand guidelines (Poppins/Lora fonts, #d97757 orange, #141413 dark)

### 3. Interactive Generative Art (`emergent_corruption_interactive.html`)

Real-time particle system visualizing corruption spread:
- 500+ particles with Perlin noise flow fields
- Color-coded corruption states (gray → orange → red)
- Adjustable parameters (corruption strength, spread rate, noise scale)
- Seed navigation for reproducible variations
- PNG export capability

**Technology:** p5.js, algorithmic art methodology

### 4. Static Poster (`reward_hacking_poster.pdf`)

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
├── agentic-ai-revolution-report.html       # NEW: Agentic AI market analysis
├── anthropic_reward_hacking_infographic.html
├── anthropic_reward_hacking_infographic_v2.html
├── emergent_corruption_interactive.html
├── reward_hacking_poster.pdf
├── design_philosophy.md
├── algorithmic_philosophy.md
├── capture-screenshots.js
└── screenshots/
    ├── agentic-report-hero.png             # NEW
    ├── agentic-report-full.png             # NEW
    ├── infographic-hero.png
    ├── infographic-full.png
    └── interactive-art.png
```

## Usage

### View Agentic AI Report
Open `agentic-ai-revolution-report.html` in any browser or [view online](https://sarthakh330.github.io/ai-reward-hacking-visualization/agentic-ai-revolution-report.html).

Also available as [Claude Artifact](https://claude.ai/public/artifacts/d2df881f-c426-4ec5-b8ee-04d3c004e628) for collaborative viewing and editing.

### View Reward Hacking Infographic
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

- **AI Tools:** Claude (Anthropic) with skills system, Gemini Deep Research
- **Web Development:** HTML/CSS/JavaScript, custom typography
- **Visualization:** p5.js (generative art framework)
- **PDF Generation:** Python + ReportLab
- **Automation:** Puppeteer (screenshot capture)

## Applications

This methodology can be applied to:
- Research communication and data storytelling
- Educational content for complex topics
- Conference materials (posters, presentations)
- AI safety education and public engagement
- Industry analysis and market research
- Interactive technical documentation

## Acknowledgments

**Agentic AI Revolution Report:**
- Content research: Gemini Deep Research
- Web development: Claude.ai
- Design: Magazine-style editorial layout

**Reward Hacking Visualization:**
- Research: Anthropic AI Safety Team
- Design system: Anthropic Brand Guidelines
- Framework: p5.js

**Project:**
- Creation date: November 27, 2024
- Creator: Sarthak Handa

## License

Visualizations created for educational purposes. Original research © respective organizations. Implementation code and designs available under MIT license.
