
package Algorithms_DataStructures.ecommerce;

public class LinearSearch {

    public static Product search(
            Product[] products,
            String target) {

        for (Product product : products) {

            if (product.getProductName()
                    .equalsIgnoreCase(target)) {

                return product;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {

                new Product(101,
                        "Laptop",
                        "Electronics"),

                new Product(102,
                        "Mobile",
                        "Electronics"),

                new Product(103,
                        "Tablet",
                        "Electronics"),

                new Product(104,
                        "Smart Watch",
                        "Accessories"),

                new Product(105,
                        "Headphones",
                        "Accessories")
        };

        String target = "Tablet";

        Product result =
                search(products, target);

        if (result != null) {

            System.out.println(
                    "Product Found");

            System.out.println(result);

        } else {

            System.out.println(
                    "Product Not Found");
        }
    }
}