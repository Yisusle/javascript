'use_strict'
//-Load- en aprendiendo-Jquery/js/05_ajax.js
window.addEventListener('load', ()=> {

    //Fetch (ajax) y Peticiones a servicios / apis rest


    var div_usuarios = document.querySelector("#usuarios");
    var div_usuario = document.querySelector("#usuario");
    var div_profesor = document.querySelector("#profesor");
    //var usuarios = [];
        getUsuarios()
            .then(data => data.json()) //convertir
            .then(users => {
                usuarios = users.data;   //Guardar datos
                //console.log(usuarios);
                listadoUsuarios(users.data);

                return getUsuario();
    })
    .then(data => data.json())
    .then(user => {
        mostrarUsuario(user.data);
        console.log(user.data);
        //Promesa
        return getInfo();
    })
    .then(data => {
        div_profesor.innerHTML = data;
        console.log(data);
    })
    .catch(error =>{
        alert("Error en las peticiones.");
        console.log(error);
    });


    function getUsuarios(){
        return fetch('https://reqres.in/api/users')
    }

    function getUsuario(){
        return fetch('https://reqres.in/api/users/3')
    }

    //PROMESAS
    function getInfo(){
        var profesor = {
            nombre : 'Jesus',
            apellidos: 'Leyva',
            url: 'google.com.mx'
        };
        return new Promise((resolve, reject) => {
            var profesor_string = "";

            setTimeout(function(){
                var profesor_string = JSON.stringify(profesor);
                
                if(typeof profesor_string != 'string' || profesor_string == ''){
                    return reject('ERROR');
                }else{
                    return resolve(profesor_string);
                }
            }, 3000);
        });
        
    }
    function listadoUsuarios(usuarios){
                usuarios.map((user, i)=> {
                let nombre = document.createElement('h3');

                nombre.innerHTML = i + " " + user.first_name + " " + user.last_name;
                div_usuarios.appendChild(nombre); 
                document.querySelector(".loading").style.display = "none";
            });
    }

    function mostrarUsuario(user){
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');

        nombre.innerHTML = user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';

        div_usuario.appendChild(nombre);
        div_usuario.appendChild(avatar); 

        document.querySelector("#usuario .loading").style.display = "none";
    }

});