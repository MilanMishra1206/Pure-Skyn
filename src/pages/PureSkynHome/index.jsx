import { lazy, Suspense } from "react";
import Home from "../../components/Home";
import CustomLoader from "../../shared/CustomLoader";

const AdminDashboard = lazy(() => import("../../components/AdminDashboard"));

function PureSkynHome() {
  // const [isAdmin, setIsAdmin] = useState(false);
  const isAdmin = false;

  return (
    <div>
      {!isAdmin ? (
        <Suspense fallback={<CustomLoader />}>
          <Home />
        </Suspense>
      ) : (
        <Suspense fallback={<CustomLoader />}>
          <AdminDashboard />
        </Suspense>
      )}
    </div>
  );
}

export default PureSkynHome;
