$(document).ready(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: "GET",
        dataType: "json"
    }).done(function (data) {
        setTimeout(() => {
            $('#loading').hide(); //nascondi quando hai i dati caricati
            for (let i = 0; i < data.length; i++) {

                const dataItem = data[i];
                const postContainer = $("<div>", { class: 'post-container' });
                const postId = $("<h3>")
                const postTitle = $("<h1>");
                const postBody = $("<p>", {class: "hidden"});

                /*const showDetailBtn = $("<button>")
                showDetailBtn.html("Visualizza dettagli")
                showDetailBtn.click(() =>{
                    alert(dataItem.body)
                })*/
                
                const showMore = $("<button>")
                showMore.html("Scopri di più...")
                showMore.click(() =>{
                    postBody.toggleClass("hidden")
                })

                postId.html(dataItem.id)
                postTitle.html(dataItem.title)
                postBody.html(dataItem.body)
                
                
                //postBody.append(showDetailBtn)
                postContainer.append(postId)
                postContainer.append(postTitle)
                postContainer.append(postBody)
                postContainer.append(showMore)



                $('#container').append(postContainer)
            }
        }, 1000);

    });
});