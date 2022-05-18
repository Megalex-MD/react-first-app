export const getPagesCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}

export const getPagesArr = (totalPages) => {
  let res = []
  for (let i = 0; i < totalPages; i++) {
    res.push(i + 1)
  }
  return res
}
