import { MoreAndMorePeople } from "../../components/InfiniteHumanList/MoreAndMorePeople";

import { generateRandomHumans } from "../../components/InfiniteHumanList/utils";

const InfiniteHumanList = async () => {
  const people = await generateRandomHumans(10);

  return <MoreAndMorePeople people={people} />;
};

export default InfiniteHumanList;
