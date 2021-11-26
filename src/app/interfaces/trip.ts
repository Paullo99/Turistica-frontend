export interface Trip {
    id: number;
    name: string;
    tripType: any;
    beginDate: Date;
    endDate: Date;
    pricePerPerson: number;
    enrolledPeople: number;
    peopleLimit: number;
    description: string;
    map: any;
}
