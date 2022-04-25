let searchBtn = document.querySelector("#search-btn");
let searchUser = document.querySelector("#search-user");
let ui = new UI();

searchBtn.addEventListener("click", (e) => {
  let userText = searchUser.value;

  if (userText !== "") {
    // Fetch API
    fetch(`https://api.github.com/users/${userText}`)
      .then((result) => result.json())
      .then((data) => {
        // console.log(data);
        if (data.message === "Not Found") {
          // Show alert
          ui.showAlert("User not Found", "alert alert-danger");
        } else {
          // Show profile
          ui.showProfile(data);
        }
      });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
