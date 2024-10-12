export type SearchWithDropdownData = {
  name: string;
  regularPrice: number;
  salePrice: number;
  id: string;
};

export type SearchWithDropdownProps = {
  searchData: SearchWithDropdownData[];
  title: string;
  searchingTitle: string;
  sortingTitle: string;
  sortingType: "A-Z" | "Z-A";
};
