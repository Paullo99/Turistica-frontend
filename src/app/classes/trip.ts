export interface Trip {
    id: number;
    name: string;
    tripType: string;
    beginDate: Date;
    endDate: Date;
    pricePerPerson: number;
    enrolledPeople: number;
    limit: number;
    description: string;
    exampleImage: any;
}
