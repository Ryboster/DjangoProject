function isVertical()
{
	clientWidth = window.innerWidth;
	clientHeight = window.innerHeight;
	const IS_VERTICAL = clientHeight > clientWidth;
	headTag = document.getElementById("head");

	const HORIZONTAL_SIDEBAR_WIDTH = document.getElementById("sidebar").style.width;
	const HORIZONTAL_SIDEBAR_CONTAINER_WIDTH = document.getElementById("sidebarContainer").style.width;
	const HORIZONTAL_TEXT_CONTAINER_WIDTH = document.getElementById("textContainer").style.width
	const HORIZONTAL_FOLD_BUTTON_WIDTH = document.getElementById("foldButton").style.width;
	const HORIZONTAL_NAVBAR_HEIGHT = document.getElementById("navbar").style.height;

	const VERTICAL_SIDEBAR_WIDTH = "90%";
	const VERTICAL_SIDEBAR_CONTAINER_WIDTH = "95%";
	const VERTICAL_FOLD_BUTTON_WIDTH = "5%";
	const VERTICAL_TEXT_CONTAINER_WIDTH = "90%";
	const VERTICAL_NAVBAR_HEIGHT = "16vh";

	headTag.setAttribute("data-horizontal-sidebar-width", HORIZONTAL_SIDEBAR_WIDTH);
	headTag.setAttribute('data-horizontal-sidebar-container-width', HORIZONTAL_SIDEBAR_CONTAINER_WIDTH)
	headTag.setAttribute('data-horizontal-text-container-width', HORIZONTAL_TEXT_CONTAINER_WIDTH);
	headTag.setAttribute('data-horizontal-fold-button-width', HORIZONTAL_FOLD_BUTTON_WIDTH);
	headTag.setAttribute('data-horizontal-navbar-height', HORIZONTAL_NAVBAR_HEIGHT)

	headTag.setAttribute("data-vertical-sidebar-width", VERTICAL_SIDEBAR_WIDTH);
	headTag.setAttribute('data-vertical-sidebar-container-width', VERTICAL_SIDEBAR_CONTAINER_WIDTH)
	headTag.setAttribute('data-vertical-text-container-width', VERTICAL_TEXT_CONTAINER_WIDTH);
	headTag.setAttribute('data-vertical-fold-button-width', VERTICAL_FOLD_BUTTON_WIDTH);
	headTag.setAttribute('data-vertical-navbar-height', VERTICAL_NAVBAR_HEIGHT);


	if (IS_VERTICAL)
	{
		headTag.setAttribute('data-is-vertical', true);
		switchToVertical();
	} else {
		headTag.setAttribute('data-is-vertical', false);
	}	

}

function switchToVertical()
{
	
	hideHorizontalElements();
	var { dropDownMenu, dropDownMenuButton } = createVerticalUI();
	toggleFold();

	//document.getElementById("navbar").style.height = "5vh";
	document.getElementById("logoContainer").style.display = "none";

	document.getElementById("navbar").appendChild(dropDownMenuButton);
	document.getElementById("background").appendChild(dropDownMenu);

}



function toggleDropDownMenu()
{
	dropDownMenu = document.getElementById("dropDownMenu");
	
	if (dropDownMenu.style.display === "none"){

		dropDownMenu.style.display = "flex";
		dropDownMenu.style.flexDirection = "column";
		} else {
			dropDownMenu.style.display = "none";
		}

}

function hideHorizontalElements()
{
	homeButton = document.getElementById("homeButton");
	projectsButton = document.getElementById("projectsButton");
	experienceButton = document.getElementById("experienceButton");
	blogButton = document.getElementById("blogButton");
	contactButton = document.getElementById("contactButton");

	homeButton.style.display = "none";
	projectsButton.style.display = "none";
	experienceButton.style.display = "none";
	blogButton.style.display = "none";
	contactButton.style.display = "none";
}


function createVerticalUI()
{
	VhomeButton = document.createElement("div");
	VprojectsButton = document.createElement("div");
	VexperienceButton = document.createElement("div");
	VblogButton = document.createElement("div");
	VcontactButton = document.createElement("div");

	VhomeButton.appendChild(homeButton.querySelector("a").cloneNode(true));
    VprojectsButton.appendChild(projectsButton.querySelector("a").cloneNode(true));
    VexperienceButton.appendChild(experienceButton.querySelector("a").cloneNode(true));
    VblogButton.appendChild(blogButton.querySelector("a").cloneNode(true));
    VcontactButton.appendChild(contactButton.querySelector("a").cloneNode(true));

	dropDownMenu = document.createElement("div");
	dropDownMenu.id = "dropDownMenu"
	dropDownMenu.style.backgroundColor ="#2C2C2C";
	dropDownMenu.style.display = "none";
	dropDownMenu.appendChild(VhomeButton);
	dropDownMenu.appendChild(VprojectsButton);
	dropDownMenu.appendChild(VexperienceButton);
	dropDownMenu.appendChild(VblogButton);
	dropDownMenu.appendChild(VcontactButton);

	dropDownMenuButton = document.createElement("button");
	dropDownMenuButton.id = "dropDownMenuButton"
	dropDownMenuButton.onclick = toggleDropDownMenu;

	dropDownIcon = document.createElement("img")
	dropDownIcon.src = "/static/assets/icons/dropDownMenu.svg";
	dropDownIcon.style.width = "80%";
	dropDownIcon.style.height = "80%";

	dropDownMenuButton.style.marginRight = "auto";

	dropDownMenuButton.style.height = "100%";
	dropDownMenuButton.style.width = `${dropDownMenuButton.offsetHeight}px`;
	dropDownMenuButton.appendChild(dropDownIcon);

	return {dropDownMenu, dropDownMenuButton};
}