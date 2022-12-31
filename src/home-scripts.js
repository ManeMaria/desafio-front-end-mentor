fetch('./data/data.json').then((res) => res.json()).then((jsonRes) => {
  const title = document.querySelector('#title');
  const description = document.querySelector('#description');
  const currentValue = document.querySelector('#current-value');
  const previousValue = document.querySelector('#previous-value');

  jsonRes.forEach((data) => {
    title.innerText = data.title;
    description.innerText = data.description;
    currentValue.innerText = data.currentValue;
    previousValue.innerText = data.previousValue;
  })
})