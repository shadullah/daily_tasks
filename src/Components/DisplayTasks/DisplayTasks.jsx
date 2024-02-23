import { useEffect } from "react";
import { useState } from "react";
import SingleTask from "../SingleTask/SingleTask";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useFilter from "../../hooks/useFilter";
import OneTask from "./OneTask";
import { useParams } from "react-router-dom";

const Displaytasks = () => {
  const stats = ["complete", "incomplete"];
  const { status } = useParams();
  const initialIndex = stats.indexOf(status);
  const [tasks, setTasks] = useState([]);
  const [tabIndex, setIndex] = useState(initialIndex);
  const [tasksFilter] = useFilter();
  console.log(tasksFilter);
  const complete = tasksFilter.filter((task) => task.status === "complete");
  const incomplete = tasksFilter.filter((task) => task.status === "incomplete");

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTasks(data);
      });
  }, []);

  return (
    <div>
      <h3 className="text-center text-3xl font-bold my-12">List of Tasks</h3>

      <h1>Filter By Category</h1>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setIndex(index)}>
        <TabList>
          <Tab>Complete</Tab>
          <Tab>Incomplete</Tab>
        </TabList>
        <TabPanel>
          {complete.map((task) => (
            <OneTask key={task._id} task={task}></OneTask>
          ))}
        </TabPanel>
        <TabPanel>
          {incomplete.map((task) => (
            <OneTask key={task._id} task={task}></OneTask>
          ))}
        </TabPanel>
      </Tabs>

      <div className="grid md:grid-cols-3 gap-10 mx-12 mb-12">
        {tasks?.map((task) => (
          <SingleTask key={task?._id} task={task}></SingleTask>
        ))}
      </div>
    </div>
  );
};

export default Displaytasks;
