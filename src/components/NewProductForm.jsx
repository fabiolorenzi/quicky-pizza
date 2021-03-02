import React, {useState} from "react";
import {useDropzone} from "react-dropzone";

function NewProductForm() {
    const [prod, setProd] = useState({
        name: "",
        price: "",
        ingredients: [],
        image: []
    });

    const [ingredient, setIngredient] = useState("");

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

    let image = imageProd.map((file) => (
        <div key={file.name}>
            <div>
                <img src={file.preview} alt="img preview" />
            </div>
        </div>
    ));

    const addImage = e => {
        e.preventDefault();
        setProd({...prod, [prod.image]: imageProd.map((file) => prod.image.push(file))});
        console.log(prod);
        console.log(imageProd);
    };

    const removeImage = e => {
        e.preventDefault();
        setProd({...prod, [prod.image]: prod.image.map(() => prod.image.pop())});
        setImageProd(imageProd.map(() => imageProd.pop()));
        console.log(prod);
        console.log(imageProd);
    };

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
        setImageProd([]);
    };

    return(
        <div className="products_form">
            <h1>INSERT A NEW PRODUCT</h1>
            <form onSubmit={newProduct}>
                <div className="product_form_image">
                    {imageProd.length === 0
                        ? <div {...getRootProps()} className="imageInput">
                            <input {...getInputProps()} />
                            <p>Drop or click here to insert the image of the product</p>
                        </div>
                        : <div>
                            <div id="input_image">{image}</div>
                            {prod.image.length === 0
                                ? <div className="button_insertImage">
                                    <button id="addButton" onClick={addImage}>Add Image</button>
                                </div>
                                : <div className="button_removeImage">
                                    <p>Image inserted correctly</p>
                                    <button id="removeButton" onClick={removeImage}>Remove Image</button>
                                </div>
                            }
                        </div>
                    }
                </div>
                <div className="product_form">
                    <div>
                        <label htmlFor="name">Name Product</label>
                        <input type="text" name="name" value={prod.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input type="number" step="0.01" name="price" value={prod.price} onChange={handleChange} />
                    </div>
                    <div>
                        <div>
                            <label htmlFor="ingredients">Add Ingredients</label>
                            <input type="text" name="ingredient" value={ingredient} onChange={handleChangeSin} />
                            <button onClick={addIngredient}>Add</button>
                        </div>
                        <div>
                            <p id="listIngredients">List of the Ingredients</p>
                            {prod.ingredients.map((ing) =>
                                <div className="ingredient">
                                    <p classList="ingredient">{ing}</p>
                                </div>)}
                        </div>
                    </div>
                    <button id="submitButton" type="submit">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default NewProductForm;