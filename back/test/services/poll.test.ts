import app from '../../src/app';

describe('\'poll\' service', () => {
  it('registered the service', () => {
    const service = app.service('poll');
    expect(service).toBeTruthy();
  });
});
