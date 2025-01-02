import { Suspense } from "react";
import CustomTextField from "../../../../shared/CustomTextField";
import Resources from "../../../../config/Resources";

function DataTableHeader({ filters, setFilters, totalCount, nameField }) {
  return (
    <div>
      <div className="flex justify-between flex-col xl:!flex-row">
        <div className="flex flex-start justify-center">
          <div className="flex flex-row">
            <div className="flex items-center pr-2 text-base font-semibold text-cello">
              RESULTS FOUND
              <p className="flex items-center justify-center p-2 w-12 h-6 text-xs ml-2 font-medium text-white bg-denim rounded-3xl shadow-resultFoundShadow">
                {totalCount}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col mt-4 xl:!mt-0 xl:!flex-row">
          <Suspense fallback={<div />}>
            <CustomTextField
              textClassOverride="!text-kashmirBlue"
              placeholderClasses="placeholder:!opacity-30 !text-licorice !bg-transparent !font-poppins"
              className="md:w-[400px] w-full rounded-md !bg-transparent"
              placeholder="Search Appointment Details"
              value={filters.search}
              name={nameField}
              textFieldColorClass="!bg-transparent !border !border-linkWater"
              onChange={(e) => {
                setFilters((prev) => ({
                  ...prev,
                  search: e?.target?.value,
                }));
              }}
              icon={
                <img
                  src={Resources.images.Common.searchIcon}
                  className="w-5 h-5"
                  alt="test"
                />
              }
              inputClassName="!bg-transparent"
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default DataTableHeader;
