import { Suspense, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import DataTable from "./DataTable";
import { useQuery } from "react-query";
import { Divider } from "@mui/material";
import CustomPagination from "../../../shared/CustomDashboardTable/CustomPagination";
import { locationDropdownValues } from "../../../helpers/Admin";
import DataTableFilter from "../TableContent/DataTableFilter";
import DataTableHeader from "../TableContent/DataTableHeader";

function Appointments({ isTablet, isMobile }) {
  const [rowsPerPage, setRowsPerPage] = useState("25");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const [ApplicationData, setApplicationData] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    location: [],
  });

  const debouncedSearchTerm = useDebounce(filters.search, 500);
  const debounceLocation = useDebounce(filters.location, 500);

  //   const { isFetching, refetch } = useQuery(
  //     [
  //       "fetchApplications",
  //       debouncedSearchTerm,
  //       debounceLocation,
  //       rowsPerPage,
  //       pageNumber,
  //     ],
  //     () =>
  //       fetchApplications({
  //         page: pageNumber,
  //         limit: Number(rowsPerPage),
  //         location: filters.location,
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
  //             location: lead?.additionalDetails?.location,
  //             userId: lead?.applicationId,
  //           }));
  //         const totalCounts = response?.data?.data?.pagination?.totalCount;
  //         setTotalCount(totalCounts);
  //         setApplicationData(transformedData);
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
        <DataTableFilter
          filters={filters}
          setFilters={setFilters}
          dropdownValues={locationDropdownValues}
        />
      </div>
      <Divider />
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
            <DataTable data={ApplicationData} totalCount={totalCount} />
          </CustomPagination>
        </Suspense>
      </div>
    </div>
  );
}

export default Appointments;

// function AdminDashboard() {
//   const isTablet = useMediaQuery("(max-width: 1023px)");
//   const isMobile = useMediaQuery("(max-width: 767px)");

//   const [data, setData] = useState([]); // Full data from API
//   const [filteredData, setFilteredData] = useState([]); // Filtered data to display
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage] = useState(10);

//   // Filters and Search
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filters, setFilters] = useState({
//     category: "",
//     status: "",
//   });

//   // Fetch data from API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts"
//         ); // Replace with your API URL
//         const json = await response.json();
//         setData(json);
//         setFilteredData(json);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Handle Search
//   const handleSearch = () => {
//     const filtered = data.filter((item) =>
//       item.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(filtered);
//     setCurrentPage(1); // Reset to first page
//   };

//   // Handle Filter Submit
//   const handleFilterSubmit = () => {
//     let filtered = [...data];

//     if (filters.category) {
//       filtered = filtered.filter((item) => item.category === filters.category); // Adjust key
//     }

//     if (filters.status) {
//       filtered = filtered.filter((item) => item.status === filters.status); // Adjust key
//     }

//     setFilteredData(filtered);
//     setCurrentPage(1); // Reset to first page
//   };

//   // Pagination logic
//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };
//   return (
//     <MotionWrapper>
//       <div className={`mt-3 ${isTablet ? "py-3" : "py-4 mt-4"}`}>
//         <div className={`mt-5 ${isMobile ? "px-4" : "px-5"}`}>
//           <CustomHeader heading={"Admin Dashboard"} />
//         </div>
//         <div className="p-6">
//           {/* Search and Filters */}
//           <div className="flex flex-wrap gap-4 mb-6">
//             {/* Search */}
//             <input
//               type="text"
//               placeholder="Search by title"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="border border-gray-300 rounded px-4 py-2"
//             />
//             <button
//               onClick={handleSearch}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Search
//             </button>

//             {/* Filters */}
//             <select
//               value={filters.category}
//               onChange={(e) =>
//                 setFilters({ ...filters, category: e.target.value })
//               }
//               className="border border-gray-300 rounded px-4 py-2"
//             >
//               <option value="">All Categories</option>
//               <option value="Category 1">Category 1</option>
//               <option value="Category 2">Category 2</option>
//             </select>

//             <select
//               value={filters.status}
//               onChange={(e) =>
//                 setFilters({ ...filters, status: e.target.value })
//               }
//               className="border border-gray-300 rounded px-4 py-2"
//             >
//               <option value="">All Status</option>
//               <option value="Active">Active</option>
//               <option value="Inactive">Inactive</option>
//             </select>

//             <button
//               onClick={handleFilterSubmit}
//               className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//             >
//               Submit Filters
//             </button>
//           </div>

//           {/* Table */}
//           <div className="overflow-x-auto">
//             <table className="min-w-full border border-gray-300 text-left">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="border px-4 py-2">ID</th>
//                   <th className="border px-4 py-2">Title</th>
//                   <th className="border px-4 py-2">Body</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentRows.map((item) => (
//                   <tr key={item.id} className="hover:bg-gray-100">
//                     <td className="border px-4 py-2">{item.id}</td>
//                     <td className="border px-4 py-2">{item.title}</td>
//                     <td className="border px-4 py-2">{item.body}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           <div className="flex justify-between items-center mt-4">
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
//             >
//               Previous
//             </button>
//             <div>
//               Page {currentPage} of {totalPages}
//             </div>
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </MotionWrapper>
//   );
// }
