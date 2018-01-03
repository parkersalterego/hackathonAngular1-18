export interface Guest {
  _id: String;
  firstName: String;
  lastName: String;
  ID: Boolean;
  Stays: [
    {
      startDate: String;
      endDate: String;
      location: String;
    }
  ];
}
