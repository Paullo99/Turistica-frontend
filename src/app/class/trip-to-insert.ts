export class TripToInsert {
  name: string;
  tripType: number;
  beginDate: string;
  endDate: string;
  pricePerPerson: number;
  peopleLimit: number;
  description: string;
  map: string;

  constructor(
    name: string,
    tripType: number,
    beginDate: string,
    endDate: string,
    pricePerPerson: number,
    peopleLimit: number,
    description: string,
    map: string
  ) {
    this.name = name;
    this.tripType = tripType;
    this.beginDate = beginDate;
    this.endDate = endDate;
    this.pricePerPerson = pricePerPerson;
    this.peopleLimit = peopleLimit;
    this.description = description;
    this.map = map;
  }
}
