const noteInput = document.getElementById("note");
const noteList = document.getElementById("note-list");
const addNoteButton = document.getElementById("add-note");

addNoteButton.addEventListener("click", function () {
  const noteText = noteInput.value.trim();
  if (noteText.length > 0) {
    const noteListItem = document.createElement("li");
    noteListItem.textContent = noteText;
    noteList.appendChild(noteListItem);
    noteInput.value = "";
  }
});
