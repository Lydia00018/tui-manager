import React, { useState, ChangeEvent, FormEvent } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Grid from "@mui/material/Grid";

import PassengerForm from "../PassengerForm/PassengerForm";

import { Passenger, Passengers } from "../types";
import PassengerStats from "../PassengerStats/PassengerStats";

type PassangerPanelProps = {
  data: Passengers;
};

const PassengerPanel: React.FC<PassangerPanelProps> = ({ data }) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [formData, setFormData] = useState<Passengers>(data);

  const handleChange = (
    index: number,
    e: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | { name?: string; value: unknown } | string
    >
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [index]: { ...formData[index], [name]: value },
    });
  };
  return (
    <>
      <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-passenger"
          id="passenger-header"
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="baseline"
            gap="20px"
          >
            <div className="circle_icon">
              <SupervisorAccountIcon />
            </div>
            <Typography>Passanger Details</Typography>
            <PassengerStats data={data} />
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            {Object.entries(data).map(([index, user]) => (
              <PassengerForm
                key={index}
                index={Number(index)}
                passenger={user}
                handleChange={handleChange}
              />
            ))}
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
          ></Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PassengerPanel;
