import app from '../../src/app';

describe('\'orderItem\' service', () => {
  it('registered the service', () => {
    const service = app.service('order-item');
    expect(service).toBeTruthy();
  });
});
