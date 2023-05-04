import { formEditarUsuario } from './formEditarUsuario'
import { User } from '../bd/user'
import { Perfil } from '../bd/perfil'
import { menuSuperior } from './menuSuperior'
import { menuUsuario } from './menuUsuario'

export const header = {
  template: `
  
<!-- Navbar  -->
<nav class="navbar navbar-expand-sm bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center" href="#/home">
      <img
        src="/assets/logo_vanilla.svg"
        alt="Logo"
        width="30"
        height="30"
        class="d-inline-block align-text-top me-2"
      />
      <span class=""></span>
      Vanilla Games
    </a>
    
    <button
      class="navbar-toggler ms-auto
      "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
    <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Menú superior -->
    ${menuSuperior.template}
    <!-- Menu usuario -->
    ${menuUsuario.template}
  </div>
</nav>

//Modals
${formEditarUsuario.template}
  `,
  script: async () => {

    try {
      // Capturamos los datos del usuario logueado
      const usuarioLogueado = await User.getUser()


      console.log(usuarioLogueado.id);
      if (usuarioLogueado.email != ' ') {
        console.log("Hola a");
        const perfilLogueado = await Perfil.getByUserId(usuarioLogueado.id)
        // cargamos el menú superior y usuario para su rol
        
        menuSuperior.script(perfilLogueado)
        menuUsuario.script(perfilLogueado)
      } else {
        console.log("Hola b");
        menuSuperior.script('anonimo')
        menuUsuario.script('anonimo')
      }
    } catch (error) {
        // alert('No he podido cargar el usuario logueado')
        console.log(error);
    }

    // Capturamos click en item logout de menú de usuario
    let btnlogout = document.querySelector('.liLogout');

    if(btnlogout != null){
      document.querySelector('.liLogout').addEventListener('click', async () => {
          // Cerramos sesión utilizando el método de logout de nuestra clase User
          event.preventDefault() 
          await User.logout()
          let perfilLogin = {
            email: '',
            rol: 'anonimo'
        }
        
        menuSuperior.script('anonimo')
        menuUsuario.script('anonimo')
        
      })
  }
  }
}