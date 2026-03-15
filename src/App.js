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
import PageTransition from './components/PageTransition';
import Sidebar from './components/Sidebar';

const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

const Layout = ({ children }) => (
  <>
    <Sidebar />
    <AnalyticsWrapper />
    <PageTransition>{children}</PageTransition>
  </>
);

const router = createBrowserRouter([
  { path: "/", element: <Layout><Pages /></Layout> },
  { path: "/members", element: <Layout><MembersChoicePage /></Layout> },
  { path: "/members/2025", element: <Layout><Members year="2025" /></Layout> },
  { path: "/members/2024", element: <Layout><Members year="2024" /></Layout> },
  { path: "/events", element: <Layout><EventChoicePage /></Layout> },
  { path: "/events/2025", element: <Layout><Events year="2025" /></Layout> },
  { path: "/events/2024", element: <Layout><Events year="2024" /></Layout> },
  { path: "/magic", element: <Layout><TerminalAnimation /></Layout> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
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

  return null;
}

export default App;
