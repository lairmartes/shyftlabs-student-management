import React from "react";
import styled from "styled-components";

const SidebarParent = styled.div`
    background: #c34a36;
    width: 250px;
    height: 100vh;
`;

const SidebarItem = styled.div`
    padding: 16px 24px;
    transition: all 0.25s ease-in-out;
    background: ${props => props.active ? "#b15b00" : ""};
    margin: 4px 12px
    border-radius: 4px;

    p {
        color: white;
        font-weight: bold;
        text-decoration: none;
    }

    &:hover {
        cursor:pointer;
    }

    &:hover:not(:first-child) {
        background: blue;
    }
`;

export { SidebarParent, SidebarItem };