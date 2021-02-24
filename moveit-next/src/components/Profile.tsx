import styles from '../styles/components/Profile.module.css';
export function Profile(){
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/LucasRobs.png" alt="LucasRobs"/>
      <div>
        <strong>Lucas Robs</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1000</p>
      </div>
    </div>
    )
}