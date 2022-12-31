import { Table } from "flowbite-react";
import React from "react";

const AppTable = ({ amount }) => {
  return (
    <Table className="w-[600px]">
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Plan
          </Table.Cell>
          <Table.Cell>${amount}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Profit
          </Table.Cell>
          <Table.Cell>20% in 365 Days</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Amount
          </Table.Cell>
          <Table.Cell>$ {parseFloat(amount.toString()) * 1.2}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default AppTable;
