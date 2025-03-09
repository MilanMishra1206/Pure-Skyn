import { lazy, Suspense } from "react";
import Resources from "../../../../config/Resources";

const CustomDropdown = lazy(() => import("../../../../shared/CustomDropdown"));

function DataTableFilter({
  filters,
  setFilters,
  dropdownValues,
  placeholder,
  handleFilterChange,
}) {
  const handleChange = (selectedFilter) => {
    setFilters(selectedFilter);
    handleFilterChange(selectedFilter);
  };

  return (
    <div className="mt-2 flex flex-col md:flex-row items-center justify-center mx-0 md:!mx-4">
      <div className="flex flex-row mb-3 md:!mb-0">
        <img src={Resources.images.Common.filterIcon} alt="filterIcon" />
        <p className="px-2 text-base font-medium text-kashmirBlue">Filters:</p>
      </div>
      <div className="flex flex-col md:!flex-row w-full md:space-x-3 md:ml-3 gap-4">
        <div>
          <Suspense fallback={<div />}>
            <div className="md:mt-0 md:ml-3 w-full min-w-[250px]">
              <CustomDropdown
                textClassOverride="!text-kashmirBlue"
                classes="!rounded-md !mb-4"
                requiredStar
                placeholder={placeholder}
                name="status"
                showIconOutline
                options={dropdownValues}
                value={filters}
                handleChange={(e) => handleChange(e.target.value)}
              />
            </div>
          </Suspense>
        </div>
        <button
          className="w-full md:!w-1/5 bg-slate-500 text-white hover:opacity-80 font-bold px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all"
          onClick={() => handleChange("")}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default DataTableFilter;
