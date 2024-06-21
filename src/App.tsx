import { Container } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

// components
import PassengerPanel from "./components/PassengerPanel/PassengerPanel";
import { Passengers } from "./components/types";

import "./App.css";

function App() {
  const passengers: Passengers = {
    0: {
      title: "MRS",
      gender: "FEMALE",
      firstName: "Jane",
      lastName: "Doe",
      dateOfBirth: "2003-08-31",
    },
    1: {
      title: "MR",
      gender: "MALE",
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "2001-04-12",
    },
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <Container maxWidth="md" id="main">
          <PassengerPanel data={passengers} />
        </Container>
      </div>
    </LocalizationProvider>
  );
}

export default App;
