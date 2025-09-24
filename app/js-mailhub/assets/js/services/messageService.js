// Service to manage message operations
class MessageService {
  constructor() {
    this.bookmarkedMessages = [];
    this.favoriteMessages = [];
    this.trashMessages = [];
  }

  getBookmarkedMessages() {
    return this.bookmarkedMessages;
  }

  getFavoriteMessages() {
    return this.favoriteMessages;
  }

  getTrashMessages() {
    return this.trashMessages;
  }

  getInboxMessages() {
    return getMessages().filter(
      (message) =>
        !this.bookmarkedMessages.some((msg) => msg.id === message.id) &&
        !this.favoriteMessages.some((msg) => msg.id === message.id) &&
        !this.trashMessages.some((msg) => msg.id === message.id)
    );
  }

  toggleBookmark(message) {
    const isBookmarked = this.bookmarkedMessages.find(msg => msg.id === message.id);

    if (isBookmarked) {
      this.bookmarkedMessages.splice(this.bookmarkedMessages.indexOf(isBookmarked), 1);
      return false; // Not bookmarked anymore
    } else {
      this.bookmarkedMessages.push(message);
      return true; // Now bookmarked
    }
  }

  addToFavorites(message) {
    if (!this.favoriteMessages.find(msg => msg.id === message.id)) {
      this.favoriteMessages.push(message);
      return true;
    }
    return false;
  }

  moveToTrash(message) {
    if (!this.trashMessages.find(msg => msg.id === message.id)) {
      this.trashMessages.push(message);
      return true;
    }
    return false;
  }

  searchMessages(query) {
    const messages = getMessages();
    const lowerCaseQuery = query.toLowerCase();

    return messages.filter(
      (message) =>
        message.subject.toLowerCase().includes(lowerCaseQuery) ||
        message.content.toLowerCase().includes(lowerCaseQuery)
    );
  }
}

// Create global instance
const messageService = new MessageService();