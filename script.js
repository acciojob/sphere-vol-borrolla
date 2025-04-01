function volume_sphere() {
    //Write your code here
	 // Write your code here
    event.preventDefault();
	
    // Retrieve the radius value entered by the user
    const radiusInput = document.getElementById("radius").value;
    // Convert the input to a number and validate it
    const radius = parseFloat(radiusInput);
    if (isNaN(radius) || radius < 0) {
        // Display an error if the input is invalid
        document.getElementById("volume").value = "NaN";
        return;
    }
	
    // Calculate volume of sphere
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    // Round the volume to four decimal places
    volume = volume.toFixed(4);

    document.getElementById("volume").value = volume;
} 

document.getElementById('MyForm').onsubmit = function(e) {
    e.preventDefault();
    volume_sphere();
};