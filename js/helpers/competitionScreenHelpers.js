// Helper function to format team size in competition screen
//@params: minimun and maximum team numbers 
export const teamSize = (min, max) =>{
  if (min === max){
    return `${min} people`
  }
  return `${min} - ${max} people`
}

// Helper function to format entry fee in competition screen
//@param: entry fee
export const entryFee = fee =>{
  if (fee ===0) {
    return `Free`
  }
  return `$${fee}`
}