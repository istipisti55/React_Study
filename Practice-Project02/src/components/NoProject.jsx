import image from "../assets/no-projects.png";
import CreateProjectButton from "./CreateProjectButton";

export default function NoProject() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={image}
        alt="image"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Create a project or get started with a new one
      </p>
      <CreateProjectButton onClick={console.log}>
        Create new project
      </CreateProjectButton>
    </div>
  );
}
