package mockito;

import mockito.MockingandStubbing.ExternalApi;
import mockito.MockingandStubbing.MyService;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    void testMockingAndStubbing() {

        ExternalApi mockApi =
                Mockito.mock(ExternalApi.class);

        Mockito.when(mockApi.getData())
                .thenReturn("Mock Data");

        MyService service =
                new MyService(mockApi);

        String result =
                service.fetchData();

        Assertions.assertEquals(
                "Mock Data",
                result
        );
    }

    @Test
    void testVerifyInteraction() {

        ExternalApi mockApi =
                Mockito.mock(ExternalApi.class);

        MyService service =
                new MyService(mockApi);

        service.fetchData();

        Mockito.verify(mockApi)
                .getData();
    }
}