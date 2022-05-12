import { replace } from 'lodash';
import numeral from 'numeral';

// load a locale
numeral.register('locale', 'id', {
  delimiters: {
      thousands: ',',
      decimal: '.'
  },
  abbreviations: {
      thousand: 'rb',
      million: 'jt',
      billion: 'm',
      trillion: 't'
  },
  ordinal : function (number) {
      return number === 1 ? 'er' : 'ter';
  },
  currency: {
      symbol: 'Rp'
  }
});

// switch between locales
numeral.locale('id');

export function fCurrency(number) {
  return numeral(number).format(Number.isInteger(number) ? 'Rp0,0' : 'Rp0,0.00');
}

export function fPercent(number) {
  return numeral(number / 100).format('0.0%');
}

export function fNumber(number) {
  return numeral(number).format();
}

export function fShortenNumber(number) {
  return replace(numeral(number).format('0.00a'), '.00', '');
}

export function fData(number) {
  return numeral(number).format('0.0 b');
}