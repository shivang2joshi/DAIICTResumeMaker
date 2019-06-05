/*
    to make sortable table rows
 
    ==> add following scripts into HTML
        <script src="https://code.jquery.com/jquery-2.1.0.min.js"></script>
        <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"></script>
        <script src="sortabletable.js"></script>
    last one is this file.
 
    ==> maintain following table structure
        <table>
            <thead></thead>
            <tbody>
                <tr><tr>
                ....
                <tr></tr>
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                </tr>
            </tfoot>
        <table>

    ==> add following button tag inside td of footer (tfoot)
        <button class="addButton" onclick="arrange(this)">Arrange</button>

    hurray! your rows inside tbody are arrangable now.
    with JQueryUI Plugin - sortable.
*/

function EnableDragArrange(tablebody) {

    $('table tbody').sortable({
        animation: 150,
        placeholder: 'rowbackground',    /*name of the CSS class*/
    });

}

function DestroyDragArrange() {
    $('table tbody').sortable("destroy");
}

function arrange(element) {


    var tablebody =
        element.parentNode  //td
            .parentNode //tr
            .parentNode //tfoot
            .parentNode //table
            .tBodies[0],
        tablerows = tablebody.rows;

    if (element.innerHTML == "Arrange") {
        for (var i = 0; i < tablerows.length; i++) {
            tablerows[i].cells[0].style.paddingLeft = '10px';
            tablerows[i].style.background = 'rgba(28, 206, 230, 0.753)';
            tablerows[i].style.borderTop = '3px groove white ';
            tablerows[i].style.boxShadow = '0 2px 2px rgba(0, 0, 0, 0.27)';
            tablerows[i].style.cursor = 'hand';
            
            /*
            this effect is given to rows when arrange button is clicked
            */
        }
        element.innerText = 'Done';
        EnableDragArrange(tablebody);
    }

    else if (element.innerText == 'Done') {
        for (var i = 0; i < tablerows.length; i++) {
            tablerows[i].cells[0].style.paddingLeft = '0px';
            tablerows[i].style.background = 'inherit';
            tablerows[i].style.borderTop = 'none';
            tablerows[i].style.boxShadow = 'none';
            /*
            this effect is given to rows when Edit button is clicked
            */
        }
        element.innerText = 'Arrange';
        DestroyDragArrange();
    }

}


