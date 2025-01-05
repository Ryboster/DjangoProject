function nextImage()
    {
        leftImage = document.getElementById("secondaryContainerLeft").src;
        mainImage = document.getElementById("primaryContainer").src;
        rightImage = document.getElementById("secondaryContainerRight").src;

        document.getElementById("secondaryContainerLeft").src = rightImage;
        document.getElementById("primaryContainer").src = leftImage;
        document.getElementById("secondaryContainerRight").src = mainImage;

    }
    function previousImage()
    {
        leftImage = document.getElementById("secondaryContainerLeft").src;
        mainImage = document.getElementById("primaryContainer").src;
        rightImage = document.getElementById("secondaryContainerRight").src;

        document.getElementById("secondaryContainerLeft").src = mainImage;
        document.getElementById("primaryContainer").src = rightImage;
        document.getElementById("secondaryContainerRight").src = leftImage;
    }

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
        var ID = document.getElementsByClassName("textContainer")[0].id;

        form.style.display = '';

        form.querySelector("input[name='ID']").value = ID;
        form.querySelector("input[name='table']").value = table;
        form.querySelector("input[name='column']").value = column;
        

    }

    function OpenEditOverlay(button) {

        var form = document.getElementById('editFormOverlay');

        var table = "Blog";
        var column = button.closest("div").parentElement.id;
        var ID = document.getElementsByClassName("textContainer")[0].id;
        

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
            console.log(images);
            console.log(typeof images);
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
        var ID = document.getElementsByClassName("textContainer")[0].id;

        form.querySelector('input[name="table"]').value = table;
        form.querySelector('input[name="column"]').value = column;
        form.querySelector('input[name="ID"]').value = ID;

        if (form.style.display === 'none' || form.style.display === '') {
            form.style.display = '';
        } else {
            form.style.display = 'none';
        }
    }

    function toggleDeletePostForm() {
        var form = document.getElementById("deletePostForm");

        var table = "Blog";
        var ID = document.getElementsByClassName("textContainer")[0].id;
        
        form.querySelector('input[name="ID"]').value = ID;
        form.querySelector('input[name="table"]').value = table;

        if (form.style.display === 'none' || form.style.display === '') {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
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