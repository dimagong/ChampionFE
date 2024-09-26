// jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')
// jest.mock('@stripe/stripe-react-native')

jest.mock('@stripe/stripe-react-native', () => 'PaymentComponent')
