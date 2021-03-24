import React, { useState } from "react";

import Margherita from "../img/margherita.jpg";
import Four_cheese from "../img/four_cheese.jpg";
import Four_seasons from "../img/four_seasons.jpg";
import Ham from "../img/ham.jpg";
import Ham_mushroom from "../img/ham_mushroom.jpg";

function Shop() {

    //--------------------STATES---------------------

    const priceList = {
        margherita: "8.00",
        four_cheese: "12.00",
        four_seasons: "11.00",
        ham: "9.00",
        ham_mushroom: "10.00"
    };

    const [quantityList, setQuantityList] = useState({
        margherita: 0,
        four_cheese: 0,
        four_seasons: 0,
        ham: 0,
        ham_mushroom: 0
    });

    const [total, setTotal] = useState({
        margherita: 0,
        four_cheese: 0,
        four_seasons: 0,
        ham: 0,
        ham_mushroom: 0
    });

    const [totalPrice, setTotalPrice] = useState(0);

    //---------------------FUNCTIONS----------------------

    const handleChange = e => {
        e.preventDefault();
        setQuantityList({...quantityList, [e.target.name]: e.target.value});
        if (e.target.name === "margherita") {
            setTotal({...total, margherita: parseInt(priceList.margherita) * quantityList.margherita});
        } else if (e.target.name === "four_cheese") {
            setTotal({...total, four_cheese: parseInt(priceList.four_cheese) * quantityList.four_cheese});
        } else if (e.target.name === "four_seasons") {
            setTotal({...total, four_seasons: parseInt(priceList.four_seasons) * quantityList.four_seasons});
        } else if (e.target.name === "ham") {
            setTotal({...total, ham: parseInt(priceList.ham) * quantityList.ham});
        } else if (e.target.name === "ham_mushroom") {
            setTotal({...total, ham_mushroom: parseInt(priceList.ham_mushroom) * quantityList.ham_mushroom});
        };
        setTotalPrice(total.margherita + total.four_cheese + total.four_seasons + total.ham + total.ham_mushroom);
    };

    const pay = e => {
        e.preventDefault();
        setQuantityList({
            margherita: 0,
            four_cheese: 0,
            four_seasons: 0,
            ham: 0,
            ham_mushroom: 0
        });
        setTotal({
            margherita: 0,
            four_cheese: 0,
            four_seasons: 0,
            ham: 0,
            ham_mushroom: 0
        });
        setTotalPrice(0);
    };

    //---------------------RETURN---------------------

    return(
        <div className="shop_container" id="shop">
            <h1>SHOP</h1>
            <div className="listProductsShop">
                <table>
                    <tr className="firstLine">
                        <th><h1>IMAGE</h1></th>
                        <th><h1>NAME</h1></th>
                        <th><h1>PRICE</h1></th>
                        <th><h1>QUANTITY</h1></th>
                        <th><h1>TOTAL PRICE</h1></th>
                    </tr>
                    <tr className="productLine">
                        <th><img src={Margherita} alt="margherita" /></th>
                        <th><h1>Margherita</h1></th>
                        <th><h1>{priceList.margherita}£</h1></th>
                        <th><input
                                type="number"
                                name="margherita"
                                placeholder="0"
                                value={quantityList.margherita.value}
                                onChange={handleChange}
                            />
                        </th>
                        <th><h1>{total.margherita}£</h1></th>
                    </tr>
                    <tr className="productLine">
                        <th><img src={Four_cheese} alt="four cheese" /></th>
                        <th><h1>Four Cheese</h1></th>
                        <th><h1>{priceList.four_cheese}£</h1></th>
                        <th><input
                                type="number"
                                name="four_cheese"
                                placeholder= "0"
                                value={quantityList.four_cheese.value}
                                onChange={handleChange}
                            />
                        </th>
                        <th><h1>{total.four_cheese}£</h1></th>
                    </tr>
                    <tr className="productLine">
                        <th><img src={Four_seasons} alt="four seasons" /></th>
                        <th><h1>Four Seasons</h1></th>
                        <th><h1>{priceList.four_seasons}£</h1></th>
                        <th><input
                                type="number"
                                name="four_seasons"
                                placeholder="0"
                                value={quantityList.four_seasons.value}
                                onChange={handleChange}
                            />
                        </th>
                        <th><h1>{total.four_seasons}£</h1></th>
                    </tr>
                    <tr className="productLine">
                        <th><img src={Ham} alt="ham" /></th>
                        <th><h1>Ham</h1></th>
                        <th><h1>{priceList.ham}£</h1></th>
                        <th><input
                            type="number"
                            name="ham"
                            placeholder="0"
                            value={quantityList.ham}
                            onChange={handleChange}
                        />
                        </th>
                        <th><h1>{total.ham}£</h1></th>
                    </tr>
                    <tr className="productLine">
                        <th><img src={Ham_mushroom} alt="ham mushroom" /></th>
                        <th><h1>Ham Mushroom</h1></th>
                        <th><h1>{priceList.ham_mushroom}£</h1></th>
                        <th><input
                                type="number"
                                name="ham_mushroom"
                                placeholder="0"
                                value={quantityList.ham_mushroom}
                                onChange={handleChange}
                            />
                        </th>
                        <th><h1>{total.ham_mushroom}£</h1></th>
                    </tr>
                </table>
            </div>
            <h1 id="totalPrice">Total: {totalPrice}£</h1>
            <button onClick={pay} id="payButton">PAY NOW</button>
        </div>
    );
};

export default Shop;