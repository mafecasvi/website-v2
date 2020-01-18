import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby';
import {Title, H3, H4, Paragraph} from '../Heading'
import {Container, Cont, Column, Row, Divider} from '../Sections'
import {Address, HandMoney, Laptop, Colors, RoundImage} from '../Styling'

export default () => {
  const data = useStaticQuery(graphql`
      query myQueryWhy{
          why: allWhy4GeeksYaml {
            edges {
              node {
                title
                description
                image
                slug
              }
            }
          }
        }
      `)
  return (
    <>
      <Title
        title="WHY 4GEEKS?"
        primary
      />
      <Divider height="50px" />
      <Row>
        {data.why.edges.map(i => (
          <Column size="4">
            <RoundImage url={i.node.image} bsize="cover" mb="10px" height="200px" border="1.25rem"></RoundImage>
            <Row align="around">
              <Column size size="2" customRespSize respSize="2" alignSelf="center">
                {(i.node.slug === "job-in-tech") && <Address width="48" color={Colors.blue} fill={Colors.blue} />}
                {(i.node.slug === "finance-your-career") && <HandMoney width="48" color={Colors.blue} fill={Colors.blue} />}
                {(i.node.slug === "never-code-alone-again") && <Laptop width="48" color={Colors.blue} fill={Colors.blue} />}
              </Column>
              <Column size size="8" customRespSize respSize="8" alignSelf="center">
                <H4 uppercase>{i.node.title}</H4>
              </Column>
            </Row>
            <Row>
              <Column size="12">
                <Paragraph color="gray" align="left" margin="10px 0" fontSize="12px">{i.node.description}</Paragraph>
              </Column>
            </Row>
          </Column>
        ))}
      </Row>
    </>
  )
}
// export default () => {
//   const data = useStaticQuery(graphql`
//       query myQueryWhy{
//           why: allWhy4GeeksYaml {
//             edges {
//               node {
//                 title
//                 description
//                 image
//                 slug
//               }
//             }
//           }
//         }
//       `)
//   return (
//     <>
//       <Title
//         title="WHY 4GEEKS?"
//         style="light"
//       />

//       <Row>
//         {data.why.edges.map(i => (
//           <div className="col-md-4 col-sm-12">
//             <Rounded className="card card-why4 p-3 text-center  border-0 bg-transparent">
//               <img src={i.node.image} width="100%" height="180" />
//             </Rounded>
//             <div className=" px-3 row">
//               <div className="col-md-2 col-sm-2">
//                 {(i.node.slug === "job-in-tech") && <Address width="48" color={Colors.blue} fill={Colors.blue} />}
//                 {(i.node.slug === "finance-your-career") && <HandMoney width="48" color={Colors.blue} fill={Colors.blue} />}
//                 {(i.node.slug === "never-code-alone-again") && <Laptop width="48" color={Colors.blue} fill={Colors.blue} />}
//               </div>
//               <div className="col-md-10 col-sm-10  pr-0"><H4 up>{i.node.title}</H4></div>
//             </div>
//             <div className=" text-center row mt-2">
//               <div className="text-why-p">{i.node.description}</div>
//             </div>
//           </div>
//         ))}
//       </Row>


//     </>
//   )
// }


