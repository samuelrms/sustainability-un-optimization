import { useContext, useMemo, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { searchIconDark, searchIconLight } from "../../assets";
import { ValueGlobalContext } from "../../context/GlobalContext";
import { useOnClickOutside } from "../../hooks";
import { Svgs } from "../Svgs/Svgs";
import {
  ContainerSearch,
  ContentSearch,
  ListSearch,
  SearchButton,
  SearchInput,
} from "./styled";

export const Search = () => {
  const [search, setSearch] = useState<any>();
  const [searchDropdown, setSearchDropdown] = useState<boolean>(false);
  const { toggle, response } = useContext(ValueGlobalContext);
  const navigation = useNavigate();

  const filterResponse = useMemo(() => {
    const lowerSearch = search?.toLocaleLowerCase().replace(/\s/g, "");
    return response?.filter((data) =>
      data?.title?.toLocaleLowerCase()?.includes(lowerSearch),
    );
  }, [response, search]);

  const handleClickNavigation = (card: any) => {
    navigation(`/cards/${card.id}`, { state: { card } });
    setSearch("");
    if (window.scrollY) {
      window.scroll(0, 0);
    }
    if (search?.length === 0) {
      setSearchDropdown(!searchDropdown);
    }
  };

  const searchRef = useRef(null);

  useOnClickOutside(searchRef, () => setSearchDropdown(!searchDropdown));

  return (
    <ContainerSearch>
      <SearchInput
        placeholder="Busca"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClick={() => setSearchDropdown(!searchDropdown)}
      />
      <SearchButton>
        {toggle && <Svgs src={searchIconLight} alt="search icon light" />}
        {!toggle && <Svgs src={searchIconDark} alt="search icon dark" />}
      </SearchButton>
      {searchDropdown && (
        <ContentSearch ref={searchRef}>
          {filterResponse?.map((data, index) => (
            <ListSearch onClick={() => handleClickNavigation(data)} key={index}>
              {data.title}
            </ListSearch>
          ))}
        </ContentSearch>
      )}
    </ContainerSearch>
  );
};
