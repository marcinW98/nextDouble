export type ScoreProps = {
	name: string;
	score: number;
};

export type TableWithPaginationProps = {
	title: string;
	elementsOnPage: number;
	scores: ScoreProps[];
};
