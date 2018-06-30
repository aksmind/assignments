import { FourRazorpayModule } from './four-razorpay.module';

describe('FourRazorpayModule', () => {
  let fourRazorpayModule: FourRazorpayModule;

  beforeEach(() => {
    fourRazorpayModule = new FourRazorpayModule();
  });

  it('should create an instance', () => {
    expect(fourRazorpayModule).toBeTruthy();
  });
});
