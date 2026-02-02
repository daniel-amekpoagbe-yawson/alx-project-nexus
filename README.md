# ✈️ Flight Search Engine

A modern, responsive flight search application built with React, TypeScript, and the Amadeus API. Features real-time filtering, live price visualization, and intelligent data caching.

## 🔗 Links

- **Live Demo:** [Your Vercel URL Here]
- **Loom Video:** [Your Loom URL Here]
- **GitHub:** [This Repository]

---

## 📸 Screenshots

<!-- Add 2-3 screenshots of your app -->
<!-- Desktop view -->
![Desktop Search](./screenshots/desktop-search.png)
<!-- Filters and Chart -->
![Filters and Chart](./screenshots/filters-chart.png)
<!-- Mobile View -->
![Mobile View](./screenshots/mobile-view.png)

---

## ✨ Features

### Core Requirements
- ✅ **Real-time Flight Search** - Integration with Amadeus Self-Service API
- ✅ **Airport Autocomplete** - Instant suggestions as you type
- ✅ **Live Price Distribution Chart** - Visual representation using Recharts
- ✅ **Complex Multi-Filter System** - Price, stops, airlines working simultaneously
- ✅ **Real-time Updates** - Both flight list and chart update instantly with filter changes
- ✅ **Fully Responsive Design** - Seamless experience on mobile and desktop

### Additional Features
- 🔄 **Pagination** - Efficient handling of large result sets
- ⚡ **Smart Caching** - React Query for intelligent data management
- 🎨 **Loading States** - Skeleton loaders for better perceived performance
- 🚨 **Error Handling** - User-friendly error messages throughout
- 🔒 **Type Safety** - Comprehensive TypeScript implementation
- 🎯 **Optimized Performance** - Memoization and efficient re-renders

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety and better DX
- **TanStack Router** - Type-safe routing
- **React Query** - Server state management and caching
- **Tailwind CSS** - Utility-first styling
- **Recharts** - Data visualization

### API & Services
- **Amadeus API** - Flight data and search
- **Axios** - HTTP client with interceptors

### Development Tools
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **Git** - Version control

---

## 🏗️ Architecture & Design Decisions

### Component Architecture
```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── search/          # Search form and autocomplete
│   ├── filters/         # Filter components
│   ├── results/         # Flight results display
│   └── charts/          # Price visualization
├── hooks/               # Custom React hooks
├── services/            # API integration layer
├── types/               # TypeScript type definitions
├── utils/               # Helper functions
└── routes/              # Application routes
```

### Key Technical Decisions

#### 1. React Query for Data Management
**Why:** Automatic caching, background refetching, and request deduplication out of the box. This significantly improves performance and UX.

#### 2. Custom Hooks Pattern
**Why:** Separates business logic from UI components, making the codebase more testable and maintainable.

#### 3. TypeScript Throughout
**Why:** Catches bugs at compile-time, improves IDE experience, and serves as living documentation.

#### 4. Memoization for Filters
**Why:** Prevents unnecessary recalculations when applying multiple filters simultaneously, ensuring instant updates.

#### 5. Axios with Interceptors
**Why:** Centralized authentication handling and automatic token refresh without polluting component code.

#### 6. Component-Based Architecture
**Why:** Highly reusable components that can be easily tested and modified independently.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Amadeus API credentials (free test environment)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd flight-search-engine
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_AMADEUS_API_KEY=your_api_key_here
   VITE_AMADEUS_API_SECRET=your_api_secret_here
   ```

   Get your credentials at: https://developers.amadeus.com/

4. **Start the development server**
   ```bash
   bun run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

### Building for Production

```bash
bun run build
bun run preview
```

---

## 🎯 Core Features Explained

### 1. Real-Time Flight Search
Users can search for flights by entering origin and destination airports, selecting dates, and specifying the number of passengers. The app integrates with the Amadeus API to fetch real flight data.

### 2. Airport Autocomplete
As users type in the airport fields, the app provides instant suggestions using the Amadeus Location API, making it easy to find the correct airport codes.

### 3. Live Price Chart
A Recharts-powered visualization shows the price distribution across all available flights. This helps users quickly identify the best deals and understand the price range.

### 4. Complex Filtering System
Multiple filters can be applied simultaneously:
- **Price Range:** Min and max price sliders
- **Number of Stops:** Non-stop, 1 stop, 2+ stops
- **Airlines:** Multi-select airline filter

All filters work together and update both the flight list and the price chart in real-time.

### 5. Pagination
Results are paginated to improve performance and reduce cognitive load when dealing with many flight options.

---

## 🎨 Design Approach

### User Experience Principles
1. **Immediate Feedback** - All interactions provide instant visual feedback
2. **Progressive Enhancement** - Core functionality works, with enhanced features for better devices
3. **Error Recovery** - Clear error messages with actionable solutions
4. **Mobile-First** - Designed for small screens first, then enhanced for larger displays

### Responsive Design
- **Mobile (320px - 768px):** Stacked layout, collapsible filters
- **Tablet (768px - 1024px):** Two-column layout
- **Desktop (1024px+):** Three-column layout with sidebar filters

---

## 📊 Performance Optimizations

1. **React Query Caching** - Repeated searches are instant
2. **Memoization** - useMemo/useCallback to prevent unnecessary re-renders
3. **Code Splitting** - Route-based code splitting with TanStack Router
4. **Debounced Search** - Airport autocomplete is debounced to reduce API calls
5. **Skeleton Loading** - Better perceived performance during data fetching

---

## 🔒 Security Considerations

1. **Environment Variables** - API credentials stored in environment variables
2. **Token Management** - Access tokens are stored in memory, not localStorage
3. **Automatic Token Refresh** - Tokens are refreshed before expiration
4. **Error Handling** - Sensitive information is never exposed in error messages

---

## 🧪 Testing Approach

While formal tests were not included due to time constraints, the codebase is structured for testability:
- Pure utility functions for easy unit testing
- Isolated custom hooks for integration testing
- Component props for easy mocking
- Clear separation of concerns

**Recommended Testing Stack:**
- Jest for unit tests
- React Testing Library for component tests
- MSW for API mocking
- Cypress for E2E tests

---

## 🚧 Future Enhancements

Given more time, here are features I would add:

### User Experience
- [ ] Saved searches and favorites
- [ ] Price alerts and notifications
- [ ] Multi-city search
- [ ] Calendar view for flexible dates
- [ ] Compare flights side-by-side

### Technical
- [ ] Service worker for offline support
- [ ] Virtual scrolling for large result sets
- [ ] Advanced caching strategies
- [ ] Analytics integration
- [ ] A/B testing framework

### Accessibility
- [ ] Full ARIA labels
- [ ] Keyboard shortcuts
- [ ] Screen reader optimization
- [ ] High contrast mode

---

## 📝 Code Quality

### Standards Followed
- ✅ TypeScript strict mode
- ✅ ESLint rules enforced
- ✅ Consistent code formatting
- ✅ Meaningful variable names
- ✅ Comprehensive comments
- ✅ Clean git history

### Best Practices
- ✅ Single Responsibility Principle
- ✅ DRY (Don't Repeat Yourself)
- ✅ KISS (Keep It Simple, Stupid)
- ✅ Composition over inheritance
- ✅ Error boundaries for fault tolerance

---

## 🐛 Known Issues & Limitations

### API Limitations
- Test API has rate limits (requests per second)
- Limited historical price data available
- Some routes may not be available in test environment

### Browser Compatibility
- Tested on Chrome 120+, Firefox 121+, Safari 17+
- Requires JavaScript enabled
- Best experience on modern browsers

---

## 📚 Resources & References

- [Amadeus API Documentation](https://developers.amadeus.com/self-service)
- [React Query Documentation](https://tanstack.com/query/latest)
- [TanStack Router Documentation](https://tanstack.com/router/latest)
- [Recharts Documentation](https://recharts.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

---

## 👨‍💻 Author

**Daniel [Your Last Name]**
- LinkedIn: [Your LinkedIn URL]
- Email: [Your Email]
- Portfolio: [Your Portfolio URL]

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Amadeus for providing the flight data API
- Ena Spotter team for the opportunity
- React and TypeScript communities for excellent documentation

---

## 💬 Questions?

If you have any questions about this project or would like to discuss my implementation decisions, please feel free to reach out!

---

**Built with ❤️ for the Ena Spotter Frontend Assessment**