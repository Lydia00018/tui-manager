export interface Passenger {
  title: "MR" | "MRS";
  gender: "MALE" | "FEMALE";
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export type Passengers = {
  [key: number]: Passenger;
};
