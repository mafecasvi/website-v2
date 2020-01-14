import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby';
import {RoundImage} from '../Styling';
import {Row, Column} from '../Sections'
import {Card} from '../Card'

export default () => {
    const data = useStaticQuery(graphql`
        query myStaffQuery{
            staff: allStaffYaml {
                edges {
                  node {
                    name
                    last_name
                    image
                  }
                }
              }
            }
        `)

    return (
        <>
            <Row>
                {data.staff.edges.map((item, index) => {
                    return (
                        <Column size="3">
                            <RoundImage url={item.node.image} bsize="cover" border="10px" width="250px" height="250px"> </RoundImage>

                        </Column>)
                })}
            </Row>
        </>
    )
}

