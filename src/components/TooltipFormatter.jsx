import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import uniqueID from "../utils/utils";

export default function TooltipFormatter(props) {
  return (
    <TableContainer
      key={uniqueID()}
      component={Paper}
      sx={{ background: "transparent" }}
    >
      <Table key={uniqueID()}>
        <TableBody key={uniqueID()}>
          {props.selectedMetric === Object.keys(props.rows)[0]
            ? Object.keys(props.rows).map((key) => {
                return (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={uniqueID()}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ color: "#FFFFFF" }}
                      key={uniqueID()}
                    >
                      {key}
                    </TableCell>
                    <TableCell
                      key={uniqueID()}
                      sx={{ color: "#FFFFFF" }}
                      align="left"
                    >
                      {props.rows[key]}
                    </TableCell>
                  </TableRow>
                );
              })
            : Object.keys(props.rows)
                .filter((val) => val === props.selectedMetric)
                .map((key) => {
                  return (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      key={uniqueID()}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ color: "#FFFFFF" }}
                        key={uniqueID()}
                      >
                        {key}
                      </TableCell>
                      <TableCell
                        key={uniqueID()}
                        sx={{ color: "#FFFFFF" }}
                        align="left"
                      >
                        {props.rows[key]}
                      </TableCell>
                    </TableRow>
                  );
                })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
