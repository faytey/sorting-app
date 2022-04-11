const lists = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


function strip(listName){
    return listName.replace(/^(a |the |an )/i, '').trim(); 
}

const sorts = lists.sort((a,b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector("#lists").innerHTML =
 sorts
    .map(list => `<li> ${list}</li>`)
    .join('');

    console.log(sorts);

