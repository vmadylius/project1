// @vitest-environment jsdom
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import App from './App'

expect.extend(matchers)

describe('Trading Sessions Dashboard Unit Tests', () => {
  
  test('1. Перевірка початкового стану: відображення дефолтного повідомлення', () => {
    render(<App />)
    expect(screen.getByText(/Select a trading session/i)).toBeInTheDocument()
  })

  test('2. Перевірка наявності та кліку на кнопку London', () => {
    render(<App />)
    const londonButton = screen.getAllByRole('button', { name: /London/i })[0]
    fireEvent.click(londonButton)
    expect(screen.getByText(/High liquidity|Killzone/i)).toBeInTheDocument()
  })

  test('3. Перевірка наявності та кліку на кнопку New York', () => {
    render(<App />)
    const nyButton = screen.getAllByRole('button', { name: /New York/i })[0]
    fireEvent.click(nyButton)
    expect(screen.getByText(/Maximum volume|volatility/i)).toBeInTheDocument()
  })

  test('4. Перевірка наявності та кліку на кнопку Tokyo', () => {
    render(<App />)
    const tokyoButton = screen.getAllByRole('button', { name: /Tokyo/i })[0]
    fireEvent.click(tokyoButton)
    expect(screen.getByText(/Lower volatility|consolidation/i)).toBeInTheDocument()
  })

  test('5. Перевірка перемикання між сесіями London та Tokyo', () => {
    render(<App />)
    const londonButton = screen.getAllByRole('button', { name: /London/i })[0]
    const tokyoButton = screen.getAllByRole('button', { name: /Tokyo/i })[0]
    
    fireEvent.click(londonButton)
    fireEvent.click(tokyoButton)
    expect(screen.getByText(/Lower volatility|consolidation/i)).toBeInTheDocument()
  })
})