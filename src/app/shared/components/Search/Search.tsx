import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchIconDark, searchIconLight } from "../../assets";
import { ValueGlobalContext } from "../../context/GlobalContext";
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
  };

  return (
    <ContainerSearch>
      <SearchInput
        placeholder="Busca"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchButton>
        {toggle && <Svgs src={searchIconDark} alt="search icon dark" />}
        {!toggle && <Svgs src={searchIconLight} alt="search icon light" />}
      </SearchButton>
      {Boolean(search?.trim()) && (
        <ContentSearch>
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
