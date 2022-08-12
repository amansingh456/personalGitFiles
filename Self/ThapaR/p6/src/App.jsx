import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const App = () => {
    const [state, setState] = useState(0);



    const incNum = () => {
        setState(state + 1)
    }

    const decNum = () => {
        if (state > 0) {
            setState(state - 1)
        }
        else {
            alert('sorry ! , zero limit  reacherd..')
            setState(0)
        }
    }


    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>{state}</h1>
                    <div className="btn_div">
                    <Tooltip title="Increm">
                        <Button onClick={incNum} className="btn_green">
                            <AddIcon fontSize="large"/>
                        </Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                        <Button onClick={decNum} className="btn_red">
                            <DeleteIcon />
                        </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    )
};

export default App;