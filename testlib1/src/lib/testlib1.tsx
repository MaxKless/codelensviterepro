import styles from './testlib1.module.css';

/* eslint-disable-next-line */
export interface Testlib1Props {}

export function Testlib1(props: Testlib1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Testlib1!</h1>
    </div>
  );
}

export default Testlib1;
