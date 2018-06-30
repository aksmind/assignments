import { NineYoutubeModule } from './nine-youtube.module';

describe('NineYoutubeModule', () => {
  let nineYoutubeModule: NineYoutubeModule;

  beforeEach(() => {
    nineYoutubeModule = new NineYoutubeModule();
  });

  it('should create an instance', () => {
    expect(nineYoutubeModule).toBeTruthy();
  });
});
