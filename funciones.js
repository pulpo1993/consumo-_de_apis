

function buscar(nombre)
{   
    var primera = nombre.value;
          console.log(primera)
    var titulo=document.getElementById("titulo").value;
    var detalles="";

    if(titulo==""){
       
        detalles ="<tr>" +
        "<td  > Sin informacion </td>"+
        "</tr>";
        document.getElementById("informacion").innerHTML = detalles;
        
    }else  {
       
        if(window.XMLHttpRequest){
            xmlhttp=new XMLHttpRequest();                   
        } else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");        
        } 
            xmlhttp.onreadystatechange=function() {
            if(this.readyState ==4 && this.status ==200){
            var data= JSON.parse(this.responseText);                
                       var total=data.totalResult;
                data.Search.forEach(movie => {
                    detalles += "<tr>"+
                    
                               "<td><a href='#' onclick=\"buscarPeli('"+ movie.imdbID+"')\">Mas informacion</td>"+
                               "<td>"+ movie.Title+"</td>"+
                               "<td>"+ movie.Year+"</td>"+
                               "<td>"+ movie.Type+"</td>"+
                               "<td><img src="+ movie.Poster+"></td>"+
                               "</tr>";
                               
                              
                                                    
                });
              
                document.getElementById("informacion").innerHTML=detalles;
               
                }
                
            };           
            xmlhttp.open("POST","http://www.omdbapi.com/?&apikey=2cdfc014&s="+ titulo +"&plot=full&page="+primera,true);
       
            xmlhttp.send();
        }
}

    function buscarPeli(id){
      var detalles="";
      if (id==""){
          detalles = "sin informacion";
          document.getElementById("informacion").innerHTML=detalles;

      }else {

        if(window.XMLHttpRequest){
            xmlhttp=new XMLHttpRequest();                   
        } else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");        
        } 
            xmlhttp.onreadystatechange=function() {
            if(this.readyState ==4 && this.status ==200){
                var data= JSON.parse(this.responseText);               
                      
                var x;  
                detalles+=  "<h2>" +data.Title+"</h2>"
                       +    "<h3>Year:  "+data.Year+"</h3>"
                       +    "<h3>Rate:"+data.Rate+"</h3>"
                       +    "<h3>Released: "+data.Released+"</h3>"
                       +    "<h3>Runtime:"+data.Runtime+"</h3>"
                       +    "<h3>Genre:"+data.Genre+"</h3>"
                       +    "<h3>Director:"+data.Director+"</h3>"
                       +    "<h3>Writer: "+data.Writer+"</h3>"
                       +    "<h3>Actor:"+data.Actors+"</h3>"
                       +    "<h3>Plot:"+data.Plot+"</h3>"
                       +    "<h3>Language:"+data.Language+"</h3>"
                       +    "<h3>Country:"+data.Country+"</h3>"
                       +    "<h3>Metascore:"+data.Metascore+"</h3>"
                       +    "<h3>imdbRating:"+data.imdbRating+"</h3>"
                       +    "<h3>imdbVotes:"+data.imdbVotes+"</h3>"
                       +    "<h3>Type:"+data.Type+"</h3>"
                       +    "<h3>DVD:"+data.DVD+"</h3>"
                       +    "<h3>BoxOffice:"+data.BoxOffice+"</h3>"
                       +    "<h3>Production:"+data.Production+"</h3>"
                       +    "<h3>Website:"+data.Website+"</h3>"
                       +    "<h3>Response:"+data.Response+"</h3>"

                   /* for(x in data){
                        detalles+=                       
                         "<tr>"+data[x] +"</tr>" +"<br>" 
                         "</tr>"                     ;       
                         }      */ 
                }
                
                var imagen= "<img src=\'"+data.Poster+"'/ ></img> "     
                
                document.getElementById("detalles").innerHTML=detalles;
                document.getElementById("imagenes").innerHTML=imagen;

            }; 
            xmlhttp.open("GET","http://www.omdbapi.com/?&apikey=2cdfc014&i="+ id +"&plot=full",true);
            
            xmlhttp.send();
        }
      }
         
         
      var pagina=5;
function siguiente()
{   
   pagina=pagina+1;
    var titulo=document.getElementById("titulo").value;
    var detalles="";

    if(titulo==""){
       
        detalles ="<tr>" +
        "<td  > Sin informacion </td>"+
        "</tr>";
        document.getElementById("informacion").innerHTML = detalles;
        
    }else  {
       
        if(window.XMLHttpRequest){
            xmlhttp=new XMLHttpRequest();                   
        } else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");        
        } 
            xmlhttp.onreadystatechange=function() {
            if(this.readyState ==4 && this.status ==200){
            var data= JSON.parse(this.responseText);                
                       
                data.Search.forEach(movie => {
                    detalles += "<tr>"+
                    
                               "<td><a href='#' onclick=\"buscarPeli('"+ movie.imdbID+"')\">Mas informacion</td>"+
                               "<td>"+ movie.Title+"</td>"+
                               "<td>"+ movie.Year+"</td>"+
                               "<td>"+ movie.Type+"</td>"+
                               "<td><img src="+ movie.Poster+"></td>"+
                               "</tr>";
                               
                              
                                                    
                });
              
                document.getElementById("informacion").innerHTML=detalles;
               
                }
                
            };           
            xmlhttp.open("POST","http://www.omdbapi.com/?&apikey=2cdfc014&s="+ titulo +"&plot=full&page="+pagina,true);
       
            xmlhttp.send();
        }
}
   