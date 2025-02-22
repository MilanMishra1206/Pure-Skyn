import CustomButton2 from "../CustomButton2";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>
        <p className="mt-4 text-gray-500">We can't find that page.</p>
        <div className="flex justify-center">
          <CustomButton2
            buttonText="Go Back Home"
            buttonClass=""
            handleSubmit={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
