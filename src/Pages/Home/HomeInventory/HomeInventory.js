import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useData from "../../../hooks/useData";
import Loading from "../../Login/Loading/Loading";
import Inventory from "../Inventory/Inventory";
import "./HomeInventory.css";

const HomeInventory = () => {
  const [inventories, setInventories] = useData();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    <Loading></Loading>;
  }
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
