


var c24 =['#33cc33','#ff0000','#3366ff','#00e7b4','#a6cee3','#fb9a99','#b15928','#b4002f','#bcbc34','#393d77','#ff8200','#7800a8','#ff00d7','#ffc100','#b2df8a','#fdb56d','#cab2d6','#c39c95','#29bece','#cc70bc','#669c95','#ff7a9a','#e3026f','#006d33']


var svg = d3.select('svg').attr({
	width:1000,
	height:1000
})	
var r=2
var line = d3.svg.line().x(ƒ('x')).y(ƒ('y')).interpolate("cardinal")
var index = 0
function draw_points(data){

	for (i=0;i<data.length;i++){
		svg.append('circle')
			.attr('cx',data[i].x)
			.attr('cy',data[i].y)
			.attr('r',r)
			.attr('fill','transparent')
			.style('stroke','black')
			.style('opacity',0.2)
	}
	
	
}
function draw_points_color(data){

	for (i=0;i<data.length;i++){
		svg.append('circle')
			.attr('cx',data[i].x)
			.attr('cy',data[i].y)
			.attr('r',r)
			.attr('fill','red')
			.style('stroke','black')
			.style('opacity',0.8)
	}
	
	
}

c24 = d3.shuffle(c24)
color_counter = 0
color = c24.slice(-2)
change = 200
opacity_counter = change
function draw_lines(data){

d3.timer(function (t) {
	// console.log(t);
	
  if(t%1==0){
	
	
	color_index = t%2  
	  
	line_data=data[index]  
	// color = c24[Math.floor(color_counter/change)]
	// console.log(color)
	lineGraph = svg.append('path')
		.attr("d",line(line_data))
		.attr("stroke",color[color_index])
		.attr("stroke-width",0.8)
		.attr("fill","none")
		// .style("opacity", ((opacity_counter%change)+10)/(change-1+10))
		.style("opacity", 1)
		
	// line animation
	var totalLength = lineGraph.node().getTotalLength();
    lineGraph.attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(100)
        .ease("linear")
        .attr("stroke-dashoffset", 0);
		
	index = index+1  
	color_counter = color_counter + 1  
	opacity_counter = opacity_counter + 1  
	
	
	
  }
})
	
	
}



function draw_lines_test(data){
	
d3.timer(function (t) {
	// console.log(t);
	
  if(t%2==1){
	  console.log(index);
	  line_data=data[index]  
	lineGraph = svg.append('path')
		.attr("d",line(line_data))
		.attr("stroke","blue")
		.attr("stroke-width",2)
		.attr("fill","none")
		
	// line animation
	// var totalLength = lineGraph.node().getTotalLength();
    // lineGraph.attr("stroke-dasharray", totalLength + " " + totalLength)
        // .attr("stroke-dashoffset", totalLength)
        // .transition()
        // .duration(20)
        // .ease("linear")
        // .attr("stroke-dashoffset", 0);
		
	index = index+2 
	  
  }
})
	
	
	
}
// var tottime = 0;
// var wait = {};
// 


animation_time = 1000


function draw_runs(data){

	for (j=0;j<data.length;j++){
		
	lineData=data[j]
	console.log(lineData);
		
var mv_circle = svg.append("circle")
    .attr("r", r*4)
	.attr('fill','transparent')
	.style('stroke','black')
    .attr("transform",
function () {


    return "translate(" + lineData[0].x + "," +lineData[0].y + ")";
});		

var lineFunction = d3.svg.line()
    .x(function (d) {
    return d.x;
})
    .y(function (d) {
    return d.y;
})
	.interpolate("cardinal");
var ipath = 0;	
var temp = [];	
    var lineGraph = svg.append("path")
        .attr("d", lineFunction(lineData))
        .attr("stroke", "grey")
        .attr("stroke-width", 1)
        .attr("fill", "none");
for (var i = 0; i < lineData.length-1 ; i++) {
		
		
        temp[0] = lineData[ipath];
        temp[1] = lineData[ipath + 1];
		 console.log(temp[0]);
        opp = lineData[ipath].o;


        

        
    var totalLength = lineGraph.node().getTotalLength();


    lineGraph.attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(animation_time/10)
        .ease("linear")
        .attr("stroke-dashoffset", 0);

    mv_circle.transition()
        .duration(animation_time/2)
        .ease("back(200)")
        .attr("transform",

function () {


    return "translate(" + temp[0].x + "," +temp[0].y + ")";
})
.style('opacity', opp)
                
        // console.log(ipath+": "+time+", "+wait);
	console.log(ipath)
        ipath++;
    // }, wait[i]);//
}	
	
	
	
	
	
	
	
			
			
	}
	
	
}

// d3.json("data_kmeans.json", function(data) {
	// draw_points(data)
// });
// d3.json("data_linear.json", function(data) {
	// draw_points(data)
// });
// d3.json("run_linear.json", function(data) {
	// draw_lines(data)
// });
d3.json("data_kmeans.json", function(data) {
	draw_points(data)
});
d3.json("run_kmeans.json", function(data) {
	// draw_points_color(data[500])
	draw_lines(data)
});


// d3.json("runs_kmeans.json", function(data) {
	// draw_runs(data)
// });
