import React from "react";
import CustomButton from "../../components/button/CustomButton";

type Props = {};

const Wallet = (props: Props) => {
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
              />
              <CustomButton theme="light" btnText="Rút tiền" />
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
