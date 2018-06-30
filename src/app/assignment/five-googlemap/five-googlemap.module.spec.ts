import { FiveGooglemapModule } from './five-googlemap.module';

describe('FiveGooglemapModule', () => {
  let fiveGooglemapModule: FiveGooglemapModule;

  beforeEach(() => {
    fiveGooglemapModule = new FiveGooglemapModule();
  });

  it('should create an instance', () => {
    expect(fiveGooglemapModule).toBeTruthy();
  });
});
