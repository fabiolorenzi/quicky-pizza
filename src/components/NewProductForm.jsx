import React, {useState} from "react";
import {useDropzone} from "react-dropzone";

function NewProductForm() {
    const [prod, setProd] = useState({
        name: "",
        price: "",
        ingredients: [],
        image: []
    });

    const [imageProd, setImageProd] = useState([]);

    const {getRootProps, getInputProps} = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setImageProd(
                acceptedFiles.map((file) => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            )
        }
    });

    const image = imageProd.map((file) => (
        <div key={file.name}>
            <div>
                <img src={file.preview} style={{width: "200px"}}alt="img preview" />
            </div>
        </div>
    ))

    const [ingredient, setIngredient] = useState("");

    const handleChange = e => {
        e.preventDefault();
        setProd({...prod, [e.target.name]: e.target.value});
    };

    const handleChangeSin = e => {
        e.preventDefault();
        setIngredient(e.target.value);
    };

    const addIngredient = e => {
        e.preventDefault();
        let listIngr = prod.ingredients;
        listIngr.push(ingredient);
        setProd({...prod, [prod.ingredients]: listIngr});
        setIngredient("");
    };

    const newProduct = e => {
        e.preventDefault();
        setProd({
            name: "",
            price: "",
            ingredients: [],
            image: []
        });
    };

    return(
        <div className="products_form">
            <h1>Insert a new product</h1>
            <form onSubmit={newProduct}>
                <div className="products_form_iamge">
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drop the image of the product here</p>
                    </div>
                </div>
                <div className="product_form">
                    <label htmlFor="name">Name Product</label>
                    <input type="text" name="name" value={prod.name} onChange={handleChange} />
                    <label htmlFor="price">Price</label>
                    <input type="number" step="0.01" name="price" value={prod.price} onChange={handleChange} />
                    <label htmlFor="ingredients">Add Ingredients</label>
                    <input type="text" name="ingredient" value={ingredient} onChange={handleChangeSin} />
                    <button onClick={addIngredient}>Add Ingredient</button>
                    <p id="listIngredients">List of the Ingredients</p>
                    {prod.ingredients.map((ing) => <p>{ing}</p>)}
                </div>
                <button type="submit">Add Product</button>
                <div>{image}</div>
            </form>
        </div>
    );
};

export default NewProductForm;