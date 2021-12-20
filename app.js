const container = document.querySelector('div')

const form = document.getElementById('searchForm');
form.addEventListener('keyup', async (e) => {

    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: {q: searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    container.innerHTML = "";
    makeImgs(res.data);
    // form.elements.query.value = "";
})
const makeImgs = (shows) => {
    for (let result of shows){
        if(result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            container.append(img)
        }   
    }
}