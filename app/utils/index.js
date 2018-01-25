export { NavigationActions } from 'react-navigation';

export { default as Storage } from './storage';
export { default as screenTracking } from './routerListener';

export const delay = time => new Promise(resolve => setTimeout(resolve, time));

export const createAction = type => payload => ({ type, payload });
