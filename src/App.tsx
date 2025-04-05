import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { MobileMenuProvider } from "./contexts/MobileMenuContext";
import { useEffect, useState } from "react";

// Detect if we're on GitHub Pages
const isGitHubPages = typeof window !== 'undefined' && window.location.hostname === 'mouli3029.github.io';

// In development, use '/' as the base path
// In production on GitHub Pages, use '/r-portfolio/' as the base path
const BASE_URL = isGitHubPages ? '/r-portfolio/' : '/';

// A custom hook to handle the router base path
const useHashLocation = () => {
  // This ensures proper routing in GitHub Pages
  const [loc, setLoc] = useState(window.location.pathname.replace(BASE_URL, '/'));
  
  useEffect(() => {
    // Listen for location changes
    const handler = () => {
      // Convert the path by removing the base URL
      let path = window.location.pathname;
      if (path.startsWith(BASE_URL)) {
        path = path.replace(BASE_URL, '/');
      }
      setLoc(path);
    };
    
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);
  
  return [loc, (to: string) => {
    // Navigate while accounting for the base path
    const newPath = to === '/' ? BASE_URL : `${BASE_URL}${to.startsWith('/') ? to.slice(1) : to}`;
    history.pushState(null, "", newPath);
    setLoc(to);
  }] as const;
};

// Our custom Router component
function Router() {
  return (
    <WouterRouter base={BASE_URL}>
      <Switch>
        <Route path="/" component={Home} />
        {/* Add a catch-all route at the end */}
        <Route path="/:rest*" component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MobileMenuProvider>
        <Router />
        <Toaster />
      </MobileMenuProvider>
    </QueryClientProvider>
  );
}

export default App;
