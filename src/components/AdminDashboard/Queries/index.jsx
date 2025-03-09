import { lazy, Suspense, useEffect, useState } from "react";
import { Divider } from "@mui/material";
import DataTable from "./DataTable";
import CustomPagination from "../../../shared/CustomDashboardTable/CustomPagination";
import { queryStatusValues } from "../../../helpers/Admin";
import { useMutation, useQuery } from "react-query";
import { getAllQuery, getQueryWithFilter } from "../../../services/Query";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import DataTableFilter from "./DataTableFilter";

const CustomLoader = lazy(() => import("../../../shared/CustomLoader"));

function Queries({ isMobile }) {
  const showSnackbar = useAppSnackbar();
  const [rowsPerPage, setRowsPerPage] = useState("25");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const [applicationData, setApplicationData] = useState([]);
  const [filters, setFilters] = useState("");

  const { isFetching, refetch } = useQuery(
    ["getAllQuery", rowsPerPage, pageNumber],
    () => getAllQuery(),
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      onSuccess: (response) => {
        setTotalCount(response?.data?.length);
        setApplicationData(response?.data);
      },
    }
  );

  useEffect(() => {
    if (totalCount > 0) {
      setPageNumber(1);
    }
  }, [totalCount]);

  const { mutate: handleStatusChange, isLoading: isFilteringStatus } =
    useMutation(getQueryWithFilter, {
      onSuccess: (res) => {
        if (res?.status === "SUCCESS") {
          setApplicationData(res?.data);
          setTotalCount(res?.data?.length);
          showSnackbar(res?.message, "success");
        } else {
          showSnackbar(res?.message, "error");
        }
      },
      onError: (err) => {
        showSnackbar(err?.message, "error");
      },
    });

  const handleFilterChange = (selectedFilter) => {
    if (selectedFilter) {
      handleStatusChange({ status: selectedFilter });
    } else {
      refetch();
    }
  };

  return (
    <div className="p-3 md:!p-5">
      <Suspense fallback={<div>Loading...</div>}>
        <CustomLoader open={isFetching || isFilteringStatus} />
      </Suspense>
      <div className="mb-3">
        <DataTableFilter
          filters={filters}
          setFilters={setFilters}
          dropdownValues={queryStatusValues}
          handleFilterChange={handleFilterChange}
          placeholder="Query Status"
        />
      </div>
      <Divider />
      <div className="flex justify-between flex-col xl:!flex-row mt-4">
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
      </div>
      <div className="mt-3">
        <Suspense fallback={<div />}>
          <CustomPagination
            size={isMobile ? "small" : "large"}
            handleChangePage={(value) => setPageNumber(value)}
            totalDataLength={totalCount}
            pageNumber={pageNumber}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            setPageNumber={setPageNumber}
          >
            <DataTable
              data={applicationData}
              totalCount={totalCount}
              refetch={refetch}
            />
          </CustomPagination>
        </Suspense>
      </div>
    </div>
  );
}

export default Queries;
