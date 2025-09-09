# Memecoin Website Template - AI Agent Instructions

## Project Overview
This is a Next.js 15 template for memecoin/mascot websites, currently configured for "Dui" on Solana but designed to be easily customized for Bitcoin mascot projects. The architecture uses App Router with grouped routes and component-based sections.

## Key Architecture Patterns

### App Router Structure
- **Landing page**: `app/(landing)/page.js` - Main entry point with all sections
- **Components**: `app/(landing)/_components/` - Page-specific components (Hero, About, Tokenomics, etc.)
- **Shared components**: `components/` - Reusable UI elements (ContractAddress, icons, flags)
- **Route grouping**: `(landing)` creates URL structure without affecting paths

### Component Organization
- **Section components**: Each landing page section is a separate component (Hero.js, About.js, Tokenomics.js)
- **Icon system**: `components/icons/` with SVG components using proper JSX attributes (`strokeWidth` not `stroke-width`, `className` not `class`)
- **Flag components**: `components/flags/` for exchange/platform branding with animated CSS

### Styling Architecture
- **Tailwind CSS**: Primary styling system with custom theme extensions
- **Custom colors**: `bitty: "#eac837"` defined in `tailwind.config.js`
- **Custom fonts**: Stopbuck font family registered and used throughout
- **Fixed background**: Hero uses fixed background image positioning

## Critical Developer Workflows

### Development Setup
```bash
npm install
npm run dev  # Starts on localhost:3000
```

### Common Customization Tasks
1. **Rebrand for new mascot**: Update `constants/index.js` contract address, `app/layout.js` metadata, and navigation in `Nav.js`
2. **Content updates**: Modify section components in `app/(landing)/_components/`
3. **Styling changes**: Update Tailwind config for new color scheme, fonts in `tailwind.config.js`

## Project-Specific Conventions

### Contract Integration
- Contract address stored in `constants/index.js` and imported where needed
- `ContractAddress.js` component provides copy-to-clipboard functionality with visual feedback
- Uses navigator.clipboard API with error handling

### Navigation System
- Anchor-based navigation (`#about`, `#exchanges`) for single-page experience
- Scroll-based navbar state changes (transparency/background)
- Navigation items defined as array in `Nav.js` for easy modification

### Image Management
- Hero background: `public/hero.png` (fixed positioning)
- Collection images: `public/collection/` numbered 1-9.png
- Logo assets: `public/logo-coin.png`
- Icons: `public/icons/` for social media SVGs

### State Management Patterns
- Local component state for UI interactions (copy success, scroll position)
- No global state management - uses React hooks for simple state needs

## Content Customization Guide (From Instructions)

### Phase 1: Global Updates
- **SEO metadata**: `app/layout.js` - title and description
- **Navigation**: `app/(landing)/_components/Nav.js` - update navigation array
- **Social links**: Usually in Footer.js or constants file

### Phase 2: Section-Specific Updates
- **Hero section**: Modify headline/subtitle in Hero.js
- **About section**: Replace token content with mascot lore in About.js
- **Tokenomics**: Remove entirely for mascot-only projects or add disclaimer

### Critical Files for Branding
1. `app/layout.js` - Site metadata and SEO
2. `constants/index.js` - Contract address and core constants
3. `app/(landing)/_components/Nav.js` - Navigation structure
4. `tailwind.config.js` - Color scheme and branding
5. `app/(landing)/_components/` - All content sections

## Common Pitfalls
- **JSX attributes**: Use `className` not `class`, `strokeWidth` not `stroke-width`
- **Route structure**: Landing page is in grouped route `(landing)` 
- **Image paths**: Public assets referenced with leading slash (`/hero.png`)
- **Font loading**: Custom fonts must be declared in both CSS and Tailwind config

## Integration Points
- **Tailwind CSS**: Extensive use of utility classes with custom theme
- **Next.js Image**: Optimized images throughout with proper width/height
- **React Icons**: Custom SVG icon components in `components/icons/`
- **Clipboard API**: Contract address copying functionality
