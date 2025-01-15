

function createAdminButtons()
{
    // EDIT Button
    var editItemButton = document.createElement("button");
    editItemButton.id = "editItemButton";
    editItemButton.className = "editItemButton";
    var editItemButtonImage = document.createElement("img");
    editItemButtonImage.style.width = "16px";
    editItemButtonImage.style.height = "16px";
    editItemButtonImage.src = staticUrls.editIcon;
    editItemButton.appendChild(editItemButtonImage);

    // REMOVE Button
    var removeItemButton = document.createElement("button");
    removeItemButton.id = "removeItemButton";
    removeItemButton.className = "removeItemButton";
    var removeItemButtonImage = document.createElement("img");
    removeItemButtonImage.style.width = "16px";
    removeItemButtonImage.style.height = "16px";
    removeItemButtonImage.src = staticUrls.trashIcon;
    removeItemButton.appendChild(removeItemButtonImage);

    return {editItemButton, removeItemButton}
}