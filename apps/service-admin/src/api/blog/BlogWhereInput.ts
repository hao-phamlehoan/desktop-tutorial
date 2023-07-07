import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BlogWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
