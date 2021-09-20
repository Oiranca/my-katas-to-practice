export const newMemberCategorize = (data) => {
  let typeMemberList = [];
  const typeMember = {
    OPEN: "Open",
    SENIOR: "Senior",
  };

  data.forEach(member=>{
    for (const [age,handicap] of member){
      age >= 55 && handicap > 7
          ? typeMemberList.push(typeMember.SENIOR)
          : typeMemberList.push(typeMember.OPEN);
    }
  })

  return typeMemberList;
};
