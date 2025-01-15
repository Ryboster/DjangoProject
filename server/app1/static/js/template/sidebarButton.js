
function toggleFold()
{
    textContainer = document.getElementById("textContainer");
    sidebarContainer = document.getElementById("sidebarContainer");
    sidebar = document.getElementById("sidebar");
    foldButton = document.getElementById("foldButton");
    headTag = document.getElementById("head");

    var IS_VERTICAL = headTag.getAttribute("data-is-vertical") === "true";
    var IS_FOLDED = sidebarContainer.style.display === "none";
    

    if (IS_VERTICAL)
    {
        if (IS_FOLDED)
        {
            textContainer.style.width = "0%";
            textContainer.style.display = "none";
            
            sidebar.style.width = headTag.getAttribute("data-vertical-sidebar-width");

            sidebarContainer.style.display = "flex";
            sidebarContainer.style.width = headTag.getAttribute("data-vertical-sidebar-container-width");

            foldButton.style.width = headTag.getAttribute("data-vertical-fold-button-width");

            foldButton.textContent = ">";
        }
        

        else {
            textContainer.style.width = headTag.getAttribute("data-vertical-text-container-width");
            textContainer.style.display = "flex";
            
            sidebar.style.width = "4vw";

            sidebarContainer.style.display = "none";
            sidebarContainer.style.width = "0%"
            
            foldButton.style.width = "100%";

            foldButton.textContent = "<";
        }

        

    }

    else // IS_HORIZONTAL
    {
        if (IS_FOLDED)
            
        {
            sidebar.style.width = headTag.getAttribute("data-horizontal-sidebar-width");

            sidebarContainer.style.width = headTag.getAttribute("data-horizontal-sidebar-container-width");;
            sidebarContainer.style.display = "flex";

            textContainer.style.width = headTag.getAttribute("data-horizontal-text-container-width");

            foldButton.style.width = "10%";
        
            foldButton.textContent = ">";
        }

        else // IS_UNFOLDED
        {
            sidebarContainer.style.width = "0%";
            sidebarContainer.style.display = "none";

            sidebar.style.width = "1.5vw";
            foldButton.style.width = "100%";

            textContainer.style.width = "90%";

            foldButton.textContent = "<";

        }

        
    }

   

}