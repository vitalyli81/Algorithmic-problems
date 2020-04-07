/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const res = [];
  const domainHash = {};

  cpdomains.forEach((dom) => {
    const domainInfo = dom.split(' ');
    const count = parseInt(domainInfo[0]);
    const domain = domainInfo[1];
    const domFragment = domain.split('.');
    let cur = '';

    for (let i = domFragment.length - 1; i >= 0; i--) {
      cur = cur ? `${domFragment[i]}.${cur}` : domFragment[i];
      domainHash[cur] = (domainHash[cur] || 0) + count;
    }
  });

  for (let [dom, count] of Object.entries(domainHash)) {
    res.push(`${count} ${dom}`);
  }

  return res;
};
