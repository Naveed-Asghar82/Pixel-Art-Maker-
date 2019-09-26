// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()


var grid = document.getElementById("pixelCanvas");
var newForm = document.querySelector("#sizePicker");
/* call grid function */

newForm.addEventListener("submit", function(e){
    var blockHeight = document.querySelector("#inputHeight").value;

    var blockWidth = document.querySelector("#inputWidth").value;
    // make sure no reopen of the page after submition.

    e.preventDefault();
    //grid size 50x50
    if (blockWidth <= 50 && blockHeight <= 50){
    //clear old grid on submit by updating the innerHTML of the table
    //of all existing rows
    grid.innerHTML="<tbody></tbody>";
    makeGrid(blockHeight,blockWidth);
	} else {
		alert("Grid size less 50x50 Only!")
		}
});

//Add  eventListener for click on the table

grid.addEventListener("click", function(clickEvent){
	var colorchoosed = document.getElementById("colorPicker").value;
	//color the block if click target is a <td> element

	if (clickEvent.target.nodeName === 'TD'){
	clickEvent.target.style.backgroundColor=colorchoosed;
	}
});


/* makeGrid function adds rows and cells to table element
given by the argument h and w for height and width */

function makeGrid(h,w) {
for (n = 0; n < h; n++){
	//insert row for each height
	grid.insertRow(n);
	gridRow = document.getElementsByTagName("tr");
	//get tr elements and insert cell for each row
	for (limit = 0; limit < w; limit++){
		gridRow[n].insertCell(limit);
		}
	}
}
