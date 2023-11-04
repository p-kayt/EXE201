import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './transactionManagement.scss'

interface TransactionItem {
  id: number;
  amountTransaction: number;
  transactionDescription: string;
  transactionStatus: string;
}

const TransactionManagement = () => {
  const [rows, setRows] = useState<TransactionItem[]>([]);
  const [pageIndex, setPageIndex] = useState(0)

  const fetchData = async () => {
    try {
      const response = await fetch(`https://zunitutor.azurewebsites.net/api/Transaction/Get?pageIndex=${pageIndex}&pageSize=10`);
      const result = await response.json();
      const newRows = result.result.items.map((item: any, index: number) => ({
        id: index + pageIndex * 10 + 1,
        amountTransaction: item.amountTransaction,
        transactionDescription: item.transactionDescription,
        transactionStatus: item.transactionStatus,
      }));
      setRows((prevRows) => [...prevRows, ...newRows]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleApprove = async () => {
    try {
      
    } catch (error) {
      console.error("Error update data:", error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [pageIndex])

  console.log(rows)

  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow style={{ backgroundColor: "#000", color: "#fff" }}>
            <TableCell>ID</TableCell>
            <TableCell>Tên giao dịch</TableCell>
            <TableCell align="right">Số tiền giao dịch</TableCell>
            <TableCell align="right">Tình trạng giao dịch</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ backgroundColor: '#e2e2e2' }}>
          {rows?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.id}</TableCell>
              <TableCell component="th" scope="row">
                {row.transactionDescription}
              </TableCell>
              <TableCell align="right">{row.amountTransaction}0 vnd</TableCell>
              {row.transactionStatus === "Complete" ?
                <>
                  <TableCell align="right" style={{ color: 'green' }} >{row.transactionStatus}</TableCell>
                  <TableCell></TableCell>
                </> : ""}
              {row.transactionStatus === "Failed" ?
                <>
                  <TableCell align="right" style={{ color: 'red' }}>{row.transactionStatus} </TableCell>
                  <TableCell></TableCell>
                </> : ""}
              {row.transactionStatus === "WaitingForConFirm" ?
                <>
                  <TableCell align="right" style={{ color: '#c4c42b' }}>Pending</TableCell>
                  <TableCell align="right">
                    <button style={{ padding: '12px', backgroundColor: 'green', border: 'none', color: 'white', borderRadius: '10px', marginRight: '10px' }}>Approve</button>
                    <button style={{ padding: '12px', backgroundColor: 'red', border: 'none', color: 'white', borderRadius: '10px',  }}>Reject</button>
                  </TableCell>
                </> : ""}

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TransactionManagement