import React, { useEffect } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigationType,
  useLocation
} from "react-router-dom";
import ReactGA from 'react-ga';
import Pages from '../src/Pages';
import Members from './components/Members/Members';
import MembersChoicePage from './components/Members/MembersChoicePage';
import Events from './components/Event/Events';
import EventChoicePage from './components/Event/EventChoicePage';
import TerminalAnimation from './TerminalAnimation';
const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;

ReactGA.initialize(TRACKING_ID);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages />,
  },
  {
    path: "/members",
    element: <MembersChoicePage />,
  },
  {
    path: "/members/2025",
    element: <Members year="2025" />,
  },
  {
    path: "/members/2024",
    element: <Members year="2024" />,
  },
  {
    path: "/events",
    element: <EventChoicePage />,
  },
  {
    path: "/events/2025",
    element: <Events year="2025" />,
  },
  {
    path: "/events/2024",
    element: <Events year="2024" />,
  },
  {
    path: "/magic",
    element: <TerminalAnimation />
  },



]);

function App() {
  return (
    <div className="App">
      {/* RouterProvider wraps AnalyticsWrapper */}
      <RouterProvider router={router}>
        <AnalyticsWrapper />
      </RouterProvider>
    </div>
  );
}

// Component to track page views
function AnalyticsWrapper() {
  const navigationType = useNavigationType();
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location, navigationType]);

  return null; // No need to render anything
}

export default App;
