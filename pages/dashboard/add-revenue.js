import DashBoardWrapper from "../../components/DashBoardWrapper";
import { baseUrl } from "../../context/baseUrl";
<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useState } from "react";
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
import Select from "react-select";
import { useGlobalContext } from "../../context/context";
import classes from "./add-revenue.module.css";
import toast from "react-hot-toast";
<<<<<<< HEAD
import Link from "next/link";
=======
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import { RadioGroup, Radio } from "@material-ui/core";
import { Box } from "@mui/system";
<<<<<<< HEAD
import ThemedProgress from "../../components/ThemedProgress";
import { PlusOne } from "@material-ui/icons";
import { BiPlusCircle } from "react-icons/bi";
=======
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
export default function AddRevenue() {
  const { user, setUser } = useGlobalContext();
  const url = `${baseUrl}/revenue/new`;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
<<<<<<< HEAD
  const [category, setCategory] = useState(null);
  const [isPin, setIsPin] = useState(true);
  const [bank, setBank] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBank, setSelectedBank] = useState("");
=======
  const [category, setCategory] = useState({});
  const [isPin, setIsPin] = useState(true);
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
  const options = [
    { label: "Transport", value: "transport" },
    { label: "Waste", value: "waste" },
    { label: "Street Naming", value: "street_naming" },
    { label: "Tenement Rate", value: "tenement_rate" },
    { label: "Toll Gate", value: "toll_gate" },
    { label: "School Fees", value: "school_fees" },
    { label: "Market", value: "market" },
  ];
  const token = process.browser && localStorage.getItem("accessToken");

<<<<<<< HEAD
  useEffect(() => {
    const fetchAccounts = async () => {
      await fetch(`${baseUrl}/accounts/list`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            console.log(data);
            setBank(data.data);
            setLoading(false);
          } else {
            console.log(data.error);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    fetchAccounts();
  }, []);

  const fetchUser = async () => {
    setLoading(true);
=======
  const fetchUser = async () => {
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
    const token =
      typeof window !== "undefined" && localStorage.getItem("accessToken");
    const url = `${baseUrl}/stakeholder/me`;
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
<<<<<<< HEAD
          setLoading(false);
          console.log(data.data);
          setUser(data.data);
        } else {
          toast.error(data.error);
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
=======
          setUser(data.data);
        } else {
          toast.error(data.error);
        }
      });
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
  };
  const handleCategory = (category) => {
    setCategory(category);
  };
  const addRevenue = async (e) => {
<<<<<<< HEAD
    setLoading(true);
=======
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: title,
        amount: amount,
        comment: comment,
        category: category.value,
        isPin: isPin,
<<<<<<< HEAD
        settlementAccount: selectedBank.value !== null && selectedBank.value,
=======
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
      }),
    };
    await fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
<<<<<<< HEAD
          setLoading(false);
=======
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
          toast.success("Revenue created successfully.");
          setAmount("");
          setCategory({});
          setTitle("");
<<<<<<< HEAD
          setSelectedBank("");
=======
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
          setComment("");
          fetchUser();
        } else {
          toast.error(data.error);
<<<<<<< HEAD
          setLoading(false);
        }
      })
      .catch((err) => {
        toast.error(err);
        setLoading(false);
      });
  };

  const bankOptions = bank.map((b) => {
    return {
      value: b.subaccount_id,
      label: b.account_number + " " + b.bank_name,
    };
  });
  return (
    <DashBoardWrapper>
      {loading && <ThemedProgress />}
=======
        }
      })
      .catch((err) => toast.error(err.message));
  };

  console.log(isPin);

  return (
    <DashBoardWrapper>
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
      <form className={classes.form}>
        <header className={classes.form_header}>
          <div className={classes.main_text}>Add Revenue</div>
          <div className={classes.sub_text}>
            Please fill the following fields carefully.
          </div>
        </header>
        <div className={classes.group}>
          <div className={classes.input_container}>
            <label>Title</label>
            <input
              value={title}
              placeholder="Revenue title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={classes.input_container}>
            <label>Amount</label>
            <input
              type="number"
              value={amount}
              placeholder="Amount"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className={classes.input_container}>
            <label>Category</label>
            <Select
              className={classes.select}
              value={category}
              placeholder="Category"
              options={options}
              onChange={handleCategory}
              theme={(theme) => ({
                ...theme,
                outline: "none",
                colors: {
                  ...theme.colors,
                  primary25: "#4bc2bc",
                  primary: ["#4bc2bc2a", "#000"],
                },
              })}
            />
          </div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Revenue uses pin.</FormLabel>
            <Box display="flex" flexDirection="column">
              <label>
                {" "}
                <input
                  name="isPin"
                  onChange={() => {
                    setIsPin(true);
                  }}
                  value={isPin}
                  type="radio"
                  checked={isPin}
                />{" "}
                Yes
              </label>
              <label>
                {" "}
                <input
                  onChange={() => {
                    setIsPin(false);
                  }}
                  name="isPin"
                  value={!isPin}
                  type="radio"
                />{" "}
                No
              </label>
            </Box>
          </FormControl>
          {/* <div className={classes.input_container}>
            <label>Comment</label>
            <input
              value={comment}
              placeholder="Comment"
              onChange={(e) => setComment(e.target.value)}
            />
          </div> */}
<<<<<<< HEAD
          <div
            className={classes.input_container}
            style={{ marginTop: "20px" }}
          >
            <label>Bank Account</label>
            <Select
              className={classes.select}
              value={selectedBank}
              placeholder="Select bank"
              options={bankOptions}
              onChange={(e) => setSelectedBank(e)}
              theme={(theme) => ({
                ...theme,
                outline: "none",
                colors: {
                  ...theme.colors,
                  primary25: "#4bc2bc",
                  primary: ["#4bc2bc2a", "#000"],
                },
              })}
            />
            <Link href="/dashboard/profile/bank-details/add-new">
              <Button
                size="small"
                variant="contained"
                color="primary"
                style={{ fontSize: "9px" }}
                endIcon={<BiPlusCircle />}
              >
                Add New
              </Button>
            </Link>
          </div>
=======
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
        </div>
        <Button
          size="large"
          color="primary"
<<<<<<< HEAD
          disabled={!title || !selectedBank || !amount || !category}
=======
          disabled={(!title, !amount, Object.entries(category).length < 1)}
>>>>>>> 1cbcd2541829a04a1e3540855c390a0ee70731a5
          onClick={addRevenue}
          variant="contained"
        >
          Add revenue
        </Button>
      </form>
    </DashBoardWrapper>
  );
}
