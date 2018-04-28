polyfill codigo que adapta funcionalidad que algun browser viejo no pueda realizar directamente

css se lee en cascada y se queda con el ultimo que leyo

display:inline-block;
display:grid; <-si es soportada se queda con grid, de lo contrario se queda con la anterior

feature queries

@supports (display:grid){
	div{
		display:grid;
		grid-column:20 px 20px;
		}

}


box-sizing: border-box;  va tomar border,padding como parte del contenido

 
para standarizar tamaño de margenes y padding a todos los objetos

*{
	box-sizing : border-box;
	margin:;
	padding:;
	}
	
	
para crear variables en css

:root{
 --<variable> : <valor>;
 --primary-color : #00AA11;
 --default-text-size: 16px;
}
 para usarlo
 
 div{
	background-color:var(--primary-color);
 }
	
media query

todo el css que cumpla de 0px a max 900px se aplicara a la pagina
en caso de min-width aplica a partir del tamaño especificado
@media screen and (max-width:900px){
	div{
	// css
	}
}	

usualmente son 3 break points: 1024px, 769px, 425px, pc, tablet, y cell respectivamente

tambien se pueden hacer operacion dentro de las variables
--title-text-size:calc(var(--default-text-size)*2);

util para responsivo

width:calc(100% -16px);

# flexbox

flexboxfroggy.como
display:flex
justify-content
---
align-items:


nunca usar negro/blanco sino algun color similar