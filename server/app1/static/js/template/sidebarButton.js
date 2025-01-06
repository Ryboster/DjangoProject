function toggleFold(){

    clientWidth = window.innerWidth;
	clientHeight = window.innerHeight;

    if (clientHeight > clientWidth)
    {
        var width = "50vw";
    }
    else
    {
        var width = "15vw";
    }


    sidebarContainer = document.getElementById("sidebarContainer");
    sidebar = document.getElementById("sidebar");

    if (sidebarContainer.style.display === "none")
    {

        document.getElementById("body").style.width = "100vw";
        sidebarContainer.style.display = "flex";
        sidebar.style.width = width;
        foldButton = document.getElementById("foldButton");
        foldButton.textContent = ">";

    }
    else
    {
        document.getElementById("body").style.width = "97vw";
        sidebarContainer.style.display = "none";
        sidebar.style.width = "0vw";
        foldButton = document.getElementById("foldButton");
        foldButton.textContent = "<";
    }
}