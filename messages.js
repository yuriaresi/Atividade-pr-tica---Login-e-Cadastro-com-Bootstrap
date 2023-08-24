const loggedUserId = sessionStorage.getItem('userId');
if (! loggedUserId)
  window.location.href = "index.html";

//
axios.get("https://growdev-final-introducao-backend.onrender.com/user_messages/"+loggedUserId)
  .then(function(response){
    let finalHTML = "";
    for(const msg of response.data)
    {
      finalHTML += `
      <strong>Titulo:</strong> ${msg.title}<br>
      <strong>Descrição:</strong> ${msg.description}<br>
      <hr>
      `;
    }

    document.getElementById("messages").innerHTML = finalHTML;
  })
  .catch(function (error) {
    console.log(error);
  });


function logout() {
  sessionStorage.clear();
  window.location.href = "index.html";
}
