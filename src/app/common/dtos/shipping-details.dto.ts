export class ShippingDetailsDto {
    givenNames!: string;
    familyNames!: string;
    city!: string;
    postalCode!: number;
    countryCode!: string;
    address!: string;
    
    constructor(givenNames: string, familyNames: string, city: string, postalCode: number, countryCode: string, address: string) {
        this.givenNames = givenNames;
        this.familyNames = familyNames;
        this.city = city;
        this.postalCode = postalCode;
        this.countryCode = countryCode;
        this.address = address;
    }
}