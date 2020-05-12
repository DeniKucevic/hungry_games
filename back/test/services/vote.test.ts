import app from '../../src/app';

describe('\'vote\' service', () => {
  it('registered the service', () => {
    const service = app.service('vote');
    expect(service).toBeTruthy();
  });
});
