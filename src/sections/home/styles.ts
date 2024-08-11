import styled from "styled-components";

interface ImgMeProps {
  imageUrl: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  padding: 7rem 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Titles = styled.div`
  line-height: 0.5;
`;

export const ImgMe = styled.div<ImgMeProps>`
  width: 500px; /* Ajusta el tamaño según tus necesidades */
  height: 500px; /* Ajusta el tamaño según tus necesidades */
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 50%,
      var(--color-bg) 100%
    ),
    linear-gradient(to right, rgba(0, 0, 0, 0) 50%, var(--color-bg) 100%),
    linear-gradient(to top, rgba(0, 0, 0, 0) 90%, var(--color-bg) 100%),
    url(${(props) => props.imageUrl}); /* Reemplaza con la ruta de tu imagen */
  background-size: cover;
  background-position: center;
`;
