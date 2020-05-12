import app from '../../src/app';

describe('\'meal\' service', () => {
  it('registered the service', () => {
    const service = app.service('meal');
    expect(service).toBeTruthy();
  });
});
