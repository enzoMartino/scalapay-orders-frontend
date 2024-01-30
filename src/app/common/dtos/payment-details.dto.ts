export class PaymentDetailsDto {
    paymentMethod!: string;

    constructor(paymentMethod: string) {
        this.paymentMethod = paymentMethod;
    }
}