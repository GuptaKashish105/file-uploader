const imagePreview = (event) => {
    const file = event.target.files;  // will target the selected files
    const filesCount = file.length;  // count the number of files

    if(filesCount > 0) {
        const imageSource =  URL.createObjectURL(file[0]);   // image path

        const imagePreviewSelector = document.querySelector("#previewedImage");
        imagePreviewSelector.src = imageSource;  // assigning path from image source to previewed image selector

        imagePreviewSelector.style.display = "block";  // showing the element by blocking the display property
    }
};
