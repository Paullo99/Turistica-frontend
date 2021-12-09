export class UserForAdmin{
    id: number | undefined;
    name: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: string;

    constructor(id: number, name:string, lastName: string, email: string, phoneNumber: string, role: string){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.role = role;
    }
}