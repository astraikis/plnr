import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Week from './Week'

import Row from 'react-bootstrap/Row';

function WeekContainer({ openEdit, setOpenEdit, newWeeks, newWeeksIds, deletedWeeks, setDeletedWeeks }) {

    const weekList = useSelector(state => state.weekList)
    const { loading, weeks, error } = weekList

    const [weeksFromDB, setWeeksFromDB] = useState([])

    function getUnique(arr, index) {
        const unique = arr
            .map(e => e[index])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(e => arr[e]).map(e => arr[e]);      
      
         return unique;
    }

    function removeDeletedBoards(arr, deletedBoards) {
        for (var i = 0; i < arr.length; i++) {
            var obj = arr[i];
        
            if (deletedBoards.indexOf(obj.id) !== -1) {
                arr.splice(i, 1);
                i--;
            }
        }
    }

    useEffect(() => {
        if (weeks) {
            setWeeksFromDB(weeks.map((week) => week))
        }
    }, [weeks])

    const uniqueNewWeeks = getUnique(newWeeks, 'id')

    const toDelete = new Set([...deletedWeeks]);
    const completeNewWeeks = uniqueNewWeeks.filter(obj => !toDelete.has(obj.id));
    const completeWeeksFromDB = weeksFromDB.filter(obj => !toDelete.has(obj.id));


    return (
        <div>
            <Row className='board-container week-container'>
                
                
                { (completeNewWeeks && completeNewWeeks.length !== 0) && completeNewWeeks.map((week) => (
                    <Week key={ week.id } week={ week } openEdit={ openEdit } setOpenEdit={ setOpenEdit } />
                ))}
                { (completeWeeksFromDB && completeWeeksFromDB.length !== 0) && completeWeeksFromDB.map((week) => (
                    ((newWeeksIds && !newWeeksIds.includes(week.id)) &&
                    <Week key={ week.id } week={ week } openEdit={ openEdit } setOpenEdit={ setOpenEdit } />
                    )
                ))}

                { ((((completeNewWeeks && completeNewWeeks.length === 0) && (completeWeeksFromDB && completeWeeksFromDB.length === 0))) && (!loading)) && 
                    <div className='no-board-container'>
                        <p className='grey-text lg-text'>you don't have any weeks!</p>
                    </div>
                }



            </Row>
        </div>
    )
}

export default WeekContainer