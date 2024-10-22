export const disabledObject: (data: any) => boolean = (data: any) => {
  let disable = false;
  Object.keys(data).map((item: string) => {
    if (data[item] === "" || data[item] === 0) {
      disable = true;
    }
  });
  return disable;
};
