import { Switch, Route } from "wouter";
import NotFound from "@/pages/not-found";
import Portfolio from "@/pages/portfolio";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return <Router />;
}

export default App;
