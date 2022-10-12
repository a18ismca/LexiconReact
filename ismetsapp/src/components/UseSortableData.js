import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from './NavigationBar';
import {Link} from "react-router-dom";
import React, {useState} from 'react';
import axios from 'axios';

export const UseSortableData = (props) => {
    const { people } = props;

    const [sortedField, setSortedField] = useState(null);

    let sortedPeople = [...people];

    if(sortedField !== null){
        sortedPeople.sort((a, b) => {
            if(a[sortedField] < b[sortedField]) {
                return -1;
            }
            if(a[sortedField > b[sortedField]]) {
                return 1;
            }
            return 0
        });
    }

    
}