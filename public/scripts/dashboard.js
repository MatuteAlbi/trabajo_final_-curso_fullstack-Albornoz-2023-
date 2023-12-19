let products = []

const newName = document.getElementById('editProductName')
const newPrice = document.getElementById('editProductPrice')
const newDescription = document.getElementById('editProductDescription')
const newImage = document.getElementById('editProductImage')
let selectedProduct;

fetch('http://localhost:3000/api/product').then(async (data)=>{
   const productList = document.getElementById('list-products')
    products =  await data.json()
    products.forEach((produ)=>{
    productList.innerHTML += `
        <li>
        <img src="${produ.image}" alt="">
    ${produ.name} - Precio: ${produ.price}
    <button class="edit-btn" onclick="openEditModal('${produ._id}')">Editar</button>
    <button class="delete-btn" onclick="openDeleteModal('${produ._id}')">Borrar</button>
    </li>
`
   });
})




const createProduct = ()=>{
    const nombre = document.getElementById('productName')
    const price = document.getElementById('productPrice')
    const description = document.getElementById('productDescription')
    const image = document.getElementById('productImage')

    fetch('http://localhost:3000/api/product',{
        method:'POST',
        body:JSON.stringify({
            name:nombre.value,
            price: price.value,
            description: description.value,
            image: image.value,
            }),
            headers:{
                "Content-Type": "application/json",

            }
    }).then(()=>{
        console.log("producto creado")
        alert('Producto Creado!')
    }).catch(()=>{
        alert('Error al crear producto')
    })
}

function openEditModal(productId) {
    selectedProduct = products.find((pr)=> pr._id === productId)
    document.getElementById('editProductModal').style.display = 'block';
    newName.value = selectedProduct.name
    newPrice.value = selectedProduct.price
    newDescription.value = selectedProduct.description
    newImage.value = selectedProduct.image
    }

function openDeleteModal(productId) {
    selectedProduct = products.find((pr)=> pr._id === productId)
    document.getElementById('deleteModal').style.display = 'block';
    }
// Función para confirmar la eliminación
function confirmDelete() {
    fetch('http://localhost:3000/api/product',{
        method: 'DELETE',
        body:JSON.stringify({
            productId: selectedProduct._id
        }),
        headers:{
            "Content-Type": "application/json",

        }
    }).then(()=>{
        alert('Producto Eliminado!')
        window.location.reload();
    })
    .catch((error)=>{
        console.log('error: ',error)
        alert('Error al eliminar producto!')
    })


    closeDeleteModal();
    }

function closeDeleteModal() {
        document.getElementById('deleteModal').style.display = 'none';
        }








        confirmDelete
    function updateProduct() {
        fetch('http://localhost:3000/api/product',{
            method: 'PUT',
            body:JSON.stringify({
                name: newName.value,
                price: newPrice.value,
                description: newDescription.value,
                image: newImage.value,
                productId: selectedProduct._id
            }),
            headers:{
                "Content-Type": "application/json",

            }
        }).then(()=>{
            alert('Producto Actualizado!')
        })
        .catch(()=>{
            alert('Error al actualizar producto!')
        })
    }



