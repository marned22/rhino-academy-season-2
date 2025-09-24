const bookmarkedMessages = []; // Array to store bookmarked messages
const favoriteMessages = []; // Array to store favorite messages
const trashMessages = []; // Array to store trashed messages
let searchTimeout;

function displayInboxMessages() {
  const messages = getMessages().filter(
    (message) =>
      !bookmarkedMessages.some((msg) => msg.id === message.id) &&
      !favoriteMessages.some((msg) => msg.id === message.id) &&
      !trashMessages.some((msg) => msg.id === message.id)
  );
  const inboxContainer = document.getElementById("inbox-container");

  inboxContainer.innerHTML = "";

  messages.forEach((message) => {
    const messageElement = document.createElement("a");
    messageElement.classList.add(
      "list-group-item",
      "list-group-item-action",
      "unread"
    );
    messageElement.href = "#";
    messageElement.innerHTML = `
        <input type="checkbox" value="${message.id}" class="form-check-input me-1">
        <i data-message-id="${message.id}" class="btn-bookmark bi bi-bookmark-star"></i>
        <div class="list-content">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${message.subject}</h5>
            <small>${message.timestamp}</small>
            </div>
            <p class="mb-1">${message.content}</p>
            <small>${message.sender}</small>
        </div>
        `;

    messageElement.addEventListener("click", function (event) {
      const clickedElement = event.target;
      if (
        !clickedElement.classList.contains("form-check-input") &&
        !clickedElement.classList.contains("btn-bookmark")
      ) {
        toggleReadStatus(messageElement);
      }
    });

    const bookmarkIcon = messageElement.querySelector(".btn-bookmark");
    bookmarkIcon.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent click from triggering message read toggle
      toggleBookmark(message, bookmarkIcon);
    });

    inboxContainer.appendChild(messageElement);
  });
}

function toggleReadStatus(element) {
  element.classList.toggle("unread");
  element.classList.toggle("read");
}

function toggleSelectedMessages(action) {
  const checkboxes = document.querySelectorAll(".form-check-input:checked");
  checkboxes.forEach((checkbox) => {
    const messageElement = checkbox.parentElement;
    if (messageElement) {
      const messageId = parseInt(checkbox.value, 10);
      const message = getMessages().find((msg) => msg.id === messageId);
      if (message) {
        if (action === "favorite") {
          toggleFavorite(message);
        } else if (action === "trash") {
          moveToTrash(message);
        }
      }
      toggleReadStatus(messageElement);
    }
  });
}

function toggleBookmark(message, bookmarkIcon) {
  const isBookmarked = bookmarkedMessages.find(msg => msg.id === message.id);

  if (isBookmarked) {
    bookmarkedMessages.splice(bookmarkedMessages.indexOf(isBookmarked), 1);
    bookmarkIcon.classList.remove("bi-bookmark-star-fill");
    bookmarkIcon.classList.add("bi-bookmark-star");
  } else {
    bookmarkedMessages.push(message);
    bookmarkIcon.classList.remove("bi-bookmark-star");
    bookmarkIcon.classList.add("bi-bookmark-star-fill");
  }

  displayBookmarkedMessages();
  displayInboxMessages();
}

function toggleFavorite(message) {
  if (!favoriteMessages.find(msg => msg.id === message.id)) {
    favoriteMessages.push(message);
    displayFavoriteMessages();
    displayInboxMessages();
  }
}

function moveToTrash(message) {
  if (!trashMessages.find(msg => msg.id === message.id)) {
    trashMessages.push(message);
    displayTrashMessages();
    displayInboxMessages();
  }
}

function displayBookmarkedMessages() {
  const bookmarkContainer = document.getElementById("bookmark-container");
  bookmarkContainer.innerHTML = "";
  bookmarkedMessages.forEach((message) => createMessageElement(message, bookmarkContainer));
}

function displayFavoriteMessages() {
  const favoriteContainer = document.getElementById("favourites-container");
  favoriteContainer.innerHTML = "";
  favoriteMessages.forEach((message) => createMessageElement(message, favoriteContainer));
}

function displayTrashMessages() {
  const trashContainer = document.getElementById("trash-container");
  trashContainer.innerHTML = "";
  trashMessages.forEach((message) => createMessageElement(message, trashContainer));
}

function createMessageElement(message, container) {
  const messageElement = document.createElement("a");
  messageElement.classList.add("list-group-item", "list-group-item-action");
  messageElement.href = "#";
  messageElement.innerHTML = `
      <div class="list-content">
          <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${message.subject}</h5>
          <small>${message.timestamp}</small>
          </div>
          <p class="mb-1">${message.content}</p>
          <small>${message.sender}</small>
      </div>
  `;
  container.prepend(messageElement);
}

document.getElementById("messages-buttons").addEventListener("click", function (event) {
  if (event.target) {
    if (event.target.classList.contains("bi-book")) {
      toggleSelectedMessages("bookmark");
    } else if (event.target.classList.contains("bi-star")) {
      toggleSelectedMessages("favorite");
    } else if (event.target.classList.contains("bi-trash")) {
      toggleSelectedMessages("trash");
    }
  }
});
function setupSearch() {
  const searchInput = document.querySelector("#search-field input");

  searchInput.addEventListener("keyup", function () {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      const query = searchInput.value.trim();
      if (query.length >= 3) {
        performSearch(query);
      } else {
        displayInboxMessages();
      }
    }, 300);
  });
}

function performSearch(query) {
  const messages = getMessages();
  const lowerCaseQuery = query.toLowerCase();

  const filteredMessages = messages.filter(
    (message) =>
      message.subject.toLowerCase().includes(lowerCaseQuery) ||
      message.content.toLowerCase().includes(lowerCaseQuery)
  );

  activateInboxTab();

  const inboxContainer = document.getElementById("inbox-container");
  inboxContainer.innerHTML = "";

  if (filteredMessages.length > 0) {
    filteredMessages.forEach((message) =>
      createMessageElement(message, inboxContainer)
    );
  } else {
    inboxContainer.innerHTML = `<div class="no-results">No matching records were found.</div>`;
  }
}

function activateInboxTab() {
  const inboxTab = document.getElementById("inbox-tab");
  if (inboxTab) inboxTab.click();
}

window.onload = function () {
  setupSearch();
  displayInboxMessages();
  displayBookmarkedMessages();
  displayFavoriteMessages();
  displayTrashMessages();
};
