// Data Initialization
document.addEventListener('DOMContentLoaded', () => {
    displayUsers();
    displayProducts();
  });
  
  // Display Users
  function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(user => {
      const li = document.createElement('li');
      li.innerHTML = `${user.name} - ${user.email} <button onclick="viewUser(${user.id})">View</button> <button onclick="editUser(${user.id})">Edit</button> <button onclick="deleteUser(${user.id})">Delete</button>`;
      userList.appendChild(li);
    });
  }
  
  // Display Products
  function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.forEach(product => {
      const li = document.createElement('li');
      li.innerHTML = `${product.name} - ${product.price} <button onclick="viewProduct(${product.id})">View</button> <button onclick="editProduct(${product.id})">Edit</button> <button onclick="deleteProduct(${product.id})">Delete</button>`;
      productList.appendChild(li);
    });
  }
  
  // Add New User
  document.getElementById('addUserBtn').addEventListener('click', () => {
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = `
      <h3>Add New User</h3>
      <form id="userForm">
        <input type="text" id="userName" placeholder="Name" required>
        <input type="email" id="userEmail" placeholder="Email" required>
        <button type="submit">Add User</button>
      </form>
    `;
    document.getElementById('userForm').addEventListener('submit', addUser);
  });
  
  // Add User Function
  // Add User Function
function addUser(e) {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = {
      id: users.length + 1,
      name: name,
      email: email
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    displayUsers(); // Update the user list display
  }
  // Delete User
function deleteUser(id) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.filter(u => u.id !== id);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    displayUsers(); // Update the user list display
  }
// Edit User
function editUser(id) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex !== -1) {
      const name = prompt('Enter new name:', users[userIndex].name);
      const email = prompt('Enter new email:', users[userIndex].email);
      if (name && email) {
        users[userIndex].name = name;
        users[userIndex].email = email;
        localStorage.setItem('users', JSON.stringify(users));
        displayUsers(); // Update the user list display
      }
    } else {
      alert('User not found!');
    }
  }
// View User Details
function viewUser(id) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.id === id);
    if (user) {
      alert(`Name: ${user.name}\nEmail: ${user.email}`);
    } else {
      alert('User not found!');
    }
  }
      
   
  // Add New Product
document.getElementById('addProductBtn').addEventListener('click', () => {
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = `
      <h3>Add New Product</h3>
      <form id="productForm">
        <input type="text" id="productName" placeholder="Product Name" required>
        <input type="number" id="productPrice" placeholder="Price" required>
        <button type="submit">Add Product</button>
      </form>
    `;
    document.getElementById('productForm').addEventListener('submit', addProduct);
  });
  
  // Add Product Function
  function addProduct(e) {
    e.preventDefault();
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const newProduct = {
      id: products.length + 1,
      name: name,
      price: price
    };
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts(); // Update the product list display
  }
  // Display Products
function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.forEach(product => {
      const li = document.createElement('li');
      li.innerHTML = `${product.name} - ₹${product.price} <button onclick="viewProduct(${product.id})">View</button> <button onclick="editProduct(${product.id})">Edit</button> <button onclick="deleteProduct(${product.id})">Delete</button>`;
      productList.appendChild(li);
    });
  } 

  // View Product Details
function viewProduct(id) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const product = products.find(p => p.id === id);
    if (product) {
      alert(`Product Name: ${product.name}\nPrice: ₹${product.price}`);
    } else {
      alert('Product not found!');
    }
  }
  
  // Edit Product
function editProduct(id) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
      const name = prompt('Enter new product name:', products[productIndex].name);
      const price = prompt('Enter new price:', products[productIndex].price);
      if (name && price) {
        products[productIndex].name = name;
        products[productIndex].price = price;
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts(); // Update the product list display
      }
    } else {
      alert('Product not found!');
    }
  }
// Edit Product
function editProduct(id) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
      const name = prompt('Enter new product name:', products[productIndex].name);
      const price = prompt('Enter new price:', products[productIndex].price);
      if (name && price) {
        products[productIndex].name = name;
        products[productIndex].price = price;
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts(); // Update the product list display
      }
    } else {
      alert('Product not found!');
    }
  }
// Delete Product
function deleteProduct(id) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = products.filter(p => p.id !== id);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    displayProducts(); // Update the product list display
  }
      
  