import styled from "styled-components"


export const Container = styled.section`
    margin: 40px;

    h1{
        margin-bottom: 16px;
    }
    ul{
        list-style: none;
    }
        li{
            & + li {
                margin-top: 20px;
            }
        
            p{
                font-size: 14px;
                color: #444;
                margin-top: 8px;
            }

            a{
                display: inline-block;
                margin-top: 10px;
                text-decoration: none;
                color: #8257e6
            }
        }

` 