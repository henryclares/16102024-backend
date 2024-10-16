export const Rols = {
  DESIGNER: 'designer',
  FRONT: 'frontend',
  BACK: 'backend',
} as const;

export type Rol = (typeof Rols)[keyof typeof Rols];
