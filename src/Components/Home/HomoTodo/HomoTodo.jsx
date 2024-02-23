import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const HomoTodo = () => {
  const formRef = useRef(null);
  const { user } = useContext(AuthContext);
  console.log(user);
  const email = JSON.parse(localStorage.getItem("email"));

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [priority, setPrio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const posts = { title, text, priority, email };

    fetch("http://localhost:5000/taskUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(posts),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Task Added");

        console.log("new books added", data);
      });
    formRef.current.reset();
  };

  return (
    <>
      <div>
        <div>
          <form className="mx-auto w-1/4" ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                className="appearance-none border-b-2  border-violet-500 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title"
                required
              />{" "}
            </div>
            <br />
            <div className="mb-2">
              <input
                className="appearance-none border-b-2 border-violet-500 w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline "
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="Write a task here"
                required
              />{" "}
            </div>
            <br />
            <div className="flex justify-between items-center">
              <div>
                <select
                  value={priority}
                  onChange={(e) => setPrio(e.target.value)}
                  required
                  className="border-b-2 border-violet-600"
                >
                  <option value="default" className="">
                    Select Importance
                  </option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div>
                <input
                  onClick={handleSubmit}
                  type="submit"
                  value="+"
                  className="bg-violet-600 text-3xl cursor-pointer text-white rounded-full h-12 w-12"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HomoTodo;
