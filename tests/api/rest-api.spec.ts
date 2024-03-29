import { test, expect } from '@playwright/test';

const baseURL = 'https://petstore.swagger.io/v2/pet';

test.describe('Petstore Rest API', () => {
  test('Find Pets by status', async ({ request }) => {
    // Call the API
    const response = await request.get(
      `${baseURL}/findByStatus?status=available`
    );
    // Expect the response to be 200
    expect(response.status()).toBe(200);
    // Store the response JSON
    const json = await response.json();
    expect(json.length).toBeGreaterThan(0);

    await test.step('Verify the response has the expected properties', () => {
      const properties = ['id', 'name', 'status', 'tags'];

      properties.forEach((property) => {
        expect(json[0]).toHaveProperty(property);
      });
    });
  });

  test('Create a new pet', async ({ request }) => {
    // Input Data
    const data = {
      id: 123,
      category: {
        id: 123,
        name: 'Cat',
      },
      name: 'Jinx',
      photoUrls: ['string'],
      tags: [
        {
          id: 123,
          name: 'what tag?',
        },
      ],
      status: 'available',
    };

    // Call the API to Create a new pet with the data
    const response = await request.post(baseURL, {
      data,
    });
    expect(response.status()).toBe(200);

    // Store the response JSON
    const json = await response.json();
    // Expect the response to match the input
    expect(json).toEqual(data);
  });
});
