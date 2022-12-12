import styles from './third.module.css';

/* eslint-disable-next-line */
export interface ThirdProps {}

export function Third(props: ThirdProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Third!</h1>
    </div>
  );
}

export default Third;
