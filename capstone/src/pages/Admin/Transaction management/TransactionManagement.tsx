import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./transactionManagement.scss";
import { instance } from "../../../api/api";
import Pagination from "@mui/material/Pagination";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { utcToZonedTime } from "date-fns-tz";
import { format } from "date-fns";

interface TransactionItem {
  id: number;
  amountTransaction: number;
  transactionDescription: string;
  transactionStatus: string;
  createAt: string;
  transactionType: string;
  wallet: {
    user: {
      fullName:string,
    }
  }
}

const TransactionManagement = () => {
  const [rows, setRows] = useState<TransactionItem[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const fetchData = async () => {
    try {
      const response = await instance.get(
        `/api/Transaction/Get?pageIndex=${pageIndex}&pageSize=10`
      );

      setTotalPage(response.data.result.totalPagesCount);

      const newRows = response.data.result.items.map(
        (item: any, index: number) => ({
          id: index + pageIndex * 10 + 1,
          amountTransaction: item.amountTransaction,
          transactionDescription: item.transactionDescription,
          transactionStatus: item.transactionStatus,
          createAt: item.createAt,
          transactionType: item.transactionType,
          wallet: item.wallet,
        })
      );
      setRows(newRows);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleConfirm = useMutation({
    mutationFn: async (data: any) => {
      const res = await instance.put(
        "/api/Transaction/AuthorizeTransaction?id=" +
          data?.id +
          "&status=" +
          data?.status
      );

      return res;
    },
    onSuccess: () => {
      toast.success("Confirm success");
      fetchData();
    },
    onError: () => {
      toast.error("Confirm failed");
    },
  });

  const convertToVNTime = (timestamp: string): string => {
    const timeZone = "Asia/Ho_Chi_Minh";

    const date = new Date(timestamp);

    const zonedDate = utcToZonedTime(date, timeZone);

    const formattedDate = format(zonedDate, "dd/MM/yyyy");

    return formattedDate;
  };

  useEffect(() => {
    fetchData();
  }, [pageIndex]);


  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#000", color: "#fff" }}>
              <TableCell>ID</TableCell>
              <TableCell>Tên người giao dịch</TableCell>
              <TableCell>Thời gian giao dịch</TableCell>
              <TableCell align="right">Số tiền giao dịch</TableCell>
              <TableCell align="right">Tình trạng giao dịch</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                style={(row.transactionStatus === "WaitingForConFirm") ? {backgroundColor:"#ffffff"} :  {backgroundColor:"#E8E8E8"}}
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell component="th" scope="row">
                  {row.wallet.user.fullName}
                </TableCell>
                <TableCell component="th" scope="row">
                  {convertToVNTime(row.createAt)}
                </TableCell>
                <TableCell align="right"> 
                  {row.transactionType === "withdraw" ? "Rút " : " Nạp "}{row.amountTransaction} vnd
                </TableCell>
                {row.transactionStatus === "Complete" ? (
                  <>
                    <TableCell align="right" style={{ color: "green" }}>
                      {row.transactionStatus}
                    </TableCell>
                    <TableCell></TableCell>
                  </>
                ) : (
                  ""
                )}
                {row.transactionStatus === "Failed" ? (
                  <>
                    <TableCell align="right" style={{ color: "red" }}>
                      {row.transactionStatus}{" "}
                    </TableCell>
                    <TableCell></TableCell>
                  </>
                ) : (
                  ""
                )}
                {row.transactionStatus === "WaitingForConFirm" ? (
                  <>
                    <TableCell align="right" style={{ color: "#c4c42b" }}>
                      Pending
                    </TableCell>
                    <TableCell align="right">
                      <button
                        style={{
                          padding: "12px",
                          backgroundColor: "green",
                          border: "none",
                          color: "white",
                          borderRadius: "10px",
                          marginRight: "10px",
                        }}
                        onClick={() => {
                          handleConfirm.mutate({
                            id: row.id,
                            status: "Complete",
                          });
                        }}
                      >
                        Approve
                      </button>
                      <button
                        style={{
                          padding: "12px",
                          backgroundColor: "red",
                          border: "none",
                          color: "white",
                          borderRadius: "10px",
                        }}
                        onClick={() => {
                          handleConfirm.mutate({
                            id: row.id,
                            status: "Failed",
                          });
                        }}
                      >
                        Reject
                      </button>
                    </TableCell>
                  </>
                ) : (
                  ""
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Pagination
          page={pageIndex + 1}
          count={totalPage}
          onChange={(event, value) => setPageIndex(value - 1)}
        />
      </div>
    </>
  );
};

export default TransactionManagement;
