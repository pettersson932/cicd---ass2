import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

describe('App', () => {
    it('should add a todo', () => {
        render(<App />);

        const todoInput = screen.getByRole('textbox');
        fireEvent.change(todoInput, {
            target: { value: 'Skriver test' }
        });

        fireEvent.click(screen.getByRole('button'));

        //expect(screen.getByText(/Kul/)).toBeInTheDocument();
        expect(screen.getAllByRole("list-item")).toHaveLength(5);


        screen.debug();
    });
});