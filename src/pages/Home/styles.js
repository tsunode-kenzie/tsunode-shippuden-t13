import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    list-style: none;
`;

export const Card = styled.li`
    a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 150px;
        height: 200px;

        background: var(--color-secondary);
        border: 1px solid var(--color-primary);

        text-align: center;
        text-decoration: none;
        color: var(--color-text);
        border-radius: 15px;

        span {
            height: 25%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
        }

        img {
            max-width: 150px;
            height: 150px;
            object-fit: cover;
            border-radius: 0 0 15px 15px;
        }
    }
`;