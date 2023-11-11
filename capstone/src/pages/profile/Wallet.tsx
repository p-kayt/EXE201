import React from "react";
import CustomButton from "../../components/button/CustomButton";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { authSelector } from "../../store/selector";
import { useSelector } from "react-redux";
import { instance } from "../../api/api";
import { formatCurrency } from "../../utils/string.helper";
import { toast } from "react-toastify";

import { FormProvider, useForm } from "react-hook-form";
import { Dialog } from "@headlessui/react";
import FormError from "../../components/form/FormError";
import { joiResolver } from "@hookform/resolvers/joi";
import { FaMoneyBillAlt } from "react-icons/fa";
import Joi from "joi";

enum Bank {
  VPBank = "VPBank",
  Vietcombank = "Vietcombank",
  VietinBank = "VietinBank",
  BIDV = "BIDV",
  ShinHanBank = "ShinHanBank",
  TechcomBank = "TechcomBank",
  TPBank = "TPBank",
}

interface IUpdateWallet {
  stk: string;
  bank: string;
}

interface IWithdraw {
  amount: number;
}

const defaultValuesUpdate: IUpdateWallet = {
  bank: Bank.VPBank,
  stk: "",
};

const defaultValues: IWithdraw = {
  amount: 0,
};

type Props = {};

const Wallet = (props: Props) => {
  const navigate = useNavigate();
  const handleTopUp = () => {
    navigate("/top-up");
  };
  const auth = useSelector(authSelector);
  const [isDeposit, setIsDeposit] = React.useState(false);
  const [isUpdate, setIsUpdate] = React.useState(false);
  const formMethods = useForm<IWithdraw>({
    defaultValues,
    resolver: joiResolver(
      Joi.object<IWithdraw>({
        amount: Joi.number().min(10000).required(),
      })
    ),
  });

  const formMethodsUpdate = useForm<IUpdateWallet>({
    defaultValues: defaultValuesUpdate,
    resolver: joiResolver(
      Joi.object<IUpdateWallet>({
        bank: Joi.string().required(),
        stk: Joi.string().required(),
      })
    ),
  });

  const walletQuery = useQuery({
    queryKey: ["wallet-data", auth?.user?.Id],
    queryFn: async () => {
      const res = await instance.get(
        "/api/Wallet/GetWalletByUserId?id=" + auth?.user?.Id
      );

      formMethodsUpdate.setValue(
        "stk",
        res.data.result.bankNumber ? res.data.result.bankNumber : ""
      );
      formMethodsUpdate.setValue(
        "bank",
        res.data.result.bank ? res.data.result.bank : Bank.VPBank
      );
      return res.data.result;
    },
    initialData: {},
    enabled: auth?.user?.Id != null,
  });

  const transactionQuery = useQuery({
    queryKey: ["transaction", auth?.user?.Id],
    queryFn: async () => {
      const res = await instance.get(
        "/api/Transaction/GetByUserId?id=" + auth?.user?.Id
      );

      return res.data.result.items;
    },
    initialData: [],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: auth?.user?.Id != null,
  });

  const transactionMutation = useMutation({
    mutationFn: async (data: any) => {
      let dto = {
        transactionType: 1,
        createAt: new Date().toISOString(),
        transactionDescription: `Rút tiền vào ví ${data.amount}`,
        walletId: walletQuery.data.id,
        amountTransaction: Number(data.amount),
      };

      const res = await instance.post("/api/Transaction/Create", dto);

      return {
        ...res,
        amount: dto.amountTransaction,
        transactionType: dto.transactionType,
      };
    },
    onSuccess: (data: any) => {
      if (data.data?.status === "BadRequest") {
        toast.error(data.data?.message);
      } else {
        toast.success("Withdraw successfully");
        setIsDeposit(false);
        transactionQuery.refetch();
      }
    },
    onError: (data: any) => {
      toast.error("Confirm failed!");
    },
  });

  const updateWalletMutation = useMutation({
    mutationFn: async (data: any) => {
      let dto = {
        bank: data.bank,
        stk: data.stk,
        id: walletQuery.data.id,
      };

      const res = await instance.put(
        "/api/Wallet/Update?id=" +
          dto.id +
          "&stk=" +
          dto.stk +
          "&bank=" +
          dto.bank
      );

      return res;
    },
    onSuccess: (data: any) => {
      if (data.data?.status === "BadRequest") {
        toast.error(data.data?.message);
      } else {
        toast.success("Update successfully");
        setIsUpdate(false);
        transactionQuery.refetch();
        walletQuery.refetch();
      }
    },
    onError: (data: any) => {
      toast.error("Confirm failed!");
    },
  });

  return (
    <>
      <Dialog
        open={isUpdate}
        onClose={() => setIsUpdate(false)}
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
              Cập Nhật Thông Tin Thanh Toán
            </Dialog.Title>
            <FormProvider {...formMethodsUpdate}>
              <form
                className="input"
                onSubmit={formMethodsUpdate.handleSubmit((data) =>
                  updateWalletMutation.mutate(data)
                )}
              >
                <div className="info-item">
                  <label htmlFor="fullname">Số Tài Khoản</label>
                  <div className="input">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                      {...formMethodsUpdate.register("stk")}
                    />
                  </div>
                </div>
                <div className="info-item">
                  <label htmlFor="fullname">Ngân Hàng</label>
                  <div className="input">
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded"
                      style={{
                        border: "none",
                      }}
                      {...formMethodsUpdate.register("bank")}
                    >
                      <option value={Bank.VPBank}>VPBank</option>
                      <option value={Bank.Vietcombank}>Vietcombank</option>
                      <option value={Bank.VietinBank}>VietinBank</option>
                      <option value={Bank.BIDV}>BIDV</option>
                      <option value={Bank.ShinHanBank}>ShinHanBank</option>
                      <option value={Bank.TechcomBank}>TechcomBank</option>
                      <option value={Bank.TPBank}>TPBank</option>
                    </select>
                  </div>
                </div>

                <FormError name="bank" />
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
                    btnText="Cập Nhật"
                    color="#fff"
                  />
                </button>
              </form>
            </FormProvider>
          </Dialog.Panel>
        </div>
      </Dialog>
      <Dialog
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
              Rút Tiền Khỏi Ví
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
                    btnColor="red"
                    btnText="Rút tiền"
                    color="#fff"
                    onClick={() => setIsDeposit(true)}
                  />
                </button>
              </form>
            </FormProvider>
          </Dialog.Panel>
        </div>
      </Dialog>

      <div className="content-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <h1>Quản lí ví</h1>
          {/* <div
            style={{
              width: "200px",
            }}
          >
            <CustomButton
              theme="light"
              btnColor={"#F0631C"}
              btnText="Cập Nhật Thanh Toán"
              color={"white"}
              onClick={() => setIsUpdate(true)}
            />
          </div> */}
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <div className="wallet-card">
            <div className="left-card">
              <h2>Tổng Khả Dụng</h2>
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
                <CustomButton
                  theme="light"
                  btnText="Rút tiền"
                  onClick={() => setIsDeposit(true)}
                />
              </div>
            </div>
            <div className="right-card">
              <div className="wallet-value">
                <p>{formatCurrency(walletQuery.data.walletAmount)}</p>
                <p>Số dư khả dụng</p>
              </div>
            </div>
          </div>
          <div className="wallet-card">
            <div className="left-card">
              <h2>{walletQuery.data.bank}</h2>
              <div className="">
                <p>{walletQuery.data.bankNumber}</p>
              </div>

              <div className="btn-group"></div>
            </div>
            <div
              className="right-card"
              style={{
                backgroundColor: "#F0631C",
              }}
            >
              <div className="wallet-value"></div>
            </div>
          </div>
        </div>
        <div
          className="transaction"
          style={{
            maxWidth: "600px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <h2>Lịch Sử Thanh Toán</h2>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "10px",
            }}
          >
            {transactionQuery.data.length === 0 && (
              <div>
                <h2>Không có giao dịch nào</h2>
              </div>
            )}
            {transactionQuery.data.reverse().map((item: any) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  padding: "16px",
                  borderRadius: "8px",
                  width: "100%",
                  border: "2px solid black",
                }}
              >
                <div
                  className="flex "
                  style={{
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "30px",
                      color: item.transactionType
                        .toLowerCase()
                        .includes("withdraw")
                        ? "#e74c3c"
                        : "#27ae60",
                    }}
                  >
                    <FaMoneyBillAlt />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        color: item.transactionType
                          .toLowerCase()
                          .includes("withdraw")
                          ? "#e74c3c"
                          : "#27ae60",
                        fontWeight: "bold",
                      }}
                    >
                      {formatCurrency(item.amountTransaction)}
                    </div>
                    <div>{item.transactionDescription}</div>
                  </div>
                </div>
                <div
                  style={{
                    color: item.transactionType
                      .toLowerCase()
                      .includes("withdraw")
                      ? "#e74c3c"
                      : "#27ae60",
                    fontWeight: "bold",
                  }}
                >
                  {item.transactionType.toLowerCase().includes("withdraw")
                    ? "Rút tiền"
                    : "Mua Khóa Học"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
