package slf4j;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger =
            LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {

        logger.warn("This is a warning message");

        try {

            int result = 10 / 0;

        } catch (Exception e) {

            logger.error("Error occurred : {}", e.getMessage());
        }
    }
}
