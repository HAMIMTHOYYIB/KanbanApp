import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/taskSlice";

export default function SearchBar() {
  const [open, setOpen] = React.useState(false);
  const [newTask, setTask] = React.useState("");
  const [showErr,setShowErr] = React.useState(false)

  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTask = () => {
    if(newTask === ""){
      setShowErr(true)
    }else{
      setShowErr(false)
      dispatch(addTask({value:newTask}));
      handleClose();
      setTask("");
    }
  };

  return (
    <div className="w-52 mt-4 ms-36 mb-2">
      <React.Fragment>
        <Button
          sx={{
            color: "#047857",
            border: "2px solid #047857",
            fontWeight: "bold",
            paddingX: "25px",
            "&:hover": {
              borderColor: "#065f46",
              borderWidth: 2,
            },
          }}
          variant="outlined"
          onClick={handleClickOpen}
        >
          <p>Add + </p>
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              handleAddTask()
              // const formData = new FormData(event.currentTarget);
              // const formJson = Object.fromEntries(formData.entries());
              // const email = formJson.email;
            },
          }}
        >
          <DialogTitle className="bg-green-800 text-white">
            Add New Task
          </DialogTitle>
          <DialogContent>
            <DialogContentText className="text-black">
              To add a new task please write it in the below input field.
            </DialogContentText>
            <TextField
              className=""
              autoFocus
              focused
              margin="dense"
              id="name"
              name="task"
              label="New Task"
              type="text"
              value={newTask}
              onChange={(e) => setTask(e.target.value)}
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray",
                  },
                },
              }}
            />
            {showErr && <small className="text-red-700 font-semibold">Input something to add task!</small>}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              sx={{
                color: "#146434",
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#146434",
                color: "white",
                "&:hover": {
                  backgroundColor: "#065f46",
                },
              }}
              // onClick={handleAddTask}
            >
              Add Task
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
}
