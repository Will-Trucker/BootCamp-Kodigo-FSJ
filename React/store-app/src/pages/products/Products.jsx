import { addDoc, collection, doc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { db, auth } from '../../firebase/config';
import { useEffect, useState } from 'react';
import '../../../src/style.css';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const Products = () => {
    const { register, handleSubmit, reset, setValue } = useForm();
    const [products, setProducts] = useState([]);
    const [editId, setEditId] = useState(null);
    const navigate = useNavigate(); 

    const getProducts = async () => {
        const productsCollection = await getDocs(collection(db, 'products'));
        const data = productsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log(data);
        setProducts(data);
    };

    const addProduct = async (data) => {
        console.log(data.name);
        console.log(parseInt(data.stock));
        console.log(parseInt(data.price));

        let response = await addDoc(collection(db, 'products'), {
            name: data.name,
            price: parseFloat(data.price),
            stock: parseInt(data.stock)
        });
        console.log(response);
        reset();
        getProducts();
    };

    const editProduct = (producto) => {
        console.log("Editando un producto");
        console.log(producto);

        setValue('name', producto.name);
        setValue('price', producto.price);
        setValue('stock', producto.stock);
        setEditId(producto.id);  
    };

    const updateProduct = async (data) => {
        const docRef = doc(db, 'products', editId);
        await updateDoc(docRef, {
            name: data.name,
            price: data.price,
            stock: data.stock
        });

        setEditId(null);
        reset();
        getProducts();
    };

    const deleteProduct = async (id) => {
        const docRef = doc(db, 'products', id);
        await deleteDoc(docRef);
        reset();
        getProducts();
    };

    const handleLogout = async () => {
        await signOut(auth); // Cierra sesión del usuario
        navigate('/'); // Redirige al login
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <button onClick={handleLogout}>Cerrar Sesión</button>
            <h2>Productos</h2>
            <form onSubmit={editId ? handleSubmit(updateProduct) : handleSubmit(addProduct)} className='ProductForm'>
                <section>
                    <label>Nombre del Producto</label>
                    <input type="text" {...register('name')} required />
                </section>
                <section>
                    <label>Precio</label>
                    <input type="text" {...register('price')} required />
                </section>
                <section>
                    <label>Cantidad</label>
                    <input type="number" {...register('stock')} required />
                </section>
                <button type='submit'>{editId ? 'Editar' : 'Guardar'}</button>
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
                            products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <button onClick={() => { editProduct(product) }}>Editar</button>
                                        <button onClick={() => { deleteProduct(product.id) }}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </main>
        </>
    );
}
