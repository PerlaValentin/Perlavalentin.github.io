  const scriptURL = 'https://script.google.com/macros/s/AKfycbx61oB4uOFyagT6qDt9xNVu89cGti8atMQ4GtRuqB2BkQJlHt4v/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })