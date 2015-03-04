// store (contains the products)
function store() {
  this.products = [
  new product("0", "Almond Toe Court Shoes", "Patent Black", "Women's Footwear", 99.00, 5),
  new product("1", "Suede Shoes", "Blue", "Women's Footwear", 42.00, 4),
  new product("2", "Leather Driver Saddle Loafers", "Tan", "Men's Footwear", 34.00, 12),
  new product("3", "Flip Flops", "Red", "Men's Footwear", 19.00, 6),
  new product["4", "Flip Flops", "Blue", "Men's Footwear", 19.00, 0],
  new product["5", "Gold Button Cardigan", "Black", "Women's Casualwear", 167.00, 6],
  new product["6", "Cotton Shorts", "Medium Red", "Women's Casualwear", 30.00, 5],
  new product["7", "Fine Stripe Short Sleeve Shirt", "Grey", "Men's Casualwear", 49.99, 9],
  new product["8", "Fine Stripe Short Sleeve Shirt", "Green", "Men's Casualwear", 49.99, 3],
  new product["9", "Sharkskin Waistcoat", "Charcoal", "Men's Formalwear", 75.00, 2],
  new product["10", "Lightweight Patch Pocket Blazer", "Deer", "Men's Formalwear", 175.00, 1],
  new product["11", "Bird Print Dress", "Black", "Women's Formalwear", 270.00, 10],
  new product["12", "Mid Twist Cut-Out Dress", "Pink", "Women's Formalwear", 540.00, 5]
  ];
  this.dvaCaption = ["Negligible", "Low", "Average", "Good", "Great" ];
  this.dvaRange = ["below 5%", "between 5 and 10%",… "above 40%"];
}
store.prototype.getProduct = function (id) {
  for (var i = 0; i < this.products.length; i++) {
    if (this.products[i].id == id)
      return this.products[i];
    }
    return null;
  }
