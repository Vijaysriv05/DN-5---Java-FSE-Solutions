package JUnit_Basic_Testing_Exercises.setup;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class SetupJUnitTest {

    @Test
    void testAdd() {

        SetupJUnit obj = new SetupJUnit();

        assertEquals(5, obj.add(2, 3));
    }
}