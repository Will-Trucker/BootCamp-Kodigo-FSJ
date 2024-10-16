import { addDoc, collection, getDocs, updateDoc } from 'firebase/firestore';
import {useForm} from 'react-hook-form';
import {db} from '../../firebase/config'
import { useEffect, useState } from 'react';
import '../../../src/style.css';
export const Products = () => {

    const {register, handleSubmit,reset,setValue} = useForm();
    const [products,setProducts] = useState([])
    const [editId,setEditId] = useState([])

    const getProducts = async() => {
            const productsCollection = await getDocs(collection(db,'products'))
            const data = productsCollection.docs.map(  (doc) => ( {...doc.data(), id: doc.id } )
        )
        console.log(data);
        setProducts(data);
    }

    const updateProduct = async(data) => {
        const docRef = doc(db,'products',editId)
        const response = await updateDoc(docRef,data);

        setEditId(null)
    }

    const addProduct = async(data) => {
       
        console.log(data.name);
        console.log(parseInt(data.stock));
        console.log(parseInt(data.price))


        let response = await addDoc(collection(db,'products'),{
            name: data.name,
            price:parseFloat(data.price),
            stock:parseInt(data.stock)
        })
        console.log(response)
        reset();
        getProducts()

        // await addDoc(collection(db,'products'),data)
    }


    const editProduct = (producto) => {
        console.log("Editando un producto")
        console.log(producto)

        setValue('name',producto.name)
        setValue('price',producto.price)
        setValue('stock',producto.stock)
        
    }

    useEffect(() => {
        getProducts();
    },[])


    return (
        <>
            <h2>Productos</h2>

            <form onSubmit={handleSubmit(addProduct)} className='ProductForm'>
                <section>
                    <label>Nombre del Producto</label>
                    <input type="text" {...register('name')}  required/>
                </section>
                <section>
                    <label>Precio</label>
                    <input type="text" {...register('price')} required/>
                </section>
                <section>
                    <label>Cantidad</label>
                    <input type="number" {...register('stock')} required/>
                </section>
                <button type='submit'>Guadar</button>
            </form>

            <main>
                <table className='ProductTable'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                            products.map((product) =>(
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <button onClick={() => {editProduct(product)}}>Editar</button>
                                </td>
                            </tr>
                           ))
                        }
                    </tbody>
                </table>
               
            </main>
        </>
    )
}