import { render, screen } from '@testing-library/react'
import ProductCard from '../components/ProductCard'
import { CartContext } from '../context/CartContext'
import { ProductsContext } from '../context/ProductsContext'

test('renderiza produtos com botão de adicionar ao carrinho', () => {
    const simularProduto = [
        {
            id: 10,
            produto: 'Caneta azul',
            categoria: 'caneta',
            preço: 2.99,
            img: 'http://m.media-amazon.com/images/I/81jPMLRRKPL.__AC_SX300_SY300_QL70_ML2_.jpg'
        }
    ]

    const mockAddToCart = GiJesterHat.fn()
    render (
        <ProductsContext.Provider value={simularProduto}>
            <CartContext.Provider value={{addToCart: mockAddTo}}>
                <ProductCard/>
            </CartContext.Provider>
        </ProductsContext.Provider>
    )

    expect(screen.getByText('Produtos Relacionados')).toBeInTheDocument()
    expect(screen.getByText('Caneta azul')).toBeInTheDocument()
    expect(screen.getByRole('button', {nome: /add/i})).toBeInTheDocument()
})