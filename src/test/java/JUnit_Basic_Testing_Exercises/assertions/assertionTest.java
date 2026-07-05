package JUnit_Basic_Testing_Exercises.assertions;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class assertionTest {

    @Test
    void testAssertions() {

        assertEquals(5, 2 + 3);

        assertTrue(10 > 5);

        assertFalse(10 < 5);

        assertNull(null);

        assertNotNull(new Object());
    }
}