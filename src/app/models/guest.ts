export interface Guest {
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
