function volume_sphere() {
    //Write your code here
	 event.preventDefault();
	
	// Retrieve the radius value entered by the user
    const radiusInput = document.getElementById("radius").value;
	// Convert the input to a number and validate it
    const radius = parseFloat(radiusInput);
    if (isNaN(radius) || radius < 0) {
        // Display an error if the input is invalid
        document.getElementById("volume").innerText = "NAN";
        return;
    }
	
	///calculate volume of sphere
	const volume = (4 / 3) * Math.PI * Math.POW(radius, 3);
    // Round the volume to four decimal places
   const  volume = volume.toFixed(4);

	document.getElementById("volume").value = volume;
	
} 


window.onload = function() {
    document.getElementById('MyForm').onsubmit = function(e){
		 e.preventDefault();
    let radius = document.getElementById('radius').value;
    alert('Radius: ' + radius);
	}
}

	
	
