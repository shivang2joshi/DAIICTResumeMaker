
function EnableDragArrange(){

    $('table tbody').sortable({
        animate:150,
        placeholder: 'rowbackground',    /*name of the CSS class*/
    });
    
}

function DestroyDragArrange(){
    $('table tbody').sortable("destroy");
}

function arrange(element) {

    var tablerows = element.parentNode  //td
    .parentNode //tr
    .parentNode //tfoot
    .parentNode //table
    .tBodies[0].rows;
    
    if(element.innerHTML == "Arrange"){       
        for(var i=0;i<tablerows.length;i++)
        {
            tablerows[i].cells[0].style.paddingLeft = '10px';
            tablerows[i].style.background = 'rgba(28, 206, 230, 0.753)';
            tablerows[i].style.borderTop = '1px solid aliceblue';
            /*
            this effect is given to rows when arrange button is clicked
            */
        }
        element.innerText = 'Edit';
        EnableDragArrange();
    }

    else if(element.innerText == 'Edit'){
        for(var i=0;i<tablerows.length;i++)
        {
            tablerows[i].cells[0].style.paddingLeft = '0px';
            tablerows[i].style.background = 'inherit';
            tablerows[i].style.borderTop = 'none';
            /*
            this effect is given to rows when Edit button is clicked
            */
        }
        element.innerText = 'Arrange';    
        DestroyDragArrange();
    }

}


