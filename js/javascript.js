const Producto =[
    {
        id: 1,
        name:"CPU RYZEN 5 3400",
        precio: 50000,
    },
    {
        id:2,
        name:"Monitor ReDragon 24",
        precio: 21000
    },
    {
        id:3,
        name:"Gabinete Corsair FUSION",
        precio: 19000
    }
]





let menu = "Bienvenido a sasTecnology\n 1- Selecciona un producto\n 2- Mi carrito\n 3- Elemininar elemento\n 0- salir";
    const addproducto = () =>
    {
        console.log("se agrega el producto");
        let list = "";
        for(const elemento of Producto )
        {
            //let listElemento = element\n;
            list+= elemento.name;
            let option = parseInt(prompt(list));
            console.log(option);
        }
        //let menu = "Bienvenido a sasTecnology\n 1- Selecciona un producto\n 2- Mi carrito\n 3- Elemininar elemento\n 0- salir";
    }
    const showCart =() =>
    {
        console.log("se muestra el carrito");
    }
    const deletElement =() =>
    {
        console.log("se elimina el elmento");
    }

while(true)
{
    let option =parseInt(prompt(menu));
    switch(option)
    {
        case 1:
        addproducto ();
        break;

        case 2:
        showCart();
        break;
        
        case 3:
        deletElement();
        break;

        case 0:
        alert("Gracias vuelva cuando quiera");
        break;

        default:
        break;
    }
    if(option ==0)
    {
        break;
    }
}