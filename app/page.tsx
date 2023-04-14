import Table from "@/components";
import getStudents from "@/utils/getStudents";
import Providers from "./providers";

import styles from "./styles.module.scss";

async function Home() {
  const students = await getStudents();

  return (
    <main className={styles.main}>
      <Providers>
        <Table students={students} />
      </Providers>
    </main>
  );
}

export default Home;
