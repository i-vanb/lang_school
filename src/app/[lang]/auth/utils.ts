export const formError = (name: string, dictionary: any) => {
  const path = name.split('.');
  console.log('path', path)
  let error = dictionary;
  path.forEach(i => {
    console.log('i', i, error)
    error = error[i];
  })
  return error;
}