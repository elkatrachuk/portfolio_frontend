import LanguageCard from "../languageCard/LanguageCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLanguages } from "../../store/courses/actions";
import { selectLanguages } from "../../store/courses/selector";
import Box from "@mui/material/Box";

const LanguageList = () => {
  const dispatch = useDispatch();

  const languages = useSelector(selectLanguages);

  useEffect(() => {
    dispatch(getLanguages);
  }, [dispatch]);
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="stretch"
      padding={10}
      flexWrap="wrap"
      justifyContent="space-around"
    >
      {languages.map((language) => {
        return <LanguageCard key={language.id} language={language} />;
      })}
    </Box>
  );
};
export default LanguageList;
