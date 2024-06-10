// document.getElementById('reportForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const patternType = document.getElementById('patternType').value;
//     const description = document.getElementById('description').value;
//     const url = document.getElementById('url').value;

//     // You can add code here to send the data to your server or backend for processing
//     console.log('Report Submitted:');
//     console.log('Type of Dark Pattern:', patternType);
//     console.log('Description:', description);
//     console.log('URL:', url);

//     alert('Thank you for your report! We will review it shortly.');

//     // Reset the form
//     document.getElementById('reportForm').reset();
// });




document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const patternType = document.getElementById('patternType').value;
    const description = document.getElementById('description').value;
    const url = document.getElementById('url').value;

    // You can add code here to send the data to your server or backend for processing
    console.log('Report Submitted:');
    console.log('Type of Dark Pattern:', patternType);
    console.log('Description:', description);
    console.log('URL:', url);




//      // Display the custom modal
//      const modal = document.getElementById('customModal');
//      modal.style.display = 'flex';
 
//      // Reset the form
//      document.getElementById('reportForm').reset();
//  });
 
//  // Get the modal element
//  const modal = document.getElementById('customModal');
 
//  // Get the <span> element that closes the modal
//  const closeButton = document.querySelector('.close-button');
 
//  // When the user clicks on <span> (x), close the modal
//  closeButton.onclick = function() {
//      modal.style.display = 'none';
//  }
 
//  // When the user clicks anywhere outside of the modal, close it
//  window.onclick = function(event) {
//      if (event.target === modal) {
//          modal.style.display = 'none';
//      }
//  }






    alert('Thank you for your report! We will review it shortly.');

    // Reset the form
    document.getElementById('reportForm').reset();
});
