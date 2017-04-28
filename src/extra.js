loadMoment = async () => {
  console.time('test')
  const moment = await import('moment')
  const m = moment().format('MMMM Do YYYY, h:mm:ss a')
  console.log(m)
  console.timeEnd('test')
}

document.getElementById('button1').addEventListener('click', loadMoment)
document.getElementById('button2').addEventListener('click', loadMoment)
