import { login, logout } from './auth';
import authReducer from './auth';

test('should set uid for login', () => {
    const action = { type: 'LOGIN', uid: 'abc123' };
    const state = authReducer({}, action);
    expect(state.uid).toEqual('abc123');
});

test('should clear uid for logout', () => {
    const action = { type: 'LOGOUT' };
    const state = authReducer({ uid: '123abc' }, action);
    expect(state).toEqual({});
});
