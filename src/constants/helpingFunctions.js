export const isTaxInRange = async (tax, fee) => {
    switch (fee) {
      case 0:
        return tax >= 0 && tax <= 2;
      case 1:
        return tax >= 0 && tax <= 4;
      case 2:
        return tax >= 0 && tax <= 6;
      case 3:
        return tax > 6;
      default:
        return false;
    }
};
  