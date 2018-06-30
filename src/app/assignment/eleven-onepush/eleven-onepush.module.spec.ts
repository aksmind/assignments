import { ElevenOnepushModule } from './eleven-onepush.module';

describe('ElevenOnepushModule', () => {
  let elevenOnepushModule: ElevenOnepushModule;

  beforeEach(() => {
    elevenOnepushModule = new ElevenOnepushModule();
  });

  it('should create an instance', () => {
    expect(elevenOnepushModule).toBeTruthy();
  });
});
