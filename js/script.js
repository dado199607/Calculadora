/**
 * Propiedades de la calculadora
 */

 var p = {
     teclas: document.querySelectorAll('#calculadora ul li'),
     accion: null,
     digito: null,
     operaciones: document.querySelector("#operaciones"),
     cantidadSignos: false,
     cantidadDecimal: false,
     esReemplazable: true
 };

 /**
  * Metodos de la calculadora
  * @return resultado
  */

    var m = {
        inicio: function() {
            for(var i = 0; i < p.teclas.length; i++)
            {
                p.teclas[i].addEventListener("click", m.oprimirTecla)
            }
        },

        teclado: function() {
            document.addEventListener("keydown", m.oprimir);
        },

        oprimir: function(tecla) {

            // Numeros
            if(tecla.keyCode == 48 || tecla.keyCode == 96)
            {
                p.accion = "number";
                p.digito = 0;
            }
            if(tecla.keyCode == 49 || tecla.keyCode == 97)
            {
                p.accion = "number";
                p.digito = 1;
            }
            if(tecla.keyCode == 50 || tecla.keyCode == 98)
            {
                p.accion = "number";
                p.digito = 2;
            }
            if(tecla.keyCode == 51 || tecla.keyCode == 99)
            {
                p.accion = "number";
                p.digito = 3;
            }
            if(tecla.keyCode == 52 || tecla.keyCode == 100)
            {
                p.accion = "number";
                p.digito = 4;
            }
            if(tecla.keyCode == 53 || tecla.keyCode == 101)
            {
                p.accion = "number";
                p.digito = 5;
            }
            if(tecla.keyCode == 54 || tecla.keyCode == 102)
            {
                p.accion = "number";
                p.digito = 6;
            }
            if(tecla.keyCode == 55 || tecla.keyCode == 103)
            {
                p.accion = "number";
                p.digito = 7;
            }
            if(tecla.keyCode == 56 || tecla.keyCode == 104)
            {
                p.accion = "number";
                p.digito = 8;
            }
            if(tecla.keyCode == 57 || tecla.keyCode == 105)
            {
                p.accion = "number";
                p.digito = 9;
            }

            // Operaciones
            if(tecla.keyCode == 109 || tecla.keyCode == 189)
            {
                p.accion = "sign";
                p.digito = "-";
            }
            if(tecla.keyCode == 106 || tecla.keyCode == 88)
            {
                p.accion = "sign";
                p.digito = "*";
            }
            if(tecla.keyCode == 111)
            {
                p.accion = "sign";
                p.digito = "/";
            }
            if(tecla.keyCode == 107 || tecla.keyCode == 187)
            {
                p.accion = "sign";
                p.digito = "+";
            }

            //Decimal
            if(tecla.keyCode == 110 || tecla.keyCode == 190)
            {
                p.accion = "float";
                p.digito = ".";
            }

            // Igual
            if(tecla.keyCode == 13)
            {
                p.accion = "equals";
            }

            // Borrar
            if(tecla.keyCode == 8)
            {
                m.borrarCalculadora();
            }

            m.calculadora(p.accion, p.digito);
        },

        oprimirTecla: function(event) {
            p.accion = event.target.getAttribute("class");
            p.digito = event.target.innerHTML;
            m.calculadora(p.accion, p.digito);
        },
        calculadora: function(op, number) {
            switch(op)
            {
                case "number":
                    if(p.operaciones.innerHTML == 0 || p.esReemplazable)
                    {
                        p.operaciones.innerHTML = number;
                        p.esReemplazable = false;
                    }
                    else
                    {
                        p.operaciones.innerHTML += number;
                    }
                    p.cantidadSignos = false;
                    break;

                case "sign":
                    if(!p.cantidadSignos)
                    {
                        p.operaciones.innerHTML += number;
                    }
                    p.cantidadDecimal = false;
                    p.cantidadSignos = true;
                    break;

                case "float":
                    if(!p.cantidadDecimal)
                    {
                        p.operaciones.innerHTML += number;
                    }
                    p.cantidadDecimal = true;
                    break;

                case "equals":
                    p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
                    p.esReemplazable = true;
                    break;
            }
        },
        borrarCalculadora: function() {
            p.operaciones.innerHTML = 0;
        }
    };


  m.inicio();
  m.teclado();