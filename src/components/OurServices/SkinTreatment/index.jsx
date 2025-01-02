import { lazy, Suspense } from "react";
import CustomLoader from "../../../shared/CustomLoader";

const MediFacial = lazy(() => import("./MediFacial"));

function SkinTreatment() {
  return (
    <div>
      <Suspense fallback={<CustomLoader />}>
        <MediFacial />
      </Suspense>
    </div>
  );
}

export default SkinTreatment;
