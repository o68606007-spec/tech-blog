import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '../app/components/Hero'

describe('Hero', () => {
    test('renders the Hero component', () => { 
        render(<Hero />)
        expect(screen.getByText('Tech Blog')).toBeDefined();
        expect(screen.getByText("QiitaとMicroCMSの最新記事をまとめてチェック")).toBeDefined();
    })
})