const formulario = document.getElementById('contact-form');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();


try {    
    const respuesta = await fetch('https://api.sheetbest.com/sheets/069599d8-ae43-426c-9e61-8a8b0abc818f', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Datos": formulario.usuario.value
           
        })
    });



} catch(error){
    console.log(error);
}
    
    registro.classList.remove('activo');
    exito.classList.add('activo');

    
});
