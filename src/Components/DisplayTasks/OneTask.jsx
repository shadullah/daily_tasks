import toast from "react-hot-toast";

const OneTask = ({ task }) => {
  const { title, text, priority, status, email, date } = task;

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/posts/${id}`, {
      method: "DELETE",
    }).then(() => {
      toast.success("Post Deleted");
      console.log("deleted");
    });
  };

  return (
    <div>
      <div className="bg-violet-400 p-12 rounded-lg">
        <div className="flex justify-between mb-2">
          <h1 className="text-4xl font-bold uppercase">{title}</h1>
          <h1 className="uppercase text-2xl">{status}</h1>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-red-600">Level: {priority}</p>
        </div>
        <h1 className="text-sm">Created On: {date}</h1>

        <h1 className="pl-3 my-4 border-l-2 border-violet-900">{text}</h1>

        <p>
          Assigned To: <span className="italic text-xl">{email}</span>
        </p>
        <div className="flex justify-between">
          <button
            onClick={() => handleDelete(task._id)}
            className="bg-violet-900 text-white font-bold px-3 py-2 my-6 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default OneTask;
