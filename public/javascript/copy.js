function copy() {
  const URL = document.getElementById("URL")
  navigator.clipboard.writeText(URL.innerText)
    .then(() => alert('copied'))
    .catch(error => console.log(error))
}