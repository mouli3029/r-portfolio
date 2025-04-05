import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { MobileMenuProvider } from "./contexts/MobileMenuContext";

// Get base URL from environment variable or default to '/'
// In development, we always use '/'
const BASE_URL = import.meta.env.DEV ? '/' : (import.meta.env.VITE_BASE_URL || '/');

// Our custom Router component
function Router() {
  // Simple router with base path for GitHub Pages
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
