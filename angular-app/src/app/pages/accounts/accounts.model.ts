export interface PaymentMethodUnit {
  id: number;
  user_id: number;
  method_name: number;
  method_type: MethodType;
  original_balance: number;
  cashback_rate: number;
  cashback_type: CashbackType;
  created_at: string;
}


export enum MethodType {
  Cash = 'cash',
  Bank = 'bank',
  CreditCard = 'credit_card'
}

export enum CashbackType {
  Cash = 'cash',
  Points = 'points'
}
