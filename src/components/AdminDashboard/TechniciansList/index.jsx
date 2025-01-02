import { Suspense, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import DataTableFilter from "./DataTableFilter";
import DataTableHeader from "./DataTableHeader";
import DataTable from "./DataTable";
import { useQuery } from "react-query";
import { Divider } from "@mui/material";
import CustomPagination from "../../../shared/CustomDashboardTable/CustomPagination";

function TechniciansList({ isTablet, isMobile }) {
  const [rowsPerPage, setRowsPerPage] = useState("25");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [techniciansData, setTechniciansData] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    location: [],
  });

  const debouncedSearchTerm = useDebounce(filters.search, 500);
  const debounceStatus = useDebounce(filters.location, 500);

  //   const { isFetching, refetch } = useQuery(
  //     [
  //       "fetchApplications",
  //       debouncedSearchTerm,
  //       debounceStatus,
  //       rowsPerPage,
  //       pageNumber,
  //     ],
  //     () =>
  //       fetchApplications({
  //         page: pageNumber,
  //         limit: Number(rowsPerPage),
  //         status: filters.status,
  //         searchTerm: filters.search,
  //       }),
  //     {
  //       refetchOnMount: true,
  //       refetchOnWindowFocus: false,
  //       refetchOnReconnect: false,
  //       retry: false,
  //       enabled: statusDops === "",
  //       onSuccess: (response) => {
  //         const transformedData =
  //           response?.data?.data?.leads?.map((lead) => ({
  //             email: lead?.basicDetails?.emailAddress,
  //             candidateName: lead?.basicDetails?.fullName,
  //             mobile: lead?.basicDetails?.primaryMobile,
  //             pan: lead?.additionalDetails?.panNumber,
  //             status: lead?.additionalDetails?.status,
  //             applicationId: lead?.applicationId,
  //             leadId: lead?.leadId,
  //             candidateNameAsPerPan: lead?.additionalDetails?.fullNameAsPerPan,
  //             nameVerifedAsPerPan: lead?.additionalDetails?.nameVerifiedAsPan
  //               ? "Yes"
  //               : "No",
  //             typeOfApplicant: lead?.additionalDetails?.typeOfApplicant,
  //             isTagicPosp: lead?.isTagicPosp,
  //           }));
  //         const totalCounts = response?.data?.data?.pagination?.totalCount;
  //         setTotalCount(totalCounts);
  //         setTechniciansData(transformedData);
  //       },
  //     }
  //   );

  useEffect(() => {
    if (totalCount > 0) {
      setPageNumber(1);
    }
  }, [totalCount]);

  return (
    <div className="p-3 md:!p-5">
      <div className="mb-3">
        <DataTableFilter filters={filters} setFilters={setFilters} />
      </div>
      <Divider />
      <div className="mt-4">
        <DataTableHeader
          filters={filters}
          setFilters={setFilters}
          totalCount={totalCount}
          nameField="searchTechnicians"
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
            <DataTable data={techniciansData} totalCount={totalCount} />
          </CustomPagination>
        </Suspense>
      </div>
    </div>
  );
}

export default TechniciansList;
