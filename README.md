# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

/*
El proyecto fue inspirado en la pagina de burger king. Se utiliza como libraria principal "React Bootstrap"  y para icocnos se utiliza la libreria "Fortawesome" como base de datos de los productos y de las ordenes generadas se utiliza la base de datos NoSQL de Firebase.

Las categorias se pueden ver visibles en la barra navegación: "Favoritas del king", "promos para uno", "las vegetales", " las de pollo" y "Promo para dos".  Luego de ello, continua un carrousel con las promociones de la semana. De ahi continuan los productos en cards. el nombre, el precio y la imagen de cada producto son importados de la basa de datos de Firebase. Cabe agregar que la pagina posee un componente loading que se activa cada vez que se cambia de ruta para simular una demora al momento de solicitar o cargar datos.

Una vez que se oprime "Ver detalle" en cualquiera de los productos, nos dirigimos al detalle del producto, se puede elegir la cantidad de hamburguesas que se desea, se visualiza la descripcion de la hamburguesa y se puede personalizar la hamburguesa al antonjo del consumidor. Una vez definido el pedido, se da click en "Agregar tu pedido" donde podemos observar el precio del pedido y aparece un Toast en la parte inferior izquierda confirmar la carga del pedido en el carrito,
Se considera un pedido así contenga contenga 2 o más hamburguesas ya que son personzalidas. Asi que al hacer click en el boton se agrega solo una 1 unidad como se puede visualizar en el icono de Carrito de la barra de navegación y ya en la ruta del mismo carrito se puede adicionar o restar la cantidad del pedido

Una vez que se eligen los productos a comprar se va al carrito por medio del icono de la barra de navegación. En el carrito de compras tenemos dos partes. En el primero se llenan los datos del comprador: nombre, email, telefono y dirección de envío (En vez de doble de confirmación de email se opta por solicitar dirección de envió como dato importante de la orden). Se ha configurado con un comando de React Bootstrap para que solo se de en el boton "Confrimar Datos" si se rellenan todos los inputs y se da check a "Policy and use of private data". Una vez que se cumple con eso y se en "Confirmar Datos" aparece un Toast dando la confrimación de datos. En el segundo espacio del carrito podemos observar los productos elegidos y podemos modificar su cantidad de mayor a menor como tambien removerlo si es el caso. las modificaciones estan anexadas para que se puedan ver en el Total final de la compra. Se presiona el boton de "confirmar Compra" y se genera un Toast de confirmación de compra. Por ultimo se generar un id de compra que se puede visualizar al final de la pantalla. Todas esa información se lleva al base de datos de Firebase donde podemos visualizar la información del comprador como su pedido en un formar de base de datos NoSQL.
*/