// Importamos la conexión a la base de datos
import { supabase } from './supabase.js'
export class Nota {
  // Mapping de propiedades de la tabla notas
  constructor (id = null, created_at = null, nota = null, proyecto_id = null, usuario_id = null) {
    this.id = id
    this.created_at = created_at
    this.nota = nota
    this.proyecto_id = proyecto_id
    this.usuario_id = usuario_id
  }

  // leer todos
  static async getAll () {
    const { data: notas, error } = await supabase
      .from('notas')
      .select('*')
    if (error) {
      throw new Error(error.message)
    }
    // devuelve array de objetos
    return notas.map(({ id, nota, proyecto_id, usuario_id }) => {
      return new Nota(id, nota, proyecto_id, usuario_id)
    })
  }

  // leer registro por id (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getById (id) {
    const { data: notas, error } = await supabase
      .from('notas')
      .select('*')
      .eq('id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    // Devuelve un nuevo objeto con los datos del registro
    return new Nota(notas.id, notas.nota, notas.proyecto_id, notas.usuario_id)
  }

  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async create (notaData) {
    const { error } = await supabase
      .from('notas')
      .insert(notaData)
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
      .from('notas')
      .update({
        nota: this.nota
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
      .from('notas')
      .delete()
      .eq('id', id)
    if (error) {
      throw new Error(error.message)
    }
    return true
  }
}
