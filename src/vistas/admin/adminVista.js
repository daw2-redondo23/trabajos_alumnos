export default {
    template: `
    <main style="padding-top: 100px">
    <div class="container mt-5">
        <h1>Administración de usuarios</h1>
        <table id="tablaPerfiles" class="table table-striped table-hover mt-5 align-middle">
            <thead>
                <tr>
                    <th></th>
                    <th>NOMBRE</th>
                    <th>APELLIDOS</th>
                    <th>EMAIL</th>
                    <th>BLOQUEADO</th>
                    <th class="w-100"></th>
                </tr>
            </thead>
            <tbody>
                       
                
                
            </tbody>
        </table>
    </div>
  </main>
  ${formEditarUsuario.template}
  `,

}