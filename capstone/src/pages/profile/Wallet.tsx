import React from "react";
import CustomButton from "../../components/button/CustomButton";
import { useNavigate } from "react-router-dom";

type Props = {};

const Wallet = (props: Props) => {
  const navigate = useNavigate();
  const handleTopUp = () => {
    navigate("/top-up");
  };
  return (
    <>
      <div className="content-container">
        <h1>Quản lí ví</h1>
        <div className="wallet-card">
          <div className="left-card">
            <h2>Total balance</h2>
            <div className="wallet-value">
              <p>+2.000.000 đ</p>
              <p>Lần giao dịch gần nhất</p>
            </div>

            <div className="btn-group">
              <CustomButton
                theme="light"
                btnColor={"#F0631C"}
                btnText="Nạp tiền"
                color={"white"}
                onClick={() => handleTopUp()}
              />
              <CustomButton theme="light" btnText="Rút tiền" enabled={false} />
            </div>
          </div>
          <div className="right-card">
            <div className="wallet-value">
              <p>2.000.000 đ</p>
              <p>Số dư khả dụng</p>
            </div>
          </div>
        </div>
        <div className="transaction">
          <h2>Latest Transactions</h2>
        </div>
      </div>
    </>
  );
};

export default Wallet;
