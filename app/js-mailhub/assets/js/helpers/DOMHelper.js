// DOM manipulation helpers
class DOMHelper {
  static createElement(message, includeControls = false) {
    const messageElement = document.createElement("a");
    messageElement.classList.add("list-group-item", "list-group-item-action");
    messageElement.href = "#";

    if (includeControls) {
      messageElement.classList.add("unread");
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

      // Add event listeners for controls
      this.addMessageEventListeners(messageElement, message);
    } else {
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
    }

    return messageElement;
  }

  static addMessageEventListeners(messageElement, message) {
    // Click to toggle read status
    messageElement.addEventListener("click", function (event) {
      const clickedElement = event.target;
      if (
        !clickedElement.classList.contains("form-check-input") &&
        !clickedElement.classList.contains("btn-bookmark")
      ) {
        DOMHelper.toggleReadStatus(messageElement);
      }
    });

    // Bookmark toggle
    const bookmarkIcon = messageElement.querySelector(".btn-bookmark");
    bookmarkIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      const isBookmarked = messageService.toggleBookmark(message);
      
      if (isBookmarked) {
        bookmarkIcon.classList.remove("bi-bookmark-star");
        bookmarkIcon.classList.add("bi-bookmark-star-fill");
      } else {
        bookmarkIcon.classList.remove("bi-bookmark-star-fill");
        bookmarkIcon.classList.add("bi-bookmark-star");
      }

      // Refresh displays
      displayBookmarkedMessages();
      displayInboxMessages();
    });
  }

  static toggleReadStatus(element) {
    element.classList.toggle("unread");
    element.classList.toggle("read");
  }

  static clearContainer(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = "";
    }
    return container;
  }

  static showNoResults(container, message = "No matching records were found.") {
    container.innerHTML = `<div class="no-results">${message}</div>`;
  }
}