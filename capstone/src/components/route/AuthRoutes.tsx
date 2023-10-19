import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../store/selector";
import { setAuthUser } from "../../store/features/auth.Slice";
import jwtDecode from "jwt-decode";

const AuthRoutes = () => {
  const dispatch = useDispatch();

  let auth = useSelector(authSelector);

  const localUserData: any = localStorage.getItem("user");
  const localUser: any = JSON.parse(localUserData);

  if (localUser?.accessToken) {
    if (!auth.user) {
      const newAuth: any = jwtDecode(localUser.accessToken);
      dispatch(setAuthUser(newAuth));
    } else return <Outlet />;
  } else {
    localStorage.clear();
    return <Navigate to="/login" />;
  }
};
export default AuthRoutes;
