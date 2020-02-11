const LESS_THAN_20 = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen'
];
const TENS = [
  '',
  'Ten',
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety'
];
const THOUSANDS = ['', 'Thousand', 'Million', 'Billion'];

const numberToWords = num => {
  if (num === 0) {
    return LESS_THAN_20[0];
  }

  let chunkCount = 0;
  let result = '';

  while (num > 0) {
    if (num % 1000 !== 0) {
      result = convertChunk(num % 1000) + THOUSANDS[chunkCount] + ' ' + result;
    }
    num = Math.trunc(num / 1000);
    chunkCount++;
  }

  return result.trim();
};

const convertChunk = num => {
  if (num === 0) {
    return '';
  } else if (num < 20) {
    return LESS_THAN_20[num] + ' ';
  } else if (num < 100) {
    return TENS[Math.trunc(num / 10)] + ' ' + convertChunk(num % 10);
  } else {
    return (
      LESS_THAN_20[Math.trunc(num / 100)] +
      ' Hundred ' +
      convertChunk(num % 100)
    );
  }
};
