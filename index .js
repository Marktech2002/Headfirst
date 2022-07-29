//for js variables
const inputs = document.querySelectorAll('.controls input') ;
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}` , this.value + suffix)
}

inputs.forEach(inputs => inputs.addEventListener ('onchange' , handleUpdate)
)
inputs.forEach(inputs => inputs.addEventListener ('mousemove' , handleUpdate)
)

//for clock
const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date()

    const seconds = now.getSeconds() // get seconds
    const secondsDegree = ((seconds /60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`

    const min = now.getMinutes() // get minutes
    const minDegree = ((min/12) * 360) + 90 ;
    minHand.style.transform = `rotate(${minDegree}deg)`
    
    const hour = now.getHours() // get hours
    const hourDegree = ((hour/60) * 360) + 90 ;
    hourHand.style.transform = `rotate(${hourDegree}deg)`

}

setInterval(setDate , 1000);
