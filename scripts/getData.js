let myBtn = document.getElementById('btnImagenes');


const getPhotos = async (source) =>{
    let mostrarFotos = document.querySelector(".grid-imagenes")
    mostrarFotos.innerHTML = '';
    const resp = await fetch(source);
    console.log(resp);
    const data = await resp.json();
    console.log(data);
    data.forEach(item=>{
        const {url, title} = item;
        mostrarFotos.innerHTML +=`
        <div class="col fotos">
        <a href="#" class="enlace-detalle-fotos">
            <div class="card bg-dark text-white gradiente">                
            <img src="${url}" class="card-img" alt="...">
                <div class="card-img-overlay">
                        <p class="card-text body2Regular">${title}</p>
                </div>
            </div>
        </a>
    </div>
        `
    })
}

myBtn.addEventListener('click', ()=>{getPhotos('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50')})

