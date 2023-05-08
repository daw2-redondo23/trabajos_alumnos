import { P as Perfil } from "./main-5c2901f5.js";
import { P as Proyecto } from "./proyecto-d83f9a7b.js";
const proyectosVista = {
  template: `
    <main style="padding-top: 100px">
    <div class="container">
        <h1>Proyectos</h1>
        <a href="/#/nuevoProyecto" id="nuevoProyecto" class="btn btn-success mt-3">Nuevo Proyecto</a>
        <a href="/#/misProyectos" id="misProyectos" class="btn btn-warning mt-3 ms-2">Mis Proyectos</a>
        <table id="tablaProyectos" class="table table-striped table-hover mt-5 align-middle">
            <thead>
                <tr>
                    <th></th>
                    <th>AUTOR</th>
                    <th>NOMBRE</th>
                    <th>DESCRIPCIÓN</th>
                    <th>ENLACE</th>
                    <th class="w-100"></th>
                </tr>
            </thead>
            <tbody>
                       
                
                
            </tbody>
        </table>
    </div>
  </main>
  
  `,
  script: async () => {
    console.log("lista de proyectos");
    try {
      const proyectos = await Proyecto.getAll();
      console.log(proyectos);
      console.log("numero de proyectos en la base de datos: ", proyectos.length);
      let tabla = "";
      for (const proyecto of proyectos) {
        console.log("Prueba", proyecto.user_id);
        tabla += `
      <tr>
        <td>
          <img src="proyecto.png" width="100" alt="" data-id="${proyecto.id}" class="detalle"/>
        </td>
        <td>${(await Perfil.getByUserId(proyecto.user_id)).nombre}</td>
        <td>${proyecto.nombre}</td>
        <td>${proyecto.descripcion}</td>
        <td class="w-25"><a href="${proyecto.enlace}" target="_black">${proyecto.enlace}</a></td>
        <td class="text-end">
          <button
            data-id="${proyecto.id}"
            type="button"
            class="btn text-danger detalle"
          >
          <img  data-id="${proyecto.id}" class="detalle w-50" src="icons8-acerca-de.svg" width="20" alt="" />
          </button>
          <button
            data-id="${proyecto.id}"
            type="button"
            class="btn text-info editar"
          >
            <img data-id="${proyecto.id}" class="editar w-50" src="icons8-editar.svg" width="20" alt="" />
          </button>

          <button
            data-id="${proyecto.id}"
            type="button"
            class="btn text-danger borrar"
          >
            <img data-id="${proyecto.id}" class="borrar w-75" src="assets/icons8-basura-llena.svg" width="20" alt=""/>
          </button>
        </td>
      </tr>
      `;
      }
      const tablaProyectosBody = document.querySelector("#tablaProyectos tbody");
      if (tablaProyectosBody)
        tablaProyectosBody.innerHTML = tabla;
    } catch (error) {
      alert("No se han podido cargar la tabla de usuarios " + error);
    }
    const tablaProyectos = document.querySelector("#tablaProyectos");
    if (tablaProyectos) {
      tablaProyectos.addEventListener("click", async (e) => {
        const id = e.target.dataset.id;
        if (e.target.classList.contains("borrar")) {
          try {
            const proyectoABorrar = await Proyecto.getById(id);
            const seguro = confirm("¿Está seguro que desea borrar el proyecto? Se eliminarán todos sus comentarios y notas " + proyectoABorrar.nombre + ", " + proyectoABorrar.nombre);
            if (seguro) {
              await Proyecto.delete(id);
            }
            window.location.href = "/#/proyectos";
          } catch (error) {
            alert("No se han podido borrar el proyecto" + error);
          }
        }
        if (e.target.classList.contains("editar")) {
          try {
            console.log("Vas a ir a la ventana editar");
            window.location.href = "#/editarProyecto/" + id;
          } catch (error) {
            alert("No se han podido borrar el proyecto" + error);
          }
        }
        if (e.target.classList.contains("detalle")) {
          try {
            console.log("Vas a ir a la ventana detalle");
            window.location.href = "#/detalleProyecto/" + id;
          } catch (error) {
          }
        }
      });
    }
  }
};
export {
  proyectosVista as default
};
