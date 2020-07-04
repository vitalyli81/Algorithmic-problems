/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const graph = {};
  const emailToName = {};
  const visited = {};
  const merge = [];

  accounts.forEach((account) => {
    const [name, ...emails] = account;
    emailToName[emails[0]] = name;

    emails.forEach((email) => {
      graph[emails[0]] = (graph[emails[0]] || new Set()).add(email);
      graph[email] = (graph[email] || new Set()).add(emails[0]);
    });
  });

  Object.keys(graph).forEach((email) => {
    if (!visited[email]) {
      const stack = [email];
      const account = [email];
      visited[email] = true;

      while (stack.length) {
        const next = stack.pop();

        graph[next].forEach((nextEmail) => {
          if (!visited[nextEmail]) {
            visited[nextEmail] = true;
            stack.push(nextEmail);
            account.push(nextEmail);
          }
        });
      }

      account.sort();
      account.unshift(emailToName[email]);
      merge.push(account);
    }
  });

  return merge;
};
