import { Perfil } from '../bd/perfil.js'
import { Nota } from '../bd/nota.js'
import { Proyecto } from '../bd/proyecto.js'
import { Comentario } from '../bd/comentario.js'
import { User } from '../bd/user.js'

import { createClient } from '@supabase/supabase-js'
export const pruebas = {
  template: '<h1>Pruebas</h1>',
  script: async () => {
    // Conexion con supabase
    const supabaseUrl = 'https://hvvkrdvxncfcnelhyfod.supabase.co'

    // const supabaseKey = process.env.SUPABASE_KEY
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2dmtyZHZ4bmNmY25lbGh5Zm9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzY2MTksImV4cCI6MTk5Mjc1MjYxOX0.WHM-_bVZmJuDsz3wfVZ-6hoA8VhTK4C6EYsfxlzycsQ'
    const supabase = createClient(supabaseUrl, supabaseKey)
    console.log('conexion a supabase', supabase)

    const leerTodosPerfiles = async () => {
    // Read all rows
      const { data: perfiles, error } = await supabase
        .from('perfiles')
        .select('*')

      console.log(perfiles)
    }
    // leerTodosPerfiles()
    // insertar nuevo perfil
    const agregarPerfil = async () => {
      const { data } = await supabase
        .from('perfiles')
        .insert([
          {
            nombre: 'ejemplo'
          }
        ])
    }
    // proyectos_detalle a partir de funcion postgreSQL
    const leerProyectosDetalle = async () => {
      const { data, error } = await supabase
        .rpc('proyectodetalle')

      if (error) console.error(error)
      else console.log('proyectos con detalle', data)
    }

    // leerProyectosDetalle()
    /*  await leerTodosPerfiles()
    await agregarPerfil()
    await leerTodosPerfiles() */

    const registro = async () => {
      // USER SIGNUP
      const { data, error } = await supabase.auth.signUp({
        email: 'enzoruben89@gmail.com',
        password: 'enzo892003'
      })
      console.log(data, error)
    }

    const login = async () => {
      // USER LOGIN
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'enzoruben89@gmail.com',
        password: 'enzo892003'
      })
    }

    const logout = async () => {
      // USER LOGOUT
      const { error } = await supabase.auth.signOut()
    }

    const mostrarUsuarioLogeado = async () => {
      // GET USER
      const { data: { user } } = await supabase.auth.getUser()
      console.log('usuario logueado', user)
    }

    const tablaPerfil = async () => {
      const perfilesId = await Perfil.getById(29)
      console.log(perfilesId)
      const nuevoPerfil = {
        nombre: 'Pepe',
        apellidos: 'Gotera',
        rol: 'registrado'
      }
      // Perfil.create(nuevoPerfil)

      const perfiles = await Perfil.getAll()
      console.log(perfiles)

      perfilesId.nombre = 'PruebaUpdate'
      await perfilesId.update()

      Perfil.delete(30)
    }
    const tablaComentarios = async () => {
      const comentarioId = await Comentario.getById(1)
      console.log(comentarioId)
      const nuevoComentario = {
        id: 3,
        comentario: 'Hola este es un comentario de prueba',
        usuario_id: 1,
        proyecto_id: 1
      }
      // Comentario.create(nuevoComentario)

      const comentarios = await Comentario.getAll()
      console.log(comentarios)

      comentarioId.comentario = 'comentario actualizado'
      await comentarioId.update()

      // Comentario.delete(1);
    }

    const tablaNotas = async () => {
      const notasId = await Nota.getById(1)
      console.log(notasId)
      const nuevaNota = {
        nota: '8',
        usuario_id: 1,
        proyecto_id: 2
      }
      // Nota.create(nuevaNota)

      const notas = await Nota.getAll()
      console.log(notas)

      notasId.nota = '7'
      await notasId.update()

      Nota.delete(5)
    }

    const tablaProyectos = async () => {
      const proyectoId = await Proyecto.getById(1)
      console.log(proyectoId)
      const nuevoProyecto = {
        nombre: 'Proyecto de prueba',
        descripcion: 'Esta es la descripcion de preuba',
        usuario_id: 1
      }
      // Proyecto.create(nuevoProyecto)

      const proyectos = await Proyecto.getAll()
      console.log(proyectos)

      proyectoId.descripcion = 'Esta es la descripcion de prueba'
      await proyectoId.update()

      // Proyecto.delete(4)
    }
    const tablaUser = async () => {
      const usuario = await User.getUser()
      console.log(usuario)
      const nuevoUser = {
        email: 'enzoruben89@gmail.com',
        password: 'enzo892003'
      }
      // User.create(nuevoUser)

      User.logout()
      const usuario2 = await User.getUser()
      console.log(usuario2)
    }
    await tablaPerfil()
    await tablaComentarios()
    await tablaNotas()
    await tablaProyectos()
    await tablaUser()
    // await registro()
    /*  await mostrarUsuarioLogeado()
    await login()
    await mostrarUsuarioLogeado()
    await logout()
    await mostrarUsuarioLogeado() */
  }

  // Pruebas de las clases
  // prueba Perfil

}
