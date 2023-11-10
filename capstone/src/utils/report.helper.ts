import moment from "moment";
import _get from "lodash/get";

export const groupCountValueByDate = (data: any[], groupKey: string) => {
  const result: Record<any, any> = {};
  data.forEach((item) => {
    const date = moment(_get(item, groupKey)).format("YYYY-MM-DD");
    if (result[date]) {
      result[date] += 1;
    } else {
      result[date] = 1;
    }
  });
  return result;
};

export const groupSumValueByDate = (
  data: any[],
  groupKey: string,
  sumKey: string
) => {
  const result: Record<any, any> = {};
  data.forEach((item) => {
    const date = moment(_get(item, groupKey)).format("YYYY-MM-DD");
    if (result[date]) {
      result[date] += _get(item, sumKey);
    } else {
      result[date] = _get(item, sumKey);
    }
  });
  return result;
};
