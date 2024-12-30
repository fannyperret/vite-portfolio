interface Props {
    title: string;
    description: string;
    src: string;
    alt: string;
}

export function Card({ title, description, src, alt }: Props) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={src} alt={alt} />
        </div>
    )
}