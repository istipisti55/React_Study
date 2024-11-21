import Input from "./Input";

export default function ProjectDetails() {
  console.log(new Date(10000));
  return (
    <form>
      <p>
        Learning React
        <button>Delete</button>
      </p>
      <p style={{ color: "red" }}>due date</p>
      <p>project description</p>
      <p>Ide kell egy csík, CSS-el</p>
      <p>Tasks</p>
      <div className="flex items-center gap-4">
        <Input type="text" />
        <button>Add task</button>
      </div>

      <p>Task description</p>
    </form>
  );
}
