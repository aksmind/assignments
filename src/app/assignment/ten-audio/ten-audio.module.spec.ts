import { TenAudioModule } from './ten-audio.module';

describe('TenAudioModule', () => {
  let tenAudioModule: TenAudioModule;

  beforeEach(() => {
    tenAudioModule = new TenAudioModule();
  });

  it('should create an instance', () => {
    expect(tenAudioModule).toBeTruthy();
  });
});
