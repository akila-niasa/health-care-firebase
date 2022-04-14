import React from 'react';
import { Button } from 'react-bootstrap';

const SocialLogin = () => {
    return (
        <div>
            <div className="mb-2">
            <Button variant="primary" size="lg">
                Google Login
            </Button>
        </div>
            <div className="mb-2">
            <Button variant="primary" size="lg">
                Facebook Login
            </Button>
        </div>
            <div className="mb-2">
            <Button variant="primary" size="lg">
                Github Login
            </Button>
        </div>
        </div>
    );
};

export default SocialLogin;