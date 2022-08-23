/* function to save file */

function save() {
    let text = document.getElementById("text").value;

    let title = document.getElementById("title").value;

    let content = new Blob([text], {
        type: "text/plain; charset=utf-8"
    });

    saveAs(content, title + ".txt");
}