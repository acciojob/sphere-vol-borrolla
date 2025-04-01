function volume_sphere() {
    //Write your code here
	const volume = (4/3) * 3.14 * r * r * r;
	console.log(volume);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
