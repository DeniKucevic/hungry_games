import app from '../../src/app';

describe('\'ping\' service', () => {
  it('registered the service', () => {
    const service = app.service('ping');
    expect(service).toBeTruthy();
  });
});
