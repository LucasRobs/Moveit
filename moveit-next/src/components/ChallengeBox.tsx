import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';
export function ChallengeBox() {

  const {activeChallenge,resetChallenge, completeChallenge} = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);
  function hendleChallengeSucceeded(){
    completeChallenge();
    resetCountdown();
  }

  function hendeChallengeFailed(){
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="up"/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button type="button" className={styles.challengeFailedButton} onClick={hendeChallengeFailed}>Falhei</button>
            <button type="button" className={styles.challengeSucceededButton} onClick={hendleChallengeSucceeded}>Completei</button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeBoxNotActive}>
          <strong>
            Finalize um ciclo para receber um desafio
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level" />
            Complete os os desafios para avança de level
          </p>
        </div>
      )}
    </div >
  )
}