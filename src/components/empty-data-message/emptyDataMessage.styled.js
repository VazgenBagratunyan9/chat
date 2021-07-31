import styled from "styled-components";

// export const Container = styled.div(({ height }) => {
//     return `
//         height: ${height}vmin;
//     `;
// });

export const Container = styled.div`
    height: ${(props) => props.height}vmin;
`;
