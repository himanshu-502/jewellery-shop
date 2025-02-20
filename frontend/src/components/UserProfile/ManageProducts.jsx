import React, { useEffect, useState } from 'react';
import useProductStore from '../../store/ProductStore';
import Loader from '../Loader';
import './ManageProducts.css';

const ManageProducts = () => {
  const { loading, error, products, categories, fetchProducts, fetchCategories, addProduct, updateProduct, addCategory, updateCategory } = useProductStore();

  const [newCategory, setNewCategory] = useState({ name: '', imageBanner: null });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: 0, stock: 0, categories: [], images: [] });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productModalOpen, setProductModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await fetchProducts();
      await fetchCategories();
    };
    fetchData();
  }, []);

  // Handle Add Category
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCategory.name || !newCategory.imageBanner) return;
    try {
      await addCategory(newCategory);
    } catch (error) {
      console.error("Error adding category:", error);
    }
    setCategoryModalOpen(false);
    setNewCategory({name: '', imageBanner: null});
  };

  // Handle Update Category
  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    if (!selectedCategory.name || !selectedCategory.imageBanner) return;
    try {
      await updateCategory(selectedCategory);
    } catch (error) {
      console.error("Error updating category:", error);
    }
    setCategoryModalOpen(false);
    setSelectedCategory(null);
  };


  const handleImageChange = (e, isUpdating) => {
    const files = Array.from(e.target.files).map(file => ({ url: URL.createObjectURL(file), file }));
    if (isUpdating && selectedProduct) {
      setSelectedProduct(prev => ({ ...prev, newImages: [...prev.newImages || [], ...files] }));
    } else {
      setNewProduct(prev => ({ ...prev, images: [...prev.images, ...files] }));
    }
  };

  const removeImage = (index, isUpdating, isNew) => {
    if (isUpdating && selectedProduct) {
      if (isNew) {
        setSelectedProduct(prev => ({ ...prev, newImages: prev.newImages.filter((_, i) => i !== index) }));
      } else {
        setSelectedProduct(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }));
      }
    } else {
      setNewProduct(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }));
    }
  };

  const handleCategoryChange = (category, isUpdating) => {
    if (isUpdating && selectedProduct) {
      setSelectedProduct(prev => {
        const exists = prev.categories.some(cat => cat.category.id === category.id);
        return exists 
          ? { ...prev, categories: prev.categories.filter(cat => cat.category.id !== category.id) }
          : { ...prev, categories: [...prev.categories, { category }] };
      });
    } else {
      setNewProduct(prev => {
        const exists = prev.categories.some(cat => cat.category.id === category.id);
        return exists 
          ? { ...prev, categories: prev.categories.filter(cat => cat.category.id !== category.id) }
          : { ...prev, categories: [...prev.categories, { category }] };
      });
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.description || !newProduct.price || !newProduct.stock || !newProduct.categories.length || !newProduct.images.length) return;
    // console.log(newProduct);
    try {
      await addProduct({ 
        ...newProduct, 
        categories: newProduct.categories.map(cat => cat.category.id), 
        images: newProduct.images.map(img => img.file)
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
    setProductModalOpen(false);
    setNewProduct({name: '', description: '', price: 0, stock: 0, categories: [], images: []});
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    if (!selectedProduct.name || !selectedProduct.description || !selectedProduct.price || !selectedProduct.categories.length) return;

    try {
      // console.log(selectedProduct);
      await updateProduct({ 
        ...selectedProduct, 
        categories: selectedProduct.categories.map(cat => cat.category.id), 
        images: selectedProduct.images,  // Existing image paths
        newImages: selectedProduct.newImages.map(img => img.file) // New images as files
      });
    } catch (error) {
      console.error("Error updating product:", error);
    }
    setProductModalOpen(false);
    setSelectedProduct(null);
  };


  return (
    <div className="admin-container">
      <div className="categories-section">
        <h2>Categories</h2>
        <button onClick={() => { setNewCategory({ name: '', imageBanner: null }); setCategoryModalOpen(true); }}>+</button>
        <div className="category-list">
          {categories.map(category => (
            <div key={category.id} onClick={() => { setSelectedCategory(category); setCategoryModalOpen(true); }}>
              <img src={category.imageBanner} alt={category.name} width="100px" height="100px"/>
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="products-section">
        <h2>Products</h2>
        <button onClick={() => { setNewProduct({ name: '', description: '', price: 0, stock: 0, categories: [], images: [] }); setProductModalOpen(true); }}>+</button>
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} onClick={() => { setSelectedProduct({...product, newImages: []}); setProductModalOpen(true); }}>
              <img src={product.images[0]} alt={product.name} width="100px" height="100px"/>
              <p>{product.name} - ${product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {categoryModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedCategory ? 'Edit Category' : 'Add New Category'}</h3>
            <form onSubmit={selectedCategory ? handleUpdateCategory : handleAddCategory}>
              <input
                type="text"
                placeholder="Category Name"
                value={selectedCategory ? selectedCategory.name : newCategory.name}
                onChange={(e) => selectedCategory ? setSelectedCategory({ ...selectedCategory, name: e.target.value }) : setNewCategory({ ...newCategory, name: e.target.value })}
                required
              />
              <input
                type="file"
                onChange={(e) => selectedCategory ? setSelectedCategory({ ...selectedCategory, imageBanner: e.target.files[0] }) : setNewCategory({ ...newCategory, imageBanner: e.target.files[0] })}
                required
              />
              <div className="modal-buttons">
                <button type="button" onClick={() => {setCategoryModalOpen(false); setSelectedCategory(null); setNewCategory({name: '', imageBanner: null});}}>Cancel</button>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {productModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedProduct ? 'Edit Product' : 'Add New Product'}</h3>
            <form onSubmit={selectedProduct ? handleUpdateProduct : handleAddProduct}>
              <input type="text" placeholder="Product Name" value={selectedProduct ? selectedProduct.name : newProduct.name} onChange={(e) => selectedProduct ? setSelectedProduct({ ...selectedProduct, name: e.target.value }) : setNewProduct({ ...newProduct, name: e.target.value })} required />
              <input type="text" placeholder="Description" value={selectedProduct ? selectedProduct.description : newProduct.description} onChange={(e) => selectedProduct ? setSelectedProduct({ ...selectedProduct, description: e.target.value }) : setNewProduct({ ...newProduct, description: e.target.value })} required />
              <input type="number" placeholder="Price" value={selectedProduct ? selectedProduct.price : newProduct.price} onChange={(e) => selectedProduct ? setSelectedProduct({ ...selectedProduct, price: Number(e.target.value) }) : setNewProduct({ ...newProduct, price: Number(e.target.value) })} required />
              <input type="number" placeholder="Stock" value={selectedProduct ? selectedProduct.stock : newProduct.stock} onChange={(e) => selectedProduct ? setSelectedProduct({ ...selectedProduct, stock: Number(e.target.value) }) : setNewProduct({ ...newProduct, stock: Number(e.target.value) })} required />
              
              <div className="category-selection">
                {categories.map(category => (
                  <label key={category.id}>
                    <input type="checkbox" 
                      checked={(selectedProduct ? selectedProduct.categories : newProduct.categories).some(cat => cat.category.id === category.id)}
                      onChange={() => handleCategoryChange(category, !!selectedProduct)} 
                    />
                    {category.name}
                  </label>
                ))}
              </div>

              <input type="file" multiple onChange={(e) => handleImageChange(e, !!selectedProduct)} />
              <div className="image-preview">
                {/* Existing Images */}
                {selectedProduct?.images?.map((img, index) => (
                  <div key={`existing-${index}`}>
                    <img src={img} alt="preview" height="100px" width="100px" />
                    <button type="button" onClick={() => removeImage(index, true, false)}>x</button>
                  </div>
                ))}
                {/* New Images */}
                {selectedProduct?.newImages?.map((img, index) => (
                  <div key={`new-${index}`}>
                    <img src={img.url} alt="preview" height="100px" width="100px" />
                    <button type="button" onClick={() => removeImage(index, true, true)}>X</button>
                  </div>
                ))}
                {
                  newProduct?.images?.map((img, index) => (
                    <div key={index}>
                      <img src={img.url} alt="preview" height="100px" width="100px"/>
                      <button type="button" onClick={() => removeImage(index, false, false)}>x</button>
                    </div>
                  )
                )}

              </div>

              <div className="modal-buttons">
                <button type="button" onClick={() => { setProductModalOpen(false); setSelectedProduct(null); setNewProduct({name: '', description: '', price: 0, stock: 0, categories: [], images: []});}}>Cancel</button>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}    
      </div>
  );
};

export default ManageProducts;
