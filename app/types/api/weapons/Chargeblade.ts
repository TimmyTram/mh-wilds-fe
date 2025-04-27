enum ChargeBladePhial {
    element,
    impact,
}

export interface ChargeBlade {
    kind: 'charge-blade';
    phial: ChargeBladePhial;
}