const container= document.querySelector('.container')
const text = document.querySelector('#text')

const totaltime= 7500
const breathetime =(totaltime/5)*2
const holdtime=totaltime/5
breateanimation()
function breateanimation()
{
    text.innerHTML = 'Breathe In!'
    container.className='container grow'

    setTimeout(() => {
      text.innerText = 'Hold Breathe!'
      setTimeout(() =>
      {
        text.innerText ='Breathe Out!'
        container.className ='container shrink'
      },holdtime)
    },breathetime)
}

setInterval(breateanimation,totaltime)