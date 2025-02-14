# untp-test-suite-server

Instead of using the approach described in the [untp-test-suite-library](../untp-test-suite/README.md#untp-test-suite-library) section, this exposes the untp test suite code through an endpoint.

## Build the image

```bash
docker build -t untp-test-suite -f Dockerfile.untp-test-suite .
```

## Run the container

```bash
docker run -d -p 3005:3005 --name untp-test-suite -e UNTP_TEST_SUITE_SERVER_PORT=3005 untp-test-suite
```