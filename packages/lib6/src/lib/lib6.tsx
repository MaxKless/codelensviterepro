import styles from './lib6.module.css';

/* eslint-disable-next-line */
export interface Lib6Props {}

export function Lib6(props: Lib6Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Lib6!</h1>
    </div>
  );
}

export default Lib6;
