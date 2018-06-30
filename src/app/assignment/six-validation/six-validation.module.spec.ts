import { SixValidationModule } from './six-validation.module';

describe('SixValidationModule', () => {
  let sixValidationModule: SixValidationModule;

  beforeEach(() => {
    sixValidationModule = new SixValidationModule();
  });

  it('should create an instance', () => {
    expect(sixValidationModule).toBeTruthy();
  });
});
