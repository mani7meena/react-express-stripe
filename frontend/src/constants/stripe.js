const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_1VDNfQs5omRkL7ZP45DNL2T0';

export default STRIPE_PUBLISHABLE;
