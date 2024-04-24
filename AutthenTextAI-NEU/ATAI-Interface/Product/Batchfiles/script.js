

document.addEventListener('DOMContentLoaded', function() {

    for (let i = 1; i <= 10; i++) {
        const clearButton = document.getElementById(`clearBtn${i}`);
        const inputElement = document.getElementById(`inpFile${i}`);
     

        clearButton.addEventListener('click', function() {
            inputElement.value = ''; // Clear the selected file
            clearButton.style.display = 'none'; // Hide the clear button
            inputElement.classList.remove('has-files');
            inputElement.classList.remove('border-black');
        });

        inputElement.addEventListener('change', function() {
            if (this.files && this.files.length > 0) {
                clearButton.style.display = 'inline-block';
                this.classList.add('has-files');
               
                
            } else {
                clearButton.style.display = 'none';
                this.classList.remove('has-files');
                
            }
        });
    }

    function uploadFile(fileInputId) {
        var fileInput = document.getElementById(fileInputId);
        var file = fileInput.files[0];
        
    
        if (!file) {
            alert('Please select a file.');
            return;
        }
    
        const url = "http://localhost:3000/api/detect/detectFile";
        const formData = new FormData();
        formData.append('file', file);
    
        return axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(function(response) {
                console.log(response.data.data);
                const data = response.data.data;
                
    
                return data; // Return the processed data
            })
            .catch(function(error) {
                console.error('Error uploading file:', error);
                // Handle error here
                throw error; // Rethrow the error to be caught by the caller
            });
    }

    document.getElementById('btnUpload1').addEventListener('click', function() {
        // Call the uploadFile function and assign the returned promise to data1
        uploadFile('inpFile1')
            .then(function(data) {
                let data1 = data; // Assign the processed data to data1
                data = data1;
                console.log(data);
                const extractedAttributes = {
                    h: data.h, // Extract 'h' attribute
                    isHuman: data.isHuman,
                    feedback: data.feedback,
                    input_text: data.input_text,
                    specialIndexes: data.specialIndexes,
                    additional_feedback: data.additional_feedback,
                    aiWords: data.aiWords, // Extract 'aiWords' attribute
                    textWords: data.textWords, // Extract 'textWords' attribute
                    fakePercentage: data.fakePercentage, // Extract 'fakePercentage' attribute
                    originalParagraph: data.originalParagraph // Extract 'originalParagraph' attribute
                };
                var btnViewResult1 = document.getElementById(`btnViewResult1`);
                btnViewResult1.removeAttribute("disabled");
                localStorage.setItem("extractedAttributes", JSON.stringify(extractedAttributes));
    
            })
            .catch(function(error) {
                console.error('Error uploading file:', error);
                // Display an error message to the user
                alert('An error occurred while uploading the file. Please try again later.');
            });
    });

    document.getElementById('btnUpload2').addEventListener('click', function() {
        // Call the uploadFile function and assign the returned promise to data1
        uploadFile('inpFile2')
            .then(function(data) {
                let data2 = data; // Assign the processed data to data1
                data = data2;
                console.log(data);
                const extractedAttributes = {
                    h: data.h, // Extract 'h' attribute
                    isHuman: data.isHuman,
                    feedback: data.feedback,
                    input_text: data.input_text,
                    specialIndexes: data.specialIndexes,
                    additional_feedback: data.additional_feedback,
                    aiWords: data.aiWords, // Extract 'aiWords' attribute
                    textWords: data.textWords, // Extract 'textWords' attribute
                    fakePercentage: data.fakePercentage, // Extract 'fakePercentage' attribute
                    originalParagraph: data.originalParagraph // Extract 'originalParagraph' attribute
                };
            
                localStorage.setItem("extractedAttributes", JSON.stringify(extractedAttributes));
                var btnViewResult2 = document.getElementById(`btnViewResult2`);
                btnViewResult2.removeAttribute("disabled");
    
            })
            .catch(function(error) {
                console.error('Error uploading file:', error);
                // Display an error message to the user
                alert('An error occurred while uploading the file. Please try again later.');
    
            });
    });
    
    document.getElementById('btnUpload3').addEventListener('click', function() {
        // Call the uploadFile function and assign the returned promise to data1
        uploadFile('inpFile3')
            .then(function(data) {
                let data3 = data; // Assign the processed data to data1
                data = data3;
                console.log(data);
                const extractedAttributes = {
                    h: data.h, // Extract 'h' attribute
                    isHuman: data.isHuman,
                    feedback: data.feedback,
                    input_text: data.input_text,
                    specialIndexes: data.specialIndexes,
                    additional_feedback: data.additional_feedback,
                    aiWords: data.aiWords, // Extract 'aiWords' attribute
                    textWords: data.textWords, // Extract 'textWords' attribute
                    fakePercentage: data.fakePercentage, // Extract 'fakePercentage' attribute
                    originalParagraph: data.originalParagraph // Extract 'originalParagraph' attribute
                };
            
                localStorage.setItem("extractedAttributes", JSON.stringify(extractedAttributes));
                var btnViewResult3 = document.getElementById(`btnViewResult3`);
                btnViewResult3.removeAttribute("disabled");
    
            })
            .catch(function(error) {
                console.error('Error uploading file:', error);
                // Display an error message to the user
                alert('An error occurred while uploading the file. Please try again later.');
    
            });
    });
    
    document.getElementById('btnUpload4').addEventListener('click', function() {
        // Call the uploadFile function and assign the returned promise to data1
        uploadFile('inpFile4')
            .then(function(data) {
                let data4 = data; // Assign the processed data to data1
                data = data4;
                console.log(data);
                const extractedAttributes = {
                    h: data.h, // Extract 'h' attribute
                    isHuman: data.isHuman,
                    feedback: data.feedback,
                    input_text: data.input_text,
                    specialIndexes: data.specialIndexes,
                    additional_feedback: data.additional_feedback,
                    aiWords: data.aiWords, // Extract 'aiWords' attribute
                    textWords: data.textWords, // Extract 'textWords' attribute
                    fakePercentage: data.fakePercentage, // Extract 'fakePercentage' attribute
                    originalParagraph: data.originalParagraph // Extract 'originalParagraph' attribute
                };
            
                localStorage.setItem("extractedAttributes", JSON.stringify(extractedAttributes));
                var btnViewResult4 = document.getElementById(`btnViewResult4`);
                btnViewResult4.removeAttribute("disabled");
                
    
            })
            .catch(function(error) {
                console.error('Error uploading file:', error);
                // Display an error message to the user
                alert('An error occurred while uploading the file. Please try again later.');
    
            });
    });
    
    
    document.getElementById('btnUpload5').addEventListener('click', function() {
        // Call the uploadFile function and assign the returned promise to data1
        uploadFile('inpFile5')
            .then(function(data) {
                let data5 = data; // Assign the processed data to data1
                data = data5;
                console.log(data);
                const extractedAttributes = {
                    h: data.h, // Extract 'h' attribute
                    isHuman: data.isHuman,
                    feedback: data.feedback,
                    input_text: data.input_text,
                    specialIndexes: data.specialIndexes,
                    additional_feedback: data.additional_feedback,
                    aiWords: data.aiWords, // Extract 'aiWords' attribute
                    textWords: data.textWords, // Extract 'textWords' attribute
                    fakePercentage: data.fakePercentage, // Extract 'fakePercentage' attribute
                    originalParagraph: data.originalParagraph // Extract 'originalParagraph' attribute
                };
            
                localStorage.setItem("extractedAttributes", JSON.stringify(extractedAttributes));
                var btnViewResult5 = document.getElementById(`btnViewResult5`);
                btnViewResult5.removeAttribute("disabled");
            })
            .catch(function(error) {
                console.error('Error uploading file:', error);
                // Display an error message to the user
                alert('An error occurred while uploading the file. Please try again later.');
    
            });
    });
    
    document.getElementById('btnUpload6').addEventListener('click', function() {
        // Call the uploadFile function and assign the returned promise to data1
        uploadFile('inpFile6')
            .then(function(data) {
                let data6 = data; // Assign the processed data to data1
                data = data6;
                console.log(data);
                const extractedAttributes = {
                    h: data.h, // Extract 'h' attribute
                    isHuman: data.isHuman,
                    feedback: data.feedback,
                    input_text: data.input_text,
                    specialIndexes: data.specialIndexes,
                    additional_feedback: data.additional_feedback,
                    aiWords: data.aiWords, // Extract 'aiWords' attribute
                    textWords: data.textWords, // Extract 'textWords' attribute
                    fakePercentage: data.fakePercentage, // Extract 'fakePercentage' attribute
                    originalParagraph: data.originalParagraph // Extract 'originalParagraph' attribute
                };
            
                localStorage.setItem("extractedAttributes", JSON.stringify(extractedAttributes));
                var btnViewResult6 = document.getElementById(`btnViewResult6`);
                btnViewResult6.removeAttribute("disabled");
                
    
            })
            .catch(function(error) {
                console.error('Error uploading file:', error);
                // Display an error message to the user
                alert('An error occurred while uploading the file. Please try again later.');
    
            });
    });
    
    document.getElementById('btnUpload7').addEventListener('click', function() {
        // Call the uploadFile function and assign the returned promise to data1
        uploadFile('inpFile7')
            .then(function(data) {
                let data7 = data; // Assign the processed data to data1
                data = data7;
                console.log(data);
                const extractedAttributes = {
                    h: data.h, // Extract 'h' attribute
                    isHuman: data.isHuman,
                    feedback: data.feedback,
                    input_text: data.input_text,
                    specialIndexes: data.specialIndexes,
                    additional_feedback: data.additional_feedback,
                    aiWords: data.aiWords, // Extract 'aiWords' attribute
                    textWords: data.textWords, // Extract 'textWords' attribute
                    fakePercentage: data.fakePercentage, // Extract 'fakePercentage' attribute
                    originalParagraph: data.originalParagraph // Extract 'originalParagraph' attribute
                };
            
                localStorage.setItem("extractedAttributes", JSON.stringify(extractedAttributes));
                var btnViewResult7 = document.getElementById(`btnViewResult7`);
                btnViewResult7.removeAttribute("disabled");
                
    
            })
            .catch(function(error) {
                console.error('Error uploading file:', error);
                // Display an error message to the user
                alert('An error occurred while uploading the file. Please try again later.');
    
            });
    });
    
    document.getElementById('btnUpload8').addEventListener('click', function() {
        // Call the uploadFile function and assign the returned promise to data1
        uploadFile('inpFile8')
            .then(function(data) {
                let data8 = data; // Assign the processed data to data1
                data = data8;
                console.log(data);
                const extractedAttributes = {
                    h: data.h, // Extract 'h' attribute
                    isHuman: data.isHuman,
                    feedback: data.feedback,
                    input_text: data.input_text,
                    specialIndexes: data.specialIndexes,
                    additional_feedback: data.additional_feedback,
                    aiWords: data.aiWords, // Extract 'aiWords' attribute
                    textWords: data.textWords, // Extract 'textWords' attribute
                    fakePercentage: data.fakePercentage, // Extract 'fakePercentage' attribute
                    originalParagraph: data.originalParagraph // Extract 'originalParagraph' attribute
                };
            
                localStorage.setItem("extractedAttributes", JSON.stringify(extractedAttributes));
                var btnViewResult8 = document.getElementById(`btnViewResult8`);
                btnViewResult8.removeAttribute("disabled");
                
    
            })
            .catch(function(error) {
                console.error('Error uploading file:', error);
                // Display an error message to the user
                alert('An error occurred while uploading the file. Please try again later.');
    
            });
    });
    
    document.getElementById('btnUpload9').addEventListener('click', function() {
        // Call the uploadFile function and assign the returned promise to data1
        uploadFile('inpFile9')
            .then(function(data) {
                let data9 = data; // Assign the processed data to data1
                data = data9;
                console.log(data);
                const extractedAttributes = {
                    h: data.h, // Extract 'h' attribute
                    isHuman: data.isHuman,
                    feedback: data.feedback,
                    input_text: data.input_text,
                    specialIndexes: data.specialIndexes,
                    additional_feedback: data.additional_feedback,
                    aiWords: data.aiWords, // Extract 'aiWords' attribute
                    textWords: data.textWords, // Extract 'textWords' attribute
                    fakePercentage: data.fakePercentage, // Extract 'fakePercentage' attribute
                    originalParagraph: data.originalParagraph // Extract 'originalParagraph' attribute
                };
            
                localStorage.setItem("extractedAttributes", JSON.stringify(extractedAttributes));
                var btnViewResult9 = document.getElementById(`btnViewResult9`);
                btnViewResult9.removeAttribute("disabled");
    
            })
            .catch(function(error) {
                console.error('Error uploading file:', error);
                // Display an error message to the user
                alert('An error occurred while uploading the file. Please try again later.');
    
            });
    });
    
    document.getElementById('btnUpload10').addEventListener('click', function() {
        // Call the uploadFile function and assign the returned promise to data1
        uploadFile('inpFile10')
            .then(function(data) {
                let data10 = data; // Assign the processed data to data1
                data = data10;
                console.log(data);
                const extractedAttributes = {
                    h: data.h, // Extract 'h' attribute
                    isHuman: data.isHuman,
                    feedback: data.feedback,
                    input_text: data.input_text,
                    specialIndexes: data.specialIndexes,
                    additional_feedback: data.additional_feedback,
                    aiWords: data.aiWords, // Extract 'aiWords' attribute
                    textWords: data.textWords, // Extract 'textWords' attribute
                    fakePercentage: data.fakePercentage, // Extract 'fakePercentage' attribute
                    originalParagraph: data.originalParagraph // Extract 'originalParagraph' attribute
                };
            
                localStorage.setItem("extractedAttributes", JSON.stringify(extractedAttributes));
                var btnViewResult10 = document.getElementById(`btnViewResult10`);
                btnViewResult10.removeAttribute("disabled");
    
            })
            .catch(function(error) {
                console.error('Error uploading file:', error);
                // Display an error message to the user
                alert('An error occurred while uploading the file. Please try again later.');
    
            });
    });

    function openWindow() {
        var url = "../SingleResult/index.html";
        var features = 'fullscreen=yes,toolbar=no,location=center,resizable=yes,scrollbars=yes';
        window.open(url, '_blank', features);
    }
    
    for (var i = 1; i <= 10; i++) {
        document.getElementById('btnViewResult' + i).addEventListener('click', openWindow);
    }

});

function refresh(){
    window.location.href = "../Batchfiles/index.html";
}
function avail(enable) {
    for (var i = 1; i <= 10; i++) {
        var btnUpload = document.getElementById('btnUpload' + i);
        btnUpload.disabled = !enable;
    }
}

document.getElementById('agree').addEventListener('change', function() {
    if (this.checked) {
        // Call your function here
        avail(true); // Enable the buttons
    } else {
        avail(false); // Disable the buttons
    }
});









