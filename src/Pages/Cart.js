import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="h-full w-full gap-6 grid justify-items-center pt-24 pb-20">
        
      <div className="">
          <h1 className="bg-transparent text-customblack text-5xl font-staat text-center cursor-default">
            {/* {cart === null ? "Empty Cart" : "Your Shopping Cart"} */}
          </h1>
        </div>

        <div className="w-4/5 h-36 border-2 border-customblue">1</div>
        <div className="w-4/5 h-36 border-2 border-customblue">2</div>
        <div className="w-4/5 h-36 border-2 border-customblue">3</div>
        <div className="w-4/5 h-36 border-2 border-customblue">4</div>
      </div>
    </div>
  );
};

export default Cart;
