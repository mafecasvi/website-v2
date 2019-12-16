import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Colors} from '../../components/Styling'

export const Container = styled.div`
    width: 100%;
    height: ${props => props.height};
    vertical-align: baseline;
    margin-left: ${props => props.marginLeft};
    background: ${props => props.color === "blue"
        ?
        `${Colors.blue}`
        : props.color === "grey"
            ? `${Colors.lightGray}`
            : `${Colors.white}`
    };
    border-radius: ${props => props.borderTopLeft} 0px 0px ${props => props.borderBottomLeft};
`;
Container.propTypes = {
    color: PropTypes.string,
    height: PropTypes.string,
    marginLeft: PropTypes.string,
    borderTopLeft: PropTypes.string,
    borderBottomLeft: PropTypes.string,
}
Container.defaultProps = {
    marginLeft: '100px',
    borderBottomLeft: '1.25rem',
    height: '400px'
};
export const Section = props => {
    const Height = styled.div`
        height: ${props.height}
    `;
    return (
        <Height></Height>
    )
};
Section.propTypes = {
    height: PropTypes.string
};
