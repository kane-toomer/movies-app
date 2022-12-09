import tw, { styled } from "twin.macro";

export const MoviesContainer = styled.div`
	// Put your pure CSS here.

	${tw`
    sm:mx-10 
    sm:mt-4 
    mb-10 
    sm:rounded-lg
    my-8
  `}
`;

export const MoviesTitle = styled.div`
	// Put your pure CSS here.

	${tw`
    text-2xl
    text-2xl font-semibold mb-5
  `}
`;

export const MoviesRow = styled.div`
	${tw`
      flex
      overflow-x-auto
      py-4
    `}

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const MoviesPoster = styled.img`
	${tw`
    cursor-pointer
    mr-5
    w-40
    rounded
  `}

	// Scale the movie img when the user hovers on it.
  transition: all 0.2s;
	&:hover {
		transform: scale(1.09);
	}
`;
