function buscarPeliculaPorTitulo(){
    var titulo= document.getElementById("titulo").value;
    var detalles="";
    if (titulo == ""){
        detalles+= "<tr>"+
        "<td colspan='5'> Sin informacion disponible...</td>"+
        "</tr>";
        document.getElementById("informacion").innerHTML = detalles;
    }else{
        if(window.XMLHttpRequest){
            xmlhttp = new XMLHttpRequest();
        }else{
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status==200){
                var data = JSON.parse(this.responseText)
                console.log(data);

                data.Search.forEach(movie => {
                    // Log each movie's info
                    console.log(movie.Title)
                    detalles += "<tr>"+
                        "<td><a href='#' onclick=\"buscarPeliculaPorId('" + movie.imdbID + "')\"><td>"+
                        "<td>"+movie.Title+"<td>"+
                        "<td>"+movie.Year+"<td>"+
                        "<td>"+movie.Type+"<td>"+
                        "<td><img src="+ movie.Poster +"><td>"+
                        "</tr>";
                });
                document.getElementById("informacion").innerHTML = detalles;
            }

        };
        xmlhttp.open("GET","http://www.omdbapi.com/?&apikey=2cdfc014&s=" + titulo + "&plot=full",true);
        xmlhttp.send();
    }
    return false;  
}