import { useEffect, useState } from "react";

const useFilter = () => {
  const [tasksFilter, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
        setLoading(false);
      });
  }, []);
  return [tasksFilter, loading];
};

export default useFilter;
