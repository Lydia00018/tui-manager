import React, { useState, useEffect, useCallback } from "react";
import { differenceInYears, parseISO } from "date-fns";
import Grid from "@mui/material/Grid";

import { Passengers } from "../types";

type PassengerStatsProps = {
  data: Passengers;
};

interface Stats {
  adults: number;
  children: number;
  infants: number;
}

const PassengerStats: React.FC<PassengerStatsProps> = ({ data }) => {
  const [stats, setstats] = useState<Stats>({
    adults: 0,
    children: 0,
    infants: 0,
  });

  const agedPassengers = useCallback(() => {
    let adults = 0,
      children = 0,
      infants = 0;
    Object.values(data).forEach((passenger) => {
      const age = differenceInYears(
        new Date(),
        parseISO(passenger.dateOfBirth)
      );
      if (age >= 18) {
        adults++;
      } else if (age > 2) {
        children++;
      } else {
        infants++;
      }
    });

    setstats({ adults, children, infants });
  }, [data]);

  useEffect(() => {
    agedPassengers();
  }, [agedPassengers]);

  return (
    <>
      <div>{`${stats.adults ?? 0} Adult`}</div>
      <div>{`${stats.children ?? 0} Child`}</div>
      <div>{`${stats.infants  ?? 0} Infant`}</div>
    </>
  );
};

export default PassengerStats;
