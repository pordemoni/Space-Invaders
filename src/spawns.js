/*  
* Spawn laser:
   ? Shoot laser immediately, then
   ? after the set <origin>.fire_rate
*/
function spawn_lasers(origin) {
   lasers.push(new Laser(origin));

	return window.setInterval(() => {
		lasers.push(new Laser(origin));
	}, origin.fire_rate);
}

function spawn_missile(origin) {
   missiles.push(new Missile(origin));

	return window.setInterval(() => {
		missiles.push(new Missile(origin));
	}, origin.fire_rate);
}