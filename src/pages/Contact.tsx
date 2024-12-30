import { Header, Navbar } from "../components";
import { Page } from "../main";

interface Props {
    page: Page;
}

export function Contact({ page }: Props): JSX.Element {

    return (
        <>
            <Navbar />
            <Header title={page.header} />
            <p>{page.description}</p>
            <form>
                <div>
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="name" placeholder="Your name here..." required />
                </div>
                <div>
                    <label htmlFor="email">Your email</label>
                    <input type="email" name="email" placeholder="Your name here..." required />
                </div>
                <div>
                    <label htmlFor="message">Your message</label>
                    <textarea name="message" placeholder="Your message here..." required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}