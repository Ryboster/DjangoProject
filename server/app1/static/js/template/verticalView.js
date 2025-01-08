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

function isVertical()
{
	clientWidth = window.innerWidth;
	clientHeight = window.innerHeight;

	if (clientHeight > clientWidth)
	{
		sidebar = document.getElementById("sidebar");
		sidebar.style.width = "45%";

		//sidebarContainer = document.getElementById("sidebarContainer");
		//sidebarContainer.style.width = "30vw";

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

		document.getElementById("navbar").style.height = "5vh";
		document.getElementById("logoContainer").style.display = "none";
		//document.getElementById("Paragraph").style.textAlign = "center";

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
		dropDownMenuButton.onclick = toggleDropDownMenu;

		dropDownIcon = document.createElement("img")
		dropDownIcon.src = "/static/assets/icons/dropDownMenu.svg";

		dropDownMenuButton.style.marginRight = "auto";
		dropDownMenuButton.style.width = "8vw";
		dropDownMenuButton.style.height = "100%";

		dropDownMenuButton.appendChild(dropDownIcon);
		dropDownIcon.style.width = "80%";
		dropDownIcon.style.height = "80%";

		document.getElementById("navbar").appendChild(dropDownMenuButton);
		document.getElementById("background").appendChild(dropDownMenu);
	} 
}