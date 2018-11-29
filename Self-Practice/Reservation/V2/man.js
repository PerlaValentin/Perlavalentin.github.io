  const scriptURL = 'https://script.google.com/macros/s/AKfycbymu4Qmj9Pz7K_-hNCjKt0iTxNi7fVPQ47fM6-G_s9EIJpFNpo/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })