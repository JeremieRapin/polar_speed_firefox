let lapsForm = document.getElementsByClassName('lap-cell static-cell static-header')
let lapsValue = document.getElementsByClassName('lap-row ManRowDiv')

// Check if the laps are available
if (!lapsValue && !lapsForm) {
  exit()
}

if (Object.values(lapsForm).filter( lap => {
  return lap.textContent.includes('Ascent')
}).length == 0) {
  exit()
}

// Compute speed
for (lap in lapsValue) {
  if(isNaN(lap)) {
    continue
  }

  let lapClass = lapsValue[lap]

  let phase = lapClass.childNodes[1].textContent
  let duration = lapClass.childNodes[2].textContent
  let ascent = lapClass.childNodes[4].textContent

  if (!phase.includes('Flat')) {
    // Drop ms
    duration = duration.substring(0, duration.lastIndexOf('.'))
    // Compute time to seconds
    duration = duration.split(':').reduce((acc,time) => (60 * acc) + +time);
    ascent = ascent.substring(0, ascent.lastIndexOf(' m'))
    let speed = Math.round((ascent / duration) * 3600)
    // Display
    let downhillOrUpHill = phase.includes('Uphill') ? "" : "-"

    lapClass.childNodes[4].textContent = ascent + 'm ' + downhillOrUpHill + speed + ' m/h'
  }
}
