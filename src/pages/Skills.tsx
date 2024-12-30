import { Card, Header, Navbar } from "../components";
import { Page } from "../main";

interface Card {
    title: string;
    description: string;
    src: string;
    alt: string;
}

interface Props {
    page: Page;
    cards: Card[];
}

export function Skills({ page, cards }: Props): JSX.Element {

    return (
        <>
            <Navbar />
            <Header title={page.header} />
            <p>{page.description}</p>
            {cards.map((card, key) => (
                <Card key={key} title={card.title} description={card.description} src={card.src} alt={card.alt} />
            ))}
        </>
    )
}