package Algorithms_DataStructures.ecommerce;

public class BinarySearch {

    public static Product search(
            Product[] products,
            String target) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int result =
                    products[mid]
                            .getProductName()
                            .compareToIgnoreCase(target);

            if (result == 0) {

                return products[mid];

            } else if (result < 0) {

                low = mid + 1;

            } else {

                high = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {

                new Product(105,
                        "Headphones",
                        "Accessories"),

                new Product(101,
                        "Laptop",
                        "Electronics"),

                new Product(102,
                        "Mobile",
                        "Electronics"),

                new Product(104,
                        "Smart Watch",
                        "Accessories"),

                new Product(103,
                        "Tablet",
                        "Electronics")
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
