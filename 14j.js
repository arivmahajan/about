var qry='https://api.themoviedb.org/3/search/movie?api_key=e9ff7e7e2bfefaf5977aa354910fb7a2&query='

var ppl='https://api.themoviedb.org/3/search/person?api_key=e9ff7e7e2bfefaf5977aa354910fb7a2&query='

var dum=''

var pop='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e9ff7e7e2bfefaf5977aa354910fb7a2&page=1'

var img500='https://image.tmdb.org/t/p/w500/'

function bazinga(a){
    var nom=a.value; 
    dum=qry+nom
    console.log(dum)
    dtl(dum)
}
dtl(pop)
function dtl(d){
    var no=1
    fetch(d).then(res=>res.json())
    .then(function(data){
        console.log(data.results);
        configData=data.images;
        var main=document.getElementById("main")
        main.innerHTML="";
        var count=20
        for (let i = 0; i < count; i++) {
        if (data.results[i].original_language=="en"){
        var hey=data.results[i].poster_path;
        var hehe=data.results[i].original_title;
        var haha=data.results[i].backdrop_path;
        var hoho=data.results[i].overview;
    var lnk=img500+hey
    var lmk=img500+haha
    var x=document.createElement('div');
    var ig=document.createElement('img');
    var emp=document.createElement('div')
    var h2=document.createElement('h1');
    var divi=document.createElement('div')
    var h1=document.createElement('h2');
    ig.src=lnk
    ig.className='thumb';
    x.className="backdrops";
    h2.className="hI"
    emp.className="emp";
    h1.className="ht"
    divi.className="realh2"
    h2.innerText=hehe;
    h1.innerText=hoho;
    emp.style.backgroundImage="url("+lmk+")";
    x.appendChild(ig);
    x.appendChild(emp)
    divi.appendChild(h1);
    x.appendChild(h2);
    x.appendChild(divi);

    main.appendChild(x);
    /////`<img class=thumb src="`+lnk+`" alt="poster" style="border-radius: 4em; width: 12em">`
    no+=1
        }
        else{
            count++
        }
    };
    var nu=21
    
    });

}
