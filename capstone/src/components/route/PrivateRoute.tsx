import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../store/selector";
import { setAuthUser } from "../../store/features/auth.Slice";
import jwtDecode from "jwt-decode";

const PrivateRoutes = (props: any) => {
  const { page, permission } = props;
  const location = useLocation();
  let auth = useSelector(authSelector);
  let userPermission = auth.user.role;
  if (auth.user.role === "admin") {
    return <Outlet />;
  } else {
    return <Navigate to="/error" state={{ from: location }} replace />;
  }
};
export default PrivateRoutes;
