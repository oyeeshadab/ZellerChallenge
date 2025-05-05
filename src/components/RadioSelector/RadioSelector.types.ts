export type Role = 'ADMIN' | 'MANAGER';
export type Props = {
  selected: Role;
  onSelect: (role: Role) => void;
};