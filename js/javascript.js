const Producto =[
    {
        id: 1,
        name:"CPU RYZEN 5 3400",
        precio: 50000,
    },

    {
        id: 2,
        name:"Monitor ReDragon 24",
        precio: 21000
    },

    {
        id: 3,
        name:"Gabinete Corsair FUSION",
        precio: 19000
    }
]
const cart = [];




let menu = "Bienvenido a sasTecnology\n 1- Selecciona un producto\n 2- Mi carrito\n 3- Elemininar elemento\n 0- salir";

    const addproducto = () =>
    {
        console.log("se agrega el producto");
        let list = "";
        for (const element of Producto )
        {
            list+= element.id+ "- "+ element.name +"\n";
        }
        let option = parseInt(prompt(list));
        for (const interactor of Producto)
        {
            if(interactor.id == option)
            {
                let found = cart.find(element => element.id === option);
                if(!found){
                cart.push(interactor);
                }
            }
        }
        console.log(cart);
        alert("Producto agregado con exito");
    }
    const showCart =() =>
    {
        console.log("se muestra el carrito");
        let list = "";
        let count = 1
        for (const element of cart )
        {
            list+= count++ + "- "+ element.name +"\n";
        }
        alert(list);
    }
    const deletElement =() =>
    {
        console.log("se elimina el elmento");
        let list = "";
        let count = 1
        for (const element of cart )
        {
            list+= count++ + "- "+ element.name +"\n";
        }
        let option =parseInt(prompt(list));
        cart.splice(option - 1,1);
        alert("eliminado con exito");
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