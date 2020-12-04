



const ScatterPlot = function ScatterPlot(data){

  let margin = { top: 10, right: 30, bottom: 50, left: 60 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

  let x = d3.scaleLinear().domain([-5, 5]).range([0, width]);
  let y = d3.scaleLinear().domain([0, 5]).range([height, 0]);

  let color = d3
  .scaleOrdinal()
  .domain([
    "Gateway",
    "DFA",

  ])
  .range(
    ["#440154ff", "#21908dff"]
  );

  let svg = d3.select("#scatterplotDIV")
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append("g")
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ")");


  // Add X axis
  svg
  .append('g')
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));
  // Add x-axis text
  svg
     .append("text")
     .attr("transform","translate(" + width / 2 + " ," + (height + margin.top + 30) + ")")
     .style("text-anchor", "middle")
     .text("X-axis");

  svg.append("g").call(d3.axisLeft(y));

  svg
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", -40)
  .attr("x", 0 - height / 2)
  .style("text-anchor", "middle")
  .text("y-axis")

  let circles = svg.
                selectAll("circle")
                .data(plotData, function(d){
                  console.log(d["DGA"])
                  return d["Gateway"]
                })

                circles
                .enter()
                .append("circle")
                .attr("fill", function (d) {
                  return color(d["DGA"]);
                })
                .attr("cy", function (d){
                  return y(d["Speed"]);
                })
                .attr("cx", function(d){
                  return x(d["Turn"]);
                })
                .attr("r", 5)
                .style("fill", function(d){
                  return color(d.Manufacturer);
                })





}
