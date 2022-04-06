var url = 'https://swapi.dev/api/people';
// TODO: get the html element

var character = document.getElementById('personajes')

//Función asincrona
async function run(){
    // await: espera a que el objeto "response" reciba (en este caso) un https
    let response = await fetch(url);

    //permite que imprima los datos del api
    let people = await response.json();
    
    let data = fetch('')

    console.log(people.results);

results = filterBy(characterFilter.value)
    // TODO: use the results to display the author's information.

        //Despues de lograr imprimir en consola realizar un forEach
        //fitrar con nombres de personajes que participan en mas de 4 películas
    }
    run();
    
    function filterBy(character){

        const characterFilter = {
            'name': people.filter(p => (p.name))

        }

        return characterFilter(character)

    }
    
    














    //bubbling and capturing
    
    

/*
1- Obtener datos: 
2- Procesar datos
3- Nuevo array - Filtrar - No hay datos
4- Pintar en el DOM 
*/