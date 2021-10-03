var tm = function () { 
	/* ---- private vars ---- */ 
	var scr, grid, npart, diam, nx, ny, nw, nh, gw, gh; 
	var xm = 0; 
	var ym = 0; 
	var obj = new Array(npart); 
	var down = false; 
	var fps = 0; 
	//////////////////////////////////////////////////////////////////////////// 
	/* --- events --- */ 
	var addEvent = function  (o, e, f) 
	{ 
		if (window.addEventListener) 
			o.addEventListener(e, f, false); 
		else if (window.attachEvent) 
			r = o.attachEvent('on' + e, f); 
	}
	/* --- resize --- */ 
	var resize = function () { 
		nw = scr.offsetWidth; 
		nh = scr.offsetHeight; 
		var o = scr; 
		for (nx = 0, ny = 0; o != null; o = o.offsetParent) { 
			nx += o.offsetLeft; 
			ny += o.offsetTop; 
		} 
		gw = Math.round(nw / pdiam); 
		gh = Math.round(nh / pdiam); 
	} 
	//////////////////////////////////////////////////////////////////////////// 
	/* ==== particle constructor ==== */ 
	var Particle = function (img) { 
		this.x = Math.random() * nw; 
		this.y = Math.random() * nh; 
		this.vx = 0; 
		this.vy = 0; 
		this.dx = 0; 
		this.dy = 0; 
		this.wi = img.width * .5; 
		this.hi = img.height * .5; 
		/* ---- HTML element ---- */ 
		var d = document.createElement('img'); 
		d.style.position = "absolute"; 
		d.style.left = "-1000px"; 
		d.src = img.src; 
		scr.appendChild(d); 
		this.plo = d.style; 
	} 
	//////////////////////////////////////////////////////////////////////////// 
	/* ==== move particle ==== */ 
	Particle.prototype.move = function () { 
		this.x  += this.dx; 
		this.y  += this.dy; 
		this.vx += this.dx; 
		this.vy += this.dy; 
		this.dx  = 0; 
		this.dy  = 0; 
		/* ---- DOM ---- */ 
		this.plo.left = Math.round(this.x - this.wi) + 'px'; 
		this.plo.top  = Math.round(this.y - this.hi) + 'px'; 
	} 
	/* ==== fluid simulation ==== */ 
	Particle.prototype.physics = function () { 
		/* ---- mouse ---- */ 
		if (down) { 
			var dx = this.x - xm; 
			var dy = this.y - ym; 
			var d = Math.sqrt(dx * dx + dy * dy); 
			if (d < pdiam * 4) { 
				this.dx += dx / d; 
				this.dy += dy / d; 
			} 
		} 
		/* ---- gravity and acceleration ---- */ 
		this.vy += .1; 
		this.x += this.vx; 
		this.y += this.vy; 
		/* ---- screens limits ---- */ 
		if (this.x < pdiam * .5) this.dx += (pdiam * .5 - this.x); 
		else if (this.x > nw - pdiam * .5) this.dx -= (this.x - nw + pdiam * .5); 
		if (this.y < pdiam * .5) this.dy += (pdiam * .5 - this.y); 
		else if (this.y > nh - pdiam * .5) this.dy -= (this.y - nh + pdiam * .5); 
		/* ---- grid coordinates ---- */ 
		var gx = Math.round(this.x / pdiam); 
		var gy = Math.round(this.y / pdiam); 
		/* ---- neightbors constraints ---- */ 
		for (var ix = gx - 1; ix <= gx + 1; ix++) { 
			for (var iy = gy - 1; iy <= gy + 1; iy++) { 
				var g = grid[iy * gw + ix] || []; 
				for (j = 0, l = g.length; j < l; j++) { 
					var that = g[j]; 
					var dx = that.x - this.x; 
					var dy = that.y - this.y; 
					var d = Math.sqrt(dx * dx + dy * dy); 
					if (d < pdiam && d > 0) { 
						dx = (dx / d) * (pdiam - d) * .25; 
						dy = (dy / d) * (pdiam - d) * .25; 
						this.dx -= dx; 
						this.dy -= dy; 
						that.dx += dx; 
						that.dy += dy; 
					} 
				} 
			} 
		} 
		/* ---- update neighbors list ---- */ 
		if (!grid[gy * gw + gx]) grid[gy * gw + gx] = [this]; 
		else grid[gy * gw + gx].push(this); 
	} 
	/* ==== main loop ==== */ 
	var run = function () { 
		fps++; 
		grid = new Array(gw * gh); 
		for(var i = 0; i < npart; i++) obj[i].physics(); 
		for(var i = 0; i < npart; i++) obj[i].move(); 
        setTimeout(run, 1); 
	} 
	return { 
		//////////////////////////////////////////////////////////////////////////// 
		/* ==== public functions ==== */ 
		init : function (n, d) { 
			/* ---- init ---- */ 
			scr = document.getElementById('welcome'); 
			npart = n; 
			pdiam = d; 
			/* ---- events ---- */ 
			addEvent(document, 'mousemove', function (e) { 
				if (window.event) e = window.event; 
				xm = e.clientX - nx; 
				ym = e.clientY - ny; 
			}); 
			addEvent(window, 'resize', resize); 
			addEvent(document, 'mousedown', function(e) {if (e.preventDefault) e.preventDefault(); down = true;return false;}); 
			addEvent(document, 'mouseup', function() { down = false;return false;}); 
			document.onselectstart = function () { return false; } 
			scr.ondrag = function () { return false; } 
			/* ---- framerate counter ---- */ 
			setInterval(function() { 
				//document.getElementById('spacewelcome1').innerHTML = fps + ' fps'; 
				fps = 0; 
			}, 1000); 
			/* ---- start ---- */ 
			setTimeout(function(){ 
				resize(); 
				for (var i = 0; i < npart; i++) 
					obj[i] = new Particle(document.getElementById('bul')); 
				run(); 
			}, 100); 
		} 
	} 
}(); 
 