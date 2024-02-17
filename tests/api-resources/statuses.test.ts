// File generated from our OpenAPI spec by Stainless.

import MeorphisTest6 from 'meorphis-test-6';
import { Response } from 'node-fetch';

const meorphisTest6 = new MeorphisTest6({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource statuses', () => {
  test('getStatus', async () => {
    const responsePromise = meorphisTest6.statuses.getStatus();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getStatus: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(meorphisTest6.statuses.getStatus({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      MeorphisTest6.NotFoundError,
    );
  });
});
