/** @credit https://gist.github.com/farskid/b1c128639cd42e44734282e2d9e3beb2 */
export const objectPropertiesSort = obj =>
  Object.keys(obj)
    .sort(new Intl.Collator("en", { caseFirst: "lower" }).compare)
    .reduce((result, key) => {
      result[key] = obj[key]
      return result
    }, {})

export default objectPropertiesSort
