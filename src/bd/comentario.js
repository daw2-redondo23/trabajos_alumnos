// Importamos la conexión a la base de datos
import { supabase } from './supabase.js'
export class Comentario {
  // Mapping de propiedades de la tabla comentarios
  constructor (id = null, created_at = null, comentario = null, usuario_id = null, proyecto_id = null) {
    this.id = id
    this.created_at = created_at
    this.comentario = comentario
    this.usuario_id = usuario_id
    this.proyecto_id = proyecto_id
  }

  // leer todos
  static async getAll () {
    const { data: comentarios, error } = await supabase
      .from('comentarios')
      .select('*')
    if (error) {
      throw new Error(error.message)
    }
    // devuelve array de objetos
    return comentarios.map(({ id, comentario, usuario_id, proyecto_id }) => {
      return new Comentario(id, comentario, usuario_id, proyecto_id)
    })
  }

  // leer registro por id (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getById (id) {
    const { data: comentarios, error } = await supabase
      .from('comentarios')
      .select('*')
      .eq('id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    // Devuelve un nuevo objeto con los datos del registro
    return new Comentario(comentarios.id, comentarios.comentario, comentarios.usuario_id, comentarios.proyecto_id)
  }

  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async create (comentarioData) {
    const { error } = await supabase
      .from('comentarios')
      .insert(comentarioData)
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
      .from('comentarios')
      .update({
        comentario: this.comentario
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
      .from('comentarios')
      .delete()
      .eq('id', id)
    if (error) {
      throw new Error(error.message)
    }
    return true
  }
}
