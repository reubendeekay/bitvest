import { Table } from "flowbite-react";
import React, { useRef } from "react";
import { TextInput } from "flowbite-react";
import { HiUser, HiMail } from "react-icons/hi";

const ConfirmationTable = () => {
  const nameRef = useRef();
  const transactionRef = useRef();
  return (
    <Table className="lg:w-[600px] w-[100%]">
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Your name
          </Table.Cell>
          <Table.Cell>
            <TextInput
              id="name"
              type="text"
              ref={nameRef}
              placeholder="..."
              required={true}
              icon={HiUser}
            />
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Transaction Text
          </Table.Cell>
          <Table.Cell>
            {" "}
            <TextInput
              id="ref"
              type="text"
              ref={transactionRef}
              placeholder="..."
              required={true}
              icon={HiMail}
            />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default ConfirmationTable;
