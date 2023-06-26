import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Fields from "./components/Fields";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [form, setForm] = useState({})
  const [data, setData] = useState([]);
  debugger
  const addData = () => {
    debugger
    setData([...data, form]);
    setForm({})
  };
  const removeItem = (index) => {
    let arr= data;
    arr.splice(index, 1)
    setData([...arr])

  }

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={form.name}
            onChange={(event) => setForm({...form ,name: event.target.value})}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={form.email}
            onChange={(event) => setForm({...form ,email: event.target.value})}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button onClick={addData} color="success" variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data_val">
        <h4>{element.name}</h4>
        <h4>{element.email}</h4>
        <Stack>
        <Button onClick={() => removeItem(index)} variant="contained" color="error">
        <DeleteForeverIcon  />
     </Button>
     </Stack>
    </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
