import { expect, test, vi, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import QiitaListAll from '../app/components/QiitaListAll';
import axios from 'axios';

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


describe('QiitaListAll',() => {

    test('should render the QiitaListAll articles section', () => {
        render(<QiitaListAll items={[
            {
                id: "1",
                title: "Qiita記事1",
                url: "https://qiita.com",
            },
        ]} />)
        expect(screen.getByText('Qiita')).toBeDefined();
        expect(screen.getByText('Qiita記事1')).toBeDefined();
        const qiitaLink = screen.getByText("Qiita記事1").closest("a");
        expect(qiitaLink).toHaveAttribute(
            "href",
            "https://qiita.com"
        );
    });

})