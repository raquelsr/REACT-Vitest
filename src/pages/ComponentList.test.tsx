import { ComponentList } from './ComponentList';
import { logRoles, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

const user = userEvent.setup()

describe('ComponentList', () => {
    it('1 to be 1', () => {
        expect(1).toBe(1);
    });

    it('render ComponentList', () => {
        render(<ComponentList />);
        expect(screen.getByText('Component List')).toBeInTheDocument();
        expect(screen.getByRole('heading')).toHaveTextContent('Component List');
        expect(screen.getByRole('heading', { name: 'Component List' }));
        expect(screen.getByText('Component List')).toBeTruthy();
    });
});

describe('Counter', () => {
    it('counter starts in 0', () => {
        render(<ComponentList />);
        expect(screen.getByText('Counter: 0')).toBeInTheDocument();
        expect(screen.getByText('Counter: 0')).toBeTruthy();
    });

    it('increase counter - getByText', async () => {
        render(<ComponentList />);
        await user.click(screen.getByRole('button', { name: '+ 1' }));
        expect(screen.getByText('Counter: 1')).toBeInTheDocument();
    });

    it.skip('increase counter - getByText - 2', async () => {
        render(<ComponentList />);
        await user.click(screen.getByRole('button', { name: '+ 1' }));
        const counter = await screen.findByText('Counter: 1');
        logRoles(counter)
        expect(counter).toHaveLength(1);
    });

    it.skip('increase counter', async () => {
        render(<ComponentList />);
        user.click(screen.getByRole('button', { name: '+ 1' }));
        await expect(screen.findByText('Counter: 1')).toHaveLength(1);
    });

    it('decrease counter - getByText', async () => {
        render(<ComponentList />);
        await user.click(screen.getByRole('button', { name: '- 1' }));
        expect(screen.getByText('Counter: -1')).toBeInTheDocument();
    });
});


describe('Textfield', () => {
    it('write in textfield', async () => {
        render(<ComponentList />);
        await user.type(screen.getByRole('textbox'), 'Hello World');
        expect(screen.getByText('Text: Hello World')).toBeInTheDocument();
    });
});
