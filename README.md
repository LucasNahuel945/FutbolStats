# FutbolStats

Una pagina que muestra resultados de futbol de la **Copa Libertadores** y la **Champions League** con datos recogidos de la API [api-football](https://www.api-football.com/)

[Documentacion API](https://www.api-football.com/documentation-beta#operation/get-teams)

## Erratas
* De momento tengo problemas para intentar implementar consultas en tiempo real a la API con fetch porque no estoy comprendiendo bien como trabajar con las promesas, sigo trabajando en eso pero dejo unos datos de prueba (ubicados en la carpeta src/data/) que son los mismos que los que se obtienen de la API y asi por lo menos tener una vista previa del proyecto. Los mismo fueron consultados con un script externo

* La página no es responsiva y se probo solamente en google chrome para linux, en otros navegadores o dispositivos puede haber fallas en algunos componentes de la página.

* No configure una página HOME por lo que para acceder a la aplicación se pueden usar los endpoint **/libertadores** o **/champions**


## Check List
[-] Implementar Consultas a la API.  
[-] Implementar Estadísticas de torneos (goleadores, tarjetas,...).  
[-] Implementar Página de cada equipo.  
[-] Solucionar botones en selección de competición (en el header).  
[-] Modificar partidos por instancias, debe muestrar partidos hasta la ultima instancia.  
[-] Implementar ronda de penales en el marcador (si un partido llega a penales).  
