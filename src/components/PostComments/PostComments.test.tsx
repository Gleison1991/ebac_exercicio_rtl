import { fireEvent, render, screen } from '@testing-library/react';
import Post from".";

describe('Teste para o componente PostComment.', () => {
    it('Deve inserir dois comentários corretamente', () => {
        render(<Post/>);
    
        const input = screen.getByTestId('post-comments-textarea');
        const button = screen.getByText('Comentar');
    
        fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(button);
    
        fireEvent.change(input, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);
    
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
    
});

// Acho que consegui kkk