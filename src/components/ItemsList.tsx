import { Items, ReactSetState } from "../types/utils";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";

type ItemList = {
  items: Items[];
  setItems: ReactSetState<Items[]>;
};

const ItemsList = ({items, setItems}:ItemList) => {
  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((data) => data.id !== id));
  };
  return items.map((data) => (
    <div
      key={data.id}
      className="flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2"
    >
      <p>{data.title}</p>
      <button></button>
      <Button
        onClick={() => {
          handleDelete(data.id);
        }}
      >
        <FaTimes className="rounded-md mr-2" style={{ color: "red" }} />
      </Button>
    </div>
  ));
};

export default ItemsList;
