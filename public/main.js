var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");


Array.from(thumbUp).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    fetch('messages/up/', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbUp': thumbUp
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
    fetch('messages/down', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbUp': thumbUp,
        'thumbDown': thumbDown
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function (element) {
  element.addEventListener("click", function () {
    const messageId = this.getAttribute("data-message-id");
    fetch(`/messages/${messageId}`, {
      method: "delete",
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log(data);
        window.location.reload(true);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  });
});