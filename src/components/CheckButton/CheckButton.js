import React, { useState } from 'react'
import styles from './styles.scss'


export default function CheckButton(props) {




    return (
        <button onClick={props.Click} className="checkButton">
            <div className={props.index === props.clickedIndex ? "filledBox" : "emptyBox"}></div>
            {props.value}
        </button>
    );
}