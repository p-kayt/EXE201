import { useLocation, Outlet, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../store/selector";
import { setAuthUser } from "../../store/features/auth.Slice";
import jwtDecode from "jwt-decode";

const AuthRoutes = () => {
  const dispatch = useDispatch();

  let auth = useSelector(authSelector);

  const localUserData: any = localStorage.getItem("user");
  const localUser: any = JSON.parse(localUserData);
  console.log(localUser);

  if (localUser?.accessToken) {
    if (!auth) {
      const auth: any = jwtDecode(localUser.accessToken);
      dispatch(setAuthUser(auth));
    } else return <Outlet />;
  } else {
    localStorage.clear();
    return <Navigate to="/login" />;
  }
};
export default AuthRoutes;
