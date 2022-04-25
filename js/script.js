let searchBtn = document.querySelector("#search-btn");
let searchUser = document.querySelector("#search-user");

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
        } else {
          // Show profile
        }
      });
  } else {
    // Clear Profile
  }
});
