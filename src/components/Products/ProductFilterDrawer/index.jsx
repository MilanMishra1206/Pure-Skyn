import { Drawer } from "@mui/material";

const ProductFilterDrawer = ({
  open,
  toggleDrawer,
  productTypes,
  selectedTypes,
  onChange,
}) => {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={toggleDrawer(false)}
      PaperProps={{ className: "rounded-t-2xl p-4" }}
    >
      <h2 className="text-xl font-bold mb-4 font-poppins">Product Category</h2>
      {productTypes.map(({ key, label }) => (
        <div key={key} className="mb-2">
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedTypes.includes(key)}
              onChange={() => onChange(key)}
              className="!cursor-pointer"
            />
            <span className="text-coal capitalize">
              {label.replace("-", " ")}
            </span>
          </label>
        </div>
      ))}
    </Drawer>
  );
};

export default ProductFilterDrawer;
