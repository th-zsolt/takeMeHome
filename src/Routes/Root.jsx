import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from '../components/Title/Title';
import Background from '../components/Background/Background';
import Grid from '../components/Grid/Grid';
import styles from './Root.module.css'
import FilterButton from '../components/FilterButton/FilterButton';


function Root({dogs}) {

  return (
    <div className={styles.App}>
      <FilterButton/>
      <Title />
      <Background style={"main"}/>
      <Grid list={dogs} />

    </div>
  )
}

export default Root