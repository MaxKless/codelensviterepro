import styles from './second.module.css';

/* eslint-disable-next-line */
export interface SecondProps {}

export function Second(props: SecondProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Second!</h1>
    </div>
  );
}

export default Second;
