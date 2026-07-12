import { expect, test, vi, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import axios from 'axios'
import QiitaList from '../app/components/QiitaList'

vi.mock("axios");
const mockedAxios = vi.mocked(axios);

mockedAxios.get
    .mockResolvedValueOnce({
        data: [
            {
                id: "1",
                title: "Qiita記事1",
                url: "https://qiita.com",
            },
        ],
    });

vi.mock("next/image", () => ({
    default: (props: any) => <img {...props} />,
}));

vi.mock("next/link", () => ({
    default: ({ children, href }: any) =>
        <a href={href}>{children}</a>,
}));


describe('QiitaList',() => {

    test('should render the Qiita articles section', () => {
        render(<QiitaList items={[
            {
                id: "1",
                title: "Qiita記事1",
                url: "https://qiita.com",
            },
        ]} />)
        expect(screen.getByText('Qiita 記事')).toBeDefined();
        expect(screen.getByText('Qiita記事1')).toBeDefined();
        const qiitaLink = screen.getByText("Qiita記事1").closest("a");
        expect(qiitaLink).toHaveAttribute(
            "href",
            "https://qiita.com"
        );
    });

})