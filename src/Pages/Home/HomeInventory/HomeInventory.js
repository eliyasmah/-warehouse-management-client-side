import useData from "../../../hooks/useData";
import Inventory from "../Inventory/Inventory";
import "./HomeInventory.css";

const HomeInventory = () => {
  const [inventories, setInventories] = useData();
  return (
    <div>
      <h2 className="text-center mt-5 text-primary">Inventory</h2>
      <hr className="bar" />
      <div className="home-inventory-container">
        {inventories.slice(0, 6).map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
    </div>
  );
};

export default HomeInventory;
