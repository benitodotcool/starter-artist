import moment from "moment";

export const handleDate = (date: string) => {
  return moment(date).format("YYYY.MM.DD");
};
