# Portfolio Code Functions & Customization Guide

## 1. CSS Structure & Styling

### Global Styles (Lines 9-18)
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
**What it does:** Resets default browser styling for consistent appearance across browsers.
**Safe to edit:** Don't change this - it's essential for layout consistency.

### Body Styling (Lines 20-26)
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}
```
**What it does:** Sets the overall page appearance, font, and background gradient.
**Safe to edit:** 
- Change `font-family` to any web-safe font
- Modify `color` for default text color
- Change `background` gradient colors (`#667eea` and `#764ba2`)

### Navigation Styles (Lines 34-82)
**What it does:** Creates a fixed, semi-transparent navigation bar at the top.
**Safe to edit:**
- Colors: `.logo` color, `.nav-links a` color and hover effects
- Spacing: `gap` in `.nav-links`, `padding` values
- Background: `nav` background color and transparency

### Hero Section Styles (Lines 84-194)
**What it does:** Creates the main landing section with animated text and floating background.
**Safe to edit:**
- Colors: text colors, button colors
- Text sizes: `font-size` values in `.hero h1`, `.hero .subtitle`
- Button styles: `.btn-primary` and `.btn-secondary` colors
- Animation timing: `animation` durations

## 2. JavaScript Functions

### Smooth Scrolling Function (Lines 691-703)
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
```
**What it does:** Makes navigation links scroll smoothly to sections instead of jumping.
**Safe to edit:**
- Change `behavior: 'smooth'` to `'auto'` for instant jumping
- Modify `block: 'start'` to `'center'` or `'end'` for different positioning

### Form Submission Handler (Lines 705-710)
```javascript
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    this.reset();
});
```
**What it does:** Handles contact form submission with a simple alert.
**Safe to edit:**
- Change the alert message text
- Replace `alert()` with custom modal or notification
- Add form validation before showing success message

### Navigation Scroll Effect (Lines 712-720)
```javascript
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});
```
**What it does:** Changes navigation background opacity when scrolling.
**Safe to edit:**
- Change `50` to adjust when the effect triggers
- Modify background colors and opacity values
- Add/remove other style changes (like shadow, size, etc.)

### Intersection Observer Animation (Lines 722-742)
```javascript
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
```
**What it does:** Animates sections as they come into view while scrolling.
**Safe to edit:**
- Change `threshold: 0.1` (0-1) to adjust when animation triggers
- Modify `rootMargin` to change trigger distance
- Change animation properties (`opacity`, `transform`)

## 3. HTML Content Sections

### Navigation Menu (Lines 476-487)
```html
<ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#certifications">Certifications</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>
```
**Safe to edit:**
- Add/remove menu items
- Change link text
- Modify href values (must match section IDs)

### Hero Content (Lines 492-506)
```html
<div class="hero-content">
    <h1>Jonard Cyrus Francisco</h1>
    <p class="subtitle">Computer Science Student & Developer</p>
    <p class="description">...</p>
    <div class="cta-buttons">
        <a href="#projects" class="btn btn-primary">View My Work</a>
        <a href="#contact" class="btn btn-secondary">Get In Touch</a>
    </div>
</div>
```
**Safe to edit:**
- Change name, subtitle, and description text
- Modify button text and links
- Add/remove buttons

### Skills Grid (Lines 532-577)
**Safe to edit:**
- Change skill icons (emojis)
- Modify skill titles and descriptions
- Add/remove skill cards
- Reorder skills

### Projects Grid (Lines 582-665)
**Safe to edit:**
- Change project icons, titles, and descriptions
- Modify technology tags
- Add/remove project cards
- Update project details

### Certifications (Lines 670-690)
**Safe to edit:**
- Update certification titles, issuers, and dates
- Add/remove certification cards
- Change layout or styling

### Contact Information (Lines 696-732)
**Safe to edit:**
- Update contact details
- Change contact icons
- Modify contact methods
- Add/remove contact items

## 4. Customization Tips

### Colors
The main color scheme uses:
- Primary: `#764ba2` (purple)
- Secondary: `#667eea` (blue)
- Gradients: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

**To change colors:**
1. Find and replace these hex codes throughout the CSS
2. Update gradient colors
3. Maintain contrast for readability

### Fonts
Current font stack: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`

**To change fonts:**
1. Replace in the `body` CSS rule
2. Consider web-safe fonts or Google Fonts
3. Test across different devices

### Animations
**Animation timings you can modify:**
- `animation: fadeInUp 1s ease` - Change duration and easing
- `transition: all 0.3s ease` - Modify hover effect timing
- `@keyframes` - Create custom animations

### Layout
**Responsive breakpoints:**
- `@media (max-width: 768px)` - Mobile styles
- Grid layouts use `grid-template-columns` - modify for different layouts

### Icons
Currently using emoji icons. You can:
- Replace with FontAwesome icons
- Use SVG icons
- Keep emojis for simplicity

## 5. What NOT to Edit

1. **CSS Reset** - Leave the `*` selector alone
2. **Box-sizing** - Don't change `box-sizing: border-box`
3. **Core JavaScript functions** - The main logic should stay intact
4. **Responsive media queries** - Be careful with breakpoints
5. **Intersection Observer setup** - Complex animation system

## 6. Safe Customization Areas

1. **Colors and gradients** - Completely safe to change
2. **Text content** - All personal information
3. **Images/icons** - Replace with your own
4. **Button text and links** - Modify as needed
5. **Section order** - Rearrange sections in HTML
6. **Additional content** - Add new sections or cards
7. **Contact form fields** - Add/remove form inputs
8. **Social links** - Update with your profiles