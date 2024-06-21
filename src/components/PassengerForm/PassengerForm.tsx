import React, { ChangeEvent } from "react";
import Card from "@mui/material/Card";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format } from "date-fns";

import { Passenger } from "../types";

type PassangerFormProps = {
  passenger: Passenger;
  index: number;
  handleChange: (
    index: number,
    e: ChangeEvent<HTMLInputElement | { name?: string; value: unknown } | string> | SelectChangeEvent<string>

  ) => void;
};

const PassangerForm: React.FC<PassangerFormProps> = ({
  passenger,
  index,
  handleChange,
}) => {
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
           {`Passenger ${index + 1}`}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel htmlFor="title">Title</InputLabel>
            <Select
              id="title"
              value={passenger.title}
              name="title"
              onChange={(e) => handleChange(index, e)}
              inputProps={{ name: "title" }}
            >
              <MenuItem value="MR">MR</MenuItem>
              <MenuItem value="MRS">MRS</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel htmlFor="firstName">First name</InputLabel>
          <TextField
            fullWidth
            label="Firstname"
            value={passenger.firstName}
            name="firstName"
            onChange={(e) => handleChange(index, e)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Lastname"
            value={passenger.lastName}
            name="lastName"
            onChange={(e) => handleChange(index, e)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <Select
              id="gender"
              value={passenger.gender}
              name="gender"
              onChange={(e) => handleChange(index, e)}
              inputProps={{ name: "gender" }}
            >
              <MenuItem value="MALE">Male</MenuItem>
              <MenuItem value="FEMALE">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <DatePicker
            label="Date of Birth"
            value={new Date(passenger.dateOfBirth)}
            format="yyyy-MM-dd"
            onChange={(newValue: any) => {
              if (newValue !== null) {
                handleChange(index, newValue);
              }
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PassangerForm;
