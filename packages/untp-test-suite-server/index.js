import express from 'express';
import { testCredentialHandler } from '../untp-test-suite/build/interfaces/lib/testSuiteHandler.js';

const app = express()

app.use(express.json())

const port = process.env.UNTP_TEST_SUITE_SERVER_PORT || 3000

app.post('/', async (req, res) => {
    const { credentialSchema, credential } = req.body ?? {};
    res.json(await testCredentialHandler(credentialSchema, credential))
})

app.listen(port, () => {
    console.log(`untp-test-suite listening on port ${port}`)
})