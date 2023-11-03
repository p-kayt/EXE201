import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, userSelector } from "../../store/selector";
import {
  Dashboard,
  Group,
  Transaction,
} from "../../assets/Icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton";
import { setAuthUser } from "../../store/features/auth.Slice";

type Props = {};

const AdminNav = (props: Props) => {
  const auth = useSelector(authSelector);
  const user = useSelector(userSelector).data;
  let navList = [...BASE_NAV];
  //
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [selected, setSelected] = React.useState(1);
  let { ID } = useParams();

  const endOfURL = location.pathname.split("/").pop();
  useEffect(() => {
    navList.map((items) => {
      if (items.path === "/" + endOfURL) {
        setSelected(items.id);
      }
    });
  }, [endOfURL]);
  //
  const handleNavigate = (item: any) => {
    setSelected(item.id);
    navigate("/admin" + item.path);
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setAuthUser(null));
    navigate("/");
  };
  return (
    <>
      <div className="profile-nav-container">
        <div className="nav-list">
          {navList.map((item, index) => (
            <div
              className={"nav-item" + (item.id == selected ? " selected" : "")}
              key={index}
              onClick={() => handleNavigate(item)}
            >
              <span></span>
              <img src={item.icon} alt="" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div className="logout-btn">
          <CustomButton
            style={{ fontWeight: 600 }}
            theme="stripe"
            btnText="Đăng xuất"
            btnColor={"#C01212"}
            color={"white"}
            onClick={() => handleLogout()}
          />
        </div>
      </div>
    </>
  );
};

const BASE_NAV = [
  {
    id: 1,
    icon: Dashboard,
    path: "",
    title: "Dashboard",
  },
  {
    id: 2,
    icon: Group,
    path: "/userManagement",
    title: "User Management",
  },
  {
    id: 3,
    icon: Transaction,
    path: "/transactionManagement",
    title: "Transaction Management",
  },
];

export default AdminNav;
