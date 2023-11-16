import React, { useEffect, useState } from "react";
import { instance } from "../../api/api";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import "./transactionManagement.scss";
import Pagination from "@mui/material/Pagination";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { utcToZonedTime } from "date-fns-tz";
import { format } from "date-fns";
import { items } from "../courses/data";
interface Order {
  id: number;
  email: string;
  fullName: string;
  orderDate: string;
  courseName: string;
  coursePrice: string;
  orderStatus: string;
}

interface User {
  id: number;
  fullname: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  accountStatus: string;
}
const OrderManagement = () => {
  const [rows, setRows] = useState<Order[]>([]);
  // const [pageIndex, setPageIndex] = useState(0);
  // const [totalPage, setTotalPage] = useState(0);

  const fetchData = async () => {
    try {
      const response = await instance.get(`api/Order/Get`);
      // ?pageIndex=${pageIndex}&pageSize=10
      // setTotalPage(response.data.result.totalPagesCount);

      const newRows = response.data.result.map((item: any, index: number) => ({
        id: item.id,
        // id: index + pageIndex * 10 + 1,
        email: item.student.user.email,
        fullName: item.student.user.fullName,
        orderDate: item.orderDate,
        courseName: item.orderDetails[0].teachingCourse.courseName,
        coursePrice: item.orderDetails[0].teachingCourse.coursePrice,
        orderStatus: item.orderStatus,
      }));
      setRows(newRows.filter((e: any) => e.orderStatus !== "Pending"));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const handleConfirm = useMutation({
  //   mutationFn: async (data: any) => {
  //     const res = await instance.put(
  //       "/api/Transaction/AuthorizeTransaction?id=" +
  //         data?.id +
  //         "&status=" +
  //         data?.status
  //     );

  //     return res;
  //   },
  //   onSuccess: () => {
  //     toast.success("Confirm success");
  //     fetchData();
  //   },
  //   onError: () => {
  //     toast.error("Confirm failed");
  //   },
  // });

  const convertToVNTime = (timestamp: string): string => {
    const timeZone = "Asia/Ho_Chi_Minh";
    const date = new Date(timestamp);
    const zonedDate = utcToZonedTime(date, timeZone);
    const formattedDate = format(zonedDate, "dd/MM/yyyy");
    return formattedDate;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#000", color: "#fff" }}>
              <TableCell>ID</TableCell>
              <TableCell>Tên người dùng</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Khóa học</TableCell>
              <TableCell>Ngày mua</TableCell>
              <TableCell>Giá</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                style={
                  row.orderStatus !== "Pending"
                    ? { backgroundColor: "#ffffff" }
                    : { backgroundColor: "#E8E8E8" }
                }
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell component="th" scope="row">
                  {row.fullName}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.courseName}
                </TableCell>
                <TableCell component="th">
                  {convertToVNTime(row.orderDate)}
                </TableCell>
                <TableCell component="th">{row.coursePrice}đ</TableCell>
                {row.orderStatus === "AlreadyPaid" ? (
                  <>
                    <TableCell align="right" style={{ color: "green" }}>
                      {row.orderStatus}
                    </TableCell>
                  </>
                ) : (
                  <>
                    {row.orderStatus === "Pending" ? (
                      <>
                        <TableCell align="right" style={{ color: "red" }}>
                          {row.orderStatus}
                        </TableCell>
                      </>
                    ) : (
                      <TableCell align="right" style={{ color: "" }}>
                        {row.orderStatus}
                      </TableCell>
                    )}
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <div
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
      </div> */}
    </>
  );
};
export default OrderManagement;
