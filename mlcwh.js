function introFade() {
  document.getElementById("intro").style.visibility = "hidden";
  document.getElementById("intro").style.opacity = 0;
  document.getElementById("intro").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";

  setTimeout(removeIntro, 1300);
}
function removeIntro() {
  document.getElementById("intro").style.display = "none";

  setTimeout(loadContainer1, 20);
}

function loadContainer1(){
  document.getElementById("container1").style.display = "grid";
  document.getElementById("container1").style.visibility = "visible";
  document.getElementById("container1").style.opacity = 1;
  document.getElementById("container1").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
    setTimeout(loadImage1,400);
  }

function loadImage1(){
  document.getElementById("item1").classList.add("animated","fadeIn");
  document.getElementById("item2").classList.add("animated","fadeIn");
  document.getElementById("item1").style.display = "block";
  document.getElementById("item2").style.display = "block";
  document.getElementById("item3").style.display = "block";
  
  document.getElementById("item1").style.visibility = "visible";
  document.getElementById("item1").style.opacity = 1;
  document.getElementById("item1").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
    setTimeout(loadQuote1,20);
  }
  function loadQuote1(){
    document.getElementById("item2").style.visibility = "visible";
    document.getElementById("item2").style.opacity = 1;
    document.getElementById("item2").style.transition =
      "visibility 1300ms linear 1300ms, opacity 1300ms";
      setTimeout(loadArticle1,2200);
      //CHANGE TIME!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    function loadArticle1(){
      
      document.getElementById("item3").classList.add("animated","fadeIn");
      document.getElementById("item3").style.visibility = "visible";
      document.getElementById("item3").style.opacity = 1;
      document.getElementById("item3").style.transition =
        "visibility 1300ms linear 1300ms, opacity 1300ms";
        setTimeout(loadChart1,4400);
        //CHANGE TIME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      }
      function loadChart1(){
        document.getElementById("item4").style.display = "block";
        document.getElementById("item4").classList.add("animated","fadeIn");
      document.getElementById("item4").style.visibility = "visible";
      document.getElementById("item4").style.opacity = 1;
      document.getElementById("item4").style.transition =
        "visibility 1300ms linear 1300ms, opacity 1300ms";
        question1();
      }



function question1(){
  document.getElementById("svg1").style.display = "block";
  document.getElementById("svg1").classList.add("animated","fadeIn");
document.getElementById("svg1").style.visibility = "visible";
document.getElementById("svg1").style.opacity = 1;
document.getElementById("svg1").style.transition =
  "visibility 1300ms linear 1300ms, opacity 1300ms";
  var svg = d3.select("#svg1"),
  margin = {top: 30, right: 90, bottom: 55, left: 60},
  width = +svg.attr("width") - margin.left - margin.right,
  height = +svg.attr("height") - margin.top - margin.bottom;

  var g = svg
  .append("g")
  .attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


      var x = d3.scaleTime().range([0, width - 40]);
      var y0 = d3.scaleLinear().range([height, 0]);
      var y1 = d3.scaleLinear().range([height, 0]);
      
      // define the line
      var valueline = d3.line()
      .curve(d3.curveCardinal)
          .x(function(d) { return x(d.year); })
          .y(function(d) { return y0(d.rvShipped); });
      
      var valueline2 = d3.line()
      .curve(d3.curveCardinal)
          .x(function(d) { return x(d.year); })
          .y(function(d) { return y1(d.rvRetail); });

  

 
      function make_y_gridlines() {
       return d3.axisLeft(y0)
    	.ticks(5)
  }
      
        d3.csv("chart1.csv", function(error, data) {
        if (error) throw error;
      
        // format the data
        data.forEach(function(d) {
            d.year = d.year;
            d.rvShipped = +d.rv_shipped;
            d.rvRetail = +d.rv_retail;
        });
         x.domain(d3.extent(data, function(d) { return d.year; }));
        y0.domain([0,600]);
        y1.domain([0,24]);
        //  y1.domain(d3.extent(data, function(d) { return d.rvRetail; }));
      
        // Add the valueline path.
        
        g.append("g")
            .attr("transform", "translate(20," + -10 + ")")
            .attr("class","axis--x")
            .call(d3.axisTop(x)
                 .tickFormat(d3.format("y")))
                 .selectAll("text")
        .style("text-anchor","middle")

        
          // document.getElementById("leftAxis").classList.add("animated","fadeIn");
          g.append("g")
  		.attr("class","grid")
  		.style("stroke-dasharray",("3,3"))
  		.call(make_y_gridlines()
            .tickSize(-width)
  .tickFormat("")
            )

   d3.selectAll(".q-button").on("click", function() {
   var answeruno = +d3.select(this).node().value;
              g.append("path")
            .data([data])
            .attr("class", "line")
            // .style("stroke-dasharray", ("8, 2"))
            .attr("d", valueline)
            .attr("transform",
      "translate(" + 20 + "," + 0 + ")");
     
 
      g.append("g")
        .attr("class", "axis axis--y")
        .attr('id',"leftAxis")
            .call(d3.axisLeft(y0).ticks(5))
            .selectAll("text")
        .attr("x","-34.85")
        g.append("text")
.attr("fill", "#000")
.attr("transform", "rotate(-90)")
.attr("x", -298)
.attr("y", 6)
.attr("dy", "0.71em")
.attr('font-family','Cabin')
.attr('font-size','12px')
.attr("text-anchor", "end")
.text("# RVs sold ");
g.append('text')
          .attr('class','axis').text(",000").attr('x',"-35").attr('y',"4.5")
g.append('text')
          .attr('class','axis').text(",000").attr('x',"-35").attr('y',"64.166")
          g.append('text')
          .attr('class','axis').text(",000").attr('x',"-35").attr('y',"122.83")
          g.append('text')
          .attr('class','axis').text(",000").attr('x',"-35").attr('y',"181.5")
          g.append('text')
          .attr('class','axis').text(",000").attr('x',"-35").attr('y',"241.16")
          g.append('text')
          .attr('class','axis').text(",000").attr('x',"-35").attr('y',"299.5")
g.append("text")
      .transition()
      .delay(6400)
      .attr("x", 100)
      .attr("y", 22)
      .attr("fill", "#fa3c00")
      .attr("class", "label1")
      .attr("id", "text1a")
      .text(function() {
        if (answeruno == "1") {
          return "Exactly right! RV sales reached an all-time high";
        } else {
          return "No, actually RV sales exceeded 500,000";
        }
      });
    g
      .append("text")
      .transition()
      .delay(6400)
      .attr("x", 150)
      .attr("y", 42)
      .attr("fill", "#fa3c00")
      .attr("class", "label1")
      .attr("class", "animated")
      .attr("class", "fadeIn")
      .attr("id", "text1b")
      .text(function() {
        if (answeruno == "1") {
          return "of just over 500,000 in 2017.";
        } else {
          return "in 2017, an all-time high!";
        };
      });
         

   
setTimeout(fadeButtonRow1, 1800);


          d3.selectAll(".q-button2").on("click", function() {
      g.append("path")
            .data([data])
            .attr("class", "line2")
            // .style("stroke-dasharray", ("8, 2"))
            .attr("d", valueline2)
            .attr("transform",
      "translate(" + 20 + "," + 0 + ")")
 

        
            g.append("g")
            .attr("transform", "translate( " + width + ", 0 )")
            .attr("class", "axis axis--y")
      .call(d3.axisRight(y1).ticks(4))
      .selectAll("text")
        .attr("x","17.4")
        g.append("text")
.attr("fill", "#000")
.attr("transform", "rotate(90)")
.attr("x", 352)
.attr("y", -468)
.attr("dy", "0.71em")
.attr('font-family','Cabin')
.attr('font-size','12px')
.attr("text-anchor", "end")
.text("$ RV Sales");

        g.append('text')
        .attr("transform", "translate( " + width + ", 0 )")
          .attr('class','axis').text("$").attr('x',"9.5").attr('y',"66")
          g.append('text')
          .attr("transform", "translate( " + width + ", 0 )")
          .attr('class','axis').text("$").attr('x',"9.5").attr('y',"148")
          g.append('text')
          .attr("transform", "translate( " + width + ", 0 )")
          .attr('class','axis').text("$").attr('x',"9.5").attr('y',"231")
          g.append('text')
          .attr("transform", "translate( " + width + ", 0 )")
          .attr('class','axis').text("$").attr('x',"9.5").attr('y',"313")
          g.append('text')
        .attr("transform", "translate( " + width + ", 0 )")
          .attr('class','axis').text("B").attr('x',"32.5").attr('y',"66")
          g.append('text')
          .attr("transform", "translate( " + width + ", 0 )")
          .attr('class','axis').text("B").attr('x',"29").attr('y',"148")
          g.append('text')
          .attr("transform", "translate( " + width + ", 0 )")
          .attr('class','axis').text("B").attr('x',"30.5").attr('y',"231")
          g.append('text')
          .attr("transform", "translate( " + width + ", 0 )")
          .attr('class','axis').text("B").attr('x',"24").attr('y',"313")
          g.append('text')
          .attr('x',90)
          .attr('y',280)
          .transition()
          .delay(5200)
          .attr("text-anchor", "start")
          .attr('class','axis')
          .text("Dealer discounting in the recession")
          g.append('text')
          .attr('x',140)
          .attr('y',110)
          .transition()
          .delay(5200)
          .attr("text-anchor", "start")
          .attr('class','axis')
          .text("Premium models taking more share");
          g.append("text")
.attr("fill", "#000")
.attr("x", 280)
.attr("y", 360)
.transition()
          .delay(6000)
.attr("dy", "0.71em")
.attr('font-family','Cabin')
.attr('font-size','12px')
.attr("text-anchor", "end")
.text("Source: www.rvia.org");



          })
    });
});
};

function fadeButtonRow1() {
  document.getElementById("button-row1").style.visibility = "hidden";
  document.getElementById("button-row1").style.opacity = 0;
  document.getElementById("button-row1").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";

  setTimeout(removeButtonRow1Display, 6200);
}

function removeButtonRow1Display(){
  document.getElementById("button-row1").style.display = "none";
  document.getElementById("continue-button1").style.display = "block";
  document.getElementById("continue-button1").style.visibility = "visible";
  document.getElementById("continue-button1").style.opacity = 1;
  document.getElementById("continue-button1").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
}

function questionUnoFade(){
  document.getElementById("continue-button1").style.visibility = "hidden";
  document.getElementById("continue-button1").style.opacity = 0;
  document.getElementById("continue-button1").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
    
  document.getElementById("text1a").classList.add("animated", "fadeOut");
  document.getElementById("text1b").classList.add("animated", "fadeOut");
  
  setTimeout(fadeContinueButton1);
}
function fadeContinueButton1() {
  
  document.getElementById("continue-button1").style.display = "none";
  document.getElementById("questionuno").style.visibility = "hidden";
  document.getElementById("questionuno").style.opacity = 0;
  document.getElementById("button-row1").style.display = "inline-flex";
  document.getElementById("questionuno").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
  
  changeQuestion1Text();
}

function changeQuestion1Text() {
  const question1 = document.querySelector('#questionuno');
  const question2 = document.createElement('h2');
  question2.innerHTML = "How much money was spent on new RVs in 2017 in North America?";
  question1.parentNode.replaceChild(question2, question1);
  question2.classList.add('question','animated','fadeIn');
  question2.setAttribute('id','questiondos');
  addButtonRowBack();
}

function addButtonRowBack() {
  const buttonRow1 = document.querySelector('#button-row1');
  document.getElementById("button-row1").style.visibility = "visible";
  document.getElementById("button-row1").style.opacity = 1;
  document.getElementById("button-row1").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
    buttonRow1.classList.add('animated','fadeIn');
  changeButtonText();
}

function changeButtonText() {
  
  const question1 = document.querySelector('#q-button1a');
  const question2 = document.querySelector('#q-button1b');
  const question3 = document.querySelector('#q-button1c');
  const question4 = document.querySelector('#q-button1d');
  

  question1.textContent = '$10 billion';
  question2.textContent = '$15 billion';
  question3.textContent = '$20 billion';
  question4.textContent = '$25 billion';

  question1.value = 0;
  question2.value = 0;
  question3.value = 1;
  question4.value = 0;

  question1.classList.add('q-button2');
  question2.classList.add('q-button2');
  question3.classList.add('q-button2');
  question4.classList.add('q-button2');

  question1.classList.remove('q-button');
  question2.classList.remove('q-button');
  question3.classList.remove('q-button');
  question4.classList.remove('q-button');

  document.getElementById('button-row1').setAttribute('id','button-row2');
  

  
  // removeIdClass();
 newFunction(); 



  document.getElementById("questiondos").style.visibility = "visible";
  document.getElementById("questiondos").style.opacity = 1;
  document.getElementById("questiondos").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
    
  //   function removeIdClass(){
  //     const brow1 = document.querySelector('#button-row2');

  //     brow1.classList.add('button-row2');
  //     brow1.classList.remove('button-row1')

  //     question1.classList.setAttribute('id','q-button2a');
  // question2.classList.setAttribute('id','q-button2b');
  // question3.classList.setAttribute('id','q-button2c');
  // question4.classList.setAttribute('id','q-button2d');
  //   }
  function newFunction() {
    question1.addEventListener("click", rvRev);
    question2.addEventListener("click", rvRev);
    question3.addEventListener("click", rvRev);
    question4.addEventListener("click", rvRev);

  
    
  }
  
  // const oldButton1 = document.getElementById("q-button4a");
  //   const oldButton2 = document.getElementById("q-button4b");
  //   const oldButton3 = document.getElementById("q-button4c");
  //   const oldButton3 = document.getElementById("q-button4d");
  
    
  // const newButton1 = document.createElement('button');
  //   const newButton2 = document.createElement('button');
  //   const newButton3 = document.createElement('button');
  //   const newButton4 = document.createElement('button');

  
  // newButton1.innerHtml = '2014';
  //   newButton2.innerHtml = '2015';
  //   newButton3.innerHtml = '2016';
  //   newButton4.innerHtml = '2017';

  // oldButton1.parentNode.replaceChild(newButton1, oldButton1);
  // oldButton2.parentNode.replaceChild(newButton2, oldButton2);
  // oldButton3.parentNode.replaceChild(newButton3, oldButton3);
  // oldButton4.parentNode.replaceChild(newButton4, oldButton4);

  // newButton1.classList.add('q-button5','animated','fadeIn');
  // newButton2.classList.add('q-button5','animated','fadeIn');
  // newButton3.classList.add('q-button5','animated','fadeIn');
  // newButton4.classList.add('q-button5','animated','fadeIn');

}

// TO HERE AT FIRST CONTINUE












function rvRev(){

  
  var answerdos = +d3.select(this).node().value;
  var svg = d3.select("#svg1"),
  margin = {top: 30, right: 90, bottom: 55, left: 60},
  width = +svg.attr("width") - margin.left - margin.right,
  height = +svg.attr("height") - margin.top - margin.bottom;

  var g = svg
  .append("g")
  .attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


      var x = d3.scaleTime().range([0, width - 40]);
      var y0 = d3.scaleLinear().range([height, 0]);
      var y1 = d3.scaleLinear().range([height, 0]);
      
      // define the line
      var valueline = d3.line()
      .curve(d3.curveCardinal)
          .x(function(d) { return x(d.year); })
          .y(function(d) { return y0(d.rvShipped); });
      
      var valueline2 = d3.line()
      .curve(d3.curveCardinal)
          .x(function(d) { return x(d.year); })
          .y(function(d) { return y1(d.rvRetail); });


 
      function make_y_gridlines() {
       return d3.axisLeft(y0)
    	.ticks(5)
  }
      
        d3.csv("chart1.csv", function(error, data) {
        if (error) throw error;
      
        // format the data
        data.forEach(function(d) {
            d.year = d.year;
            d.rvShipped = +d.rv_shipped;
            d.rvRetail = +d.rv_retail;
        });
         x.domain(d3.extent(data, function(d) { return d.year; }));
        y0.domain([0,600]);
        y1.domain([0,24]);
        //  y1.domain(d3.extent(data, function(d) { return d.rvRetail; }));
      
// START
        
//         svg.append("g")
//             .attr("transform", "translate(20," + -10 + ")")
//             .attr("class","axis--x")
//             .call(d3.axisTop(x)
//                  .tickFormat(d3.format("y")))
//                  .selectAll("text")
//         .style("text-anchor","middle")

        
//           // document.getElementById("leftAxis").classList.add("animated","fadeIn");
//           svg.append("g")
//   		.attr("class","grid")
//   		.style("stroke-dasharray",("3,3"))
//   		.call(make_y_gridlines()
//             .tickSize(-width)
//   .tickFormat("")
//             )

//               svg.append("path")
//             .data([data])
//             .attr("class", "line")
//             // .style("stroke-dasharray", ("8, 2"))
//             .attr("d", valueline)
//             .attr("transform",
//       "translate(" + 20 + "," + 0 + ")");
     
 
//       svg.append("g")
//         .attr("class", "axis axis--y")
//         .attr('id',"leftAxis")
//             .call(d3.axisLeft(y0).ticks(5))
//             .selectAll("text")
//         .attr("x","-34.85")
//         svg.append("text")
// .attr("fill", "#000")
// .attr("transform", "rotate(-90)")
// .attr("x", -355)
// .attr("y", 6)
// .attr("dy", "0.71em")
// .attr('font-family','Cabin')
// .attr('font-size','12px')
// .attr("text-anchor", "end")
// .text("# RVs sold ");
// svg.append('text')
//           .attr('class','axis').text(",000").attr('x',"-35").attr('y',"4.5")
// svg.append('text')
//           .attr('class','axis').text(",000").attr('x',"-35").attr('y',"74.166")
//           svg.append('text')
//           .attr('class','axis').text(",000").attr('x',"-35").attr('y',"142.83")
//           svg.append('text')
//           .attr('class','axis').text(",000").attr('x',"-35").attr('y',"211.5")
//           svg.append('text')
//           .attr('class','axis').text(",000").attr('x',"-35").attr('y',"281.16")
//           svg.append('text')
//           .attr('class','axis').text(",000").attr('x',"-35").attr('y',"349.83")
//           svg.append("text")
//       .transition()
//       .delay(8400)
//       .attr("x", 100)
//       .attr("y", 22)
//       .attr("fill", "#fa3c00")
//       .attr("class", "label1")
//       .attr("id", "text1a")
//       .text(function() {
//         if (answeruno == "1") {
//           return "Exactly right! RV sales reached an all-time high";
//         } else {
//           return "No, actually RV sales exceeded 500,000";
//         }
//       });
//     svg
//       .append("text")
//       .transition()
//       .delay(8400)
//       .attr("x", 150)
//       .attr("y", 42)
//       .attr("fill", "#fa3c00")
//       .attr("class", "label1")
//       .attr("class", "animated")
//       .attr("class", "fadeIn")
//       .attr("id", "text1b")
//       .text(function() {
//         if (answeruno == "1") {
//           return "of just over 500,000 in 2017.";
//         } else {
//           return "in 2017, an all-time high!";
//         };
//       });
         

   
// setTimeout(dotOne,7200);

//       function dotOne(){
//  var dot1 = svg.selectAll("dot")
//         .data(data)
//       .enter().append("circle")
//       .attr("class", "dot1")
//         .attr("r", 4)
//         .attr("cx", function(d) { return x(d.year); })
//         .attr("cy", function(d) { return y0(d.rvShipped); })
//         .attr("transform",
//       "translate(" + 20 + "," + 0 + ")")
//       .on("mouseover", function (d) {
//                     div.transition()
//                         .duration(600)
//                         .style("opacity", .7)
//                     div.html("<p>In " + d.year + ", " + d.rvShipped + "k</p> <p>RVs were sold in the US.</p>")
//                         .style("left", (d3.event.pageX) + "px")
//                         .style("top", (d3.event.pageY - 28) + "px");
        
//                 });
//       }

      ///END
      setTimeout(fadeButtonRow2, 1400);
      g.append("path")
            .data([data])
            .attr("class", "line2")
            // .style("stroke-dasharray", ("8, 2"))
            .attr("d", valueline2)
            .attr("transform",
      "translate(" + 20 + "," + 0 + ")")
 

        
            g.append("g")
            .attr("transform", "translate( " + width + ", 0 )")
            .attr("class", "axis axis--y")
      .call(d3.axisRight(y1).ticks(4))
      .selectAll("text")
        .attr("x","17.4")
        g.append("text")
.attr("fill", "#000")
.attr("transform", "rotate(90)")
.attr("x", 352)
.attr("y", -468)
.attr("dy", "0.71em")
.attr('font-family','Cabin')
.attr('font-size','12px')
.attr("text-anchor", "end")
.text("$ RV Sales");

        g.append('text')
        .attr("transform", "translate( " + width + ", 0 )")
          .attr('class','axis').text("$").attr('x',"9.5").attr('y',"64")
          g.append('text')
          .attr("transform", "translate( " + width + ", 0 )")
          .attr('class','axis').text("$").attr('x',"9.5").attr('y',"138")
          g.append('text')
          .attr("transform", "translate( " + width + ", 0 )")
          .attr('class','axis').text("$").attr('x',"9.5").attr('y',"212")
          g.append('text')
          .attr("transform", "translate( " + width + ", 0 )")
          .attr('class','axis').text("$").attr('x',"9.5").attr('y',"286")
          g.append('text')
        .attr("transform", "translate( " + width + ", 0 )")
          .attr('class','axis').text("B").attr('x',"32.5").attr('y',"64")
          g.append('text')
          .attr("transform", "translate( " + width + ", 0 )")
          .attr('class','axis').text("B").attr('x',"29").attr('y',"138")
          g.append('text')
          .attr("transform", "translate( " + width + ", 0 )")
          .attr('class','axis').text("B").attr('x',"30.5").attr('y',"212")
          g.append('text')
          .attr("transform", "translate( " + width + ", 0 )")
          .attr('class','axis').text("B").attr('x',"24").attr('y',"286")
          g.append('text')
          .attr('x',90)
          .attr('y',280)
          .transition()
          .delay(7600)
          .attr("text-anchor", "start")
          .attr('class','axis')
          .text("Dealer discounting in the recession")
          g.append('text')
          .attr('x',140)
          .attr('y',110)
          .transition()
          .delay(7600)
          .attr("text-anchor", "start")
          .attr('class','axis')
          .text("Premium models taking more share");
          g.append("text")
.attr("fill", "#000")
.attr("x", 280)
.attr("y", 360)
.transition()
          .delay(7600)
.attr("dy", "0.71em")
.attr('font-family','Cabin')
.attr('font-size','12px')
.attr("text-anchor", "end")
.text("Source: www.rvia.org")

g
            .append('rect')
            .transition()
          .delay(6395)
            .attr('x',100)
            .attr('y',5)
            .attr('width',325)
            .attr('height',40)
            .attr('fill',"#FFFAFA")
g.append("text")
      .transition()
      .delay(6400)
      .attr("x", 100)
      .attr("y", 22)
      .attr("fill", "#fa3c00")
      .attr("class", "label1")
      .attr("id", "text2a")
      .text(function() {
        if (answerdos == "1") {
          return "Yes! Total RV sales surpassed $20 billion in";
        } else {
          return "Actually, total RV sales surpassed $20 billion";
        }
      });
    g
      .append("text")
      .transition()
      .delay(6400)
      .attr("x", 110)
      .attr("y", 42)
      .attr("fill", "#fa3c00")
      .attr("class", "label1")
      .attr("class", "animated")
      .attr("class", "fadeIn")
      .attr("id", "text2b")
      .text(function() {
        if (answerdos == "1") {
          return "2017, almost 4x higher than the 2009 total.";
        } else {
          return "in 2017, almost 4x higher than the 2009 total!";
        };
      });
      
      
      
     

    
          })
          
          setTimeout(continueButton2,11000)
};

function fadeButtonRow2() {
  document.getElementById("button-row2").classList.add("animated", "fadeOut");
  document.getElementById("button-row2").style.visibility = "hidden";
  document.getElementById("button-row2").style.opacity = 0;
  document.getElementById("button-row2").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";

}

function continueButton2() {
  document.getElementById('continue-button1').setAttribute('id','continue-button2');
  document.getElementById("continue-button2").removeAttribute('onclick','questionUnoFade()');
  document.getElementById("continue-button2").setAttribute('onclick','questionDosFade()');
  setTimeout(moveToPage3,100)
}

function moveToPage3() {

  document.getElementById("button-row2").style.display = "none";
  document.getElementById("continue-button2").style.display = "block";
document.getElementById("continue-button2").style.visibility = "visible";
document.getElementById("continue-button2").style.opacity = 1;
document.getElementById("continue-button2").style.transition =
  "visibility 1300ms linear 1300ms, opacity 1300ms";
}


function questionDosFade() {
  document.getElementById("svg1").classList.add("animated", "fadeOut");
  document.getElementById("questiondos").classList.add("animated", "fadeOut");
  document.getElementById("continue-button2").classList.add("animated", "fadeOut");
  
  
  setTimeout(removeSvg1, 300);
}

function removeSvg1() {
  document.getElementById("svg1").style.display = "none";
  document.getElementById("continue-button2").style.display = "none"
  document.getElementById("item4").style.display= 'none';
  
  document.getElementById("questiondos").style.display = "none";
  
 setTimeout(removeFirstGraph,1000);
}
function removeFirstGraph(){
  
  document.getElementById("item4").style.visibility = "hidden";
  document.getElementById("item4").style.opacity = 0;
  document.getElementById("item4").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
  // document.getElementById("questioncinco").style.display = "block";

  
    setTimeout(removeArticle1,300);
 
}

function removeArticle1() {
  
  document.getElementById("item3").classList.add("animated", "fadeOut");
  document.getElementById("item3").style.visibility = "hidden";
  document.getElementById("item3").style.opacity = 0;
  document.getElementById("item3").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
    setTimeout(removeQuote1,800);
}

function removeQuote1() {
  document.getElementById("item3").style.display = "none";
  document.getElementById("item2").classList.add("fadeOut");
  document.getElementById("item1").classList.add("fadeOut");
  document.getElementById("item2").style.visibility = "hidden";
  document.getElementById("item2").style.opacity = 0;
  document.getElementById("item2").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
    setTimeout(removeImage1, 500);
}

function removeImage1() {
  document.getElementById("item2").style.display = "none";
  document.getElementById("item1").style.display = "none";
  document.getElementById("item1").style.visibility = "hidden";
  document.getElementById("item1").style.opacity = 0;
  document.getElementById("item1").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
  setTimeout(removeContainer1, 900);
}

function removeContainer1(){
  document.getElementById("container1").style.visibility = "hidden";
  document.getElementById("container1").style.opacity = 0;
  
  document.getElementById("item1").style.transition =
  "visibility 1300ms linear 1300ms, opacity 1300ms";
  setTimeout(loadContainer2, 1300);
}

function loadContainer2(){
  document.getElementById("container1").style.display = "none";
  document.getElementById("container2").style.display = "grid";
  document.getElementById("container2").style.visibility = "visible";
  document.getElementById("container2").style.opacity = 1;
  document.getElementById("container2").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
    setTimeout(loadImage2,400);
  }

function loadImage2(){
  document.getElementById("item21").classList.add("animated","fadeIn");
  document.getElementById("item22").classList.add("animated","fadeIn");
  document.getElementById("item21").style.display = "block";
  document.getElementById("item22").style.display = "block";
  document.getElementById("item23").style.display = "block";
  
  document.getElementById("item21").style.visibility = "visible";
  document.getElementById("item21").style.opacity = 1;
  document.getElementById("item21").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
    setTimeout(loadQuote2,20);
  }
  function loadQuote2(){
    document.getElementById("item22").style.visibility = "visible";
    document.getElementById("item22").style.opacity = 1;
    document.getElementById("item22").style.transition =
      "visibility 1300ms linear 1300ms, opacity 1300ms";
      setTimeout(loadArticle2,2200);
      //CHANGE TIME!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    function loadArticle2(){
      
      document.getElementById("item23").classList.add("animated","fadeIn");
      document.getElementById("item23").style.visibility = "visible";
      document.getElementById("item23").style.opacity = 1;
      document.getElementById("item23").style.transition =
        "visibility 1300ms linear 1300ms, opacity 1300ms";
        setTimeout(loadChart2,4400);
        //CHANGE TIME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      }
      function loadChart2(){
        document.getElementById("item24").style.display = "block";
        document.getElementById("item24").classList.add("animated","fadeIn");
      document.getElementById("item24").style.visibility = "visible";
      document.getElementById("item24").style.opacity = 1;
      document.getElementById("item24").style.transition =
        "visibility 1300ms linear 1300ms, opacity 1300ms";
        question3();
      }


  function question3(){
    var answertres = +d3.select(this).node().value;
    document.getElementById("svg2").style.display = "block";
  document.getElementById("svg2").classList.add("animated","fadeIn");
document.getElementById("svg2").style.visibility = "visible";
document.getElementById("svg2").style.opacity = 1;
document.getElementById("svg2").style.transition =
  "visibility 1300ms linear 1300ms, opacity 1300ms";
  var margin = {top: 45, right: 45, bottom: 30, left: 80, left2: 45, right2: 45},
  width = 520 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;
  
  
  var svg = d3.select("#svg2")
  .append('svg')
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
  
  
        var x = d3.scaleTime().range([0, width - 40]);
        var y = d3.scaleLinear().range([height, 0]);
        
        // define the line
        var valueline = d3.line()
        .curve(d3.curveCardinal)
            .x(function(d) { return x(d.year); })
            .y(function(d) { return y(d.new_asp_cw); });
        
        var valueline2 = d3.line()
        .curve(d3.curveCardinal)
            .x(function(d) { return x(d.year); })
            .y(function(d) { return y(d.used_asp_cw); });
  
        var valueline3 = d3.line()
        .curve(d3.curveCardinal)
            .x(function(d) { return x(d.year); })
            .y(function(d) { return y(d.industry_asp); });
  
            var div = d3.select("body").append("div")
              .attr("class", "tooltip")
              .style("opacity", 0);
  
        function make_y_gridlines() {
         return d3.axisLeft(y)
        .ticks(5)
    }
        
          d3.csv("chart4.csv", function(error, data) {
          if (error) throw error;
        
          // format the data
          data.forEach(function(d) {
              d.year = d.year;
              d.industry_asp = +d.industry_asp;
              d.used_asp_cw = +d.used_asp_cw;
              d.new_asp_cw = +d.new_asp_cw;
          });
           x.domain(d3.extent(data, function(d) { return d.year; }));
           y.domain([20000,50000]);
          //  y1.domain(d3.extent(data, function(d) { return d.rvRetail;
        
          // Add the valueline path.
          
          svg.append("g")
              .attr("transform", "translate(40," + -10 + ")")
              .attr("class","axis--x")
              .call(d3.axisTop(x)
                   .tickFormat(d3.format("y")))
                   .selectAll("text")
          .style("text-anchor","middle");


          
       
          // .attr("x","-22")
            svg.append('text')
            .attr('class','axis').text("$").attr('x',"-64").attr('y',"4.5")
            svg.append('text')
            .attr('class','axis').text("$").attr('x',"-64").attr('y',"58.66")
            svg.append('text')
            .attr('class','axis').text("$").attr('x',"-64").attr('y',"112.83")
            svg.append('text')
            .attr('class','axis').text("$").attr('x',"-64").attr('y',"167")
            svg.append('text')
            .attr('class','axis').text("$").attr('x',"-64").attr('y',"221.1")
            svg.append('text')
            .attr('class','axis').text("$").attr('x',"-64").attr('y',"274.33")
            svg.append('text')
            .attr('class','axis').text("$").attr('x',"-64").attr('y',"329.5")
            svg.append("g")
              .attr("class", "axis axis--y")
              .attr('id',"leftAxis")
                  .call(d3.axisLeft(y).ticks(5))
                  .selectAll("text");
          svg.append("g")
        .attr("class","grid")
        .style("stroke-dasharray",("3,3"))
        .call(make_y_gridlines()
              .tickSize(-width)
    .tickFormat("")
              )
  
          
            // document.getElementById("leftAxis").classList.add("animated","fadeIn");
  
            d3.selectAll(".q-button3").on("click", function() {
              var answertres = +d3.select(this).node().value;

              


                svg.append("path")
              .data([data])
              .attr("class", "line2")
              // .style("stroke-dasharray", ("8, 2"))
              .attr("d", valueline3)
              .attr("transform",
        "translate(" + 40 + "," + 0 + ")");
        svg.append("text")
        .transition()
        .delay(4800)
        .attr("x", 80)
        .attr("y", 22)
        .attr("fill", "#fa3c00")
        .attr("class", "label1")
        .attr("id", "text3a")
        .text(function() {
          if (answertres == "1") {
            return "Right! The average sales price for a new";
          } else {
            return "No, the average sales price for a new";
          }
        });
      svg
        .append("text")
        .transition()
        .delay(4800)
        .attr("x", 80)
        .attr("y", 42)
        .attr("fill", "#fa3c00")
        .attr("class", "label1")
        .attr("class", "animated")
        .attr("class", "fadeIn")
        .attr("id", "text3b")
        .text(function() {
          if (answertres == "1") {
            return "RV in the last 5 years has stayed relatively flat.";
          } else {
            return "RV in the last 5 years has stayed relatively flat.";
          };
        });
        svg.append('text')
          .attr('x',260)
          .attr('y',68)
          .transition()
          .delay(6500)
          .attr("text-anchor", "start")
          .attr('class','axis')
          .text("Average new RV price: $42,000")
             
        setTimeout(fadeButtonRow3,1200);

       
  
    
        
        
    //     d3.selectAll("#button3").on("click", function() {
    //       var answerquatro = +d3.select(this).node().value;
    //       document.getElementById("text4a").classList.add("animated", "fadeOut");
    // document.getElementById("text4b").classList.add("animated", "fadeOut");
  
  
    //             svg.append("path")
    //           .data([data])
    //           .attr("class", "line")
    //           // .style("stroke-dasharray", ("8, 2"))
    //           .attr("d", valueline)
    //           .attr("transform",
    //     "translate(" + 40 + "," + 0 + ")");
    //     svg.append("text")
    //     .transition()
    //     .delay(7200)
    //     .attr("x", 200)
    //     .attr("y", 22)
    //     .attr("fill", "#4682B4")
    //     .attr("class", "label1")
    //     .attr("id", "text4c")
    //     .text(function() {
    //       if (answercinco == "1") {
    //         return "Exactly right! Total CI AOV grew to an";
    //       } else {
    //         return "No, CI's total Average Order Volume in";
    //       }
    //     });
    //   svg
    //     .append("text")
    //     .transition()
    //     .delay(7200)
    //     .attr("x", 200)
    //     .attr("y", 42)
    //     .attr("fill", "#4682B4")
    //     .attr("class", "label1")
    //     .attr("class", "animated")
    //     .attr("class", "fadeIn")
    //     .attr("id", "text4c")
    //     .text(function() {
    //       if (answercinco == "1") {
    //         return "all-time high of $489 in 2017.";
    //       } else {
    //         return "2017 grew to $489, an all-time high!";
    //       };
    //     });
    //     setTimeout(lineTwo,3000);
  
    //       function lineTwo(){
    //     svg.append("path")
    //           .data([data])
    //           .attr("class", "line")
    //           // .transition()
    //           // .delay(3000)
    //           // .style("stroke-dasharray", ("8, 2"))
    //           .attr("d", valueline2)
    //           .attr("transform",
    //     "translate(" + 40 + "," + 0 + ")");
    //       }
              
  
    //     setTimeout(dotTwo,6200);
  
    //       function dotTwo() {
  
    //         var dot1 = svg.selectAll("dot")
    //       .data(data)
    //     .enter().append("circle")
    //     .attr("class", "dot1")
    //       .attr("r", 5)
    //       .attr("cx", function(d) { return x(d.year); })
    //       .attr("cy", function(d) { return y(d.new_asp_cw); })
    //       .attr("transform",
    //     "translate(" + 40 + "," + 0 + ")")
    //     .on("mouseover", function (d) {
    //                   div.transition()
    //                       .duration(600)
    //                       .style("opacity", .7)
    //                   div.html("<p>In " + d.year + ", the average new RV sold</p> <p>by Camping World cost $" + d.new_asp_cw + ".</p>")
    //                       .style("left", (d3.event.pageX) + "px")
    //                       .style("top", (d3.event.pageY - 28) + "px");
          
    //               });
  
    //         var dot1 = svg.selectAll("dot")
    //       .data(data)
    //     .enter().append("circle")
    //     .attr("class", "dot1")
    //       .attr("r", 5)
    //       .attr("cx", function(d) { return x(d.year); })
    //       .attr("cy", function(d) { return y(d.used_asp_cw); })
    //       .attr("transform",
    //     "translate(" + 40 + "," + 0 + ")")
    //     .on("mouseover", function (d) {
    //                   div.transition()
    //                       .duration(600)
    //                       .style("opacity", .7)
    //                   div.html("<p>In " + d.year + ", the average used RV sold</p> <p>by Camping World cost $" + d.used_asp_cw + ".</p>")
    //                       .style("left", (d3.event.pageX) + "px")
    //                       .style("top", (d3.event.pageY - 28) + "px");
          
    //               });
    //       }
          
  
    //     // dot1
    //     //           .on("mouseover", function (d) {
    //     //               div.transition()
    //     //                   .duration(600)
    //     //                   .style("opacity", .7)
    //     //               div.html("<p>In " + d.year + ", Camping World owned a</p> <p>" + d.mktSh + "% share of the US RV market.</p>")
    //     //                   .style("left", (d3.event.pageX) + "px")
    //     //                   .style("top", (d3.event.pageY - 28) + "px");
          
    //     //           });
       
        
        
  
    //     })
        })
      });
  }

  function fadeButtonRow3() {
    document.getElementById("button-row3").style.visibility = "hidden";
    document.getElementById("button-row3").style.opacity = 0;
    document.getElementById("button-row3").style.transition =
      "visibility 1300ms linear 1300ms, opacity 1300ms";
  
    setTimeout(removeButtonRow3Display, 7800);
  }
  
  function removeButtonRow3Display(){
    document.getElementById("button-row3").style.display = "none";
    document.getElementById("continue-button3").style.display = "block";
    document.getElementById("continue-button3").style.visibility = "visible";
    document.getElementById("continue-button3").style.opacity = 1;
    document.getElementById("continue-button3").style.transition =
      "visibility 1300ms linear 1300ms, opacity 1300ms";
  }
  
  function questionTresFade(){
    document.getElementById("continue-button3").style.visibility = "hidden";
    document.getElementById("continue-button3").style.opacity = 0;
    document.getElementById("continue-button3").style.transition =
      "visibility 1300ms linear 1300ms, opacity 1300ms";
      
    document.getElementById("text3a").classList.add("animated", "fadeOut");
    document.getElementById("text3b").classList.add("animated", "fadeOut");
    
    setTimeout(fadeContinueButton3);
  }
  function fadeContinueButton3() {
    
    document.getElementById("continue-button3").style.display = "none";
    document.getElementById("questiontres").style.visibility = "hidden";
    document.getElementById("questiontres").style.opacity = 0;
    document.getElementById("button-row3").style.display = "inline-flex";
    document.getElementById("questiontres").style.transition =
      "visibility 1300ms linear 1300ms, opacity 1300ms";
    
    changeQuestion3Text();
  }
  
  function changeQuestion3Text() {
    document.getElementById("q-button3d").style.display = "block";
    document.getElementById("q-button3d").style.visibility = "visible";
    document.getElementById("q-button3d").style.opacity = 1;
    const bigquestion3 = document.querySelector('#questiontres');
    const bigquestion4 = document.createElement('h2');
    bigquestion4.innerHTML = "Can you guess the difference in price for a new RV bought at Camping World in 2017 vs. the average?";
    bigquestion3.parentNode.replaceChild(bigquestion4, bigquestion3);
    bigquestion4.classList.add('question','animated','fadeIn');
    bigquestion4.setAttribute('id','questionquatro');
    addButtonRow3Back();
  }
  
  function addButtonRow3Back() {
    const buttonRow3 = document.querySelector('#button-row3');
    document.getElementById("button-row3").style.visibility = "visible";
    document.getElementById("button-row3").style.opacity = 1;
    document.getElementById("button-row3").style.transition =
      "visibility 1300ms linear 1300ms, opacity 1300ms";
      buttonRow3.classList.add('animated','fadeIn');
    changeButton3Text();
  }
  
  function changeButton3Text() {
    
    const newquestion1 = document.querySelector('#q-button3a');
    const newquestion2 = document.querySelector('#q-button3b');
    const newquestion3 = document.querySelector('#q-button3c');
    const newquestion4 = document.querySelector('#q-button3d');
    
  
    newquestion1.textContent = '+$3,000';
    newquestion2.textContent = 'same';
    newquestion3.textContent = '-$3,000';
    newquestion4.textContent = '-$6,000';
  
    newquestion1.value = 0;
    newquestion2.value = 0;
    newquestion3.value = 0;
    newquestion4.value = 1;
  
    newquestion1.classList.add('q-button4');
    newquestion2.classList.add('q-button4');
    newquestion3.classList.add('q-button4');
    newquestion4.classList.add('q-button4');
  
    newquestion1.classList.remove('q-button3');
    newquestion2.classList.remove('q-button3');
    newquestion3.classList.remove('q-button3');
    newquestion4.classList.remove('q-button3');
  
    document.getElementById('button-row3').setAttribute('id','button-row4');
    
  
    
    // removeIdClass();
   newFunction2(); 
  
  
  
    document.getElementById("questionquatro").style.visibility = "visible";
    document.getElementById("questionquatro").style.opacity = 1;
    document.getElementById("questionquatro").style.transition =
      "visibility 1300ms linear 1300ms, opacity 1300ms";
      
    //   function removeIdClass(){
    //     const brow1 = document.querySelector('#button-row2');
  
    //     brow1.classList.add('button-row2');
    //     brow1.classList.remove('button-row1')
  
    //     question1.classList.setAttribute('id','q-button2a');
    // question2.classList.setAttribute('id','q-button2b');
    // question3.classList.setAttribute('id','q-button2c');
    // question4.classList.setAttribute('id','q-button2d');
    //   }
    function newFunction2() {
      newquestion1.addEventListener("click", cwAsp);
      newquestion2.addEventListener("click", cwAsp);
      newquestion3.addEventListener("click", cwAsp);
      newquestion4.addEventListener("click", cwAsp);
  
    
      
    }
    
    // const oldButton1 = document.getElementById("q-button4a");
    //   const oldButton2 = document.getElementById("q-button4b");
    //   const oldButton3 = document.getElementById("q-button4c");
    //   const oldButton3 = document.getElementById("q-button4d");
    
      
    // const newButton1 = document.createElement('button');
    //   const newButton2 = document.createElement('button');
    //   const newButton3 = document.createElement('button');
    //   const newButton4 = document.createElement('button');
  
    
    // newButton1.innerHtml = '2014';
    //   newButton2.innerHtml = '2015';
    //   newButton3.innerHtml = '2016';
    //   newButton4.innerHtml = '2017';
  
    // oldButton1.parentNode.replaceChild(newButton1, oldButton1);
    // oldButton2.parentNode.replaceChild(newButton2, oldButton2);
    // oldButton3.parentNode.replaceChild(newButton3, oldButton3);
    // oldButton4.parentNode.replaceChild(newButton4, oldButton4);
  
    // newButton1.classList.add('q-button5','animated','fadeIn');
    // newButton2.classList.add('q-button5','animated','fadeIn');
    // newButton3.classList.add('q-button5','animated','fadeIn');
    // newButton4.classList.add('q-button5','animated','fadeIn');
  
  }
  function cwAsp(){
    var answerquatro = +d3.select(this).node().value;
    var margin = {top: 45, right: 45, bottom: 30, left: 80, left2: 45, right2: 45},
width = 520 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;


var svg = d3.select("#svg2")
.append('svg')
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");


      var x = d3.scaleTime().range([0, width - 40]);
      var y = d3.scaleLinear().range([height, 0]);
      
      // define the line
      var valueline = d3.line()
      .curve(d3.curveCardinal)
          .x(function(d) { return x(d.year); })
          .y(function(d) { return y(d.new_asp_cw); });
      
      var valueline2 = d3.line()
      .curve(d3.curveCardinal)
          .x(function(d) { return x(d.year); })
          .y(function(d) { return y(d.used_asp_cw); });

      var valueline3 = d3.line()
      .curve(d3.curveCardinal)
          .x(function(d) { return x(d.year); })
          .y(function(d) { return y(d.industry_asp); });

          var div = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

      function make_y_gridlines() {
       return d3.axisLeft(y)
    	.ticks(5)
  }
      
        d3.csv("chart4.csv", function(error, data) {
        if (error) throw error;
      
        // format the data
        data.forEach(function(d) {
            d.year = d.year;
            d.industry_asp = +d.industry_asp;
            d.used_asp_cw = +d.used_asp_cw;
            d.new_asp_cw = +d.new_asp_cw;
        });
         x.domain(d3.extent(data, function(d) { return d.year; }));
         y.domain([20000,50000]);
        //  y1.domain(d3.extent(data, function(d) { return d.rvRetail;
      
        // Add the valueline path.
        
        svg.append("g")
            .attr("transform", "translate(40," + -10 + ")")
            .attr("class","axis--x")
            .call(d3.axisTop(x)
                 .tickFormat(d3.format("y")))
                 .selectAll("text")
        .style("text-anchor","middle")

        svg.append("g")
        .attr("class", "axis axis--y")
        .attr('id',"leftAxis")
            .call(d3.axisLeft(y).ticks(5))
            .selectAll("text")
        // .attr("x","-22")
          // svg.append('text')
          // .attr('class','axis').text("$").attr('x',"-64").attr('y',"4.5")
          // svg.append('text')
          // .attr('class','axis').text("$").attr('x',"-64").attr('y',"58.66")
          // svg.append('text')
          // .attr('class','axis').text("$").attr('x',"-64").attr('y',"112.83")
          // svg.append('text')
          // .attr('class','axis').text("$").attr('x',"-64").attr('y',"167")
          // svg.append('text')
          // .attr('class','axis').text("$").attr('x',"-64").attr('y',"261.1")
          // svg.append('text')
          // .attr('class','axis').text("$").attr('x',"-64").attr('y',"304.33")
          // svg.append('text')
          // .attr('class','axis').text("$").attr('x',"-64").attr('y',"359.5")
        svg.append("g")
  		.attr("class","grid")
  		.style("stroke-dasharray",("3,3"))
  		.call(make_y_gridlines()
            .tickSize(-width)
  .tickFormat("")
            )

          // document.getElementById("leftAxis").classList.add("animated","fadeIn");


    //           svg.append("path")
    //         .data([data])
    //         .attr("class", "line2")
    //         // .style("stroke-dasharray", ("8, 2"))
    //         .attr("d", valueline3)
    //         .attr("transform",
    //   "translate(" + 40 + "," + 0 + ")");
    //   svg.append("text")
    //   .transition()
    //   .delay(4800)
    //   .attr("x", 200)
    //   .attr("y", 22)
    //   .attr("fill", "#fa3c00")
    //   .attr("class", "label1")
    //   .attr("id", "text4a")
    //   .text(function() {
    //     if (answerquatro == "1") {
    //       return "Exactly right! Total CI AOV grew to an";
    //     } else {
    //       return "No, CI's total Average Order Volume in";
    //     }
    //   });
    // svg
    //   .append("text")
    //   .transition()
    //   .delay(4800)
    //   .attr("x", 200)
    //   .attr("y", 42)
    //   .attr("fill", "#fa3c00")
    //   .attr("class", "label1")
    //   .attr("class", "animated")
    //   .attr("class", "fadeIn")
    //   .attr("id", "text4b")
    //   .text(function() {
    //     if (answerquatro == "1") {
    //       return "all-time high of $489 in 2017.";
    //     } else {
    //       return "2017 grew to $489, an all-time high!";
    //     };
    //   });
           
    

    //   setTimeout(dotOne,3400);

    //   function dotOne() {
    //   var dot2 = svg.selectAll("dot")
    //     .data(data)
    //   .enter().append("circle")
    //   .attr("class", "dot2")
    //     .attr("r", 4)
    //     .attr("cx", function(d) { return x(d.year); })
    //     .attr("cy", function(d) { return y(d.industry_asp); })
    //     .attr("transform",
    //   "translate(" + 40 + "," + 0 + ")")
    //             .on("mouseover", function (d) {
    //                 div.transition()
    //                     .duration(600)
    //                     .style("opacity", .7)
    //                 div.html("<p>In " + d.year + ", the average new RV</p> <p>cost $" + d.industry_asp + " in the US.</p>")
    //                     .style("left", (d3.event.pageX) + "px")
    //                     .style("top", (d3.event.pageY - 28) + "px");
        
    //             });
    //           }
      
      
    //   d3.selectAll("#button2").on("click", function() {


      setTimeout(fadeButtonRow4, 1400);
              svg.append("path")
            .data([data])
            .attr("class", "line")
            // .style("stroke-dasharray", ("8, 2"))
            .attr("d", valueline)
            .attr("transform",
      "translate(" + 40 + "," + 0 + ")");
      svg
            .append('rect')
            .transition()
          .delay(4650)
            .attr('x',80)
            .attr('y',5)
            .attr('width',325)
            .attr('height',40)
            .attr('fill',"#FFFAFA")
      svg.append("text")
      .transition()
      .delay(6200)
      .attr("x", 80)
      .attr("y", 22)
      .attr("fill", "#4682B4")
      .attr("class", "label1")
      .attr("id", "text4c")
      .text(function() {
        if (answerquatro == "1") {
          return "That's right! Camping World's average selling";
        } else {
          return "Even lower, Camping World's average selling";
        }
      });
    svg
      .append("text")
      .transition()
      .delay(6200)
      .attr("x", 80)
      .attr("y", 42)
      .attr("fill", "#4682B4")
      .attr("class", "label1")
      .attr("class", "animated")
      .attr("class", "fadeIn")
      .attr("id", "text4c")
      .text(function() {
        if (answerquatro == "1") {
          return "price has been dropping rapidly since 2013.";
        } else {
          return "price has been dropping rapidly since 2013!";
        };
      })
      svg.append('text')
      .attr('x',210)
      .attr('y',155)
      .transition()
      .delay(8000)
      .attr("text-anchor", "start")
      .attr('class','axis')
      .text("CW new RV price: $35,813")
      svg.append('text')
      .attr('x',260)
      .attr('y',290)
      .transition()
      .delay(8000)
      .attr("text-anchor", "start")
      .attr('class','axis')
      .text("CW used RV price: $22,005");;


      setTimeout(usedLine,1500);

        function usedLine(){
      svg.append("path")
            .data([data])
            .attr("class", "line")
            // .transition()
            // .delay(3000)
            // .style("stroke-dasharray", ("8, 2"))
            .attr("d", valueline2)
            .attr("transform",
      "translate(" + 40 + "," + 0 + ")");
        }
            

    

     

      //     var dot3 = svg.selectAll("dot")
      //   .data(data)
      // .enter().append("circle")
      // .attr("class", "dot1")
      //   .attr("r", 5)
      //   .attr("cx", function(d) { return x(d.year); })
      //   .attr("cy", function(d) { return y(d.used_asp_cw); })
      //   .attr("transform",
      // "translate(" + 40 + "," + 0 + ")")
      // .on("mouseover", function (d) {
      //               div.transition()
      //                   .duration(600)
      //                   .style("opacity", .7)
      //               div.html("<p>In " + d.year + ", the average used RV sold</p> <p>by Camping World cost $" + d.used_asp_cw + ".</p>")
      //                   .style("left", (d3.event.pageX) + "px")
      //                   .style("top", (d3.event.pageY - 28) + "px");
        
      //           });
      //   }
        

      // dot1
      //           .on("mouseover", function (d) {
      //               div.transition()
      //                   .duration(600)
      //                   .style("opacity", .7)
      //               div.html("<p>In " + d.year + ", Camping World owned a</p> <p>" + d.mktSh + "% share of the US RV market.</p>")
      //                   .style("left", (d3.event.pageX) + "px")
      //                   .style("top", (d3.event.pageY - 28) + "px");
        
      //           });
     
      
      
      setTimeout(continueButton4,11500)

      })
    };

    function fadeButtonRow4() {
      document.getElementById("button-row4").classList.add("animated", "fadeOut");
      document.getElementById("button-row4").style.visibility = "hidden";
      document.getElementById("button-row4").style.opacity = 0;
      document.getElementById("button-row4").style.transition =
        "visibility 1300ms linear 1300ms, opacity 1300ms";
    
    }
    
    function continueButton4() {
      document.getElementById('continue-button3').setAttribute('id','continue-button4');
      document.getElementById("continue-button4").removeAttribute('onclick','questionTresFade()');
      document.getElementById("continue-button4").setAttribute('onclick','questionQuatroFade()');
      setTimeout(moveToPage4,100)
    }
    function moveToPage4() {

      document.getElementById("button-row4").style.display = "none";
      document.getElementById("continue-button4").style.display = "block";
    document.getElementById("continue-button4").style.visibility = "visible";
    document.getElementById("continue-button4").style.opacity = 1;
    document.getElementById("continue-button4").style.transition =
      "visibility 1300ms linear 1300ms, opacity 1300ms";
    }
    
    
    function questionQuatroFade() {
      document.getElementById("svg2").classList.add("animated", "fadeOut");
      document.getElementById("questionquatro").classList.add("animated", "fadeOut");
      document.getElementById("continue-button4").classList.add("animated", "fadeOut");
      
      
      setTimeout(removeSvg2, 300);
    }
    
    function removeSvg2() {
      document.getElementById("svg2").style.display = "none";
      document.getElementById("continue-button4").style.display = "none"
      document.getElementById("item24").style.display= 'none';
      
      document.getElementById("questionquatro").style.display = "none";
      
     setTimeout(removeSecondGraph,1000);
    }
    function removeSecondGraph(){
      
      document.getElementById("item24").style.visibility = "hidden";
      document.getElementById("item24").style.opacity = 0;
      document.getElementById("item24").style.transition =
        "visibility 1300ms linear 1300ms, opacity 1300ms";
      // document.getElementById("questioncinco").style.display = "block";
    
      
        setTimeout(removeArticle2,300);
     
    }
    
    function removeArticle2() {
      
      document.getElementById("item23").classList.add("animated", "fadeOut");
      document.getElementById("item23").style.visibility = "hidden";
      document.getElementById("item23").style.opacity = 0;
      document.getElementById("item23").style.transition =
        "visibility 1300ms linear 1300ms, opacity 1300ms";
        setTimeout(removeQuote2,800);
    }
    
    function removeQuote2() {
      document.getElementById("item23").style.display = "none";
      document.getElementById("item22").classList.add("fadeOut");
      document.getElementById("item21").classList.add("fadeOut");
      document.getElementById("item22").style.visibility = "hidden";
      document.getElementById("item22").style.opacity = 0;
      document.getElementById("item22").style.transition =
        "visibility 1300ms linear 1300ms, opacity 1300ms";
        setTimeout(removeImage2, 500);
    }
    
    function removeImage2() {
      document.getElementById("item22").style.display = "none";
      document.getElementById("item21").style.display = "none";
      document.getElementById("item21").style.visibility = "hidden";
      document.getElementById("item21").style.opacity = 0;
      document.getElementById("item21").style.transition =
        "visibility 1300ms linear 1300ms, opacity 1300ms";
      setTimeout(removeContainer2, 900);
    }
    function removeContainer2(){
     
      document.getElementById("container2").style.visibility = "hidden";
      document.getElementById("container2").style.opacity = 0;
      document.getElementById("container2").style.display = "none";
      loadContainer3();
    }
    
    function loadContainer3(){
  
      document.getElementById("container3").style.display = "grid";
      document.getElementById("container3").style.visibility = "visible";
      document.getElementById("container3").style.opacity = 1;
      document.getElementById("container3").style.transition =
        "visibility 1300ms linear 1300ms, opacity 1300ms";
        setTimeout(loadImage3,400);
      }
    
    function loadImage3(){
      document.getElementById("item31").classList.add("animated","fadeIn");
      document.getElementById("item32").classList.add("animated","fadeIn");
      document.getElementById("item31").style.display = "block";
      document.getElementById("item32").style.display = "block";
      document.getElementById("item33").style.display = "block";
      
      document.getElementById("item31").style.visibility = "visible";
      document.getElementById("item31").style.opacity = 1;
      document.getElementById("item31").style.transition =
        "visibility 1300ms linear 1300ms, opacity 1300ms";
        setTimeout(loadQuote3,20);
      }
      function loadQuote3(){
        document.getElementById("item32").style.visibility = "visible";
        document.getElementById("item32").style.opacity = 1;
        document.getElementById("item32").style.transition =
          "visibility 1300ms linear 1300ms, opacity 1300ms";
          setTimeout(loadArticle3,2200);
          //CHANGE TIME!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        }
    
        function loadArticle3(){
          
          document.getElementById("item33").classList.add("animated","fadeIn");
          document.getElementById("item33").style.visibility = "visible";
          document.getElementById("item33").style.opacity = 1;
          document.getElementById("item33").style.transition =
            "visibility 1300ms linear 1300ms, opacity 1300ms";
            setTimeout(loadChart3,4400);
            //CHANGE TIME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          }
          function loadChart3(){
            document.getElementById("item34").style.display = "block";
            document.getElementById("item34").classList.add("animated","fadeIn");
          document.getElementById("item34").style.visibility = "visible";
          document.getElementById("item34").style.opacity = 1;
          document.getElementById("item34").style.transition =
            "visibility 1300ms linear 1300ms, opacity 1300ms";
            question5();
          }
function question5() {
  document.getElementById("svg3").style.display = "block";
  document.getElementById("svg3").classList.add("animated","fadeIn");
document.getElementById("svg3").style.visibility = "visible";
document.getElementById("svg3").style.opacity = 1;
document.getElementById("svg3").style.transition =
  "visibility 1300ms linear 1300ms, opacity 1300ms";
      var svg = d3.select("#svg3"),
    margin = {top: 20, right: 20, bottom: 20, left: -1},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      
    var formatNumber = d3.format(".1f");

    
 var x = d3.scaleBand().rangeRound([0, width]).padding(0.18),
     y = d3.scaleLinear().rangeRound([height, 0]),
     z = d3.scaleOrdinal().range(["#eee8aa", "#FF6347", "#7FFFD4","#FFA500","#DDA0DD"]);


     var xAxis = d3.axisBottom(x)
    .ticks(5);


  var yAxis = d3.axisRight(y)
    .tickSize(width)
    .tickFormat(function(d) {
      var s = formatNumber(d / 1e6);
      return this.parentNode.nextSibling
          ? "\xa0" + s
          : "$" + s + " billion";
    });

   function make_y_gridlines() {
     return d3.axisLeft(y)
       .ticks(8)
   }

 d3.csv("chart3.csv", function(error, data) {
   
  if (error) throw error;

var keys = data.columns.slice(1);

data.sort(function(a,b) { return b.total - a.total })

  x.domain(data.map(function(d) { return d.year; }));
  y.domain([0, 5000000]);
  z.domain(keys);

  

  // g.append("g")
  //    .attr("class","grid")
  //    .style("stroke-dasharray",("3,3"))
  //    .call(make_y_gridlines()
  //      .tickSize(-width)
  //      .tickFormat("")
  //          )

  //data append
 





  // svg.append("g")
  //    .attr("class", "axis axis--x")
  //    .attr("transform", "translate(0," + height + ")")
  //    .call(d3.axisBottom(x));


    //  svg.append("g")
    //  .attr("class", "axis axis--y")
    //  .call(d3.axisLeft(y).ticks(8,"s"))


  //  .append("text")
  //    .attr("transform", "rotate(-90)")
  //    .attr("y", 12)
  //    .attr("dy", "0.71em")
  //    .attr("text-anchor", "end")
  //    .text("$ Rev");

    //  svg.append("text")
    //  .attr("transform","rotate(-90)")
    //  .attr("y",0-margin.left-10)
    //  .attr("x",0-height/2)
    //  .attr("dy","2em")
    //  .attr("text-anchor","middle")
    //  .style("font","14px Lato")
    //  .style("font-weight","bolder")
    //  .text("Yearly Total Revenue ($)");


   
     
    
    g.append("g")
    .attr("transform", "translate(20," + -24 + ")")
    .attr('class','axis--x')
    .call(customXAxis);
    
    function customXAxis(g) {
      g.call(xAxis);
      g.select(".domain").remove();
    }

    g.append("g")
     .attr('class','axis--y')
    .call(customYAxis);

    function customYAxis(g) {
      g.call(yAxis);
      g.select(".domain").remove();
      g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "#D3D3D3").attr("stroke-dasharray", "2,2");
      g.selectAll(".tick text").attr("x", 4).attr("dy", -4);
    }

    let legend = g.append('g')
    .attr('font-family','Cabin')
    .attr('font-size',10)
    .attr('text-anchor', 'start')
    .style('text-transformation','uppercase')
    .selectAll('g')
    .data(keys.slice().reverse())
    .enter()
    .append('g')
  
    .attr('transform', function(d,i) { return 'translate(0,' + (i+0.20) * 20 + ')'; });
  legend.append('rect')
  .transition()
  .delay(1000)
    .attr('x', 60)
    .attr('width',15)
    .attr('height',15)
    .attr('fill', z);
  legend.append('text')
  .transition()
  .delay(1000)
    .attr('x', 78)
    .attr('y', 8)
    .attr('dy', '0.28em')
    .text(function(d) { return d})


    d3.selectAll(".q-button5")
  .on("click", function() {
    var answercinco = +d3.select(this).node().value;

    g.append('g')
    .selectAll('g')
    .data(d3.stack().keys(keys)(data))
    .enter()
    .append('g')
    .attr('fill',function(d) { return z(d.key); })
    .selectAll('rect')
    .data(function(d) { return d; })
    .enter()
    .append('rect')
    .attr('x', function(d) { return x(d.data.year) + 20 })
    .attr('y', function(d) { return y(d[1]); })
    .attr('width', x.bandwidth())
    .transition()
      .ease(d3.easeQuadIn)
      .delay(function(d,i){
        return 800 + (i  * 900);
      })
      .duration(1800)
    .attr('height', function(d) { return y(d[0]) - y(d[1]); });
 
    setTimeout(fadeButtonRow5, 1200);

  g
        .append("text")
        .attr("class", "revchart1")
        .transition()
        .ease(d3.easeQuadIn)
        .delay(3200)
        .duration(300)
        .attr("font-family", "Cabin")
        .attr("text-anchor", "middle")
        .attr("font-size", "1rem")
        .attr("x", 94)
        .attr("y", height - 85 + 20)
        .attr("fill", "#00008B")
        .attr("id", "text1c")
        .text("44.4%");
        g
        .append("text")
        .attr("class", "revchart1")
        .transition()
        .ease(d3.easeQuadIn)
        .delay(3200)
        .duration(300)
        .attr("font-family", "Cabin")
        .attr("text-anchor", "middle")
        .attr("font-size", "1rem")
        .attr("x", 94)
        .attr("y", height - 131 + 20)
        .attr("fill", "#00008B")
        .attr("id", "text1c")
        .text("24.6%");

        g
        .append("text")
        .attr("class", "revchart1")
        .transition()
        .ease(d3.easeQuadIn)
        .delay(4000)
        .duration(300)
        .attr("font-family", "Cabin")
        .attr("text-anchor", "middle")
        .attr("font-size", "1rem")
        .attr("x", 214)
        .attr("y", height - 96 + 20)
        .attr("fill", "#00008B")
        .attr("id", "text1c")
        .text("44.6%");
        g
        .append("text")
        .attr("class", "revchart1")
        .transition()
        .ease(d3.easeQuadIn)
        .delay(4000)
        .duration(300)
        .attr("font-family", "Cabin")
        .attr("text-anchor", "middle")
        .attr("font-size", "1rem")
        .attr("x", 214)
        .attr("y", height - 152 + 20)
        .attr("fill", "#00008B")
        .attr("id", "text1c")
        .text("25.8%");

        g
        .append("text")
        .attr("class", "revchart1")
        .transition()
        .ease(d3.easeQuadIn)
        .delay(4900)
        .duration(300)
        .attr("font-family", "Cabin")
        .attr("text-anchor", "middle")
        .attr("font-size", "1rem")
        .attr("x", 338)
        .attr("y", height - 132 + 20)
        .attr("fill", "#00008B")
        .attr("id", "text1c")
        .text("48.9%");
        g
        .append("text")
        .attr("class", "revchart1")
        .transition()
        .ease(d3.easeQuadIn)
        .delay(4900)
        .duration(300)
        .attr("font-family", "Cabin")
        .attr("text-anchor", "middle")
        .attr("font-size", "1rem")
        .attr("x", 338)
        .attr("y", height - 198 + 20)
        .attr("fill", "#00008B")
        .attr("id", "text1c")
        .text("24.5%");

        g
        .append("text")
        .attr("class", "revchart1")
        .transition()
        .ease(d3.easeQuadIn)
        .delay(5800)
        .duration(300)
        .attr("font-family", "Cabin")
        .attr("text-anchor", "middle")
        .attr("font-size", "1rem")
        .attr("x", 459)
        .attr("y", height - 153 + 20)
        .attr("fill", "#00008B")
        .attr("id", "text1c")
        .text("52.9%");
        g
        .append("text")
        .attr("class", "revchart1")
        .transition()
        .ease(d3.easeQuadIn)
        .delay(5800)
        .duration(300)
        .attr("font-family", "Cabin")
        .attr("text-anchor", "middle")
        .attr("font-size", "1rem")
        .attr("x", 459)
        .attr("y", height - 211 + 20)
        .attr("fill", "#00008B")
        .attr("id", "text1c")
        .text("20.0%");

        g
        .append("text")
        .attr("class", "revchart1")
        .transition()
        .ease(d3.easeQuadIn)
        .delay(6600)
        .duration(300)
        .attr("font-family", "Cabin")
        .attr("text-anchor", "middle")
        .attr("font-size", "1rem")
        .attr("x", 575)
        .attr("y", height - 198 + 20)
        .attr("fill", "#00008B")
        .attr("id", "text1c")
        .text("57.5%");
        g
        .append("text")
        .attr("class", "revchart1")
        .transition()
        .ease(d3.easeQuadIn)
        .delay(6600)
        .duration(300)
        .attr("font-family", "Cabin")
        .attr("text-anchor", "middle")
        .attr("font-size", "1rem")
        .attr("x", 575)
        .attr("y", height - 251 + 20)
        .attr("fill", "#00008B")
        .attr("id", "text1c")
        .text("15.5%")
        
        g
      .append("text")
      .transition()
      .delay(9600)
      .attr("x", 300)
      .attr("y", 18)
      .attr("fill", "#fa3c00")
      .attr("class", "label1")
      .attr("id", "text4a")
      .text(function() {
        if (answercinco == "1") {
          return "Exactly right! RVs have made up about 70% of";
        } else {
          return "Nope, RVs have made up about 70% of";
        }
      });
    g
      .append("text")
      .transition()
      .delay(9600)
      .attr("x", 300)
      .attr("y", 38)
      .attr("fill", "#fa3c00")
      .attr("class", "label1")
      .attr("class", "animated")
      .attr("class", "fadeIn")
      .attr("id", "text4b")
      .text(function() {
        if (answercinco == "1") {
          return "Camping World's revenue in the last 5 years.";
        } else {
          return "Camping World's revenue in the last 5 years.";
        };
      });

      

      



  })
  })
}

function fadeButtonRow5() {
  document.getElementById("button-row5").classList.add("animated", "fadeOut");
  document.getElementById("button-row5").style.visibility = "hidden";
  document.getElementById("button-row5").style.opacity = 0;
  document.getElementById("button-row5").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
    setTimeout(removeButtonRow5Display,10600)
}

function removeButtonRow5Display(){
  document.getElementById("button-row5").style.display = "none";
  document.getElementById("continue-button5").style.display = "block";
  document.getElementById("continue-button5").style.visibility = "visible";
  document.getElementById("continue-button5").style.opacity = 1;
  document.getElementById("continue-button5").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
}


function questionCincoFade() {
  document.getElementById("svg3").classList.add("animated", "fadeOut");
  document.getElementById("questioncinco").classList.add("animated", "fadeOut");
  document.getElementById("continue-button5").classList.add("animated", "fadeOut");
  
  
  setTimeout(removeSvg3, 300);
}

function removeSvg3() {
  document.getElementById("svg3").style.display = "none";
  document.getElementById("continue-button5").style.display = "none"
  document.getElementById("item34").style.display= 'none';
  
  document.getElementById("questioncinco").style.display = "none";
  
 setTimeout(removeThirdGraph,1000);
}
function removeThirdGraph(){
  
  document.getElementById("item34").style.visibility = "hidden";
  document.getElementById("item34").style.opacity = 0;
  document.getElementById("item34").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
  // document.getElementById("questioncinco").style.display = "block";

  
    setTimeout(removeArticle3,300);
 
}

function removeArticle3() {
  
  document.getElementById("item33").classList.add("animated", "fadeOut");
  document.getElementById("item33").style.visibility = "hidden";
  document.getElementById("item33").style.opacity = 0;
  document.getElementById("item33").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
    setTimeout(removeQuote3,800);
}

function removeQuote3() {
  document.getElementById("item33").style.display = "none";
  document.getElementById("item32").classList.add("fadeOut");
  document.getElementById("item31").classList.add("fadeOut");
  document.getElementById("item32").style.visibility = "hidden";
  document.getElementById("item32").style.opacity = 0;
  document.getElementById("item32").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
    setTimeout(removeImage3, 500);
}

function removeImage3() {
  document.getElementById("item32").style.display = "none";
  document.getElementById("item31").style.display = "none";
  document.getElementById("item31").style.visibility = "hidden";
  document.getElementById("item31").style.opacity = 0;
  document.getElementById("item31").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
  setTimeout(removeContainer3, 900);
}
function removeContainer3(){
  
  document.getElementById("container3").style.visibility = "hidden";
  document.getElementById("container3").style.opacity = 0;
  loadContainer4();
}

function loadContainer4(){
  document.getElementById("container3").style.display = "none";

  document.getElementById("container4").style.display = "grid";
  document.getElementById("container4").style.visibility = "visible";
  document.getElementById("container4").style.opacity = 1;
  document.getElementById("container4").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
    setTimeout(loadImage4,400);
  }

function loadImage4(){
  document.getElementById("item41").classList.add("animated","fadeIn");
  document.getElementById("item42").classList.add("animated","fadeIn");
  document.getElementById("item41").style.display = "block";
  document.getElementById("item42").style.display = "block";
  document.getElementById("item43").style.display = "block";
  
  document.getElementById("item41").style.visibility = "visible";
  document.getElementById("item41").style.opacity = 1;
  document.getElementById("item41").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
    setTimeout(loadQuote4,20);
  }
  function loadQuote4(){
    document.getElementById("item42").style.visibility = "visible";
    document.getElementById("item42").style.opacity = 1;
    document.getElementById("item42").style.transition =
      "visibility 1300ms linear 1300ms, opacity 1300ms";
      setTimeout(loadArticle4,2200);
      //CHANGE TIME!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    function loadArticle4(){
      
      document.getElementById("item43").classList.add("animated","fadeIn");
      document.getElementById("item43").style.visibility = "visible";
      document.getElementById("item43").style.opacity = 1;
      document.getElementById("item43").style.transition =
        "visibility 1300ms linear 1300ms, opacity 1300ms";
        setTimeout(loadChart4,4400);
        
        //CHANGE TIME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      }
      function loadChart4(){
        document.getElementById("item44").style.display = "block";
        document.getElementById("item44").classList.add("animated","fadeIn");
      document.getElementById("item44").style.visibility = "visible";
      document.getElementById("item44").style.opacity = 1;
      document.getElementById("item44").style.transition =
        "visibility 1300ms linear 1300ms, opacity 1300ms";
        
        setTimeout(question6,500);
      }

  function question6(){
   
    document.getElementById("svg4").style.display = "block";
    document.getElementById("svg4").classList.add("animated","fadeIn");
  document.getElementById("svg4").style.visibility = "visible";
  document.getElementById("svg4").style.opacity = 1;
  document.getElementById("svg4").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
    var svg = d3.select("#svg4"),
  margin = {top: 20, right: 40, bottom: 20, left: 40},
  width = +svg.attr("width") - margin.left - margin.right,
  height = +svg.attr("height") - margin.top - margin.bottom,
  g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = d3
      .scaleBand()
      .rangeRound([0, width])
      .padding(0.18),
    y = d3.scaleLinear().rangeRound([height, 0]),
    z = d3.scaleOrdinal().range(["#1E90FF", "#eee8aa"]);

    var formatNumber = d3.format(".1f");

  var g = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var xAxis = d3.axisBottom(x)
    .ticks(5);

    var yAxis = d3.axisRight(y)
    .tickSize(width)
    .tickFormat(function(d) {
      var s = formatNumber(d / 1e6);
      return this.parentNode.nextSibling
          ? "\xa0" + s
          : "$" + s + " billion";
    });

  function make_y_gridlines() {
    return d3.axisLeft(y).ticks(3);
  }

  d3.csv("chart7.csv", function(error, data) {
    if (error) throw error;

    var keys = data.columns.slice(1);

    data.sort(function(a, b) {
      return b.total - a.total;
    });

    x.domain(
      data.map(function(d) {
        return d.category;
      })
    );
    y.domain([0, 3000000]);
    z.domain(keys);

    // g
    //   .append("g")
    //   .attr("class", "grid")
    //   .style("stroke-dasharray", "3,3")
    //   .call(
    //     make_y_gridlines()
    //       .tickSize(-width)
    //       .tickFormat("")
    //   );

    //data append

    g.append("g")
    .attr("transform", "translate(20," + height + ")")
    .attr('class','axis axis--x')
    .call(customXAxis);

    
     g.append("g")
     .attr('class','axis--y')
    .call(customYAxis);
    
    function customXAxis(g) {
      g.call(xAxis);
      g.select(".domain").remove();
    }
    
    function customYAxis(g) {
        g.call(yAxis);
        g.select(".domain").remove();
        g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "#D3D3D3").attr("stroke-dasharray", "2,2");
        g.selectAll(".tick text").attr("x", 4).attr("dy", -4);
      }
    // g
    //   .append("g")
    //   .attr("class", "axis axis--x")
    //   .attr("transform", "translate(0," + height + ")")
    //   .call(d3.axisBottom(x));

    // g
    //   .append("g")
    //   .attr("class", "axis axis--y")
    //   .call(d3.axisLeft(y).ticks(8, "s"))
    //   // .append("text")
    //   // .attr("transform", "rotate(-90)")
    //   // .attr("y", 12)
    //   // .attr("dy", "0.71em")
    //   // .attr("text-anchor", "end")
    //   // .text("$ Rev");

    g
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left - 10)
      .attr("x", 0 - height / 2)
      .attr("dy", "2em")
      .attr("text-anchor", "middle")
      .attr("font-family", "Cabin")
      .style("font-weight", "bolder")
      .text("2017 Sales by Category ($)");

    let legend2 = g
      .append("g")
      .attr("font-family", "Cabin")
      .attr("font-size", 12)
      .attr("text-anchor", "start")
      .attr("id", "legend2")
      .selectAll("g")
      .data(keys.slice().reverse())
      .enter()
      .append("g")

      .attr("transform", function(d, i) {
        return "translate(0," + (i + 0.35) * 20 + ")";
      });
    legend2
      .append("rect")

      .attr('x', 43)
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", z);
    legend2
      .append("text")
      .attr("x", 60)
      .attr("y", 8)
      .attr("dy", "0.35em")
      .text(function(d) {
        return d;
      });
      d3.selectAll(".q-button6")
      .on("click", function() {
        var answerseis = +d3.select(this).node().value;
    g
      .append("g")
      .selectAll("g")
      .data(d3.stack().keys(keys)(data))
      .enter()
      .append("g")
      .attr("fill", function(d) {
        return z(d.key);
      })
      .selectAll("rect")
      .data(function(d) {
        return d;
      })
      .enter()
      .append("rect")
      .attr("x", function(d) {
        return x(d.data.category) + 20 ;
      })
      .attr("y", function(d) {
        return y(d[1]);
      })
      .attr("width", x.bandwidth())
      .attr("height", function(d) {
        return y(d[0]) - y(d[1]);
      })
      .style("opacity", 0)
      .transition()
      .ease(d3.easeQuadIn)
      .duration(1300)
      .style("opacity", 1);

    g
      .append("text")
      .transition()
      .delay(2200)
      .attr("font-family", "Cabin")
      .attr("text-anchor", "middle")
      .attr("font-size", "0.75rem")
      .attr("x", 43+49)
      .attr("y", height - 32)
      .attr("fill", "#eee8aa")
      .attr("class", "sspct1")
      .attr("id", "text3w")
      .text("14.0%");

    g
      .append("text")
      .transition()
      .delay(2800)
      .attr("font-family", "Cabin")
      .attr("text-anchor", "middle")
      .attr("font-size", "0.75rem")
      .attr("x", 158+53)
      .attr("y", height - 10)
      .attr("fill", "#eee8aa")
      .attr("class", "sspct1")
      .attr("id", "text3w")
      .text("26.2%");

    g
      .append("text")
      .transition()
      .delay(3400)
      .attr("font-family", "Cabin")
      .attr("text-anchor", "middle")
      .attr("font-size", "0.75rem")
      .attr("x", 273+57)
      .attr("y", height - 22)
      .attr("fill", "#eee8aa")
      .attr("class", "sspct1")
      .attr("id", "text3w")
      .text("44.0%");

    g
      .append("text")
      .transition()
      .delay(4000)
      .attr("font-family", "Cabin")
      .attr("text-anchor", "middle")
      .attr("font-size", "0.75rem")
      .attr("x", 388+61)
      .attr("y", height - 5)
      .attr("fill", "#eee8aa")
      .attr("class", "sspct1")
      .attr("id", "text3w")
      .text("57.9%");

    g
      .append("text")
      .transition()
      .delay(4600)
      .attr("font-family", "Cabin")
      .attr("text-anchor", "middle")
      .attr("font-size", "0.75rem")
      .attr("x", 503+65)
      .attr("y", height - 30)
      .attr("fill", "#eee8aa")
      .attr("class", "sspct1")
      .attr("id", "text3w")
      .text("100%");

    g
      .append("text")
      .transition()
      .delay(6200)
      .attr("x", 280)
      .attr("y", 32)
      .attr("fill", "#fa3c00")
      .attr("class", "label1")
      .attr("id", "text3a")
      .text(function() {
        if (answerseis == "1") {
          return "That's right! Financing & Insurance is";
        } else {
          return "No, actually Financing & Insurance is";
        }
      });
    g
      .append("text")
      .transition()
      .delay(6200)
      .attr("x", 290)
      .attr("y", 52)
      .attr("fill", "#fa3c00")
      .attr("class", "label1")
      .attr("class", "animated")
      .attr("class", "fadeIn")
      .attr("id", "text3b")
      .text(function() {
        if (answerseis == "1") {
          return "CW's highest margin business segment - it returns";
        } else {
          return "CW's highest margin business segment - it returns";
        }
      });
    g
      .append("text")
      .transition()
      .delay(6200)
      .attr("x", 290)
      .attr("y", 72)
      .attr("fill", "#fa3c00")
      .attr("class", "label1")
      .attr("class", "animated")
      .attr("class", "fadeIn")
      .attr("id", "text3c")
      .text(function() {
        if (answerseis == "1") {
          return "100% of revenues because it offloads the loans";
        } else {
          return "100% of revenues because it offloads the loans";
        }
      });
    g
      .append("text")
      .transition()
      .delay(6200)
      .attr("x", 290)
      .attr("y", 92)
      .attr("fill", "#fa3c00")
      .attr("class", "label1")
      .attr("class", "animated")
      .attr("class", "fadeIn")
      .attr("id", "text3d")
      .text(function() {
        if (answerseis == "1") {
          return "to third party banks. Parts & Services and";
        } else {
          return "to third party banks. Parts & Services and";
        }
      });
      g
      .append("text")
      .transition()
      .delay(6200)
      .attr("x", 290)
      .attr("y", 112)
      .attr("fill", "#fa3c00")
      .attr("class", "label1")
      .attr("class", "animated")
      .attr("class", "fadeIn")
      .attr("id", "text3d")
      .text(function() {
        if (answerseis == "1") {
          return "Consumer Services have the next highest margins,";
        } else {
          return "Consumer Services have the next highest margins,";
        }
      });
      g
      .append("text")
      .transition()
      .delay(6200)
      .attr("x", 290)
      .attr("y", 132)
      .attr("fill", "#fa3c00")
      .attr("class", "label1")
      .attr("class", "animated")
      .attr("class", "fadeIn")
      .attr("id", "text3d")
      .text(function() {
        if (answerseis == "1") {
          return "which are significantly higher than low RV margins.";
        } else {
          return "which are significantly higher than low RV margins.";
        }
      });
      setTimeout(fadeButtonRow6,1400)

})
  });
    

      }

      function fadeButtonRow6() {
        document.getElementById("button-row6").classList.add("animated", "fadeOut");
        document.getElementById("button-row6").style.visibility = "hidden";
        document.getElementById("button-row6").style.opacity = 0;
        document.getElementById("button-row6").style.transition =
          "visibility 1300ms linear 1300ms, opacity 1300ms";
          setTimeout(removeButtonRow6Display,12200)
      }
      
      function removeButtonRow6Display(){
        document.getElementById("button-row6").style.display = "none";
        document.getElementById("continue-button6").style.display = "block";
        document.getElementById("continue-button6").style.visibility = "visible";
        document.getElementById("continue-button6").style.opacity = 1;
        document.getElementById("continue-button6").style.transition =
          "visibility 1300ms linear 1300ms, opacity 1300ms";
      }
      
      
      function questionSeisFade() {
        document.getElementById("svg4").classList.add("animated", "fadeOut");
        document.getElementById("questionseis").classList.add("animated", "fadeOut");
        document.getElementById("continue-button6").classList.add("animated", "fadeOut");
        
        
        setTimeout(removeSvg4, 300);
      }
      
      function removeSvg4() {
        document.getElementById("svg4").style.display = "none";
        document.getElementById("continue-button6").style.display = "none"
        document.getElementById("item44").style.display= 'none';
        
        document.getElementById("questionseis").style.display = "none";
        
       setTimeout(removeFourthGraph,1000);
      }
      function removeFourthGraph(){
        
        document.getElementById("item44").style.visibility = "hidden";
        document.getElementById("item44").style.opacity = 0;
        document.getElementById("item44").style.transition =
          "visibility 1300ms linear 1300ms, opacity 1300ms";
        // document.getElementById("questioncinco").style.display = "block";
      
        
          setTimeout(removeArticle4,300);
       
      }
      
      function removeArticle4() {
        
        document.getElementById("item43").classList.add("animated", "fadeOut");
        document.getElementById("item43").style.visibility = "hidden";
        document.getElementById("item43").style.opacity = 0;
        document.getElementById("item43").style.transition =
          "visibility 1300ms linear 1300ms, opacity 1300ms";
          setTimeout(removeQuote4,800);
      }
      
      function removeQuote4() {
        document.getElementById("item43").style.display = "none";
        document.getElementById("item42").classList.add("fadeOut");
        document.getElementById("item41").classList.add("fadeOut");
        document.getElementById("item42").style.visibility = "hidden";
        document.getElementById("item42").style.opacity = 0;
        document.getElementById("item42").style.transition =
          "visibility 1300ms linear 1300ms, opacity 1300ms";
          setTimeout(removeImage4, 500);
      }
      
      function removeImage4() {
        document.getElementById("item42").style.display = "none";
        document.getElementById("item41").style.display = "none";
        document.getElementById("item41").style.visibility = "hidden";
        document.getElementById("item41").style.opacity = 0;
        document.getElementById("item41").style.transition =
          "visibility 1300ms linear 1300ms, opacity 1300ms";
        setTimeout(removeContainer4, 1200);
      }
      function removeContainer4(){
       
        document.getElementById("container4").style.visibility = "hidden";
        document.getElementById("container4").style.opacity = 0;
        document.getElementById("container4").style.display = "none";
        loadContainer5();
      }
      
      function loadContainer5(){
        document.getElementById("container4").style.display = "none";
      
        document.getElementById("container5").style.display = "grid";
        document.getElementById("container5").style.visibility = "visible";
        document.getElementById("container5").style.opacity = 1;
        document.getElementById("container5").style.transition =
          "visibility 1300ms linear 1300ms, opacity 1300ms";
          setTimeout(loadImage5,500);
        }
      
      function loadImage5(){
        document.getElementById("item51").classList.add("animated","fadeIn");
        document.getElementById("item52").classList.add("animated","fadeIn");
        document.getElementById("item51").style.display = "block";
        document.getElementById("item52").style.display = "block";
        document.getElementById("item53").style.display = "block";
        
        document.getElementById("item51").style.visibility = "visible";
        document.getElementById("item51").style.opacity = 1;
        document.getElementById("item51").style.transition =
          "visibility 1300ms linear 1300ms, opacity 1300ms";
          setTimeout(loadQuote5,20);
        }
        function loadQuote5(){
          document.getElementById("item52").style.visibility = "visible";
          document.getElementById("item52").style.opacity = 1;
          document.getElementById("item52").style.transition =
            "visibility 1300ms linear 1300ms, opacity 1300ms";
            setTimeout(loadArticle5,2200);
            //CHANGE TIME!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          }
      
          function loadArticle5(){
            
            document.getElementById("item53").classList.add("animated","fadeIn");
            document.getElementById("item53").style.visibility = "visible";
            document.getElementById("item53").style.opacity = 1;
            document.getElementById("item53").style.transition =
              "visibility 1300ms linear 1300ms, opacity 1300ms";
              setTimeout(loadChart5,3400);
              //CHANGE TIME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            }
            function loadChart5(){
              document.getElementById("item54").style.display = "block";
              document.getElementById("item54").classList.add("animated","fadeIn");
            document.getElementById("item54").style.visibility = "visible";
            document.getElementById("item54").style.opacity = 1;
            document.getElementById("item54").style.transition =
              "visibility 1300ms linear 1300ms, opacity 1300ms";
              
    
       
        replaceSrc();
        }
        function replaceSrc(){
          document.getElementById("d3script").src = "https://d3js.org/d3.v2.js?2.9.1";
          setTimeout(question7,800)
        }


        function question7() {
          document.getElementById("svg5").style.display = "block";
    document.getElementById("svg5").classList.add("animated","fadeIn");
  document.getElementById("svg5").style.visibility = "visible";
  document.getElementById("svg5").style.opacity = 1;
  document.getElementById("svg5").style.transition =
    "visibility 1300ms linear 1300ms, opacity 1300ms";
    

    var width = 1000,
              height = 540;


    var svg = d3.select("#svg5")

              .attr("width", width)
              .attr("height", height);


          var links = [
            {source: "Good Sam", target: "Good Sam", icon: "http://samhooker.com/sth/cwh/goodsam1.png"},
            {source: "New RV Sales", target: "Good Sam",icon: "http://samhooker.com/sth/cwh/newrv1.png"},
            {source: "Used RV Sales", target: "Good Sam", icon: "http://samhooker.com/sth/cwh/usedrv2.png"},
            {source: "Parts & Servicing", target: "Good Sam", icon: "http://samhooker.com/sth/cwh/partsservice1.png"},
            {source: "Financing & Insurance", target: "Good Sam", icon: "http://samhooker.com/sth/cwh/finance1.png"},
            // {source: "Gander Outdoors", target: "Good Sam", icon: "http://samhooker.com/sth/cwh/gandersam.png"},
            // {source: "Overton's Marine", target: "Good Sam",icon: "http://samhooker.com/sth/cwh/overtonssam.png"},
            // {source: "The House", target: "Good Sam", icon: "http://samhooker.com/sth/cwh/housesam.png"},
            // {source: "Erehwon Outfitters", target: "Good Sam", icon: "http://samhooker.com/sth/cwh/erehwonsam.png"},
          ];
          
          var nodes = {};
          
          // Compute the distinct nodes from the links.
          links.forEach(function(link) {
            link.source = nodes[link.source] || (nodes[link.source] = {name: link.source, icon: link.icon});
            link.target = nodes[link.target] || (nodes[link.target] = {name: link.target, icon: link.icon});
          });
          
          
          
          var force = d3.layout.force()
              .nodes(d3.values(nodes))
              .links(links)
              .size([width, height])
              .linkDistance(240)
              .charge(-4000)
              .on("tick", tick)
              .start();
          
              
          
          var link = svg.selectAll(".link")
              .data(force.links())
              .enter().append("line")
              .attr("class", "link");
          
          var node = svg.selectAll(".node")
              .data(force.nodes())
              .enter().append("g")
              .attr("class", "node")
              // .on("mouseover", mouseover)
              // .on("mouseout", mouseout)
              .call(force.drag);
          
          // node.append("circle")
          //     .attr("r", 8);
          
          node.append("image")
                .attr("xlink:href", function(d) { return d.icon; })
                .attr("x", "5px")
                .attr("y", "5px")
                .attr("width", function(d){
                  if (d.name == "Good Sam") {
                    return "200px"
                  } else {
                    return "80px"
                  }
                })
                .attr("height",  function(d){
                  if (d.name == "Good Sam") {
                    return "220px"
                  } else {
                    return "80px"
                  }
                })
          
          
          node.append("text")
              .attr("x", 90)
              .attr("y", 35)
              .attr("dy", ".35em")
              .text(function(d) { 
                if (d.name == "Good Sam") {
                  return ""
                } else {
                  return d.name 
                }
              })
          
          function tick() {
            link
                .attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });
          
            node
                .attr("transform", function(d) { return "translate(" + ((d.x)-70) + "," + ((d.y)-52) + ")"; });
          }
          
          d3.selectAll(".q-button7")
  .on("click", function() {
    var answersev = +d3.select(this).node().value;
  
    svg.selectAll("*").remove();
            document.getElementById("button-row7").classList.add("animated", "fadeOut");
            document.getElementById("button-row7").style.visibility = "hidden";
            document.getElementById("button-row7").style.opacity = 0;
            document.getElementById("button-row7").style.transition =
              "visibility 1300ms linear 1300ms, opacity 1300ms";
            setTimeout(finalForceChart,700);
  
            function finalForceChart() {
              document.getElementById("questionsev").classList.add("animated", "fadeOut");
              document.getElementById("questionsev").style.visibility = "hidden";
              document.getElementById("questionsev").style.opacity = 0;
              document.getElementById("questionsev").style.transition =
                "visibility 1300ms linear 1300ms, opacity 1300ms";
            
            var width = 1000,
            height = 600;


  var svg = d3.select("#svg5")

            .attr("width", width)
            .attr("height", height);
            var links = [
            {source: "Good Sam", target: "Good Sam", icon: "http://samhooker.com/sth/cwh/goodsam1.png"},
            {source: "New RV Sales", target: "Good Sam",icon: "http://samhooker.com/sth/cwh/newrv1.png"},
            {source: "Used RV Sales", target: "Good Sam", icon: "http://samhooker.com/sth/cwh/usedrv2.png"},
            {source: "Parts & Servicing", target: "Good Sam", icon: "http://samhooker.com/sth/cwh/partsservice1.png"},
            {source: "Financing & Insurance", target: "Good Sam", icon: "http://samhooker.com/sth/cwh/finance1.png"},
            {source: "Gander Outdoors", target: "Good Sam", icon: "http://samhooker.com/sth/cwh/gandersam.png"},
            {source: "Overton's Marine", target: "Good Sam",icon: "http://samhooker.com/sth/cwh/overtonssam.png"},
            {source: "The House", target: "Good Sam", icon: "http://samhooker.com/sth/cwh/housesam.png"},
            {source: "Erehwon Outfitters", target: "Good Sam", icon: "http://samhooker.com/sth/cwh/erehwonsam.png"},
          ];
          
          var nodes = {};
          
          // Compute the distinct nodes from the links.
          links.forEach(function(link) {
            link.source = nodes[link.source] || (nodes[link.source] = {name: link.source, icon: link.icon});
            link.target = nodes[link.target] || (nodes[link.target] = {name: link.target, icon: link.icon});
          });
          
          var width = 960,
              height = 740;
          
          var force = d3.layout.force()
              .nodes(d3.values(nodes))
              .links(links)
              .size([width, height])
              .linkDistance(210)
              .charge(-6000)
              .on("tick", tick)
              .start();
          
          var svg = d3.select("body").append("svg")
              .attr("width", width)
              .attr("height", height);
          
          var link = svg.selectAll(".link")
              .data(force.links())
              .enter().append("line")
              .attr("class", "link");
          
          var node = svg.selectAll(".node")
              .data(force.nodes())
              .enter().append("g")
              .attr("class", "node")
              // .on("mouseover", mouseover)
              // .on("mouseout", mouseout)
              .call(force.drag);
          
          // node.append("circle")
          //     .attr("r", 8);
          
          node.append("image")
                .attr("xlink:href", function(d) { return d.icon; })
                .attr("x", "5px")
                .attr("y", "5px")
                .attr("width", function(d){
                  if (d.name == "Good Sam") {
                    return "200px"
                  } else {
                    return "80px"
                  }
                })
                .attr("height",  function(d){
                  if (d.name == "Good Sam") {
                    return "220px"
                  } else {
                    return "80px"
                  }
                })
          
          
          node.append("text")
          .attr("x", 90)
              .attr("y", 35)
              .attr("dy", ".35em")
              .text(function(d) { 
                if (d.name == "Good Sam") {
                  return ""
                } else {
                  return d.name 
                }
              })
          
          function tick() {
            link
                .attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });
          
            node
                .attr("transform", function(d) { return "translate(" + ((d.x)-80) + "," + ((d.y)-48) + ")"; });
          }
          svg.append('text')
  .transition()
        .delay(4000)
        .duration(800)
        .attr('x',5)
        .attr('y',20)
        .attr("fill", "#fa3c00")
        .attr("id", "text7a")
        .text(function() {
          if (answersev == "1") {
            return "Exactly right! Camping World acquired four outdoor outfitters";
          } else {
            return "No, Camping World acquired four outdoor outfitters";
          };
        });
        svg.append('text')
  .transition()
        .delay(4000)
        .duration(800)
        .attr('x',10)
        .attr('y',40)
        .attr("fill", "#fa3c00")
        .attr("id", "text7b")
        .text(function() {
          if (answersev == "1") {
            return "in 2017, including Gander Outdoors and Overton's.";
          } else {
            return "in 2017, including Gander Outdoors and Overton's.";
          };
        });
        svg.append('text')
        .transition()
              .delay(4000)
              .duration(800)
              .attr('x',10)
              .attr('y',60)
              .attr("fill", "#fa3c00")
              .attr("id", "text7c")
              .text(function() {
                if (answersev == "1") {
                  return "These new acquired customers will feed into the Good Sam";
                } else {
                  return "These new acquired customers will feed into the Good Sam";
                };
              })
              svg.append('text')
        .transition()
              .delay(4000)
              .duration(800)
              .attr('x',10)
              .attr('y',80)
              .attr("fill", "#fa3c00")
              .attr("id", "text7d")
              .text(function() {
                if (answersev == "1") {
                  return "customer database, where they'll be cross-sold higher margin products.";
                } else {
                  return "customer database, where they'll be cross-sold higher margin products.";
                };
              });;
        
          setTimeout(closeOut,9200)
          }
  

        });
      };

   

      function closeOut() {
      
        document.getElementById("container5").style.visibility = "hidden";
        document.getElementById("container5").style.opacity = 0;
        document.getElementById("container5").style.transition =
          "visibility 1300ms linear 1300ms, opacity 1300ms";
      
         setTimeout(closeSvg6, 1200)
      }
      function closeSvg6() {
      document.getElementById("container5").style.display = "none";
      document.getElementById("svg6").style.display = "none";
      
    showClose();
      }
      function showClose() {
        document.getElementById("closeText").classList.add("animated", "fadeIn");
        document.getElementById("closeText").style.display = "block";
        document.getElementById("closeText").style.visibility = "visible";
        document.getElementById("closeText").style.opacity = 1;
        document.getElementById("closeText").style.transition =
          "visibility 1100ms linear 1100ms, opacity 1100ms";
          setTimeout(removeCloseText, 9000)
      }
  
     function removeCloseText(){
      document.getElementById("closeText").classList.add("animated", "fadeOut");
      document.getElementById("text7a").classList.add("animated", "fadeOut");
      document.getElementById("text7b").classList.add("animated", "fadeOut");
      document.getElementById("text7c").classList.add("animated", "fadeOut");
      document.getElementById("text7d").classList.add("animated", "fadeOut");

      document.getElementById("closeText").style.visibility = "hidden";
      document.getElementById("closeText").style.opacity = 0;
      document.getElementById("closeText").style.transition =
        "visibility 1100ms linear 1100ms, opacity 1100ms";

setTimeout(showFinal, 1300)
     }

     function showFinal(){
     document.getElementById("closeText").style.display = "none";

     document.getElementById("finalText").classList.add("animated", "fadeIn");
     document.getElementById("finalText").style.display = "block";
     document.getElementById("finalText").style.visibility = "visible";
     document.getElementById("finalText").style.opacity = 1;
     document.getElementById("finalText").style.transition =
       "visibility 1100ms linear 1100ms, opacity 1100ms";
     }