import { U as User, m as menuUsuario } from "./main-b320cdab.js";
const loginVista = {
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
  script: () => {
    const form = document.querySelector("#login");
    let repositorio = "trabajos_alumnos"
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      try {
        const userData = {
          email: document.querySelector("#emailLogin").value,
          password: document.querySelector("#passwordLogin").value
        };
        console.log(userData);
        const usuarioLogeado = await User.login(userData);
        const divUsuarioLogeado = document.querySelector("#emailUsuarioLogueado");
        divUsuarioLogeado.innerHTML = usuarioLogeado.email;
        let logins = document.querySelectorAll(".liLogin");
        logins[0].classList.add("d-none");
        console.log(logins[0].classList);
        let perfilLogin = {
          email: usuarioLogeado.email,
          rol: "registrado"
        };
        menuUsuario.script(perfilLogin);
        window.location.href = "/#/"+ repositorio +"/home";
      } catch (error) {
        alert("No se ha podido iniciar sesión " + error);
      }
    });
  }
};
export {
  loginVista as default
};
