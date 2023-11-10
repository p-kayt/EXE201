import React from "react";
import CustomButton from "../../components/button/CustomButton";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { authSelector } from "../../store/selector";
import { useSelector } from "react-redux";
import { instance } from "../../api/api";
import { formatCurrency } from "../../utils/string.helper";

type Props = {};

const Wallet = (props: Props) => {
  const navigate = useNavigate();
  const handleTopUp = () => {
    navigate("/top-up");
  };
  const auth = useSelector(authSelector);

  const walletQuery = useQuery({
    queryKey: ["wallet", auth?.user?.Id],
    queryFn: async () => {
      const res = await instance.get(
        "https://namanh-exe.monoinfinity.net/api/Wallet/GetWalletByUserId?id=" +
          auth?.user?.Id
      );

      return res.data.result.walletAmount;
    },
    initialData: 0,
    enabled: auth?.user?.Id != null,
  });

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
              <p>{formatCurrency(walletQuery.data)}</p>
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
