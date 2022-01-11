 //FUNCTION: Add data to firestore
 async function addData(){
    try {
        await addDoc(collection(fireDB, "users") , {name: 'vikas', age: 18});
    } catch (error) {
        console.log(error)
    }
}

//FUNCTION: get data from firestore
async function getData(){
    try {
        const users = await getDocs(collection(fireDB, "users"));

        //we will store the users in this array
        const usersArray = [];

        users.forEach((doc) => {
            const obj={
                id:doc.id,
                ...doc.data()
            }
        usersArray.push(obj)
        });

        console.log(usersArray);
    } catch (error) {
        console.log(error)
    }
}

//FUNCTION: Add products to firestore
function addProductsData(){
    fireproducts.map(async (product) =>{
        try {
            await addDoc(collection(fireDB, "products"), product);
        } catch (error) {
            console.log(error)
        } 
    })
}

//Mapping through the the products
<div className="container">
        {products.map((product, i) =>{
            return <div key={i}>
                <div onClick={() => {
                    navigate(`/productinfo/${product.id}`)
                }}>
                    <img src={product.imageURL} alt="" className='product-img'/>
                    <h3>{product.name}</h3>
                    <b>{product.price}</b>
                    <p><i className="fas fa-star"></i><span>{product.rating}</span></p>
                </div>
            </div>
        })}
</div>
