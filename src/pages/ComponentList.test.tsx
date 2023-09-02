import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentList } from './ComponentList';

const user = userEvent.setup()

describe('ComponentList', () => {
    it('1 to be 1', () => {
        expect(1).toBe(1);
    });

    it('render ComponentList', () => {
        render(<ComponentList />);
        expect(screen.getByText('Component List')).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Component List');
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
        // await user.type(screen.getByRole('textbox', { name: /textfield/ }), 'Hello World');
        await user.type(screen.getByPlaceholderText('Type...'), 'Hello World');
        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    });
});

describe('Checkbox', () => {
    it('checked value in checkbox', async () => {
        render(<ComponentList />);
        expect(screen.getByRole('checkbox')).not.toBeChecked();
        await user.click(screen.getByRole('checkbox'));
        expect(screen.getByRole('checkbox')).toBeChecked();
    });
    it('checked value in checkbox', async () => {
        render(<ComponentList />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();
        await user.click(checkbox);
        expect(checkbox).toBeChecked();
    });
});

describe('Checkbox - MT', () => {
    it('checked value in checkbox mt', async () => {
        render(<ComponentList />);
        expect(screen.getByText(/NOT checked/)).toBeInTheDocument();
        await user.click(screen.getByTitle('checkbox-mt'));
        expect(screen.getByText('It is checked!')).toBeInTheDocument();
    });
});

describe.only('Autocomplete', () => {
    it('renders a Select component', async () => {
        render(<ComponentList />);
        const autocomplete = screen.getByRole('combobox');
        await user.click(autocomplete)
        const one = screen.getByText('One');
        expect(one).toBeInTheDocument();
        await user.click(one);
        screen.debug();
        expect(screen.getByText('Value: one')).toBeInTheDocument();
        expect(screen.getByText('One')).toBeInTheDocument();
    });
    // TODO: Check how to use react-select-testing-library
});

describe('Textarea', () => {
    it('updates the textarea value when the Textarea component is changed', async () => {
        render(<ComponentList />);
        const textarea = screen.getByPlaceholderText('Textarea');
        await user.type(textarea, 'Hello there!');
        const textareaValue = screen.getByText('Value: Hello there!');
        expect(textareaValue).toBeInTheDocument();
    });
});

describe('Accordion', () => {
    it('renders the title and children', () => {
        render(<ComponentList />);
        expect(screen.getByText('Accordion')).toBeInTheDocument()
        expect(screen.queryByText('Item expanded')).toBeNull()
        expect(screen.queryByText('Item expanded')).toBeFalsy()
    })

    it('expands and collapses when the button is clicked', async () => {
        render(<ComponentList />);
        const button = screen.getByRole('button', { name: '' })
        expect(button).toHaveClass('expand-icon')
        expect(button).not.toHaveClass('expanded')
        await user.click(button)
        expect(button).toHaveClass('expanded')
        screen.debug()
        expect(screen.getByText('Item expanded')).toBeInTheDocument()
        await user.click(button)
        expect(button).not.toHaveClass('expanded')
        expect(screen.queryByText('Item expanded')).toBeNull()
    })
})
