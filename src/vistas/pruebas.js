
import { createClient } from '@supabase/supabase-js'
export const pruebas = {
    template: `<h1>Pruebas</h1>`,
    script: async()=>{
        
        //Conexion con supabase
        const supabaseUrl = 'https://hvvkrdvxncfcnelhyfod.supabase.co'
        
        //const supabaseKey = process.env.SUPABASE_KEY
        const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2dmtyZHZ4bmNmY25lbGh5Zm9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzY2MTksImV4cCI6MTk5Mjc1MjYxOX0.WHM-_bVZmJuDsz3wfVZ-6hoA8VhTK4C6EYsfxlzycsQ"
        const supabase = createClient(supabaseUrl, supabaseKey)
        console.log("conexion a supabase", supabase);

        const leerTodosPerfiles = async ()=>{
        //Read all rows 
            let { data: perfiles, error } = await supabase
            .from('perfiles')
            .select('*')

            console.log(perfiles);

        }
      
        //insertar nuevo perfil
        const agregarPerfil= async ()=>{
            const { data} = await supabase
            .from('perfiles')
            .insert([
                { 
                    nombre: 'ejemplo' 
                },
            ])
        } 
        //proyectos_detalle a partir de funcion postgreSQL
        const leerProyectosDetalle = async ()=>{
            
            let { data, error } = await supabase
            .rpc('proyectodetalle')

            if (error) console.error(error)
            else console.log("proyectos con detalle",data)

        } 

        leerProyectosDetalle()
       /*  await leerTodosPerfiles()
        await agregarPerfil()
        await leerTodosPerfiles() */

    }
}