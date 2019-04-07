/*  
* Spawn laser:
*/
let shoot_lasers;
function spawn_lasers(origin) {
   // ? Shoot laser immediately
   lasers.push(new Laser(origin.position.x, origin.position.y, origin.type));
   
   // ? Fires after the set <origin>.fire_rate
	return window.setInterval(() => {
		lasers.push(new Laser(origin.position.x, origin.position.y , origin.type));
	}, origin.fire_rate);
}