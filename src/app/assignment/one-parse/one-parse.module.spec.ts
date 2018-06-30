import { OneParseModule } from './one-parse.module';

describe('OneParseModule', () => {
  let oneParseModule: OneParseModule;

  beforeEach(() => {
    oneParseModule = new OneParseModule();
  });

  it('should create an instance', () => {
    expect(oneParseModule).toBeTruthy();
  });
});
