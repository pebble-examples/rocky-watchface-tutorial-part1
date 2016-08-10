var rocky = _rocky;

rocky.on('draw', function(drawEvent) {
 var ctx = drawEvent.context;
 var w = parseInt(ctx.canvas.clientWidth);
 var h = parseInt(ctx.canvas.clientHeight);
 var box_side = 20;

 ctx.fillStyle = 'red';
 ctx.fillRect((w-box_side)/2, (h-box_side)/2, 20, 20);
});

rocky.on('minutechange', function(e) {
 rocky.requestDraw();
});
