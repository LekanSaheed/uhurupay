import DashboardWrapper from "../../../components/DashBoardWrapper";
import ThemedProgress from "../../../components/ThemedProgress";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/core";
const History = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      headerClassName: "header",
      cellClassName: "cell",
    },
    {
      field: "revenue",
      headerName: "Revenue",
      width: 150,
      editable: true,
      headerClassName: "header",
      cellClassName: "cell revenueCell",
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
      editable: true,
      headerClassName: "header",
      cellClassName: "cell",
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
      editable: true,
      headerClassName: "header",
      cellClassName: "cell",
    },
    {
      field: "payer",
      headerName: "Payer",
      headerClassName: "header",
      cellClassName: "cell",
      width: 150,
      editable: true,
    },
    {
      field: "agent",
      headerName: "Agent/Collector",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      headerClassName: "header",
      cellClassName: "cell",
    },
    {
      field: "date",
      headerName: "Date",
      sortable: false,
      width: 160,
      headerClassName: "header",
      cellClassName: "cell",
    },
    {
      field: "payerDetails",
      headerName: "Payer Details",
      sortable: false,
      width: 160,
      headerClassName: "header",
      cellClassName: "cell",
    },
  ];

  const rows = [
    {
      id: 1,
      revenue: "Taxi (T-653)",
      amount: 350,
      category: "Transport",
      payer: "Mc Oluomo",
      agent: "Tade",
      date: "10 jan 1856",
      payerDetails: "Huy-d6",
    },
    {
      id: 2,
      revenue: "School Fees (SF-653)",
      amount: 330,
      category: "education",
      payer: "Samuel olotu",
      agent: "Sola",
      date: "10 jan 1956",
      payerDetails: "96618256BB",
    },
    {
      id: 3,
      revenue: "Boli (B-653)",
      amount: 250,
      category: "Market",
      payer: "Mummy Shayo",
      agent: "Tunde",
      date: "20 Feb 2056",
      payerDetails: "09019724567",
    },
  ];
  const useStyles = makeStyles({
    root: {
      backgroundColor: "#fff",
      boxShadow: "0 0 10px rgba(0 0 0 /0.1)",
      "& .header": {
        color: "#4bc2bc",
        fontWeight: "700",
      },
      "& .cell": {
        borderBottom: "solid 1px whitesmoke",
        fontFamily: "brFirma",
      },
      "& .revenueCell": {
        color: "dodgerblue",
      },
    },
    background: {
      minHeight: "100vh",
    },
  });
  const classes = useStyles();
  return (
    <DashboardWrapper>
      <div className={classes.background}>
        <ThemedProgress />
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            className={classes.root}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[15]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default History;
