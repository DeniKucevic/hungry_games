import app from '../../src/app';

describe('\'restaurant\' service', () => {
  it('registered the service', () => {
    const service = app.service('restaurant');
    expect(service).toBeTruthy();
  });
});
