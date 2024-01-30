export enum PaymentMethodsEnum {
    scalapay = 'scalapay',
}

export const PAYMENT_METHODS_MAP: Map<PaymentMethodsEnum, string>= new Map([[PaymentMethodsEnum.scalapay, 'Scalapay']])
