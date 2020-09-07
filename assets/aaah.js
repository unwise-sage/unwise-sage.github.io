// Have you ever wanted to scream at a program? Well, this one screams back.
// Introducing AAAH!

keywords = {
    // Basic functions
    'ah':'true',
    'aah':'false',
    'aaah':'if',
    'aaaah':'else',
    'aaaaah':'let',
    'aaaaaah':'for',
    'aaaaaaah':'return',
    'aaaaaaaah':'alert',
    'aaaaaaaaah':'function',
    // Variables
    'a!':'a',
    'aa!':'b',
    'aaa!':'c',
    'aaaa!':'d',
    'aaaaa!':'e',
    // Numbers
    'aie':'0',
    'aiee':'1',
    'aieee':'2',
    'aieeee':'3',
    'aieeeee':'4',
    'aieeeeee':'5',
    'aieeeeeee':'6',
    'aieeeeeeee':'7',
    'aieeeeeeeee':'8',
    'aieeeeeeeeee':'9',
}

// Strings
chars = 'abcdefghijklmnopqrstuvwxyz .?!';
for(let n=0; n<chars.length; n++){
    keywords['a'.repeat(n+1)] = '"'+chars[n]+'"';
}

console.log(keywords);

function run(str){
    str = str.replace('\n',' ').split(' ');
    raw = JSON.parse(JSON.stringify(str));
    console.log(str);
    for(let j=0; j<str.length; j++){
        for(let i of Object.keys(keywords)){
            if(str[j]===i){
                console.log(str[j]+' '+i);
                str[j]=keywords[str[j]];
                break;
            }
        }
        for(let k of raw[j]){
            if(!['a','h','i','e',',','{','}',' ','(',')','!','*','-','+','/','|','&','=',';','>','<'].includes(k)){
                alert('Invalid character: '+k);
                j = str.length;
                break;
            }
        }
    }
    str = str.join(' ');
    console.log(str);
    eval(str);
}

function conv(str){
    str = str.replace('\n',' ').split(' ');
    for(let j=0; j<str.length; j++){
        for(let i of Object.keys(keywords)){
            if(str[j]===keywords[i]){
                str[j]=i;
                break;
            }
        }
    }
    str = str.join(' ');
    console.log(str);
    return str;
}

/*
Hello, world:
aaaaaaaah ( aaaaaaaa + aaaaa + aaaaaaaaaaaa + aaaaaaaaaaaa + aaaaaaaaaaaaaaa + aaaaaaaaaaaaaaaaaaaaaaaaaaa + aaaaaaaaaaaaaaaaaaaaaaa + aaaaaaaaaaaaaaa + aaaaaaaaaaaaaaaaaa + aaaaaaaaaaaa + aaaa + aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa )
*/