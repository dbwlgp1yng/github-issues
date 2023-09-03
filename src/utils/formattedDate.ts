export const formattedCreateAt = (isoDateString: string) => {
  const isoDate = new Date(isoDateString);
  
  const formattedDate = isoDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return formattedDate;
};