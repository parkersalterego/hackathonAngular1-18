export interface Guest {
  firstName: String;
  lastName: String;
  ID: Boolean;
  Stays: [
    {
      startDate: DateTimeFormat;
      endDate: DateTimeFormat;
    }
  ];
}
