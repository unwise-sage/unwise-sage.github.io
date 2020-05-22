/* Change the "oracle" thing at the top of the page*/

quotes = [
    'The glass is an arbitrary question',
    'If your world is dark, find the light switch',
    'Stellar nuclear fusion looks kind of damp sometimes',
    '"If you want to make an apple pie from scratch, you must first create the universe."\n- Carl Sagan',
    '[object Objecto]',
    'NaN is a number',
    '<marquee>Marquees are fun!</marquee>',
    'Nothing is impossible, unless one cannot do it.'
]

function randint(l,h){
    return Math.round(Math.random()*(h-l)+l);
}

document.getElementById('quote').innerHTML = quotes[randint(0,quotes.length-1)];

/* Get the id of the requested page */

let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('p');

let latest_id = (Object.keys(titles).length);

if(id == null){
    id = latest_id;
}

id = parseInt(id);

/* Set the title of the comic */

document.getElementById('title').innerHTML = titles[id];

/* Add the comic */

$(document).ready(function()
{
  $.get(`comics/c${id}.html`, function(html_string)
   {
    document.getElementById('comic').innerHTML = html_string
   },'html');    // Copy pasted from stack overflow
});

document.title = titles[id];

/* User controls */

function next(){
    if(id != latest_id){
        location.href = '?p='+(id+1).toString();
    }
}

function prev(){
    if(id != 1){
        location.href = '?p='+(id-1).toString();
    }
}

function latest(){
    if(id != latest_id){
        location.href = '?p='+latest_id.toString();
    }
}

function first(){
    if(id != 1){
        location.href = '?p=1'; // could be easier done with a link, but this is more consistent.
    }
}

function random(){
    let r = randint(1,latest_id);
    while(r == id){
        r = randint(1,latest_id);
    }
    location.href = '?p='+r.toString()
}