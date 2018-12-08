import * as React from 'react';

export default ({ children } : { children : string }) => (
    <div className="p-2">
        <a href="#" className="btn btn-primary">
            {children}
        </a>
    </div>
);
