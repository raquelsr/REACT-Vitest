import { ComponentList } from './ComponentList';
import { render, screen } from '@testing-library/react';

describe('ComponentList', () => {
    it('1 to be 1', () => {
        expect(1).toBe(1);
    });

    it('Render Component', () => {
        render(<ComponentList />);
        expect(screen.getByText('Component List')).toBeInTheDocument();
        expect(screen.getByText('Component List')).toBeTruthy();
    });
});