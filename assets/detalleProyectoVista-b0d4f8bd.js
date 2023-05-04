import { P as Proyecto } from "./proyecto-db6f2440.js";
import "./main-b320cdab.js";
const detalleProyectoVista = {
  template: ` <div
    class="container d-flex mt-5 justify-content-center pt-5">
    <div class="col-12">
        <a href="#/proyectos" class="btn btn-outline-secondary btn-sm">< Proyectos</a>
        <h1 class="text-center p-2">Editar Proyecto</h1>
        <form id="formProyecto" class="p-3" novalidate>
          <label class="mt-3 form-label" for="user_id">User_id: </label>    
          <input
              id="user_id" 
              type="text" 
              class="form-control text-black-50 " 
              value="" 
              disabled
              
            /> 
            <label class="mt-3 form-label" for="id">Id proyecto: </label>
            <input
              id="proyecto_id" 
              type="text" 
              class="form-control text-black-50" 
              value="" 
              disabled
            />  
            
            <label class="mt-3 form-label" for="nombre">Nombre: </label>
            <input
              id="nombreProyecto" 
              type="text" 
              class="form-control" 
              value="" 
              placeholder ="Nombre del proyecto" 
              required 
              disabled
            />
            <div class="invalid-feedback">El nombre no es correcto</div>
            <label class="mt-3 form-label" for="descripcion">Descripción: </label>
            <textarea 
              id="descripcion"
              class="form-control" 
              value="" 
              required 
              disabled
              />
            </textarea>
            <div class="invalid-feedback">Este campo no es correcto</div>
            <label class="mt-3 form-label" for="enlace">Enlace a producción</label>
            <input
                id="enlace"
                type="enlace"
                class="form-control"
                value=""
                placeholder = "http://miproyecto.com"
                required
                disabled
            />
            <div class="invalid-feedback">El link no es correcto</div>   
            <button type="button" id="volver" class="mt-5 btn btn-primary">
                Volver atrás
            </button>
        </form>
    </div>
  </div>
    `,
  script: async (id) => {
    console.log("Estas en la vista detallada de el proyecto ", id);
    try {
      const proyectoActualizar = await Proyecto.getById(id);
      console.log(proyectoActualizar);
      document.querySelector("#user_id").value = proyectoActualizar.user_id;
      document.querySelector("#proyecto_id").value = proyectoActualizar.id;
      document.querySelector("#nombreProyecto").value = proyectoActualizar.nombre;
      document.querySelector("#descripcion").value = proyectoActualizar.descripcion;
      document.querySelector("#enlace").value = proyectoActualizar.enlace;
      document.querySelector("#volver").addEventListener("click", (e) => {
        window.location.href = "/#/proyectos";
      });
    } catch (error) {
    }
  }
};
export {
  detalleProyectoVista as default
};
