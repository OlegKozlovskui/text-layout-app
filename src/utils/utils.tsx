export const chunkArray = (array: string[], size: number): string[] =>  {
  const chunked_arr = [];
  let copied = [...array];
  const numOfChild = Math.ceil(copied.length / size);
  for (let i = 0; i < numOfChild; i++) {
    chunked_arr.push(copied.splice(0, size).join(' '));
  }

  return chunked_arr;
};
