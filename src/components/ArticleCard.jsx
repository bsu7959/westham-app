import React from 'react'
import { Link } from "react-router-dom";
import styled, { keyframes } from '@emotion/styled';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
flex-basis: auto;
padding-right: 80px;
`;

const StyledLink = styled(Link)`
width: 21%;
padding: 0 1.65% 0 1.65%;
margin-top: 30px;
margin-bottom: 50px;
display: flex;
flex-direction: column;

@media screen and ( max-width: 1454px ) {
    width: 30%;
}
@media screen and ( max-width: 767px ) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0 0 0 1.65%;
}
`


const ArticleImageContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;

    @media screen and ( max-width: 767px ) {
        width: 50%;
        flex-grow: 0;
    }
`;

const ArticleImage = styled.img`
    width: 100%;
    height: 17vw;
    vertical-align: middle;
    object-fit: cover;
    border-radius: 5%;
    @media screen and ( max-width: 767px ) {
        height: 200px;
    }

`;

const ArticleTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    @media screen and ( max-width: 767px ) {
        width: 40%;
    }
`;


const ArticleTitle = styled.p`
    text-align: center;
    font-weight: bold;
    margin-bottom: 1rem;

`;


const ArticleInfo = styled.div`
    width: 100%;
    margin-top: auto;

`;

const ArticleDate = styled.p`
    text-align: center;
    font-size: 0.7rem;
`;

const HrDiv = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 auto 1rem;
    overflow: hidden;
    width: calc(100% - 50px);
    &::before {
        background-color: rgba(124, 44, 59, .25);
        content: "";
        display: inline-block;
        height: .0625rem;
        position: relative;
        vertical-align: middle;
        width: 50%;
        right: 1rem;
    }
    &::after {
        background-color: rgba(124, 44, 59, .25);
        content: "";
        display: inline-block;
        height: .0625rem;
        position: relative;
        vertical-align: middle;
        width: 50%;
        left: 1rem;
    }
`;

const HrIcon = styled.div`
    background: url('assets/simple-logo.svg') 50% / contain no-repeat;
    width: 1rem;
    height: 1rem;
    display: inline-block;
`


export default function ArticleCard(props) {
    console.log(props)
  return (
    <StyledLink to={'/article'} state={props.item}>
                                <ArticleImageContainer>
                                    <ArticleImage src={props.item.img}/>
                                </ArticleImageContainer>
                                <ArticleTitleContainer>
                                    <ArticleTitle>{props.item.title}</ArticleTitle>
                                    <ArticleInfo>
                                        <HrDiv>
                                            <HrIcon/>
                                        </HrDiv>
                                        <ArticleDate>{props.item.date}</ArticleDate>
                                    </ArticleInfo>
                                </ArticleTitleContainer>

                            </StyledLink>
  )
}
