const searchbar = document.querySelector('input')
let html = '';
const mainDetail = document.querySelector('#main-details')
const searchbutton = document.querySelector('#search-button')
.addEventListener('click',()=>{
    mainDetail.innerHTML = 'Fetching data...';
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchbar.value}`)
    .then((res)=>{
        
            return res.json(); 
    })
    .then((data)=>{

        if(data.title === 'No Definitions Found'){
             mainDetail.innerHTML = 'Data not found';
        }
        else{
        //    mainDetail.innerHTML = 'Fetching data...';
             const d = data;
        
        html = '';
        const definisions = d[0].meanings[0].definitions[0];
        // console.log(data[0].meanings);
        html += `
         <h2 class=" text-2xl"><strong>Word: ${searchbar.value}</strong></h2>
        <p class="italic text-gray-400">${d[0].meanings[0].partOfSpeech}</p>
        <p class="text-gray-600 mt-2"><span class="font-bold font-black ">Meaning:</span> ${definisions.definition === undefined ? "Not found" : definisions.definition}</p>
         <p class="text-gray-600 mt-2"><span class="font-bold font-black ">Example:</span> ${definisions.example === undefined ? "Not found" : definisions.example}</p>
          <p class="text-gray-600 mt-2"><span class="font-bold font-black ">Synonyms:</span> ${d[0].meanings[0].synonyms[0] === undefined ? "not found" : d[0].meanings[0].synonyms[0]} , ${d[0].meanings[0].synonyms[0] === undefined ? "not found" : d[0].meanings[0].synonyms[1]}</p>
         <a href="https://en.wikipedia.org/wiki/${searchbar.value}" target="_blank">Go to Wikipedia</a>
        `
        searchbar.value = '';
        
        mainDetail.innerHTML = html;
        }
       
        
    })
})
