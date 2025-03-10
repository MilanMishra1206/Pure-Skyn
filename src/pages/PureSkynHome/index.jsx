import { lazy, Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Home from "../../components/Home";
import CustomLoader from "../../shared/CustomLoader";

const AdminDashboard = lazy(() => import("../../components/AdminDashboard"));

function PureSkynHome() {
  const userProfile = useSelector((state) => state.userProfile.userProfile);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(userProfile?.isAdmin || false);
  }, [userProfile]);

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
