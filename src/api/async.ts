export const to = async (promise: Promise<Response>) => {
  return promise
    .then((data) => {
      return [null, data];
    })
    .catch((err) => [err]);
};
