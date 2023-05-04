import { supabase } from './supabase.js'
export class Proyecto {
  // Mapping de propiedades de la tabla proyectos
  constructor (id = null, created_at = null, nombre = null, descripcion = null, user_id = null, enlace = null) {
    this.id = id
    this.created_at = created_at
    this.nombre = nombre
    this.descripcion = descripcion
    this.enlace = enlace
    this.user_id = user_id
   
  }

  // leer todos
  static async getAll () {
    const { data: proyectos, error } = await supabase
      .from('proyectos')
      .select('*')
    if (error) {
      throw new Error(error.message)
    }
    // devuelve array de objetos
    return proyectos.map(({id, created_at, nombre, descripcion, user_id, enlace}) => {
      return new Proyecto(id, created_at, nombre, descripcion, user_id, enlace)
    })
  }

  // leer registro por id (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getById (id) {
    const { data: proyectos, error } = await supabase
      .from('proyectos')
      .select('*')
      .eq('id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    // Devuelve un nuevo objeto con los datos del registro
    return new Proyecto(proyectos.id,proyectos.created_at, proyectos.nombre, proyectos.descripcion, proyectos.user_id, proyectos.enlace)
  }

  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async create (proyectosData) {
    const { error } = await supabase
      .from('proyectos')
      .insert(proyectosData)
      .select()
      // console.log('nuevo perfil ',error);
    if (error) {
      throw new Error(error.message)
    }
    return true
  }

  // actualizar
  async update () {
    const { error } = await supabase
      .from('proyectos')
      .update({
        nombre: this.nombre,
        descripcion: this.descripcion
      })
      .eq('id', this.id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    return true
  }

  // borrar
  static async delete (id) {
    const { error } = await supabase
      .from('proyectos')
      .delete()
      .eq('id', id)
    if (error) {
      throw new Error(error.message)
    }
    return true
  }
}
