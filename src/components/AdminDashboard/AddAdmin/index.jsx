import { lazy, Suspense, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import DataTable from "./DataTable";
import { useMutation, useQuery } from "react-query";
import { Divider } from "@mui/material";
import CustomPagination from "../../../shared/CustomDashboardTable/CustomPagination";
import { locationDropdownValues } from "../../../helpers/Admin";
import DataTableFilter from "../TableContent/DataTableFilter";
import DataTableHeader from "../TableContent/DataTableHeader";
import AdminModal from "./AdminModal";
import { useFormik } from "formik";
import {
  getSignUpValidation,
  signUpInitialValue,
} from "../../../helpers/Login";
import { useAppSnackbar } from "../../../config/Context/SnackbarContext";
import { registerAdmin } from "../../../services/LoginAndRegister";

const CustomLoader = lazy(() => import("../../../shared/CustomLoader"));

function AddAdmin({ isTablet, isMobile }) {
  const showSnackbar = useAppSnackbar();
  const [rowsPerPage, setRowsPerPage] = useState("25");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [techniciansData, setTechniciansData] = useState([]);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [editingAddressIndex, setEditingAddressIndex] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    location: [],
  });

  const debouncedSearchTerm = useDebounce(filters.search, 500);
  const debounceStatus = useDebounce(filters.location, 500);

  const { mutate: signupAdmin, isLoading } = useMutation(registerAdmin, {
    onSuccess(res) {
      setShowAdminModal(false);
      showSnackbar(res.message, "success");
    },
    onError(err) {
      showSnackbar(err.message, "error");
    },
  });

  const adminFormik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    initialValues: signUpInitialValue,
    validationSchema: getSignUpValidation,
    onSubmit: (value) => {
      signupAdmin({
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        password: value.password,
        email: value.email,
      });
    },
  });

  const handleSubmit = () => {
    if (!adminFormik.isValid) {
      console.log(adminFormik.errors);
      showSnackbar("Please enter all the required fields!", "error");
      return;
    } else {
      adminFormik.handleSubmit();
    }
  };

  const handleCancel = () => {
    setShowAdminModal(false);
    setEditingAddressIndex(null);
    adminFormik.resetForm();
  };

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

  const addAdmin = () => {
    adminFormik.resetForm();
    setShowAdminModal(true);
  };

  return (
    <div className="p-3 md:!p-5">
      <Suspense>
        <CustomLoader open={isLoading} />
      </Suspense>
      <div className="flex flex-col justify-center md:!flex-row md:justify-between gap-5 mb-3">
        <DataTableFilter
          filters={filters}
          setFilters={setFilters}
          dropdownValues={locationDropdownValues}
        />
        <button
          className="w-full md:w-1/4 bg-skyn text-white py-2 px-4 rounded-md hover:bg-skyn-dark focus:outline-none focus:ring-2 focus:ring-skyn transition-all shadow-[3px_3px_0px_#313440] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          onClick={addAdmin}
        >
          Add Admin
        </button>
      </div>
      <Divider />
      <div className="mt-4">
        <DataTableHeader
          filters={filters}
          setFilters={setFilters}
          totalCount={totalCount}
          nameField="searchAdmin"
          placeholder={"Search Admin"}
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
      {showAdminModal && (
        <AdminModal
          adminFormik={adminFormik}
          handleSave={handleSubmit}
          handleCancel={handleCancel}
          editingAdminIndex={editingAddressIndex}
        />
      )}
    </div>
  );
}

export default AddAdmin;
