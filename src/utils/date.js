export const convertDateString = (dateStr) => {
    const stamp = Date.parse(dateStr);
    const date = new Date(stamp);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
    return date.toLocaleDateString("en-US", options);
}
