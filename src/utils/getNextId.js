export const getNextId = (data) => {
  /* array ke amra choto kore ekta value te niye ashbo mane amar porer id ta dorkar. Ekta array ke choto kore ekta value te niye ashar function hoilo reduce.  */
  const maxId = data.reduce((prev, current) =>
    prev && prev.id > current.id ? prev.id : current.id
  );

  return maxId + 1;
};
