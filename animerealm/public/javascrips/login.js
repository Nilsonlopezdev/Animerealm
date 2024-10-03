document.getElementById('formulario').addEventListener('submit', (datos)=> {
    datos.preventDefault();
    console.log(datos.target.elements.name.value);

    console.log(datos)
})