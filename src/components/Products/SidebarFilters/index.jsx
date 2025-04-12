const SidebarFilters = ({ productTypes, selectedTypes, onChange }) => {
  return (
    <div className="w-full bg-white shadow-md p-4 rounded-xl">
      <h2 className="text-xl font-bold mb-4 font-poppins">Type of Product</h2>
      {productTypes.map(({ key, label }) => (
        <div key={key} className="mb-2">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedTypes.includes(key)}
              onChange={() => onChange(key)}
            />
            <span className="text-coal capitalize">
              {label.replace("-", " ")}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default SidebarFilters;
