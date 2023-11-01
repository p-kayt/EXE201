import React, { useEffect } from "react";
import { BlankAva } from "../../assets/Images";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, userSelector } from "../../store/selector";
import {
  BookOpen,
  BookStack,
  Chart,
  HeartCircle,
  ProfileCircle,
  WalletMoney,
} from "../../assets/Icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton";
import { setAuthUser } from "../../store/features/auth.Slice";
import { items } from "../courses/data";

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
    navigate("/profile/" + ID + item.path);
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setAuthUser(null));
    navigate("/");
  };
  return (
    <>
      <div className="profile-nav-container">
        <div className="profile-info">
          <img src={user?.image ? user?.image : BlankAva} />
          <div>
            <p>{user?.fullName}</p>
            <p>{auth?.user?.role}</p>
          </div>
        </div>
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
    icon: ProfileCircle,
    path: "",
    title: "Dashboard",
  },
  {
    id: 2,
    icon: WalletMoney,
    path: "/wallet",
    title: "User Management",
  },
  {
    id: 3,
    icon: WalletMoney,
    path: "/transaction",
    title: "Transaction Management",
  },
  {
    id: 2,
    icon: WalletMoney,
    path: "/wallet",
    title: "User Management",
  },
];

export default AdminNav;
