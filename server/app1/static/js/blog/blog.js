

function nextImage()
    {

        var leftImageContainer = document.getElementById("secondaryContainerLeft");
        var middleImageContainer = document.getElementById("primaryContainer");
        var rightImageContainer = document.getElementById("secondaryContainerRight");

        var imagesArr = JSON.parse(document.getElementById('imagesList').textContent);

        if (imagesArr.length > 3)
        {
            var imageContainers = document.getElementById("Images").querySelectorAll("img");
            var maxImageIndex = imagesArr.length - 1;

            var splitPath = imageContainers[2].src.split("/");
            var highestDisplayedPicture = splitPath[splitPath.length - 1];
            var rootDir = "";

            console.log("highest displayed picture: ", highestDisplayedPicture);
            // Get static directory for images
            for (let i = 0; i < splitPath.length - 1; i ++)
            {
                rootDir += `${splitPath[i]}` + "/";
            }

            // Find the index for the highest picture,
            // and ensure pictures stay within the index range
            for (let i = 0; i < imagesArr.length; i ++)
            {
                if (imagesArr[i] === highestDisplayedPicture)
                {
                    if (i < maxImageIndex)
                    {
                        var rightImage = imagesArr[i + 1];
                        var middleImage = imagesArr[i];
                        var leftImage = (i - 1 > -1) ? imagesArr[i - 1] : imagesArr[maxImageIndex];
                    }
                    else {
                        var rightImage = imagesArr[0];
                        var middleImage = imagesArr[i];
                        var leftImage = (i - 1 > -1) ? imagesArr[i - 1]  : imagesArr[maxImageIndex];
                    }
                }            
            }

            leftImageContainer.src = rootDir + leftImage;
            middleImageContainer.src = rootDir + middleImage;
            rightImageContainer.src = rootDir + rightImage;
        }
        else {
            var leftImagePath = leftImageContainer.src;
            var middleImagePath = middleImageContainer.src;
            var rightImagePath = rightImageContainer.src;

            leftImageContainer.src = rightImagePath;
            middleImageContainer.src = leftImagePath;
            rightImageContainer.src = middleImagePath;
        }
        
    }
    function previousImage()
    {
        var leftImageContainer = document.getElementById("secondaryContainerLeft");
        var middleImageContainer = document.getElementById("primaryContainer");
        var rightImageContainer = document.getElementById("secondaryContainerRight");

        var imagesArr = JSON.parse(document.getElementById('imagesList').textContent);

        if (imagesArr.length > 3)
            {
                var imageContainers = document.getElementById("Images").querySelectorAll("img");
                var maxImageIndex = imagesArr.length - 1;
                

                var splitPath = imageContainers[0].src.split("/");

                var lowestDisplayedPicture = splitPath[splitPath.length - 1];
                console.log("lowest displayed picture: ", lowestDisplayedPicture);
                var rootDir = "";
    
                // Get static directory for images
                for (let i = 0; i < splitPath.length - 1; i ++)
                {
                    rootDir += `${splitPath[i]}` + "/";
                }
    
                // Find the index for the lowest picture,
                // and handle image switching
                for (let i = 0; i < imagesArr.length; i ++)
                {
                    if (imagesArr[i] === lowestDisplayedPicture)
                    {
                        if (i > 0)
                        {
                            var leftImage = imagesArr[i - 1];
                            var middleImage = imagesArr[i];
                            var rightImage = (i + 1 > maxImageIndex)?  imagesArr[0] : imagesArr[i + 1];
                        }
                        else {
                            var leftImage = imagesArr[maxImageIndex];
                            var middleImage = imagesArr[i];
                            var rightImage = (i + 1 > maxImageIndex)? imagesArr[0] : imagesArr[i + 1];
                        }
                    }            
                }
    
                leftImageContainer.src = rootDir + leftImage;
                middleImageContainer.src = rootDir + middleImage;
                rightImageContainer.src = rootDir + rightImage;
            }


        else {

            var leftImagePath = document.getElementById("secondaryContainerLeft").src;
            var middleImagePath = document.getElementById("primaryContainer").src;
            var rightImagePath = document.getElementById("secondaryContainerRight").src;
            
            leftImageContainer.src = middleImagePath;
            middleImageContainer.src = rightImagePath;
            rightImageContainer.src = leftImagePath
        }
    }

/////////////////////////////////////////

    function selectImage(image)
    {
        overlay = document.getElementById("imageOverlay");
        overlay.style.display = '';
        overlay.firstElementChild.src = image.src;
    }

    function OpenAddPictureOverlay(button)
    {
        var form = document.getElementById('addPictureFormOverlay');

        var table = "Blog";
        var column = button.closest("div").parentElement.id;
        var ID = document.getElementsByClassName("textContainer")[0].dataset.recordId;

        form.style.display = '';

        form.querySelector("input[name='ID']").value = ID;
        form.querySelector("input[name='table']").value = table;
        form.querySelector("input[name='column']").value = column;
        
    }

    function OpenEditOverlay(button) {

        var form = document.getElementById('editFormOverlay');

        var table = "Blog";
        var column = button.closest("div").parentElement.id;
        var ID = document.getElementsByClassName("textContainer")[0].dataset.recordId;
        

        if (column === "Paragraph") {
            var currentValue = button.closest("div").parentElement.querySelector("#content").textContent;
            document.getElementById("editPicturesContainer").style.display = "none";
            form.querySelector('input[name="new_value"]').disabled = true;
            form.querySelector('input[name="new_value"]').style.display = "none";

            textarea = form.querySelector('textarea[name="new_value"]');
            
            textarea.style.display = '';
            textarea.style.resize = "none";
            textarea.style.width = '100%';
            textarea.style.minHeight = "200px";
            
            textarea.disabled = false;

            textarea.value = currentValue;
            textarea.style.height = '';
            textarea.style.height = textarea.scrollHeight + 'px';

        } else if (column === "Pictures") {
            console.log(document.getElementById('imagesList').textContent);
            console.log(document.getElementById('imagesList'));
            var images = JSON.parse(document.getElementById('imagesList').textContent);
            var keyIndex = 0;

            form.querySelector('input[name="new_value"]').style.display = "none";
            form.querySelector('textarea[name="new_value"]').style.display = 'none';
            form.querySelector('input[name="new_value"]').required = false;

            container = document.getElementById("editPicturesContainer");
            container.innerHTML = "";
            container.style.display = "";

            if (Array.isArray(images)) {
                images.forEach((x) => {

                    var inputField = document.createElement("input");
                    
                    inputField.value = x;
                    inputField.required = false;
                    inputField.name = keyIndex;
    
                    container.appendChild(inputField);
                    keyIndex ++;
                });
               
            }
             


        } else {
            var currentValue = button.closest("div").parentElement.querySelector("#content").textContent;
            document.getElementById("editPicturesContainer").style.display = "none";
            form.querySelector('input[name="new_value"]').disabled = false;
            form.querySelector('input[name="new_value"]').style.display = "";
            
            form.querySelector('textarea[name="new_value"]').style.display = 'none';
            form.querySelector('textarea[name="new_value"]').disabled = true;

            form.querySelector('input[name="new_value"]').value = currentValue;
        }

        
        form.querySelector('input[name="table"]').value = table;
        form.querySelector('input[name="column"]').value = column;
        form.querySelector('input[name="ID"]').value = ID;
        console.log("opening edit overlay");
        console.log("table:", table);

        

        if (form.style.display === 'none' || form.style.display === '') {
            form.style.display = '';
        }
    }


    function toggleDeleteForm(button) {
        var form = document.getElementById("deleteFormOverlay");

        var table = "Blog";
        var column = button.closest("div").parentElement.id;
        var ID = document.getElementsByClassName("textContainer")[0].dataset.recordId;

        form.querySelector('input[name="table"]').value = table;
        form.querySelector('input[name="column"]').value = column;
        form.querySelector('input[name="ID"]').value = ID;

        if (form.style.display === 'none' || form.style.display === '') {
            form.style.display = '';
        } else {
            form.style.display = 'none';
        }
    }

    function openDeletePostForm() {
        var form = document.getElementById("deletePostOverlay");

        var table = "Blog";
        var ID = document.getElementsByClassName("textContainer")[0].dataset.recordId;
        
        form.querySelector('input[name="ID"]').value = ID;
        form.querySelector('input[name="table"]').value = table;

        if (form.style.display === 'none' || form.style.display === '') {
            form.style.display = '';
        }
    }

    function toggleCreateForm() {
        var form = document.getElementById("createForm");

        var table = "Blog"

        form.querySelector('input[name="table"]').value = table;
    
        if (form.style.display === 'none' || form.style.display === '') {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    }