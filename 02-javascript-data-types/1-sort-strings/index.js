/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

  const arrSortAsc = [...arr].sort((a, b) => a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'}));
  const arrSortDesc = [...arr].sort((b, a) => b.localeCompare(a, ['ru', 'en'], {caseFirst: 'upper'}));

  if (param === 'asc') {
    return arrSortAsc;
  } else if (param === 'desc') {
    return arrSortDesc;
  }
}
