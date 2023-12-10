import React from 'react'
import styles from './Filter.module.css'
import { Link }
        from "react-router-dom";
import cake from '../assets/Svgs/cake.svg';
import chartBar from '../assets/Svgs/chart-bar.svg';
import identification from '../assets/Svgs/identification.svg';
import check from '../assets/Svgs/check.svg';
import Checkbox from '../components/Checkbox/Checkbox';
import RadioButton from '../components/RadioButton/RadioButton';
import MultiRangeSlider from '../components/Slider/MultiRangeSlider';
import Background from '../components/Background/Background';
import chevronLeft from '../assets/Svgs/chevron-left.svg'

function Filter({filter, onFilterSubmit}) {

    let minAge;
    let maxAge;


    const onSubmit = (event) => {
        onFilterSubmit(gender, minAge, maxAge, size, checkedCB);
        event.preventDefault();        
    }

    //Beginner Owner Checkbox
    const [checkedCB, setCheckedCB] = React.useState(filter.noviceOwner);

    const handleChangeCB = () => {
      setCheckedCB(!checkedCB);
    };

    //Gender RadioButton
    const [gender, setGender] = React.useState(filter.gender);

    const handleMaleChange = () => {
      setGender('male');
    };
  
    const handleFemaleChange = () => {
      setGender('female');
    };

    const handleBothChange = () => {
        setGender('both');
      };

    //Size RadioButton
    const [size, setSize] = React.useState(filter.size);

    const handleSmallChange = () => {
      setSize('small');
    };
  
    const handleMediumChange = () => {
        setSize('medium');
    };

    const handleLargeChange = () => {
        setSize('Large');
      };

    const handleAllChange = () => {
        setSize('all');
      };

  return (
    <>   
        <Link to={`/`}>
            <img src={chevronLeft} alt="" className={styles.backButton} />
        </Link>
        <div className={styles.page}>
            <Background style={"details"}/>

            <h1 className ={styles.title}>
                Filter
            </h1>

            <form onSubmit={onSubmit}>

                <label className={styles.flexContainer}>
                    <img src={identification} alt="" className={styles.icon} />
                    <p>Gender:</p>
                    <RadioButton
                        label="Both"
                        value={gender === 'both'}
                        onChange={handleBothChange}
                    />
                    <RadioButton
                        label="Male"
                        value={gender === 'male'}
                        onChange={handleMaleChange}
                    />
                    <RadioButton
                        label="Female"
                        value={gender === 'female'}
                        onChange={handleFemaleChange}
                    />
                </label>

                <label className={styles.flexContainer}>
                    <img src={cake} alt="" className={styles.icon} />
                    <p>Age:</p>
                    <MultiRangeSlider
                        min={0}
                        max={20}
                        initMin={filter.ageMin}
                        initMax={filter.ageMax}
                        onChange={({min, max}) => {
                            minAge = min;
                            maxAge =max;
                        }}
                    />
                </label>

                <hr className={styles.spacer} />
                <label className={styles.flexContainer}>
                    <img src={chartBar} alt="" className={styles.icon} />
                    <p>Size:</p>
                    <RadioButton
                        label="All"
                        value={size === 'all'}
                        onChange={handleAllChange}
                    />
                    <RadioButton
                        label="Small"
                        value={size === 'small'}
                        onChange={handleSmallChange}
                    />
                    <RadioButton
                        label="Medium"
                        value={size === 'medium'}
                        onChange={handleMediumChange}
                    />    
                    <RadioButton
                        label="Large"
                        value={size === 'large'}
                        onChange={handleLargeChange}
                    />   
                </label>


                <label className={styles.flexContainer}>
                    <img src={check} alt="" className={styles.icon} /> 
                    <Checkbox
                        label="Only for beginner owners"
                        value={checkedCB}
                        onChange={handleChangeCB}
                    />
                </label>

                <button type="submit" className={styles.filterButton}>Filter</button>
            </form>
        </div>
    </>
  )
}

export default Filter