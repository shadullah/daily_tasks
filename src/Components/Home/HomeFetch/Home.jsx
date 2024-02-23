import { Toaster } from "react-hot-toast";
import HomoTodo from "../HomoTodo/HomoTodo";
import Displaytasks from "../../DisplayTasks/DisplayTasks";

const Home = () => {
  return (
    <div className="">
      <Toaster position="top-center" reverseOrder={false} />;
      <HomoTodo />
      <Displaytasks />
    </div>
  );
};

export default Home;
