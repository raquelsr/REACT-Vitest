import { getRoles, logRoles, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentList } from './ComponentList';
import App from '../App';

const user = userEvent.setup();

describe('Tutorial', () => {
    it('1 to be 1', () => {
        expect(1).toBe(1);
    });

    it('About Queries', () => {
        render(<ComponentList />);
        // getBy -> return element / throw error
        console.log('getBy', screen.getByRole('heading', { level: 2 }));
        // queryBy -> return element / null 
        console.log('queryBy', screen.queryByRole('heading', { level: 2 }));
        // findBy -> return promise / throw error
        console.log('findBy', screen.findByRole('heading', { level: 2 }));

        //getAllBy -> return array of elements / throw error
        console.log('getAllBy', screen.getAllByRole('heading'));
        //queryAllBy -> return array of elements / empty array
        console.log('queryAllBy', screen.queryAllByRole('heading'));
        //findAllBy -> return promise / throw error
        console.log('findAllBy', screen.findAllByRole('heading'));
    });

    it('Type of Queries', async () => {
        render(<ComponentList />);

        //getByRole
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Component List');
        expect(screen.getByRole('button', { name: '+ 1' })).toBeInTheDocument();
        expect(screen.getByRole('checkbox', { checked: false })).toBeInTheDocument();

        //getByLabelText
        expect(screen.getByLabelText('Textfield label:')).toBeInTheDocument();

        //getByPlaceholderText
        expect(screen.getByPlaceholderText('Type...')).toBeInTheDocument();

        //getByText
        expect(screen.getByText('Component List')).toBeInTheDocument();

        //getByDisplayValue
        const textField = screen.getByPlaceholderText('Type...');
        await user.type(textField, 'Hello World');
        expect(screen.getByDisplayValue('Hello World')).toBeInTheDocument();

        //getByTitle
        expect(screen.getByTitle('checkbox-mt')).toBeInTheDocument();

        //getByTestId
        expect(screen.getByTestId('autocomplete')).toBeInTheDocument();
    });

    it('getByAltText', async () => {
        render(<App />);
        expect(screen.getByAltText('Vitest logo')).toBeInTheDocument();
    });

    it('Text Match', () => {
        render(<ComponentList />);
        expect(screen.getByText('Component List')).toBeInTheDocument();
        expect(screen.getByText(/Component List/)).toBeInTheDocument();
        expect(screen.getByText('Component List')).toHaveTextContent('Component List');
        expect(screen.getByText('list', { exact: false })).toHaveTextContent(/Component List/);
        expect(screen.getByText((content) => content.endsWith('List'))).toBeInTheDocument();
    });

    it('Asserting', () => {
        render(<ComponentList />);
        expect(screen.getByText('Component List')).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Component List');
        expect(screen.getByRole('heading', { name: 'Component List' }));
        expect(screen.getByText('Component List')).toBeTruthy();
        expect(screen.queryAllByRole('heading', { level: 1 })).toHaveLength(1);
        expect(screen.queryAllByRole('heading', { level: 6 })).toHaveLength(0);
        expect(screen.queryByText('Not found')).toBeNull();
        expect(screen.queryByText('Not found')).toBeFalsy();
        expect(screen.queryByText('Not found')).not.toBeInTheDocument();
    });

    it.skip('Debugging', () => {
        // TODO : Review  https://testing-library.com/docs/dom-testing-library/api-accessibility
        // https://testing-library.com/docs/dom-testing-library/api-debugging
        render(<ComponentList />);
        console.log('------------- SCREEN DEBUG --------------');
        // screen.debug();
        screen.debug(screen.getByText('Component List'));
        console.log('------------- GET ROLES --------------');
        console.log(getRoles(screen.getByText('Component List')));
        console.log('------------- LOG ROLES --------------');
        logRoles(screen.getByRole('textbox', { name: 'Textfield label:' }));
        logRoles(screen.getByRole('heading', { level: 2 }));
    });

    it('User events', async () => {
        render(<ComponentList />);
        const input = screen.getByPlaceholderText('Type...');
        await user.type(input, 'Hello World');
        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
        await user.clear(input);
        expect(screen.queryByText(/Hello World/)).not.toBeInTheDocument();
        await user.click(input);
        await user.keyboard('Hello World');
        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    });

    // Removed elements

    it('findByText', async () => {
        render(<ComponentList />);
        const button = screen.getByRole('button', { name: '' });
        user.click(button);
        const text = await screen.findByText('Item expanded');
        expect(text).toBeInTheDocument();
    });

    it('waitFor', async () => {
        render(<ComponentList />);
        const button = screen.getByRole('button', { name: '' });
        user.click(button);
        await waitFor(() => {
            expect(screen.getByText('Item expanded')).toBeInTheDocument();
        });
    });

    it('wait for element to be removed', async () => {
        render(<ComponentList />);
        const button = screen.getByRole('button', { name: '' });
        await user.click(button);
        expect(screen.getByText('Item expanded')).toBeInTheDocument();
        user.click(button);
        await waitForElementToBeRemoved(screen.getByText('Item expanded'));
        expect(screen.queryByText('Item expanded')).toBeNull();
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

    it('increase counter - findAllByText', async () => {
        render(<ComponentList />);
        user.click(screen.getByRole('button', { name: '+ 1' }));
        const counter = await screen.findAllByText('Counter: 1');
        expect(counter).toHaveLength(1);
    });

    it('increase counter - findByText', async () => {
        render(<ComponentList />);
        user.click(screen.getByRole('button', { name: '+ 1' }));
        await expect(screen.findByText('Counter: 1')).toBeTruthy();
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
        await user.type(screen.getByRole('textbox', { name: 'Textfield label:' }), 'Hello World');
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

describe('Autocomplete', () => {
    it('renders a Select component', async () => {
        render(<ComponentList />);
        const autocomplete = screen.getByRole('combobox');
        await user.click(autocomplete);
        const one = screen.getByText('One');
        expect(one).toBeInTheDocument();
        await user.click(one);
        expect(screen.getByText('Value: one')).toBeInTheDocument();
        expect(screen.getByText('One')).toBeInTheDocument();
    });
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
    it('renders the title accordion', () => {
        render(<ComponentList />);
        expect(screen.getByText('Accordion')).toBeInTheDocument();
        expect(screen.queryByText('Item expanded')).toBeNull();
        expect(screen.queryByText('Item expanded')).toBeFalsy();
    });

    it('expands and collapses when the button is clicked', async () => {
        render(<ComponentList />);
        const button = screen.getByRole('button', { name: '' });
        expect(button).toHaveClass('expand-icon');
        expect(button).not.toHaveClass('expanded');
        await user.click(button);
        expect(button).toHaveClass('expanded');
        expect(screen.getByText('Item expanded')).toBeInTheDocument();
        await user.click(button);
        expect(button).not.toHaveClass('expanded');
        expect(screen.queryByText('Item expanded')).toBeNull();
    });
});
