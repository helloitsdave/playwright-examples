import { test, expect } from '@playwright/test';
import REPOSITORY_QUERY from '../../fixtures/queries/repository';

const baseURL = 'https://api.github.com/graphql';
const { PW_GIT_AUTH } = process.env;

/*  Note:  In order to authenticate requests, 
please generate a new personal auth token 
from https://github.com/settings/tokens with the following scopes:

repo
  repo:status
  repo_deployment
  public_repo
admin:org
  read:org
user[all]

Export this token as an environment variable called PW_GIT_AUTH
*/

test.describe('Github GraphQL API', () => {
  test('Should return authentication error without Token', async ({
    request,
  }) => {
    // Call the GraphQL API
    const response = await request.post(baseURL, {
      data: {
        query: REPOSITORY_QUERY,
        variables: { name: 'playwright-examples', owner: 'helloitsdave' },
      },
    });

    // Expect the response to be 200 and not contain any errors
    expect(response.status()).toBe(401);

    // Store the response JSON
    const json = await response.json();

    expect(json.message).toBe(
      'This endpoint requires you to be authenticated.'
    );
  });
  test('Return repository details', async ({ request }) => {
    // Call the GraphQL API
    const response = await request.post(baseURL, {
      data: {
        query: REPOSITORY_QUERY,
        variables: { name: 'playwright-examples', owner: 'helloitsdave' },
      },
      headers: {
        Authorization: `Bearer ${PW_GIT_AUTH}`,
      },
    });

    // Expect the response to be 200 and not contain any errors
    expect(response.status()).toBe(200);
    expect(await response.json()).not.toHaveProperty('errors');

    // Assert the description, name and createdAt
    const json = await response.json();

    expect(json.data.repository.description).toBe(
      'Example of Playwright.io Framework'
    );
    expect(json.data.repository.name).toBe('playwright-examples');
    expect(json.data.repository.createdAt).toBe('2022-08-12T22:57:37Z');
  });
});
