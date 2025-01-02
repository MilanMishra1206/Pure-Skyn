const DropdownContent = ({ items, handleKeyPress }) => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      {items.map(({ id, label, action, icon }) => (
        <div
          key={id}
          className="flex items-center pt-2 cursor-pointer hover:bg-slate-300 p-2 rounded !font-medium"
          role="menuitem"
          tabIndex={0}
          onClick={action}
          onKeyDown={(e) => handleKeyPress(e, action)}
        >
          {icon && <img src={icon} alt={label} className="mr-2" />}
          <span className="text-base text-kashmirBlue">{label}</span>
        </div>
      ))}
    </div>
  );
};

export const handleKeyPress = (e, action) => {
  if (e.key === "Enter" || e.key === " ") {
    action();
  }
};

export default DropdownContent;
