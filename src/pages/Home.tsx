import { Header, Navbar } from "../components";
import { Page } from "../main";

interface Props {
    page: Page;
}

export function Home({ page }: Props): JSX.Element {

    return (
        <>
            <Navbar />
            <Header title={page.header} />
            <p>{page.description}</p>
            <p>{page.description_two}</p>
            <div>
                {page.buttons?.map(( button, key ) => (
                    <button key={key} type={"button"}>{button.name}</button>
                ))}
            </div>
            <div>
                {page.social_media?.map(( media, key ) => (
                    <a key={key} href={media.link}>{media.icon}</a>
                ))}
            </div>
            <div>
                <img src={page.img?.src} alt={page.img?.alt} />
            </div>
        </>
    )
}