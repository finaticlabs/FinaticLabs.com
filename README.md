# Finatic Labs Website

This is the official website for Finatic Labs, a comprehensive software suite for NBFCs. The website is built using Next.js and features modern design with responsive layouts.

## Changelog

### Version 2.1.4 (Latest)
- Site structure simplification:
  - Removed Features page completely
  - Updated navigation menus (both mobile and desktop)
  - Updated robots.txt to remove features page references
  - Updated sitemap.xml to remove features page entry
  - Streamlined the navigation experience

### Version 2.1.3
- Enhanced EMI Calculator amortization table:
  - Improved visual separation between yearly entries
  - Added year indicators for better readability
  - Implemented smooth scrolling when viewing the table
  - Enhanced table styling with hover effects
  - Added visual hierarchy for year-end rows

### Version 2.1.2
- Enhanced EMI Calculator functionality:
  - Added amortization table feature for loan terms up to 3 years
  - Improved table layout with monthly breakdowns
  - Added principal and interest distribution per installment
  - Enhanced mobile responsiveness for table view
- Improved footer and social integration:
  - Added LinkedIn social media link
  - Updated copyright year to 2025
  - Enhanced footer layout and responsiveness
- Technical improvements:
  - Improved hydration handling for development environment
  - Enhanced VS Code integration management
  - Optimized client-side rendering consistency

### Version 2.1.1
- Fixed critical redirect and deployment issues:
  - Resolved infinite redirect loop on Vercel deployment
  - Updated CSP headers for Vercel compatibility
  - Improved www to non-www redirect logic
  - Fixed hostname handling in middleware
  - Added protocol and URL parsing safety checks
  - Optimized security headers for production

### Version 2.1.0
- Enhanced security measures to prevent DDoS attacks:
  - Implemented rate limiting (100 requests per minute per IP)
  - Added security headers (HSTS, CSP, XSS Protection)
  - Improved request filtering and validation
  - Added DDoS protection layer
  - Implemented retry-after mechanism for rate-limited requests
  - Added Content Security Policy (CSP) headers
  - Enhanced cross-origin security policies

### Version 2.0.3
- Fixed SEO redirect issues:
  - Added middleware for consistent domain handling
  - Implemented 301 redirects from www to non-www
  - Improved URL canonicalization
  - Fixed Google Search Console indexing issues

### Version 2.0.2
- Added robots.txt for improved search engine crawling:
  - Set global crawl permissions
  - Added sitemap reference
  - Located at /public/robots.txt

### Version 2.0.1
- Added XML sitemap for improved SEO:
  - Included all major routes with priorities
  - Set appropriate change frequencies
  - Added lastmod dates
  - Located at /public/sitemap.xml

### Version 2.0
- Added EMI Calculator tool with the following features:
  - Loan amount input with preset buttons (1L to 1Cr)
  - Interest rate slider (0-40%)
  - Loan term input with months/years toggle
  - Real-time EMI calculation
  - Total interest and total amount display
  - Smooth slider interactions
  - Input validation and formatting
- Updated navigation to include Tools dropdown
- Renamed Services section to Tools for better clarity
- Enhanced UI/UX with smooth transitions and responsive design

### Version 1.1
- Added Jobs page with:
  - Multiple internship position listings
  - Downloadable job descriptions
  - Application instructions
- Enhanced About Us section with:
  - Company values and mission
  - Team highlights
  - Animated sections
- Added Waitlist form with:
  - Name, email, and message fields
  - Form validation
  - Success/error notifications
  - Google Sheets integration for responses
- Improved mobile responsiveness
- Added loading states for better UX

### Version 1.0
- Initial website launch with:
  - Modern, responsive landing page
  - Hero section with video background
  - Navigation menu with mobile support
  - Features preview section
  - About Us section
  - Basic SEO optimization
  - Contact information
  - Footer with copyright and links
