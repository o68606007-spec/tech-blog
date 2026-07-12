import { expect, test, vi, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import BlogListAll from '../app/components/BlogListAll';
import axios from 'axios';

vi.mock("axios");
const mockedAxios = vi.mocked(axios);

mockedAxios.get
    .mockResolvedValueOnce({
        data: {
        contents: [
            {
            id: "1",
            title: "Blog記事",
            eyecatch: {
                url: "/image.png",
            },
            },
        ],
        },
    });

vi.mock("next/image", () => ({
    default: (props: any) => <img {...props} />,
}));

vi.mock("next/link", () => ({
    default: ({ children, href }: any) =>
        <a href={href}>{children}</a>,
}));


describe('BlogListAll',() => {

    test('should render the BlogList articles section', () => {
        render(<BlogListAll blogs={[
            {
                id: "1",
                title: "Blog記事",
                url: "https://microcms.io",
                image: "/image.png",
            },
        ]} />)
        expect(screen.getByText('Blog')).toBeDefined();
        expect(screen.getByText('Blog記事')).toBeDefined();
        const blogLink = screen.getByText("Blog記事").closest("a");
        expect(blogLink).toHaveAttribute(
            "href",
            "https://microcms.io"
        );
    });

})