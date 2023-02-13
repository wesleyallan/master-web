import { Api } from '../../services/api';
import type { Customer } from './types';

export const getCustomers = async () => {
  const response = await Api.get('cliente');

  return response.data as Customer[];
};
