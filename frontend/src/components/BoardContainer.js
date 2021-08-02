import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Row from 'react-bootstrap/Row';

import Board from './Board'

function BoardContainer({ newBoards, newBoardIds, deletedBoards, setDeletedBoards }) {

    const boardList = useSelector(state => state.boardList)
    const { loading: listLoading, boards, error: listError } = boardList

    const [boardsFromDB, setBoardsFromDB] = useState([])

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
        if (boards) {
            setBoardsFromDB(boards.map((board) => board))
        }
    }, [boards])

    const uniqueNewBoards = getUnique(newBoards, 'id')

    const toDelete = new Set([...deletedBoards]);
    const completeNewBoards = uniqueNewBoards.filter(obj => !toDelete.has(obj.id));
    const completeBoardsFromDB = boardsFromDB.filter(obj => !toDelete.has(obj.id));

    return (
        <Row className='board-container'>
            { (completeNewBoards && completeNewBoards.length !== 0) && completeNewBoards.map((board) => (
                <Board key={ board.id } board={ board } />
            ))}
            { (completeBoardsFromDB && completeBoardsFromDB.length !== 0) && completeBoardsFromDB.map((board) => (
                ((newBoardIds && !newBoardIds.includes(board.id)) &&
                <Board key={ board.id } board={ board } />
                )
            ))}

            { ((((completeNewBoards && completeNewBoards.length === 0) && (completeBoardsFromDB && completeBoardsFromDB.length === 0))) && (!listLoading)) && 
                <div className='no-board-container'>
                    <p className='grey-text lg-text'>you don't have any boards!</p>
                </div>
            }
        </Row>
    )
}

export default BoardContainer