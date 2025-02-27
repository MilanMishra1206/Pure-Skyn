function CustomHomeHeader({ heading, headerClass }) {
  return (
    <div className="text-center">
      <div>
        <div className="flex flex-col font-poppins">
          <div
            className={`text-3xl md:!text-4xl font-bold text-skyn mb-2 ${headerClass}`}
          >
            {heading}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomHomeHeader;
