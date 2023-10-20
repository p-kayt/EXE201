import React from "react";
import "./topup.scss";
import { Napas, QR, VietQR } from "../../assets/Images";
import CustomButton from "../../components/button/CustomButton";
import { useSelector } from "react-redux";
import { authSelector } from "../../store/selector";
import { useNavigate } from "react-router-dom";
type Props = {};

const TopUp = (props: Props) => {
  const auth = useSelector(authSelector);
  const navigate = useNavigate();
  const handleCont = () => {
    navigate("/profile/" + auth.user?.Id + "/wallet");
  };
  return (
    <>
      <div className="topup-container">
        <div className="topup-content">
          <div className="topup">
            <img src={QR} />
            <div className="img-group">
              <img src={Napas} alt="" />
              <img src={VietQR} alt="" />
            </div>
            <div className="topup-detail">
              <p>DO THI MINH HONG</p>
              <p>0081000228459</p>
              <p>Trụ sở CN Vũng Tàu</p>
            </div>
          </div>
          <div className="topup-info">
            <h2>Quét QR để chuyển khoản</h2>
            <p>1: Mở máy ảnh trên điện thoại</p>
            <p>2: Mở ứng dụng banking</p>
            <p>3: Quét mã QR</p>
            <p>4: Nội dung : ZUNITUTOR.COM_TOPUP_ + EMAIL ĐĂNG NHẬP</p>
            <p>5: Nhấn thanh toán</p>
            <div className="topup-btn">
              <CustomButton
                theme="light"
                btnText="Tiếp tục"
                onClick={() => handleCont()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopUp;
