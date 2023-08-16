import { describe, expect, it } from "vitest";
import { KanbanBoard } from "$lib/kanban-board";

it("should pass if the two numbers would add up correctly in a language other than JavaScript", () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3);
});
describe("Kanban Board", () => {
  it('should include "Backlog" in board.statuses', () => {
    const board = new KanbanBoard("Things to Do");
    expect.hasAssertions();
    // Verify that board.statuses contains "Backlog".
    expect(board.statuses).toContain("Backlog");
  });
});
