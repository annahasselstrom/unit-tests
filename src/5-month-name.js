const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
  if (monthNumber === 1) {
    return 'January'

  }else if (monthNumber === 6) {
    return 'June'

  } else if (monthNumber === 12) {
    return 'December'

  } else if(monthNumber > 12 || monthNumber < 1) {
    return null
  }
}
