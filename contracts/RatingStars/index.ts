export type ReviewProps = {
	recordId: string;
	name: string;
	score: number;
	content: string;
};

export type RatingsProps = {
	title: string;
	averageScoreLabel: string;
	reviews: ReviewProps[];
};
