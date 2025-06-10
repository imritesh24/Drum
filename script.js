document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    const validKeys = ['a', 's' , 'd' , 'f' , 'g', 'h', 'j' , 'k', 'l'];

        if(validKeys.includes(key)) {
            const box = document.getElementById(`box-${key}`);
            box.classList.add('button_active');
            
            const audio= document.getElementById(`sound-${key}`);
            audio.currentTime = 0;
            audio.play();
        }
});

document.addEventListener('keyup', (event) => {
  const key = event.key.toLowerCase();
  const validKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];

  if (validKeys.includes(key)) {
    const box = document.getElementById(`box-${key}`);
    box.classList.remove('button_active');
  }
});
