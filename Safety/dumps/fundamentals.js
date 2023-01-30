class foodDetails {
    constructor(foodname, category, isJunkFood, calories, ItemImageUrl) {
        this.foodname = foodname;
        this.category = category;
        this.isJunkFood = isJunkFood;
        this.calories = calories;
        this.ItemImageUrl = ItemImageUrl;
    }
}
const arrOfItems = [];
arrOfItems.push(
    new foodDetails(
        "Dosa",
        "South INDian",
        false,
        200,
        "https://www.shutterstock.com/image-photo/homemade-dosa-dhosa-masala-plain-260nw-1597787986.jpg"
    )
);
arrOfItems.push(
    new foodDetails(
        "Idli",
        "South Indian",
        false,
        100,
        "https://www.shutterstock.com/image-photo/homemade-idli-dhosa-masala-plain-260nw-1597787986.jpg"
    )
);
arrOfItems.push(
    new foodDetails(
        "Pizza",
        "Junk",
        true,
        500,
        "https://www.shutterstock.com/image-photo/homemade-pizza-dhosa-masala-plain-260nw-1597787986.jpg"
    )
);
arrOfItems.push(
    new foodDetails(
        "Burger",
        "Junk",
        true,
        400,
        "https://www.shutterstock.com/image-photo/homemade-burger-dhosa-masala-plain-260nw-1597787986.jpg"
    )
);
arrOfItems.push(
    new foodDetails(
        "Biryani",
        "Indian",
        false,
        300,
        "https://www.shutterstock.com/image-photo/homemade-biryani-dhosa-masala-plain-260nw-1597787986.jpg"
    )
);
// With Category of South Indian.
const southIndian = arrOfItems.filter(
    (item) => item.category.toLowerCase() === "south indian"
);
console.log(southIndian);

//With calories less than 300.
const lessThan300 = arrOfItems.filter((item) => item.calories < 300);
console.log(lessThan300);

const JunkFood = arrOfItems.filter((item) => item.isJunkFood === true);
console.log(JunkFood);