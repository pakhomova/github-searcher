export const PICK_USER = 'PICK_USER';

export const pickUser = value => ({
  type: PICK_USER,
  payload: { value }
});
