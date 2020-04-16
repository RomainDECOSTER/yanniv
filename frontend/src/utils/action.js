import { appStore } from '../store';
const action = (type, data) => appStore.dispatch({ type, data });

export { action };
