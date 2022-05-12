import { useEffect, useState } from "react";

const useData = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("https://mighty-tor-18710.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return [inventories, setInventories];
};

export default useData;
