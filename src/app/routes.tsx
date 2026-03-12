import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { MonitoringDomains } from "./components/MonitoringDomains";
import { KnowledgeFeed } from "./components/KnowledgeFeed";
import { Events } from "./components/Events";
import { Suppliers } from "./components/Suppliers";
import { Components } from "./components/Components";
import { ImpactAnalysis } from "./components/ImpactAnalysis";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "domains", Component: MonitoringDomains },
      { path: "knowledge", Component: KnowledgeFeed },
      { path: "events", Component: Events },
      { path: "suppliers", Component: Suppliers },
      { path: "components", Component: Components },
      { path: "impact-analysis", Component: ImpactAnalysis },
    ],
  },
]);
