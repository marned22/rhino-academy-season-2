// Search functionality helper
class SearchHelper {
  constructor() {
    this.searchTimeout = null;
  }

  setupSearch() {
    const searchInput = document.querySelector("#search-field input");
    if (!searchInput) return;

    searchInput.addEventListener("keyup", () => {
      clearTimeout(this.searchTimeout);

      this.searchTimeout = setTimeout(() => {
        const query = searchInput.value.trim();
        if (query.length >= 3) {
          this.performSearch(query);
        } else {
          displayInboxMessages();
        }
      }, 300);
    });
  }

  performSearch(query) {
    const filteredMessages = messageService.searchMessages(query);
    const inboxContainer = DOMHelper.clearContainer("inbox-container");

    if (filteredMessages.length > 0) {
      filteredMessages.forEach((message) => {
        const messageElement = DOMHelper.createElement(message, false);
        inboxContainer.appendChild(messageElement);
      });
    } else {
      DOMHelper.showNoResults(inboxContainer);
    }
  }
}

// Create global instance
const searchHelper = new SearchHelper();