import { lazy, Suspense } from "react";
import Home from "../../components/Home";
import CustomLoader from "../../shared/CustomLoader";

const AdminDashboard = lazy(() => import("../../components/AdminDashboard"));

function PureSkynHome() {
  // const [isAdmin, setIsAdmin] = useState(false);
  const isAdmin = true;

  return (
    <div>
      {!isAdmin ? (
        <Suspense fallback={<CustomLoader open={true} />}>
          <Home />
        </Suspense>
      ) : (
        <Suspense fallback={<CustomLoader open={true} />}>
          <AdminDashboard />
        </Suspense>
      )}
    </div>
  );
}

export default PureSkynHome;
