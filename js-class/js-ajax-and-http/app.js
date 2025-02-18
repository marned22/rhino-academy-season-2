class UserName {
  constructor(username) {
    this.username = username;
  }

  findUsername() {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => users.find((user) => user.username === this.username))
      .catch((error) => {
        console.log(error);
      });
  }

  setUserLocal() {
    localStorage.setItem("username", this.username);
  }

  getuserLocal() {
    return localStorage.getItem("username");
  }
}

function login(event) {
  event.preventDefault();

  let inputUsername = document.getElementById("username").value.trim();
  let userInstance = new UserName(inputUsername);
  let loginCard = document.getElementsByClassName("card");
  let addPostButton = document.getElementById("add-post-btn")

  userInstance.findUsername().then((foundUser) => {
    if (foundUser) {
      userInstance.setUserLocal();

      loginCard[0].style.display = "none";
      addPostButton.style.display = "block"

      fetchPosts().then((posts) => {
        const userPosts = posts.filter((post) => post.userId === foundUser.id);
        displayPosts(userPosts);
      });
    } else {
      console.log("User not found");
    }
  });
}

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

function displayPosts(posts) {
  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = "";

  if (posts.length === 0) {
    postsContainer.innerHTML = "<h1>No posts for user</h1>";
  }

  let accordion = document.createElement("div");
  accordion.classList.add("accordion");
  accordion.id = "postsAccordion";

  posts.forEach((post, index) => {
    const postElement = document.createElement("div");
    postElement.classList.add("accordion-item");

    postElement.innerHTML = `
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                    <strong>Post title:</strong> ${post.title}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" 
                aria-labelledby="heading${index}" data-bs-parent="#postsAccordion">
                <div class="accordion-body">
                    <strong>Post body:</strong> <br>
                    ${post.body}
                    <hr>
                    <h5>Comments:</h5>
                    <ul id="comments-${post.id}" class="list-group"></ul>
                </div>
            </div>
        `;

    accordion.appendChild(postElement);

    fetchComments(post.id);
  });

  postsContainer.appendChild(accordion);
}

function fetchComments(postId) {
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then((response) => response.json())
    .then((comments) => {
      const commentsList = document.getElementById(`comments-${postId}`);
      comments.forEach((comment) => {
        const commentItem = document.createElement("li");
        commentItem.classList.add("list-group-item");
        commentItem.innerHTML = `<strong>${comment.name}: </strong> ${comment.body}`;
        commentsList.appendChild(commentItem);
      });
    })
    .catch((error) => console.log(error));
}

document.getElementById("post-form").addEventListener("submit", function(event){
  event.preventDefault()

  const postTitle = document.getElementById("post-title").value.trim()
  const postBody = document.getElementById("post-body").value.trim()

  if(!postTitle || !postBody){
    alert("Please fill title and body")
  }

  let username = localStorage.getItem("username")

  if(!username){
    alert("User not logged in")
  }

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => users.find((user) => user.username === username))
    .then((user) => {
      if(!user){
        alert("User not found")
      }
      
      let newPost = {
        title: postTitle,
        body: postBody,
        userId: user.id,
      }

      return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost),
      })
      .then((response) => response.json())
      .then((data) =>{
        console.log(data)
        addPostToUI(data)
        document.getElementById("post-form").reset()
        document.querySelector('[data-bs-dismiss="modal"]').click()
      })
      .catch((error) => console.log(error))
    })
})

function addPostToUI(post) {
  const postsContainer = document.getElementById("posts-container");

  let postElement = document.createElement("div");
  postElement.classList.add("accordion-item");
  postElement.innerHTML = `
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse">
        <strong>Post title:</strong> ${post.title}
      </button>
    </h2>
    <div class="accordion-collapse collapse">
      <div class="accordion-body">
        <strong>Post body:</strong> <br>
        ${post.body}
      </div>
    </div>
  `;

  postsContainer.prepend(postElement);
}


document.getElementById("login-form").addEventListener("submit", login);
