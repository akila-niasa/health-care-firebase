import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="md"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
        </div>
    );
};

export default Loading;