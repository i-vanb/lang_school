export const formError = (name: string, dictionary: any) => {
  const path = name.split('.');

  let error = dictionary;
  path.forEach(i => {
    error = error[i];
  })
  return error;
}