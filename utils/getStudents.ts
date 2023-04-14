import { faker } from "@faker-js/faker";
import { sleep } from "./utils";

export interface Student {
  id: string;
  fullName: string;
  course: string;
  module: string;
  lesson: string;
  progress: number;
}

const getStudent = (): Student => ({
  id: faker.datatype.uuid(),
  fullName: faker.name.fullName(),
  course: faker.helpers.arrayElement([
    "Economy",
    "Marketing",
    "Engineering",
    "Trade",
    "Art",
    "Business",
  ]),
  module: faker.company.catchPhraseNoun(),
  lesson: faker.company.bs(),
  progress: faker.datatype.number({ max: 100 }),
});

const getStudents = async () => {
  await sleep(2000);

  const students: Student[] = Array.from({ length: 30 }, getStudent);

  return students;
};

export default getStudents;
