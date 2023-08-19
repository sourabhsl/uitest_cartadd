import React, { useState, useEffect } from "react";
import productsData from "../../data/products.json";
import { jsPDF } from "jspdf";
import "./Shop.scss"


const Shop = () => {
    const navRef = React.useRef(null);
    const showCart = (e) => {
        navRef.current.classList.add("showCart");
    };
    const hideCart = (e) => {
        navRef.current.classList.remove("showCart");
    };

    const [products, setProducts] = useState([]);
        useEffect(() => {
        setProducts(productsData);
    },[]);
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [taxTotal, setTaxTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);


    useEffect(() => {
        total();
    }, [cart]);

    const total = () => {};

    const calculateTotal = (cart = []) => {
        let totalVal = 0;
        cart.forEach (item => {
            totalVal += (item.price * item.qty);
        } )
        // console.log(totalVal)
        setCartTotal(totalVal)
        calculateTax(totalVal)
    }
    
    const calculateTax =(totalVal) => {
        const decVal = totalVal > 0 ? (parseFloat(totalVal) * 10/100).toFixed(2) : 0;
        setTaxTotal (decVal)
        calculateGrandTotal(totalVal, decVal)
    }

    const calculateGrandTotal =(cartTotal, taxTotal) => {
        // console.log(cartTotal);
        if (cartTotal > 0) {
            setGrandTotal((parseFloat(cartTotal) + parseFloat(taxTotal)).toFixed(2));
        } else {
            setGrandTotal(0) 
        }
    }

    const addToCart = (el, qtyToUpdate = 1) => {
        const cartCopy = cart.slice();
        const index = cartCopy.findIndex((cartItem) => cartItem.id === el.id);
        if(index === - 1) {
            cartCopy.push({ ...el, qty: 1 });
        } else {
            const copyProduct = cartCopy[index];
            cartCopy[index] = { ...copyProduct, qty: copyProduct.qty + qtyToUpdate }
        }
        setCart(cartCopy);
        calculateTotal(cartCopy);
    };

    const removeFromCart = (el) => {
        let hardCopy = [];
        hardCopy = cart.filter((cartItem) => cartItem.id !== el.id);
        console.log(hardCopy);
        setCart(hardCopy);
        calculateTotal(hardCopy);
    };

    const listItems = products.map((el) => (
        <div key={el.id} className="card">
            <span className="img-wrp">
            <img src={el.image} alt="" />
            </span>
            <span className="prod">
            {el.name}
            </span>
            <span className="price">
            ${el.price}
            </span>
            
            <a href="#." className="add-link f-12" onClick={() => {addToCart(el); showCart()}}>+ Add</a>
        </div>
    ));

    const [counter, setCounter] = useState(1);
    // const incrementCounter = () => setCounter(counter + 1);
    // let decrementCounter = () => setCounter(counter - 1);
       
    // if(counter<=1) {
    //     decrementCounter = () => setCounter(1);
    // }

    const updateProductQty = (el, qtyToUpdate) => {
        if(el.qty <= 1 && qtyToUpdate < 0) {
            removeFromCart(el)
        } else {

            addToCart(el, qtyToUpdate)
        }
    }



    const cartItems = cart.map((el) => (
        <div key={el.id} className="card">
            
            <img src={el.image} alt="" />
            <div className="details">
                <strong className="f-12">{el.name}</strong>
                <div className="price f-12">${el.price}</div>
            </div>
            <div className="quantity">
                <a href="#."  onClick={() => removeFromCart(el)}><span class="material-symbols-outlined f-14">close</span></a>
                <div className="number">
                    <span class="material-symbols-outlined" onClick={() => updateProductQty(el, -1)}>remove</span>
                    <em className="count">{el.qty}</em>
                    <span class="material-symbols-outlined" onClick={() => updateProductQty(el)}>add</span>
                </div>
            </div>
            
        </div>
        )
    );
    const printPdfData = cart.map((el) => (
        <tr key={el.id} className="f-12">
                <td>{el.name}</td><td>${el.price}</td>
        </tr>
        )
    );
    
    const createPDF = async () => {
        const pdf = new jsPDF("portrait", "px", "a4");
        const data = await document.querySelector("#pdf");
        pdf.html(data).then(() => {
          pdf.save("your-bill.pdf");
        });
    };

  return (
    <div>
        <div className="prod-grid">
         {listItems}
        </div>
        <div className="cart" ref={navRef}>
            <div className="cart-header">
                <div className="cart-title">
                    <strong className="f-20">My Order</strong>
                    <div className="sub-txt">Take Away</div>
                </div>
                <span className="material-symbols-outlined cancel" onClick={hideCart}>cancel</span>
            </div>
            <div>
                <div className="cart-inr">{cartItems}</div>
                <div className="cart-total">
                    
                    <div className="c-row">
                        <div className="c-cell">Subtotal</div>
                        <div className="c-cell right">${cartTotal}</div>
                    </div>
                    <div className="c-row">
                        <div className="c-cell">Tax 10%</div>
                        <div className="c-cell right">${taxTotal}</div>
                    </div>
                    <div className="c-row bord">
                        <div className="c-cell">Total</div>
                        <div className="c-cell right"><strong>${grandTotal}</strong></div>
                    </div>
                </div>
                
            </div>
            
            <button type="button" class="btn block red" onClick={createPDF}>Print Bills</button>
        </div>
        <div id="pdf">
            <table className="print-table" align="center">
                <tr>
                    <td colspan="2">Your Bill</td>
                </tr>
                {printPdfData}
                <tr className="f-12"><td>Total (10%&nbsp;Tax&nbsp;Included)</td><td>${grandTotal}</td></tr>
            </table>
        </div>
    </div>
  );
};

export default Shop;