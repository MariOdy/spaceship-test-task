"use client";
import React from "react";
import { BsFillEyeFill, BsPencilFill } from "react-icons/bs";
import {
  Column,
  TableView,
  TableBody,
  TableHeader,
  useAsyncList,
  useCollator,
  Row,
  Cell,
  Flex,
  ActionButton,
} from "@adobe/react-spectrum";
import type { Student } from "@/utils/getStudents";

interface TableProps {
  students: Student[];
}

const Table: React.FC<TableProps> = ({ students }) => {
  let collator = useCollator({ numeric: true });

  const list = useAsyncList<Student>({
    load: () => ({ items: students }),
    sort: ({ items, sortDescriptor }) => ({
      items: items.sort((a, b) => {
        const column = sortDescriptor.column as keyof Student;

        if (!column) return 0;

        let first = a[column];
        let second = b[column];

        let cmp = collator.compare(
          first as unknown as any,
          second as unknown as any
        );
        if (sortDescriptor.direction === "descending") {
          cmp *= -1;
        }
        return cmp;
      }),
    }),
  });

  return (
    <Flex>
      <TableView
        aria-label="Example table with client side sorting"
        sortDescriptor={list.sortDescriptor}
        onSortChange={list.sort}
        density="spacious"
        flex
      >
        <TableHeader>
          <Column key="fullName" defaultWidth="3fr" allowsSorting>
            Name
          </Column>
          <Column key="course" defaultWidth="2fr" allowsSorting>
            Course
          </Column>
          <Column key="module" defaultWidth="3fr" allowsSorting>
            Module
          </Column>
          <Column key="lesson" defaultWidth="4fr" allowsSorting>
            Lesson
          </Column>
          <Column key="progress" defaultWidth="2fr" allowsSorting>
            Progress
          </Column>
          <Column key="actions" defaultWidth="2fr">
            Actions
          </Column>
        </TableHeader>
        <TableBody items={list.items} loadingState={list.loadingState}>
          {(item) => (
            <Row key={item.id}>
              {(columnKey) => {
                if (columnKey === "actions")
                  return (
                    <Cell>
                      <Flex gap={4}>
                        <ActionButton>
                          <BsFillEyeFill />
                        </ActionButton>
                        <ActionButton>
                          <BsPencilFill />
                        </ActionButton>
                      </Flex>
                    </Cell>
                  );
                return <Cell>{item[columnKey as keyof Student]}</Cell>;
              }}
            </Row>
          )}
        </TableBody>
      </TableView>
    </Flex>
  );
};

export default Table;
