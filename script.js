const cs = document.createElement('canvas');
const ctx = cs.getContext('2d');
 
cs.width = '600';
cs.height = '400';
 
document.body.appendChild(cs);

ctx.strokeRect(0,0,100,100);
 
ctx.fillRect(150,0,100,100);
