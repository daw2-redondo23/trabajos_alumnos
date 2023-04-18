import { User } from "../bd/user"

export default {
    template: `
    <div
    class="vh-100 d-flex align-items-center justify-content-center"
    style="padding-top: 100px"
  >
    <div class="col-12 col-md-4">
        <h1 class="text-center p-2">Login</h1>
        <form id="login" class="p-3" novalidate>
            <label class="mt-3 form-label" for="email">Email</label>
            <input id="emailLogin" type="email" class="form-control" value="" required />
            <div class="invalid-feedback">Debes introducir un email valido</div>
  
            <label class="mt-3 form-label" for="nick">Contraseña: </label>
            <input id="passwordLogin" type="password" class="form-control" value="" required />
            <div class="invalid-feedback">Esta no es una contraseña correcta</div>
  
            <button
                id="btn_submit"
                type="submit"
                class="mt-4 btn btn-success w-100"
            >
                Enviar
            </button>
            <p class="mt-3">
                <a href="">No recuerdo mi contraseña</a>
                <br />
                <a href="registro.html">Quiero Registrarme</a>
            </p>
            <p></p>
            <hr class="mt-5" />
  
            <button type="button" class="mt-1 btn btn-primary w-100">
                Login con Google
            </button>
        </form>
    </div>
  </div>
  
    `,
    script: ()=>{
        const form = document.querySelector('#login')
        form.addEventListener('submit', async (event) => {
        event.preventDefault()
        try {
            // Capturamos datos del formulario
            const userData = {
                email: document.querySelector('#emailLogin').value,
                password: document.querySelector('#passwordLogin').value
            }
            console.log(userData);
            // Intentamos loguearnos utilizando el método login de nuestra clase User
            const usuarioLogeado = await User.login(userData)

            // Si nos logueamos con exito pintamos el email en header y menú de usuario 
            const divUsuarioLogeado = document.querySelector('#emailUsuarioLogueado')
            divUsuarioLogeado.innerHTML = usuarioLogeado.email

            // y ocultamos item 'login' para mostrar item 'logout'
            document.querySelector('.liLogin').classList.add('d-none ')
           const divLogOut =  document.querySelectorAll('.liLogout')
           //console.log(divLogOut[0]);
            for(let i=0; i<=divLogOut.length; i++){
               divLogOut[i].classList.remove('d-none')
            }
           
           
            // Cagamos la página home
         window.location.href = '/#/home'
        } catch (error) {
            alert('No se ha podido iniciar sesión ' + error)
        }
    })
        
    }
    
  }
  