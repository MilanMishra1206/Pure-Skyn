import { lazy, Suspense, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Divider } from "@mui/material";
import DataTable from "./DataTable";
import CustomPagination from "../../../shared/CustomDashboardTable/CustomPagination";
import DataTableHeader from "../TableContent/DataTableHeader";
import { useQuery } from "react-query";
import { getAllUsers } from "../../../services/Admin";

const CustomLoader = lazy(() => import("../../../shared/CustomLoader"));

function Appointments({ isMobile }) {
  const [rowsPerPage, setRowsPerPage] = useState("25");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const [applicationData, setApplicationData] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    location: [],
  });

  const debouncedSearchTerm = useDebounce(filters.search, 500);
  const debounceLocation = useDebounce(filters.location, 500);

  const { isFetching, refetch } = useQuery(
    ["getAllUsers"],
    () => getAllUsers(),
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

  return (
    <div className="p-3 md:!p-5">
      <Suspense fallback={<div>Loading...</div>}>
        <CustomLoader open={isFetching} />
      </Suspense>
      <div className="mt-4">
        <DataTableHeader
          filters={filters}
          setFilters={setFilters}
          totalCount={totalCount}
          nameField="searchAppointments"
          placeholder={"Search Appointments"}
        />
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
              refetchData={refetch}
              setApplicationData={setApplicationData}
            />
          </CustomPagination>
        </Suspense>
      </div>
    </div>
  );
}

export default Appointments;
