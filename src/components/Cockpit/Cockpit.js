import React, {useEffect, useRef, useContext} from 'react';

import classes from './cockpit.css'
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

   useEffect(() => {
        console.log('Cockpit.js [useEffect]')
        /*setTimeout(() => {
            alert('Saved data to cloud');
        }, [1000]); */
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []); 

 useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
 });

    const Assignedclasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if (props.persons.length <= 2) {
    
      Assignedclasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      Assignedclasses.push(classes.bold);
    }

    return (
        <div>
          <h1>{props.title}</h1>
          <p className={Assignedclasses.join(' ')}>This is really working!</p>
          <button ref={toggleBtnRef}
          onClick={props.clicked} >Toggle Persons</button>
        
          <button onClick={props.login}>Log in</button> 
          
          </div>
    )
};

export default React.memo(cockpit);