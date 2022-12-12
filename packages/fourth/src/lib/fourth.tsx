import styles from './fourth.module.css';

/* eslint-disable-next-line */
export interface FourthProps {}

export function Fourth(props: FourthProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Fourth!</h1>
    </div>
  );
}

export default Fourth;
