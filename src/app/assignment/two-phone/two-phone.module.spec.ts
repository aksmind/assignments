import { TwoPhoneModule } from './two-phone.module';

describe('TwoPhoneModule', () => {
  let twoPhoneModule: TwoPhoneModule;

  beforeEach(() => {
    twoPhoneModule = new TwoPhoneModule();
  });

  it('should create an instance', () => {
    expect(twoPhoneModule).toBeTruthy();
  });
});
