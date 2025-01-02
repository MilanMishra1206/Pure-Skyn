/* eslint-disable import/no-unresolved */

import { Suspense } from "react";
import AutoComplete from "../../../../shared/CustomAutocomplete";
import { statusDropdownValues } from "../../../../helpers/Admin";
import Resources from "../../../../config/Resources";

function DataTableFilter({ filters, setFilters }) {
  return (
    <div className="mt-2 flex flex-col md:flex-row items-center justify-center mx-0 md:!mx-4">
      <div className="flex flex-row mb-3 md:!mb-0">
        <img src={Resources.images.Common.filterIcon} alt="filterIcon" />
        <p className="px-2 text-base font-medium text-kashmirBlue">Filters:</p>
      </div>
      <div className="flex md:flex-row w-full md:space-x-3 md:ml-3 flex-col">
        <div>
          <Suspense fallback={<div />}>
            <div className="md:mt-0 md:ml-3 w-full min-w-[250px]">
              <AutoComplete
                size="small"
                classes="!bg-white"
                chipClassName="h-5"
                options={statusDropdownValues}
                multiple
                trimTextLength={0}
                selectAllByDefault
                value={filters.status}
                showIconOutline={false}
                placeholder="Location"
                handleChange={(event) => {
                  setFilters((prev) => ({
                    ...prev,
                    status: event?.target?.value,
                  }));
                }}
                showOuterShadow
                placeHolderClasses="!text-kashmirBlue !text-sm !font-poppins"
              />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default DataTableFilter;
