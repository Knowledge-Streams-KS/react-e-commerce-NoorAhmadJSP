import { Navigate } from "react-router-dom";
function PrivateRoutes(props) {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn ? (
        <>{props.children}</>
      ) : (
        <>
          <Navigate to="/login" />
        </>
      )}
    </>
  );
}

export default PrivateRoutes;
