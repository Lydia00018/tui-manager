import React, { useState, ChangeEvent, FormEvent } from "react";
import Card from "@mui/material/Card";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
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
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | { name?: string; value: unknown } | string>
  ) => void;
};

const PassangerForm: React.FC<PassangerFormProps> = ({
  passenger,
  index,
  handleChange,
}) => {
  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Passenger Details
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
            value={passenger.dateOfBirth}
            format="yyyy-MM-dd"
            onChange={(newValue: any) => {
              if (newValue !== null) {
                handleChange(index, newValue);
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Button variant="contained" color="primary">
                BACK
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">
                NEXT
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PassangerForm;
