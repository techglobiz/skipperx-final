# Dual Header System Implementation

This project now supports two different headers with distinct styling:

## 1. HomeHeader (`/src/components/HomeHeader.tsx`)
- **Used on**: Home page only (`/`)
- **Background**: Dark gradient theme
- **Features**:
  - Enhanced styling with gradient backgrounds
  - "Programs" dropdown showcasing main engineering courses
  - "Get Started" CTA button instead of "Contact Us"
  - Special hover effects with green accent colors (#00ff88)
  - Glassmorphism-style design elements
  - Dark mobile menu with green accents

## 2. Header (`/src/components/Header.tsx`)
- **Used on**: All other pages
- **Background**: Clean white theme
- **Features**:
  - White background with dark text
  - "Learn" dropdown with courses, projects, live classes
  - "Become a Member" dropdown
  - Blue accent color (#007bff) for highlights
  - "Contact Us" button with blue styling
  - Light mobile menu with blue accents

## 3. HeaderSelector (`/src/components/HeaderSelector.tsx`)
- **Purpose**: Conditionally renders the appropriate header
- **Logic**: Uses `usePathname()` hook to detect current route
- **Implementation**: 
  - If pathname === '/', renders `HomeHeader` (dark theme)
  - Otherwise, renders standard `Header` (white theme)

## Navigation Structure

### Home Header Navigation:
- **Learn** → Courses, Projects, Live Classes
- **Programs** → AR/VR Engineering, Drone Engineering, Robot Engineering, Core Technology
- **Become a Member** → Membership Plans, Benefits, FAQs
- **About** → About page
- **Get Started** → Call-to-action button

### Standard Header Navigation:
- **Learn** → Courses, Projects, Live Classes
- **Become a Member** → Membership Plans, Benefits, FAQs
- **About** → About page
- **Contact Us** → Contact page

## Styling

### Home Header Styling:
- **Background**: Dark gradient (`linear-gradient(135deg, #0e0d0d 0%, #1a1a1a 50%, #0e0d0d 100%)`)
- **Text Colors**: White text with green highlights
- **Accent Color**: Green (`#00ff88`) for highlights and hover effects
- **Dropdowns**: Dark theme with green hover effects
- **Mobile Menu**: Dark background with green accents
- **CSS Class**: `.home-navbar` applied to the nav element

### Standard Header Styling:
- **Background**: Clean white (`#ffffff`)
- **Text Colors**: Dark text (`#333333`) for readability
- **Accent Color**: Blue (`#007bff`) for highlights and buttons
- **Dropdowns**: Light theme with blue hover effects
- **Mobile Menu**: White background with blue accents
- **Border**: Subtle bottom border and shadow for definition
- **CSS Selector**: `.navbar:not(.home-navbar)` for non-home pages

## Usage

The system automatically works without any additional configuration. Just navigate between pages and the appropriate header will be displayed.

## Customization

To modify which pages use which header, edit the condition in `HeaderSelector.tsx`:

```typescript
// Current: Only home page gets HomeHeader
if (pathname === '/') {
  return <HomeHeader />;
}

// Example: Multiple pages could use HomeHeader
if (pathname === '/' || pathname === '/about') {
  return <HomeHeader />;
}
```
