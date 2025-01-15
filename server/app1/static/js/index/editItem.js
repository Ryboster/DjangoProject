
function createConfirmationButton()
{
    var button = document.createElement("button");
    button.type = "submit";
    button.id = 'submitButton';
    button.textContent = "Confirm";

    return button;
}


function displayOverlay()
{
    var formOverlay = document.getElementById("formOverlay");
    formOverlay.style.display = "";
}


function editSkillItem(button)
{
    var categoryID = button.getAttribute("data-categoryID");
    var form = document.getElementById("form");

    var skillItem = button.closest(".skillItem");
    var barValue = skillItem.querySelector("#skillProgress").style.width;
    var textValue = skillItem.querySelector("#skillItemCaption").textContent;

    const names =  ["ID", "barValue", "textValue"];
    const values = [categoryID, barValue, textValue];


    for (let i = 0; i < names.length; i ++)
    {
        var inputContainer = document.createElement("div");
        inputContainer.style.display = "flex";
        inputContainer.style.flexDirection = "row";

        var inputField = document.createElement("input");
        inputField.style.marginLeft = "auto";
        inputField.name = names[i];
        inputField.value = values[i];

        var inputLabel = document.createElement("label");
        inputLabel.style.marginRight = "auto";
        inputLabel.for = names[i];
        inputLabel.textContent = `${names[i]}: `;

        if (names[i] === "ID")
            {
                inputField.disabled = true;
            }

            inputContainer.appendChild(inputLabel);
            inputContainer.appendChild(inputField);
            form.appendChild(inputContainer);
            
    }

    form.appendChild(createConfirmationButton());
    displayOverlay();
}



function editSkillCategory(button)
{
    var categoryID = button.getAttribute("data-categoryID");
    var form = document.getElementById("form");

    const names = ["ogID", "ID"];
    const values = ["Replace ", "With: "];

    for (let i = 0; i < names.length; i ++)
    {
        var inputContainer = document.createElement("div");
        inputContainer.style.display = "flex";
        inputContainer.style.flexDirection = "row";

        var inputField = document.createElement("input");
        inputField.style.marginLeft = "auto";
        inputField.name = names[i];
        inputField.value = categoryID;

        var inputLabel = document.createElement("label");
        inputLabel.style.marginRight = "auto";
        inputLabel.for = names[i];
        inputLabel.textContent = values[i];

        if (names[i] === "ogID")
        {
            inputField.disabled = true;
        }

        inputContainer.appendChild(inputLabel);
        inputContainer.appendChild(inputField);
        form.appendChild(inputContainer);

    }
    form.appendChild(createConfirmationButton());
    displayOverlay();
}


function editSocialItem(button)
{
    var socialContainer = button.closest(".socialContainer");
    var form = document.getElementById("form");

    var categoryID = button.getAttribute("data-categoryID");

    var imgValue = socialContainer.querySelector("#socialIcon").src.split("/");
    imgValue = imgValue[imgValue.length - 1];
    var textValue = socialContainer.querySelector("#socialText").textContent;

    const names = [ "ID", "imgValue", "textValue" ];
    const values = [ categoryID, imgValue, textValue ];

    for (let i = 0; i < names.length; i ++)
    {
        console.log(values[i]);
        var inputContainer = document.createElement("div");
        inputContainer.style.display = "flex";
        inputContainer.style.flexDirection = "row";

        var inputField = document.createElement("input");
        inputField.style.marginLeft = "auto";
        inputField.name = names[i];
        inputField.value = values[i];

        var inputLabel = document.createElement("label");
        inputLabel.style.marginRight = "auto";
        inputLabel.for = names[i];
        inputLabel.textContent = `${names[i]}: `;

        if (names[i] === "ID")
        {
            inputField.disabled = true;
        }

        inputContainer.appendChild(inputLabel);
        inputContainer.appendChild(inputField);
        form.appendChild(inputContainer);

    }

    form.appendChild(createConfirmationButton());
    displayOverlay();
}