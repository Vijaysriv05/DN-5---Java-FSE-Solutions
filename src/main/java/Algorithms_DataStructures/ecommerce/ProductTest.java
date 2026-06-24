package Algorithms_DataStructures.ecommerce;

public class ProductTest {

    public static void main(String[] args) {

        Product p1 = new Product(
                101,
                "Laptop",
                "Electronics"
        );

        Product p2 = new Product(
                102,
                "Mobile",
                "Electronics"
        );

        System.out.println("Product 1 Details");
        System.out.println(p1);

        System.out.println();

        System.out.println("Product 2 Details");
        System.out.println(p2);
    }
}
