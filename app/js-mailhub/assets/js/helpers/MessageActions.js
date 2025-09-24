// Message action handlers
class MessageActions {
  static toggleSelectedMessages(action) {
    const checkboxes = document.querySelectorAll(".form-check-input:checked");
    
    checkboxes.forEach((checkbox) => {
      const messageElement = checkbox.parentElement;
      if (messageElement) {
        const messageId = parseInt(checkbox.value, 10);
        const message = getMessages().find((msg) => msg.id === messageId);
        
        if (message) {
          if (action === "favorite") {
            messageService.addToFavorites(message);
            displayFavoriteMessages();
          } else if (action === "trash") {
            messageService.moveToTrash(message);
            displayTrashMessages();
          }
          
          displayInboxMessages();
          DOMHelper.toggleReadStatus(messageElement);
        }
      }
    });
  }

  static setupMessageButtons() {
    const buttonsContainer = document.getElementById("messages-buttons");
    if (!buttonsContainer) return;

    buttonsContainer.addEventListener("click", function (event) {
      if (event.target) {
        if (event.target.classList.contains("bi-book")) {
          MessageActions.toggleSelectedMessages("bookmark");
        } else if (event.target.classList.contains("bi-star")) {
          MessageActions.toggleSelectedMessages("favorite");
        } else if (event.target.classList.contains("bi-trash")) {
          MessageActions.toggleSelectedMessages("trash");
        }
      }
    });
  }
}