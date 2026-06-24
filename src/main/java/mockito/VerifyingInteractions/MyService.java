package mockito.VerifyingInteractions;

import mockito.MockingandStubbing.ExternalApi;

public class MyService {

    private mockito.MockingandStubbing.ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}
