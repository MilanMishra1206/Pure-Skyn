import { MdDeleteForever } from "react-icons/md";

function HandleQuantity({
  item,
  handleItemDecrease,
  handleItemIncrease,
  handleItemRemove,
}) {
  return (
    <>
      <div className="flex h-8 items-stretch text-gray-600">
        <button
          className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-coal hover:!text-white disabled:!cursor-not-allowed disabled:!bg-gray-200 disabled:!text-black"
          disabled={item.quantity === 1}
          onClick={() => handleItemDecrease(item)}
        >
          -
        </button>
        <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
          {item.quantity}
        </div>
        <button
          className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-coal hover:!text-white disabled:!cursor-not-allowed disabled:!bg-gray-200 disabled:!text-black"
          onClick={() => handleItemIncrease(item)}
        >
          +
        </button>
      </div>
      <MdDeleteForever
        size="1.5rem"
        className="text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-bitterSweet cursor-pointer"
        onClick={() => handleItemRemove(item.id)}
      />
    </>
  );
}

export default HandleQuantity;
