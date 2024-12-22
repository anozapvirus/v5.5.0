import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.bulkInsert(
          "Plans",
          [
            {
              name: "Demostração do Sistema",
              users: 99,
              connections: 99,
              queues: 10,
              value: 30,
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ],
          { transaction: t }
        ),
        queryInterface.bulkInsert(
          "Companies",
          [
            {
              name: "Adminstração Geral",
              planId: 1,
              dueDate: "2093-03-14 04:00:00+01",
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ],
          { transaction: t }
        )
      ]);
    });
  },

  down: async (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.bulkDelete("Companies", {}),
      queryInterface.bulkDelete("Plans", {})
    ]);
  }
};
