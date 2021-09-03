import styled from "styled-components";

export const TodoWrapper = styled.div`
    .form {
        display: flex;
        max-width: 400px;
        margin: 0 auto;
    }

    .form__inp {
        width: 100%;
        display: block;
        padding: 5px 10px;
        border: 1px solid #ccc;
        border-right-width: 0.5px;
    }

    .form__inp:focus {
        outline-color: #9c9b9b;
    }

    .form__btn {
        background: none;
        border: 1px solid #ccc;
        border-left-width: 0.5px;
        padding: 10px 20px;
        cursor: pointer;
    }

    .todo__list {
        margin-top: 50px;
    }

    .todo__list-item {
        display: flex;
        align-items: center;
        padding: 10px 0;
        background: #ebeef1;
    }

    .todo__list-item:nth-child(2n + 1) {
        background: #f1f5f9;
    }

    .todo__list-title {
        font-size: 16px;
        margin-left: 14px;
        text-transform: capitalize;
        display: block;
        width: 100%;
        cursor: pointer;
    }
`;
