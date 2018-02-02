let mockAuthorizeUser = (email, password) => email === 'e' && password === 'p';
let mockAddListener = () => {};
let mockRemoveListener = () => {};

export const setMockAuthorizeUser = fn => {
  mockAuthorizeUser = fn;
};

export const authorizeUser = (email, password) => mockAuthorizeUser(email, password);
export const addListener = mockAddListener;
export const removeListener = mockRemoveListener;
export const isAuthorized = false;
