import React from 'react'
import { Link as LinkImport } from "react-router-dom";
import PropTypes from 'prop-types'
import validator from 'validator';

type PropsFlowType = {
    to:string | Object,
}
const Links = ({
    to,
    ...otherProps
}:PropsFlowType):React.Node =>(
    validator.isURL(to)?(<a
    href={to}
    {...otherProps}
    />):(<LinkImport
        to={to}
        {...otherProps}
        />)
);

export default Links
