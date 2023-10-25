import { Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import { updateProduct,removeProductFromCart, } from "../../Reducers/CartItemsReducer";

const useStyles = makeStyles({
  main: {
    height: "35vh",
    boxShadow: "none",
    display: "flex",
  },
  image: {
    width: "20%",
    marginRight: "2rem",
  },
  title: {
    fontSize: "1.2rem",
    width: "90%",
  },
  deleteLink: {
    fontSize: "0.9rem",
    color: "#007185",
    textDecoration: "none",
    "&:hover": {
      color: "#C7511F",
      textDecoration: "underline",
    },
  },
  giftOptions: {
    fontSize: "0.9rem",
    color: "#565959",
    marginRight: "0.2rem",
  },
  giftDiv: {
    display: "flex",
    alignItems: "center",
  },
  stock: {
    fontSize: "0.9rem",
    color: "#00855A",
    marginTop: "0.5rem",
  },
  removeButton: {
    fontSize: "1rem",
    marginTop: "1.6rem",
    cursor: "pointer",
    "&:hover": {
      color: "#007185",
    },
  },
  select: {
    width: "3rem",
    marginLeft: "1rem",
    height: "2rem",
    outline: "none",
    // textAlign: "center",
    paddingLeft: "0.5rem",
    cursor: "pointer",
  },
  quantityDiv: {
    display: "flex",
    alignItems: "center",
    marginTop: "0.5rem",
  },
  quantity: {
    fontWeight: "bold",
  },
});
function CartProduct(props) {
  const { details } = props;
  console.log(details.id)
  const classes = useStyles();
  const { product, loading, error } = useProduct(details.id);
  const dispatch = useDispatch();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const calcPrice = (val) => {
    return Math.floor(val);
  };
  const deleteFromCart = () => {
    dispatch(removeProductFromCart({id:details.id,quantity: details.quantity}));
  };
  return (
    <Card className={classes.main}>
      <img src={details.image} alt="" className={classes.image} />
      <div style={{ width: "75%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography className={classes.title}>{product.title}</Typography>
          <Typography>₹ {calcPrice(details.price).toLocaleString()}</Typography>
        </div>
        <Typography className={classes.stock}>In stock</Typography>
        <div className={classes.giftDiv}>
          <Typography className={classes.giftOptions}>
            Gift options not available.
          </Typography>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?pop-up=1&nodeId=200898020"
            className={classes.link}
            target="blank"
          >
            Learn more
          </a>
        </div>
        <div className={classes.quantityDiv}>
          <Typography className={classes.quantity}>Quantity: </Typography>
          <select
            className={classes.select}
            onChange={(e) => {
              // setItemQuantity(e.target.value);
              dispatch(updateProduct({id:product.id,quantity:e.target.value}));
            }}
            value={details.quantity}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
        <label
          className={`${classes.deleteLink} ${classes.removeButton}`}
          onClick={deleteFromCart}
        >
          Delete item from Cart
        </label>
      </div>
    </Card>
  );
}

export default CartProduct;
