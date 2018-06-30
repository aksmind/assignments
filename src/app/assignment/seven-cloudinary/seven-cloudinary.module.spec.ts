import { SevenCloudinaryModule } from './seven-cloudinary.module';

describe('SevenCloudinaryModule', () => {
  let sevenCloudinaryModule: SevenCloudinaryModule;

  beforeEach(() => {
    sevenCloudinaryModule = new SevenCloudinaryModule();
  });

  it('should create an instance', () => {
    expect(sevenCloudinaryModule).toBeTruthy();
  });
});
