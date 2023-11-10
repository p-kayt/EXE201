export const truncate = (str: string, length: number) => {
  if (!str) {
    return "";
  }

  if (str.length > length) {
    return str.substring(0, length) + "..";
  } else {
    return str;
  }
};

// return đ
export const formatCurrency = (amount: number) => {
  if (!amount) {
    return "0";
  }

  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ";
};
