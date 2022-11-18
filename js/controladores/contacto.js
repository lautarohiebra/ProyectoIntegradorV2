class ContactoController{

    async guardarContacto(consulta){
        try {

            const botonSubmit = document.querySelector('#submit-consulta')
            
            const contactoEnviado = await contactoService.enviarConsulta(consulta)

            botonSubmit.textContent='¡Enviado!'
            console.log(contactoEnviado);
            return contactoEnviado
        } catch (error) {
            console.error(error);
        }
    }
}

const contactoController = new ContactoController()