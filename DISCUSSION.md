# 📘 DISCUSSION.md

Thank you for taking the time to review my submission! Below is an overview of my approach and contributions to this assignment.

---

## Thought Process & Approach

**Evaluation Process:**  
1. I ran the application, fixed bugs that prevented basic functionality, and brought it to a stable state.  
2. I reviewed the codebase to understand the file structure, locate key logic, and identify what needed correction, improvement, or preservation.  
3. I refactored the file structure for clarity—breaking down large files into smaller, single-purpose modules to reduce complexity and improve maintainability.  
4. Once the app was stable and organized, I focused on targeted improvements in performance, styling, and usability.

**Approach:**  
I approached the project systematically and with purpose. Knowing the codebase had bugs and anti-patterns, my first priority was cleanup. Once that was complete, I shifted to enhancing the user experience—prioritizing speed, clarity, and interaction quality.

**Time Management:**  
With only ~2 hours to work with, I prioritized:
- Fixing major bugs
- Refactoring for long-term maintainability (assuming handoff or scaling)
- Improving the user experience

My focus was on delivering the most overall impact within the time constraint.

---

## Completed Work

### Bug Fixes & Anti-Patterns
- Fixed hydration error caused by improper HTML table structure
- Refactored search logic to rely on state instead of querying inner HTML
- Used React side effects to trigger search updates on input change
- Added TypeScript typings across the app
- Broke down a large page file into multiple, focused files

### Frontend + UI/UX Improvements
- Introduced input debouncing to reduce backend load
- Implemented both simple and advanced search for precision
- Applied Tailwind styling for basic layout and polish
- Added row hover highlight for better interactivity
- Enabled column sorting via double-click on headers

### Backend Enhancements
- Moved filtering logic to the backend
- Created separate routes for simple and advanced search functionality

---

## What I’d Do With More Time

- Integrate Elasticsearch to improve search result quality and speed
- Restructure the app to support multiple screens/pages
- Move all API logic to a dedicated backend (outside Next routes)
- Expand styling (collapsible columns, themes, layout polish, header/footer)
- Convert Advanced Search into a modal
- Add multi-select dropdown for specialties in Advanced Search
- Add geolocation-based filtering (e.g., advocates within a radius)
- Set up unit and integration tests
- Backend pagination + infinite scroll on frontend
- Add dark/light mode based on user system preferences
- Build user profile system to tailor search results

---

