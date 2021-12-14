import DashboardWrapper from "../../../components/DashBoardWrapper";
import ThemedProgress from "../../../components/ThemedProgress";
import * as React from "react";
<<<<<<< HEAD
import {
  DataGrid,
  gridClasses,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/core";
import { baseUrl } from "../../../context/baseUrl";
import { useState, useEffect } from "react";
import moment from "moment";

=======
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/core";
import { baseUrl } from "../../../context/baseUrl";
import { useState, useEffect } from "react";
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
const History = () => {
  const [revenues, setRevenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(1);
  const transactions = [];
  const [tranxRow, setTranxRow] = useState([]);
<<<<<<< HEAD
  const [allRev, setAllRev] = useState([]);
  const token =
    typeof window !== "undefined" && localStorage.getItem("accessToken");
  const fetchHistory = async () => {
    const url = `${baseUrl}/collections/all/history`;
=======
  const token =
    typeof window !== "undefined" && localStorage.getItem("accessToken");
  const fetchHistory = async (revenueId) => {
    const url = `${baseUrl}/collections/${revenueId}/history?page=${pagination}&limit=13`;
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
    await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
<<<<<<< HEAD
        console.log(data.data[0].paginatedResult);
        if (data.success) {
          setTranxRow(data.data[0].paginatedResult);
        }
      })
      .catch((err) => console.log(err));
=======
        if (data.success) {
          data.data
            .filter((res) => res.paginatedResult.length > 0)
            .map((res) => res.paginatedResult)
            .map((t) => {
              transactions.push(t);
              console.log(t, "gg");
            });
          var merged = [].concat.apply([], transactions);
          setTranxRow(
            merged.map((t, id) => {
              return {
                ...t,
                id: id,
              };
            })
          );
        }
      });
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
  };
  const fetchRevenue = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${baseUrl}/revenue/list`;
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setRevenues(data.data);
<<<<<<< HEAD
          setLoading(false);
=======

          setLoading(false);
          const revs = data.data;
          revs.forEach((rev) => {
            fetchHistory(rev.revenue_id);
          });
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
        } else {
          setLoading(false);
          console.log(data.error);
        }
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    fetchRevenue();
<<<<<<< HEAD
    fetchRev();
    fetchHistory();
  }, []);

  const fetchRev = async (id) => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${baseUrl}/revenue/all`;
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.success) {
          // console.log(data);
          setAllRev(data.data);
        } else {
          setLoading(false);
          console.log(data.error);
        }
      })
      .catch((err) => console.log(err.message));
  };

  const getName = (id) => {
    let name = "";
    const revenue = allRev
      .filter((item) => {
        return item.revenue_id === id;
      })
      .map((rev) => {
        return rev.title;
      });

    name += revenue[0];
    return name;
  };

  const getCategory = (id) => {
    let catg = "";
    const revenue = allRev
      .filter((item) => {
        return item.revenue_id === id;
      })
      .map((rev) => {
        return rev.category;
      });

    catg += revenue[0];
    return catg;
  };
  const columns = [
    {
      field: "id",
      headerName: "S/N",
=======
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
      width: 90,
      headerClassName: "header",
      cellClassName: "cell",
    },
    {
<<<<<<< HEAD
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
      headerClassName: "header",
      cellClassName: "cell",
    },
    {
=======
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
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
      field: "commission",
      headerName: "Commission",
      headerClassName: "header",
      cellClassName: "cell",
      width: 150,
      editable: true,
    },
    {
<<<<<<< HEAD
      field: "created_by",
=======
      field: "agent",
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
      headerName: "Agent/Collector",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      headerClassName: "header",
      cellClassName: "cell",
    },
    {
<<<<<<< HEAD
      field: "updated_at",
=======
      field: "created_At",
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
      headerName: "Date",
      sortable: false,
      width: 160,
      headerClassName: "header",
      cellClassName: "cell",
    },
    {
      field: "pin",
      headerName: "Pin",
      sortable: false,
      width: 160,
      headerClassName: "header",
      cellClassName: "cell",
    },
  ];
  transactions &&
    transactions.map((t) => {
      console.log(t);
      return t;
    });

<<<<<<< HEAD
  const customTool = () => {
    return (
      <GridToolbarContainer className={gridClasses.toolbarContainer}>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  };
=======
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
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
  const useStyles = makeStyles({
    root: {
      backgroundColor: "#fff",
      boxShadow: "0 0 10px rgba(0 0 0 /0.1)",
      "& .header": {
        color: "#4bc2bc",
        fontWeight: "700",
<<<<<<< HEAD
        fontFamily: "brFirma",
=======
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
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
<<<<<<< HEAD
        {loading && <ThemedProgress />}
        <div style={{ height: "70vh", width: "100%" }}>
          <DataGrid
            components={{ Toolbar: customTool }}
            pageSize={30}
            className={classes.root}
            rows={tranxRow.map((trx, id) => {
              return {
                ...trx,
                id: id + 1,
                name:
                  getName(trx.revenue).toLowerCase().charAt(0).toUpperCase() +
                  getName(trx.revenue).toLowerCase().slice(1),
                category:
                  getCategory(trx.revenue)
                    .toLowerCase()
                    .charAt(0)
                    .toUpperCase() +
                  getCategory(trx.revenue).toLowerCase().slice(1),
                updated_at: moment(trx.updated_at).format(
                  "MMM DD, yyyy hh:mm a"
                ),
                commission: trx.commission ? trx.commission : "-",
              };
            })}
            columns={columns}
            rowsPerPageOptions={[10, 30, 100]}
            checkboxSelection
            disableSelectionOnClick
            loading={loading}
=======
        <ThemedProgress />
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            className={classes.root}
            rows={tranxRow}
            columns={columns}
            pageSize={tranxRow.length}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
            disableSelectionOnClick
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
          />
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default History;
