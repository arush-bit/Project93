user_id = document.getElementById("user_name").value;

function addUser()
{
user_id = document.getElementById("user_name").value;
localStorage.setItem("User name",user_id);
}