import React, { useEffect } from "react";
import { BlankAva } from "../../assets/Images";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, userSelector } from "../../store/selector";
import {
  BookOpen,
  BookStack,
  Chart,
  Group,
  HeartCircle,
  ProfileCircle,
  WalletMoney,
} from "../../assets/Icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton";
import { setAuthUser } from "../../store/features/auth.Slice";
import { items } from "../courses/data";
import { useUserContext } from "../../context/userContext";

type Props = {};

const ProfileNav = (props: Props) => {
  const auth = useSelector(authSelector);
  const user = useSelector(userSelector).data;
  const userContext = useUserContext();
  let navList = [...BASE_NAV];
  //
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [selected, setSelected] = React.useState(1);
  let { ID } = useParams();

  //
  if (auth.user.role === "Student") {
    navList = [...BASE_NAV, ...USER_NAV];
  }

  if (userContext.isAdmin) {
    navList = [...ADMIN_NAV, ...BASE_NAV];
  }

  const endOfURL = location.pathname.split("/").pop();
  useEffect(() => {
    console.log(endOfURL);
    navList.map((items) => {
      if (items.path.split("/").pop() === endOfURL) {
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

const ADMIN_NAV = [
  {
    id: 3,
    icon: Chart,
    path: "/admin/statistics",
    title: "Thống kê",
  },
  {
    id: 4,
    icon: Group,
    path: "/admin/users",
    title: "Quản lý người dùng",
  },
  {
    id: 5,
    icon: BookStack,
    path: "/admin/orders",
    title: "Quản lý giao dịch",
  },
  {
    id: 6,
    icon: WalletMoney,
    path: "/admin/transactionManagement",
    title: "Quản lý giao dịch qua ví",
  },
  // {
  //   id: 4,
  //   icon: BookOpen,
  //   path: "/created-courses",
  //   title: "Khóa học đã tạo",
  // },
];

const BASE_NAV = [
  {
    id: 1,
    icon: ProfileCircle,
    path: "",
    title: "Thông tin cá nhân",
  },
  {
    id: 2,
    icon: WalletMoney,
    path: "/wallet",
    title: "Ví của tôi",
  },
];
const USER_NAV = [
  {
    id: 3,
    icon: BookStack,
    path: "/my-courses",
    title: "Khóa học đã mua",
  },

  // {
  //   id: 5,
  //   icon: HeartCircle,
  //   path: "/favorite-courses",
  //   title: "Khóa học yêu thích",
  // },
];
const TUTOR_NAV = [
  {
    id: 3,
    icon: Chart,
    path: "/statistics",
    title: "Thống kê",
  },
  {
    id: 4,
    icon: WalletMoney,
    path: "/wallet",
    title: "Quản lí ví",
  },
  {
    id: 5,
    icon: BookOpen,
    path: "/created-courses",
    title: "Khóa học đã tạo",
  },
];
export default ProfileNav;
