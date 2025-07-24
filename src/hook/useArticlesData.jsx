import { useEffect, useState } from "react";

const useArticlesData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  return data;
};

export default useArticlesData;
