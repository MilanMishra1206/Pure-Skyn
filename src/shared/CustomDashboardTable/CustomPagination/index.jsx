import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";
import CustomDropdown from "../../CustomDropdown";

function CustomPagination({
  size,
  handleChangePage,
  pageNumber,
  totalDataLength,
  setPageNumber,
  rowsPerPage,
  setRowsPerPage,
  children,
  hidePagination,
}) {
  return (
    <div>
      <div className="flex flex-col">
        {totalDataLength > 0 && !hidePagination && (
          <div className="flex !whitespace-pre-wrap !items-center !text-kashmirBlue !text-xs !my-4 md:!mb-2 md:!mt-0">
            Showing Results:{"  "}
            <div className="!w-20">
              <CustomDropdown
                size="small"
                options={[
                  { value: "25", label: "25" },
                  { value: "50", label: "50" },
                  { value: "100", label: "100" },
                ]}
                value={rowsPerPage}
                placeholder="25"
                label=""
                handleChange={(event) => {
                  setRowsPerPage(event.target.value);
                  setPageNumber(1);
                }}
              />
              {"  "}
            </div>
          </div>
        )}
        {children}
        {totalDataLength > 0 && !hidePagination && (
          <div className="flex flex-col md:flex-row !justify-center !items-center md:!items-baseline md:!justify-between mt-4">
            <Pagination
              className="m-2"
              variant="outlined"
              page={pageNumber}
              onChange={(event, page) => {
                handleChangePage(page);
              }}
              shape="rounded"
              count={Math.ceil(totalDataLength / parseInt(rowsPerPage, 10))}
              size={size}
              siblingCount={0}
              renderItem={(item) => (
                <PaginationItem
                  classes={{
                    root: "!mx-1 !bg-aliceBlue-2 !h-8 !min-w-8 !text-kashmirBlue !border-none shadow-paginationOuter",
                    selected:
                      "!shadow-paginationInset !bg-aliceBlue-2 !text-kashmirBlue",
                  }}
                  components={{
                    previous: () => (
                      <div className="!h-8 !w-12 !bg-aliceBlue-2 !flex !justify-center !items-center">
                        <p className="!text-xs !text-kashmirBlue">Prev</p>
                      </div>
                    ),
                    next: () => (
                      <div className="!h-8 !w-12 !bg-aliceBlue-2 !flex !justify-center !items-center">
                        <p className="!text-xs !text-kashmirBlue">Next</p>
                      </div>
                    ),
                  }}
                  {...item}
                />
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomPagination;
