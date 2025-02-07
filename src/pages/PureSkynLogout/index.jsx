import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PureSkynLogout() {
  const nav = useNavigate();
  useEffect(() => {
    sessionStorage.clear();
    nav("/login");
  });
  return (
    <div className="p-5 bg-aliceBlue-1 flex justify-between items-center">
      Logging Out
    </div>
  );
}

export default PureSkynLogout;
