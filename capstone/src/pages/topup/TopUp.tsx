import React from "react";
import "./topup.scss";
import { Napas, QR, VietQR } from "../../assets/Images";
import CustomButton from "../../components/button/CustomButton";
import { useSelector } from "react-redux";
import { authSelector } from "../../store/selector";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "../../api/api";
import { toast } from "react-toastify";
import { FormProvider, useForm } from "react-hook-form";
import { Dialog } from "@headlessui/react";
import FormError from "../../components/form/FormError";

interface IDeposit {
  amount: number;
}

const defaultValues: IDeposit = {
  amount: 0,
};

type Props = {};

const TopUp = (props: Props) => {
  // const formMethods = useForm<IDeposit>({
  //   defaultValues,
  // });
  // const [isDeposit, setIsDeposit] = React.useState(false);

  const auth = useSelector(authSelector);
  const navigate = useNavigate();
  const handleCont = () => {
    navigate("/profile/" + auth.user?.Id + "/wallet");
  };

  // const walletQuery = useQuery({
  //   queryKey: ["wallet-user", auth?.user?.Id],
  //   queryFn: async () => {
  //     const res = await instance.get(
  //       "/api/Wallet/GetWalletByUserId?id=" + auth?.user?.Id
  //     );

  //     return res.data.result;
  //   },

  //   enabled: auth?.user?.Id != null,
  // });

  // const transactionMutation = useMutation({
  //   mutationFn: async (data: any) => {
  //     let dto = {
  //       transactionType: 0,
  //       createAt: "2023-11-03T15:18:20.431Z",
  //       transactionDescription: "string",
  //       walletId: walletQuery.data.id,
  //       amountTransaction: Number(data.amount),
  //     };

  //     const res = await instance.post("/api/Transaction/Create", dto);

  //     return {
  //       ...res,
  //       amount: dto.amountTransaction,
  //       transactionType: dto.transactionType,
  //     };
  //   },
  //   onSuccess: (data: any) => {
  //     if (data.data?.status === "BadRequest") {
  //       toast.error(data.data?.message);
  //     } else {
  //       if (data.data.result.transactionType === 0) {
  //         toast.success("Deposit successfully");
  //       } else {
  //         toast.success("Withdraw successfully");
  //       }
  //     }
  //   },
  //   onError: (data: any) => {
  //     toast.error("Confirm failed!");
  //   },
  // });

  return (
    <>
      {/* <Dialog
        open={isDeposit}
        onClose={() => setIsDeposit(false)}
        className="relative z-50 content-container "
      >
        <div
          className="fixed inset-0 "
          aria-hidden="true"
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        />

        <div className="fixed inset-0 flex items-center justify-center w-screen p-4">
       
          <Dialog.Panel
            className="max-w-sm mx-auto bg-white rounded fade-in"
            style={{
              padding: "24px 48px",
            }}
          >
            <Dialog.Title
              className="text-lg font-bold text-center"
              style={{
                color: "#F0631C",
                fontSize: "30px",
              }}
            >
              Deposit To Wallet
            </Dialog.Title>
            <FormProvider {...formMethods}>
              <form
                className="input"
                onSubmit={formMethods.handleSubmit((data) =>
                  transactionMutation.mutate(data)
                )}
              >
                <div className="info-item">
                  <label htmlFor="fullname">Số Tiền</label>
                  <div className="input">
                    <input
                      type="number"
                      className="w-full px-4 py-2 border border-gray-300 rounded"
                      placeholder="Amount"
                      required
                      {...formMethods.register("amount")}
                    />
                  </div>
                </div>

                <FormError name="amount" />
                <button
                  style={{
                    marginTop: "20px",
                    border: "none",
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <CustomButton
                    theme="light"
                    btnColor="#F0631C"
                    btnText="Nạp Ngay"
                    color="#fff"
                    onClick={() => setIsDeposit(true)}
                  />
                </button>
              </form>
            </FormProvider>
          </Dialog.Panel>
        </div>
      </Dialog> */}
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
            <div
              className="topup-btn"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "150px",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              {/* <CustomButton
                theme="light"
                btnColor="#F0631C"
                btnText="Nạp Ngay"
                color="#fff"
                onClick={() => setIsDeposit(true)}
              /> */}
              <CustomButton
                theme="light"
                btnText="Quay Lại"
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
