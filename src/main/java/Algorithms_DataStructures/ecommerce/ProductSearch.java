package Algorithms_DataStructures.ecommerce;

public class ProductSearch {

    public static int linearSearch(String[] products, String target) {

        for (int i = 0; i < products.length; i++) {
            if (products[i].equalsIgnoreCase(target)) {
                return i;
            }
        }

        return -1;
    }

    public static void main(String[] args) {

        String[] products = {
                "Laptop",
                "Mobile",
                "Tablet",
                "Smart Watch",
                "Headphones"
        };

        String target = "Tablet";

        int result = linearSearch(products, target);

        if (result != -1) {
            System.out.println("Product Found at Index: " + result);
        } else {
            System.out.println("Product Not Found");
        }
    }
}
