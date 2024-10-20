/**
 * Converts an ISO date string to a human-readable format (e.g., "May 20th, 2024").
 * 
 * @param {string} dateString - The ISO date string to convert.
 * @returns {string} The formatted date string.
 */
function formatDateToHumanReadable(dateString: string): string {
    // Create a Date object from the input string
    const date = new Date(dateString);
  
    // Array of month names
    const months: string[] = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    // Get the day of the month
    const day: number = date.getDate();
  
    // Get the ordinal suffix for the day
    const ordinalSuffix = (day: number): string => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
  
    // Get the full year
    const year: number = date.getFullYear();
  
    // Format the date as "Month Dayth, Year"
    const formattedDate: string = `${months[date.getMonth()]} ${day}${ordinalSuffix(day)}, ${year}`;
  
    return formattedDate;
  }

  export default formatDateToHumanReadable