import { EightCountryModule } from './eight-country.module';

describe('EightCountryModule', () => {
  let eightCountryModule: EightCountryModule;

  beforeEach(() => {
    eightCountryModule = new EightCountryModule();
  });

  it('should create an instance', () => {
    expect(eightCountryModule).toBeTruthy();
  });
});
