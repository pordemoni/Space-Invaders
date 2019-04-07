/*  
* Spawn laser:
   ? Shoot laser immediately
   ? Fires after the set <origin>.fire_rate
*/
function spawn_lasers(origin) {
   lasers.push(new Laser(origin));

	return window.setInterval(() => {
		lasers.push(new Laser(origin));
	}, origin.laser.rate);
}