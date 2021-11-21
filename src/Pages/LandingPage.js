import React from 'react';
import{Button, ButtonGroup} from '@material-ui/core'




function LandingPage() {
    return (
        <div className="LandingPage">
            <header className="LandingText">
                <h1 className="landing-text">
                    <h3>Delicious</h3>
                    <h3>Authentic</h3>
                    <h3>Italian food</h3>
                </h1>

                <ButtonGroup>
                    <Button color="primary">Order</Button>
                    <Button color="primary">Order</Button>
                </ButtonGroup>

            </header>




        </div>
    )
};

export default LandingPage;
