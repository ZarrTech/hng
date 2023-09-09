const today = new Date()
const day = today.getDay()

const dayList = [
    'Sunday',
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturuday'
]

document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML = `It's ${dayList[
  day
].toUpperCase()}`;


setInterval(()=>{
  const date = Date.now()
  document.querySelector('[data-testid="currentUTCTime"]').innerHTML = date;
},1000)

