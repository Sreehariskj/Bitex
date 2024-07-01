export const getColors = (ind: number, colors: any[]) => {
  const val = ind % colors.length;
  const color = colors[val];
  return color;
};
