function volume_sphere() {
    //Write your code here
	// Retrieve the radius value entered by the user
    let radiusInput = document.getElementById("radius").value;

	// Convert the input to a number and validate it
    let radius = parseFloat(radiusInput);
    if (isNaN(radius) || radius < 0) {
        // Display an error if the input is invalid
        document.getElementById("output").innerText = "NAN";
        return;
    }

	///calculate volume of sphere
	let volume = (4 / 3) * Math.PI * Math.POW(radius, 3);
    // Round the volume to four decimal places
    volume = volume.toFixed(4);

	document.getElementById("volume").value = volume;
} 

window.onload = function(){
	 document.getElementById('MyForm').onsubmit = function(e) {
        e.preventDefault();
        volume_sphere();
    }
}
	   
	
	
