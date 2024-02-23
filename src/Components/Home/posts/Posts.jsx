import toast from "react-hot-toast";

const Posts = ({ post }) => {
  const { title, text, priority } = post;

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
      <div className="posts bg-violet-400">
        <h1>{title}</h1>
        <h1>{text}</h1>
        <h1>{priority}</h1>
        <button
          onClick={() => handleDelete(post._id)}
          className="bg-violet-900 text-white font-bold px-3 py-2 my-6"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Posts;
