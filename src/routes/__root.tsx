import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Navbar } from '../components/landing/Navbar';

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <Navbar />
      <main className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4">
        <Outlet />
        <ReactQueryDevtools initialIsOpen={false} />
      </main>
    </div>
  ),
});