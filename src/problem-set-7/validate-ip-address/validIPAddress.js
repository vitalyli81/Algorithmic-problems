/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
  let dots = 0;
  let colons = 0;

  for (let i = 0; i < IP.length; i++) {
    if (IP[i] === '.') {
      dots += 1;
    } else if (IP[i] === ':') {
      colons += 1;
    }
  }

  if (dots === 3) {
    return validateIPv4(IP);
  }

  if (colons === 7) {
    return validateIPv6(IP);
  }

  return 'Neither';
};

function validateIPv4(ip) {
  const list = ip.split('.');

  for (let i = 0; i < list.length; i++) {
    const part = list[i];

    if (
      part.length === 0 ||
      part.length > 3 ||
      (part[0] === '0' && part.length > 1) ||
      part > 255
    ) {
      return 'Neither';
    }

    for (let c of part) {
      if (isNaN(c)) {
        return 'Neither';
      }
    }
  }

  return 'IPv4';
}

function validateIPv6(ip) {
  const list = ip.split(':');
  const hexdigits = '0123456789abcdefABCDEF';

  for (let i = 0; i < list.length; i++) {
    const part = list[i];

    if (part.length === 0 || part.length > 4) {
      return 'Neither';
    }

    for (let c of part) {
      if (hexdigits.indexOf(c) === -1) {
        return 'Neither';
      }
    }
  }

  return 'IPv6';
}
