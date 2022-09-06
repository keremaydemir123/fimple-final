import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Calculator from "../Calculator";

const columns = [
  { id: "taksit_no", label: "Taksit No", minWidth: 170 },
  {
    id: "taksit_tutari",
    label: "Taksit Tutarı",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "ana_para",
    label: "Ana Para",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "kalan_ana_para",
    label: "Kalan Ana Para",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "kar_tutari",
    label: "Kar Tutarı",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "kkdf",
    label: "KKDF",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "bsmv",
    label: "BSMV",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

export default function SimpleTable({ values }) {
  const rows = Calculator({ values });
  console.log(rows);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 380 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.taksit_no}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[6, 12, 24]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
