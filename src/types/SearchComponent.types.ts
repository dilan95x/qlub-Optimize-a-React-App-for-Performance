export type SearchComponent = {
    onSearch: (query: string) => void;
  placeholder?: string;
  isHDOn: boolean;
  setIsHDOn: (isHDOn: boolean) => void;
  }