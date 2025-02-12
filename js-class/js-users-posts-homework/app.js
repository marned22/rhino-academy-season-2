console.log("Users and posts exercise!");

const PAGINATE_URL =
  "https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}";

document.addEventListener("DOMContentLoaded", () => {
  const usersList = document.getElementById("user-list");
  const postList = document.getElementById("post-list");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const searchInput = document.getElementById("search");
  const postTitle = document.getElementById("post-title");
  const postBody = document.getElementById("post-body");
  const postForm = document.getElementById("post-form");
  const message = document.getElementById("message");
  const sortSelected = document.getElementById("sort");

  let allPosts = [];
  const limit = 7;
  let currentPage = 1;

  const showMessage = (text, isError = false) => {
    message.textContent = text;
    message.style.color = isError ? "red" : "green";
    message.classList.remove("hidden");
    message.innerHTML = `<li>${text}</li>`;
    setTimeout(() => message.classList.add("hidden"), 3000);
  };

  async function fetchUsers() {
    try {
      let reponse = await fetch(`https://jsonplaceholder.typicode.com/users`);
      console.log("Users response:", reponse);
      let users = await reponse.json();
      console.log("Users:", users);
      usersList.innerHTML = users
        .map((user) => `<li>${user.name} - ${user.email}</li>`)
        .join("");
    } catch (error) {
      console.error("Error fetching users:", error);
      showMessage("Failed to fetch users", true);
    }
  }

  async function fetchPosts(page) {
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
      );
      console.log("Posts response:", response);
      allPosts = response.data;
      console.log("All Posts:", allPosts);
      displayPosts(allPosts);
      prevBtn.disabled = page === 1;
    } catch (error) {
      console.error("Error fetching posts:", error);
      showMessage("Failed to fetch posts", true);
    }
  }

  //Delete post

  async function deletePosts(postId, postElement) {
    try{
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      postElement.remove();
      allPosts = allPosts.filter((post) => post.id !== postId);
    } catch (error) {
        console.log(error)
    }
  }

  function displayPosts(posts) {
    postList.innerHTML = posts
      .map(
        (post) =>
          `<li>
        <strong>${post.title}</strong><br>${post.body}
        <button class='delete-btn' data-id="${post.id}">X</button>
      </li>`
      )
      .join("");
      const deleteButtons = document.getElementsByClassName('delete-btn');
      Array.from(deleteButtons).forEach((button) => {
          button.addEventListener('click', () => {
              const postId = button.dataset.id
              const postElement = button.closest('li')
              deletePosts(postId, postElement)
          });
      });
  }

  //Sorting

  const sortByAsc = (posts) => {
    return posts.sort((a, b) => a.title.localeCompare(b.title));
  };

  const sortByDesc = (posts) => {
    return posts.sort((a, b) => b.title.localeCompare(a.title));
  };
 
  const sortedPost = () => {
    const selectedValue = sortSelected.value
    let sortedPosts;

    if (selectedValue === "asc") {
      sortedPosts = sortByAsc([...allPosts])
    } else {
      sortedPosts = sortByDesc([...allPosts])
    }


    displayPosts(sortedPosts)
  }

  sortSelected.addEventListener("change", sortedPost);

  const searchPosts = () => {
    const searchTearm = searchInput.value.toLowerCase();
    const filteredPosts = allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTearm)
    );
    displayPosts(filteredPosts);
  };

  searchInput.addEventListener("input", searchPosts);


  //pagination

  function previousPage(){
    if(currentPage > 1){
      currentPage--
      fetchPosts(currentPage)
    }
  }

  function nextPage(){
      currentPage++
      fetchPosts(currentPage)
  }

  prevBtn.addEventListener('click', previousPage)
  nextBtn.addEventListener('click', nextPage)

  const addPost = async (e) => {
    e.preventDefault();

    const newPost = {
      title: postTitle.value,
      body: postBody.value,
      userId: 1,
    };

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      allPosts.unshift(response.data);
      displayPosts(allPosts);
      postForm.reset();
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  postForm.addEventListener("submit", addPost);

  fetchUsers();
  fetchPosts(currentPage);
});

// Homework:
// 1. Implement sort on the posts list.

// 2. Implement delete post functionality.
// 3. Implement pagination. (use PAGINATE_URL in the request)
