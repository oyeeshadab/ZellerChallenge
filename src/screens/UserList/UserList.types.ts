export type ZellerCustomer = {
    id: string;
    name: string;
    email: string;
    role: 'ADMIN' | 'MANAGER';
};
export interface ErrorComponentProps {
  error?: Error | null;
}