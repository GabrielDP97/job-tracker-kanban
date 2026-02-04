import { render, screen } from "@testing-library/react";
import KanbanColumn from "./KanbanColumn";
import type { JobOffer } from "../types/jobOffer";

describe("KanbanColumn", () => {
  it("shows 'No jobs' when column is empty", () => {
    render(
      <KanbanColumn
        title="Applied"
        status="APPLIED"
        jobs={[] as JobOffer[]}
      />
    );

    expect(screen.getByText("No jobs")).toBeInTheDocument();
  });
});
