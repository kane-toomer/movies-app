import tw, { styled } from "twin.macro";

export const HeroContainer = styled.div`
	${tw`
    p-8
  `}
	height: 80vh;
	background-size: cover !important;

	${(props) =>
		`background: url('https://image.tmdb.org/t/p/original${props.background}');`}
`;

export const HeroTitle = styled.h1`
	${tw`
    text-5xl
    font-bold
    mb-4
  `}

	margin-top: 40vh;
`;

export const HeroDescription = styled.p`
	${tw`
    font-medium
    text-lg
    mb-4
  `}
	width: 45rem;
	max-width: 80vw;
	line-height: 1.3;
`;
