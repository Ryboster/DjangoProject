function toggleFold(){

    clientWidth = window.innerWidth;
	clientHeight = window.innerHeight;

    // WIDTHS
    if (clientHeight > clientWidth)
    {
        var SIDEBAR_WIDTH = "45%"
        var TEXT_CONTAINER_WIDTH = "47%";

    }
    else
    {
        var SIDEBAR_WIDTH = "15%";
        var TEXT_CONTAINER_WIDTH = "75%";
    }


    sidebarContainer = document.getElementById("sidebarContainer");
    sidebar = document.getElementById("sidebar");

    textContainer = document.getElementById("textContainer");

    if (sidebarContainer.style.display === "none")
    {

        document.getElementById("body").style.width = "100vw";
        sidebarContainer.style.display = "flex";
        sidebar.style.width = SIDEBAR_WIDTH;
        textContainer.style.width = TEXT_CONTAINER_WIDTH;
        foldButton = document.getElementById("foldButton");
        foldButton.textContent = ">";

    }
    else
    {
        document.getElementById("body").style.width = "97vw";
        textContainer.style.width = "89%";
        sidebarContainer.style.display = "none";
        sidebar.style.width = "0vw";
        foldButton = document.getElementById("foldButton");
        foldButton.textContent = "<";
    }
}