import NoProject from "./components/NoProject.jsx";
import ProjectCreation from "./components/ProjectCreation.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import ProjectsSideBar from "./components/ProjectsSideBar.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar />

      <ProjectCreation />
    </main>
  );
}

export default App;
