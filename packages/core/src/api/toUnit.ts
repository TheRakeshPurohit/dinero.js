import { BaseDinero } from '../types';
import { Dependencies } from './types';

export function toUnit<TAmount, TDinero extends BaseDinero<TAmount>>({
  calculator,
}: Dependencies<TAmount, TDinero, 'divide' | 'power'>) {
  return (dineroObject: TDinero) => {
    const { amount, currency, scale } = dineroObject.toJSON();
    const factor = calculator.power(currency.base, scale);

    return calculator.divide(amount, factor);
  };
}
