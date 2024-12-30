import { Header, Navbar } from "../components";
import { Page } from "../main";

interface Props {
    page: Page;
}

export function Projects({ page }: Props): JSX.Element {

    return (
        <>
            <Navbar />
            <Header title={page.header} />
            <p>{page.description}</p>
        </>
    )
}