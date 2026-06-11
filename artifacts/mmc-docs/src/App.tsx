import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import DocsPageGuide from "./pages/DocsPageGuide";

export type Page = "home" | "projects" | "contact" | "docs";

function App() {
  const [page, setPage] = useState<Page>("home");
  const [docsProject, setDocsProject] = useState<string>("mmc");

  const openDocs = (projectId: string) => {
    setDocsProject(projectId);
    setPage("docs");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117" }}>
      {page !== "docs" && (
        <Navbar currentPage={page} onNavigate={(p) => setPage(p as Page)} />
      )}
      {page === "home" && <HomePage onNavigate={(p) => setPage(p as Page)} />}
      {page === "projects" && <ProjectsPage onOpenDocs={openDocs} />}
      {page === "contact" && <ContactPage />}
      {page === "docs" && (
        <DocsPageGuide
          onBack={() => setPage("projects")}
        />
      )}
    </div>
  );
}

export default App;
