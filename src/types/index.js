export type ReduxAction = {
    type: string,
    payload: {[string]: any},
    meta?: any | null,
  };

export type Order = {
    clientName: string,
    activeStatus: string,
    RMName: string,
    bookingCenter: string,
    riskProfile: string,
  };
