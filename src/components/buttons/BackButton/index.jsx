
import React from "react";
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
    const history = useHistory();

    return (
        <Button color="white" onClick={() => history.goBack()}>
            
        </Button>
    );
}

export default BackButton;