export const newMemberCategorize = (data) => {
  let typeMemberList = [];
  const typeMember = {
    OPEN: "Open",
    SENIOR: "Senior",
  };

  for (const [age, handicap] of data) {
    age >= 55 && handicap > 7
      ? typeMemberList.push(typeMember.SENIOR)
      : typeMemberList.push(typeMember.OPEN);
  }

  return typeMemberList;
};
