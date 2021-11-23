export interface Trip {
    id: number;
    name: string;
    tripType: any;
    beginDate: Date;
    endDate: Date;
    pricePerPerson: number;
    enrolledPeople: number;
    limit: number;
    description: string;
    exampleImage: any;
}
